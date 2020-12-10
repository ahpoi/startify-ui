export namespace FocusUtils {
  export function focusFirst(selector: string) {
    const element = document.querySelectorAll(selector);
    if (element.length) {
      (element[0] as HTMLElement).focus();
    }
  }

  export const focusFirstErrorInput = (className: string) => focusFirst("." + className);
}

export function scrollToTop() {
  typeof window !== "undefined" && window.scrollTo(0, 0);
}
