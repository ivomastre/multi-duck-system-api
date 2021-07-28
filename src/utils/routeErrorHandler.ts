export function handleAsyncErr(expressFn) {
  return function (req, res, next) {
    expressFn(req, res, next).catch(next);
  };
}