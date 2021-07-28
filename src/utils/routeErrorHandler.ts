export function handleErr(expressFn) {
  return function (req, res, next) {
    expressFn(req, res, next).catch(next);
  };
}