/**
 * Debounce
 * From: https://github.com/formstate/formstate/blob/master/src/internal/utils.ts
 */
var now = () => new Date().getTime();

export function debounce<T extends Function>(func: T, milliseconds: number, immediate = false): T {
  var timeout: any, args: any, context: any, timestamp: any, result: any;

  var wait = milliseconds;

  var later = function () {
    var last = now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return <any>function () {
    // @ts-ignore
    context = this;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

export const toTitleCase = (str: string) =>
  str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

export const truncate = (input: string, maxLength: number = 5) =>
  input?.length > maxLength ? `${input.substring(0, maxLength)}...` : input;

const isObject = (item: any) => item && typeof item === "object" && !Array.isArray(item);

/**
 * https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
 */
export const mergeDeep = (target: any, source: any) => {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};
