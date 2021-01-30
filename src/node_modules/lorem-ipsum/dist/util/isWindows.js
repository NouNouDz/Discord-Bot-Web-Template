"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _platforms = require("../constants/platforms");

/**
 * @returns True if process is windows.
 */
var isWindows = function isWindows() {
  return typeof process !== "undefined" && process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
};

var _default = isWindows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2lzV2luZG93cy50cyJdLCJuYW1lcyI6WyJpc1dpbmRvd3MiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJTVVBQT1JURURfUExBVEZPUk1TIiwiV0lOMzIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBZTtBQUMvQixTQUFPLE9BQU9DLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQU8sQ0FBQ0MsUUFBUixLQUFxQkMsK0JBQW9CQyxLQUFsRjtBQUNELENBRkQ7O2VBSWVKLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVVBQT1JURURfUExBVEZPUk1TIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9wbGF0Zm9ybXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHByb2Nlc3MgaXMgd2luZG93cy5cclxuICovXHJcbmNvbnN0IGlzV2luZG93cyA9ICgpOiBib29sZWFuID0+IHtcclxuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gU1VQUE9SVEVEX1BMQVRGT1JNUy5XSU4zMjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzV2luZG93cztcclxuIl19