"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child_process = require("child_process");

var _ = require(".");

/**
 * Copy text to the clipboard using a platform's native command.
 * @param  text  The text to copy.
 * @returns      A promise that resolves with the text to copy.
 */
var copyToClipboard = function copyToClipboard(text) {
  return new Promise(function (resolve, reject) {
    try {
      var platform = (0, _.getPlatform)();

      if ((0, _.isSupportedPlatform)(platform) === false) {
        throw new Error("Copy is not supported for ".concat(platform));
      }

      var command = "echo \"".concat(text, "\" | ").concat((0, _.getCopyCommand)(platform));
      (0, _child_process.exec)(command, function (error, stdout, stderr) {
        /* istanbul ignore if */
        if (error) {
          return reject(error);
        }

        if (stderr) {
          return reject(new Error(stderr));
        }

        return resolve(text);
      });
    } catch (error) {
      return reject(error);
    }
  });
};

var _default = copyToClipboard;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vdXRpbC9jb3B5VG9DbGlwYm9hcmQudHMiXSwibmFtZXMiOlsiY29weVRvQ2xpcGJvYXJkIiwidGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGxhdGZvcm0iLCJFcnJvciIsImNvbW1hbmQiLCJlcnJvciIsInN0ZG91dCIsInN0ZGVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7OztBQUtBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFtQztBQUN6RCxTQUFPLElBQUlDLE9BQUosQ0FDTCxVQUFDQyxPQUFELEVBQWtDQyxNQUFsQyxFQUFxRTtBQUNuRSxRQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLG9CQUFqQjs7QUFDQSxVQUFJLDJCQUFvQkEsUUFBcEIsTUFBa0MsS0FBdEMsRUFBNkM7QUFDM0MsY0FBTSxJQUFJQyxLQUFKLHFDQUF1Q0QsUUFBdkMsRUFBTjtBQUNEOztBQUNELFVBQU1FLE9BQU8sb0JBQVlOLElBQVosa0JBQXVCLHNCQUFlSSxRQUFmLENBQXZCLENBQWI7QUFDQSwrQkFBS0UsT0FBTCxFQUFjLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsTUFBaEIsRUFBMkI7QUFDdkM7QUFDQSxZQUFJRixLQUFKLEVBQVc7QUFDVCxpQkFBT0osTUFBTSxDQUFDSSxLQUFELENBQWI7QUFDRDs7QUFFRCxZQUFJRSxNQUFKLEVBQVk7QUFDVixpQkFBT04sTUFBTSxDQUFDLElBQUlFLEtBQUosQ0FBVUksTUFBVixDQUFELENBQWI7QUFDRDs7QUFFRCxlQUFPUCxPQUFPLENBQUNGLElBQUQsQ0FBZDtBQUNELE9BWEQ7QUFZRCxLQWxCRCxDQWtCRSxPQUFPTyxLQUFQLEVBQWM7QUFDZCxhQUFPSixNQUFNLENBQUNJLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0F2QkksQ0FBUDtBQXlCRCxDQTFCRDs7ZUE0QmVSLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCB7IGdldENvcHlDb21tYW5kLCBnZXRQbGF0Zm9ybSwgaXNTdXBwb3J0ZWRQbGF0Zm9ybSB9IGZyb20gXCIuXCI7XG5cbi8qKlxuICogQ29weSB0ZXh0IHRvIHRoZSBjbGlwYm9hcmQgdXNpbmcgYSBwbGF0Zm9ybSdzIG5hdGl2ZSBjb21tYW5kLlxuICogQHBhcmFtICB0ZXh0ICBUaGUgdGV4dCB0byBjb3B5LlxuICogQHJldHVybnMgICAgICBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB0ZXh0IHRvIGNvcHkuXG4gKi9cbmNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgKHJlc29sdmU6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQsIHJlamVjdDogKGVycm9yOiBFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBnZXRQbGF0Zm9ybSgpO1xuICAgICAgICBpZiAoaXNTdXBwb3J0ZWRQbGF0Zm9ybShwbGF0Zm9ybSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3B5IGlzIG5vdCBzdXBwb3J0ZWQgZm9yICR7cGxhdGZvcm19YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGBlY2hvIFwiJHt0ZXh0fVwiIHwgJHtnZXRDb3B5Q29tbWFuZChwbGF0Zm9ybSl9YDtcbiAgICAgICAgZXhlYyhjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihzdGRlcnIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weVRvQ2xpcGJvYXJkO1xuIl19