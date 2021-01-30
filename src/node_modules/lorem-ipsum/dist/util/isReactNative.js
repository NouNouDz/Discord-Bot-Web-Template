"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @returns  True if runtime is ReactNative.
 */
var isReactNative = function isReactNative() {
  return typeof navigator !== "undefined" && navigator.product === "ReactNative";
};

var _default = isReactNative;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2lzUmVhY3ROYXRpdmUudHMiXSwibmFtZXMiOlsiaXNSZWFjdE5hdGl2ZSIsIm5hdmlnYXRvciIsInByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFlO0FBQ25DLFNBQ0UsT0FBT0MsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsU0FBUyxDQUFDQyxPQUFWLEtBQXNCLGFBRDVEO0FBR0QsQ0FKRDs7ZUFNZUYsYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiBydW50aW1lIGlzIFJlYWN0TmF0aXZlLlxyXG4gKi9cclxuY29uc3QgaXNSZWFjdE5hdGl2ZSA9ICgpOiBib29sZWFuID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzUmVhY3ROYXRpdmU7XHJcbiJdfQ==