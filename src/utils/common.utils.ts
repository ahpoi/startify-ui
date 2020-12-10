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

export const truncate = (input: string) => (input?.length > 5 ? `${input.substring(0, 5)}...` : input);

export const getParameterByName = (name: string, url?: string) => {
  if (!url) url = window.location.href;
  /*eslint no-useless-escape: 0*/
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
