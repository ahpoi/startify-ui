import * as React from "react";
const Tether = require("tether");
import { createPortal } from "react-dom";
import { isValidElement } from "react";

export type AttachmentPosition =
  | "auto auto"
  | "top left"
  | "top center"
  | "top right"
  | "middle left"
  | "middle center"
  | "middle right"
  | "bottom left"
  | "bottom center"
  | "bottom right";

type TetherAttachment = { top: string; left: string };
type UpdateEventData = {
  attachment: TetherAttachment;
  targetAttachment: TetherAttachment;
};
type RenderProp = (ref: React.RefObject<Element>) => React.ReactNode;

type ContraintsTo = string | "window" | "scrollParent" | HTMLElement;

type Constraints = {
  to?: ContraintsTo;
  attachment?: string | "together";
  outOfBoundsClass?: string;
  pinnedClass?: string;
  pin?: boolean | string[];
};

interface TetherComponentProps extends React.Props<TetherComponent> {
  renderTarget?: RenderProp;
  renderElement?: RenderProp;
  renderElementTag?: string;
  renderElementTo?: Element | string;
  attachment: AttachmentPosition;
  targetAttachment?: AttachmentPosition;
  constraints?: Constraints[];
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onUpdate?: (data: UpdateEventData) => void;
  onRepositioned?: () => void;
  offset?: string;
}

//Typscript version of https://github.com/souporserious/react-tether
export class TetherComponent extends React.Component<TetherComponentProps> {
  static defaultProps = {
    renderElementTag: "div",
    renderElementTo: null,
  };

  // The DOM node of the target, obtained using ref in the render prop
  _targetNode: any = React.createRef();

  // The DOM node of the element, obtained using ref in the render prop
  _elementNode: any = React.createRef();

  _elementParentNode: any = null;

  _tetherInstance: any = null;

  componentDidMount() {
    this._createContainer();
    this.forceUpdate();
  }

  componentDidUpdate(prevProps: any) {
    // If the container related props have changed, then update the container
    if (
      prevProps.renderElementTag !== this.props.renderElementTag ||
      prevProps.renderElementTo !== this.props.renderElementTo
    ) {
      this._createContainer();
    }

    // Verify if className props have changed
    if (this._elementParentNode && prevProps.className !== this.props.className) {
      // Add a bunch of checks against weird classNames
      const prevClasses = (prevProps.className || "").split(" ").filter((value: any) => value.length > 0);
      const currClasses = (this.props.className || "").split(" ").filter((value) => value.length > 0);

      this._elementParentNode.classList.remove(...prevClasses);
      this._elementParentNode.classList.add(...currClasses);
    }

    this._update();
  }

  componentWillUnmount() {
    this._destroy();
  }

  getTetherInstance() {
    return this._tetherInstance;
  }

  disable() {
    this._tetherInstance.disable();
  }

  enable() {
    this._tetherInstance.enable();
  }

  on(event: any, handler: any, ctx: any) {
    this._tetherInstance.on(event, handler, ctx);
  }

  once(event: any, handler: any, ctx: any) {
    this._tetherInstance.once(event, handler, ctx);
  }

  off(event: any, handler: any) {
    this._tetherInstance.off(event, handler);
  }

  position() {
    this._tetherInstance.position();
  }

  _runRenders() {
    // To obtain the components, we run the render functions and pass in the ref
    // Later, when the component is mounted, the ref functions will be called
    // and trigger a tether update
    let targetComponent =
      typeof this.props.renderTarget === "function" ? this.props.renderTarget(this._targetNode) : null;
    let elementComponent =
      typeof this.props.renderElement === "function" ? this.props.renderElement(this._elementNode) : null;

    // Check if what has been returned is a valid react element
    if (!isValidElement(targetComponent)) {
      targetComponent = null;
    }
    if (!isValidElement(elementComponent)) {
      elementComponent = null;
    }

    return {
      targetComponent,
      elementComponent,
    };
  }

  _createTetherInstance(tetherOptions: any) {
    if (this._tetherInstance) {
      this._destroy();
    }

    this._tetherInstance = new Tether(tetherOptions);
    this._registerEventListeners();
  }

  _destroyTetherInstance() {
    if (this._tetherInstance) {
      this._tetherInstance.destroy();

      this._tetherInstance = null;
    }
  }

  _registerEventListeners() {
    // @ts-ignore
    this.on("update", (...args) => {
      return this.props.onUpdate && this.props.onUpdate.apply(this, args as any);
    });
    // @ts-ignore
    this.on("repositioned", (...args) => {
      return this.props.onRepositioned && this.props.onRepositioned.apply(this, args as any);
    });
  }

  get _renderNode(): any {
    const { renderElementTo } = this.props;
    if (typeof renderElementTo === "string") {
      return document.querySelector(renderElementTo);
    }
    return renderElementTo || document.body;
  }

  _destroy() {
    this._destroyTetherInstance();
    this._removeContainer();
  }

  _createContainer() {
    // Create element node container if it hasn't been yet
    this._removeContainer();

    const { renderElementTag, className } = this.props;

    // Create a node that we can stick our content Component in
    this._elementParentNode = document.createElement(renderElementTag as any);
    this._elementParentNode.className = className || "";
  }

  _addContainerToDOM() {
    // Append node to the render node
    if (this._elementParentNode.parentNode !== this._renderNode) {
      this._renderNode.appendChild(this._elementParentNode);
    }
  }

  _removeContainer() {
    if (this._elementParentNode && this._elementParentNode.parentNode) {
      this._elementParentNode.parentNode.removeChild(this._elementParentNode);
    }
  }

  _update() {
    // If no element component provided, bail out
    const shouldDestroy = !this._elementNode.current || !this._targetNode.current;

    if (shouldDestroy) {
      // Destroy Tether element if it has been created
      this._destroy();
      return;
    }

    this._updateTether();
  }

  _updateTether() {
    const {
      children,
      renderElementTag,
      renderElementTo,
      id,
      className, // This prop is specific to this._elementParentNode
      style,
      renderTarget,
      renderElement,
      ...options
    } = this.props;
    const tetherOptions = {
      target: this._targetNode.current,
      element: this._elementParentNode,
      ...options,
    };

    const idStr = id || "";
    if (this._elementParentNode.id !== idStr) {
      this._elementParentNode.id = idStr;
    }

    if (style) {
      const elementStyle = this._elementParentNode.style;
      Object.keys(style).forEach((key) => {
        // @ts-ignore
        if (elementStyle[key] !== style[key]) {
          // @ts-ignore
          elementStyle[key] = style[key];
        }
      });
    }

    this._addContainerToDOM();

    if (this._tetherInstance) {
      this._tetherInstance.setOptions(tetherOptions);
    } else {
      this._createTetherInstance(tetherOptions);
    }

    this._tetherInstance.position();
  }

  render() {
    const { targetComponent, elementComponent } = this._runRenders();

    if (!targetComponent) {
      return null;
    }

    return (
      <React.Fragment>
        {targetComponent}
        {elementComponent && this._elementParentNode && createPortal(elementComponent, this._elementParentNode)}
      </React.Fragment>
    );
  }
}
