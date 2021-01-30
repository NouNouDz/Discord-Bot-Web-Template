"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../constants/errors");

/**
 * @returns  The process platform.
 * @throws
 */
var getPlatform = function getPlatform() {
  if (!process || typeof process.platform !== "string") {
    throw new Error(_errors.CANNOT_DETERMINE_PLATFORM);
  }

  return process.platform;
};

var _default = getPlatform;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vdXRpbC9nZXRQbGF0Zm9ybS50cyJdLCJuYW1lcyI6WyJnZXRQbGF0Zm9ybSIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIkVycm9yIiwiQ0FOTk9UX0RFVEVSTUlORV9QTEFURk9STSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBYztBQUNoQyxNQUFJLENBQUNDLE9BQUQsSUFBWSxPQUFPQSxPQUFPLENBQUNDLFFBQWYsS0FBNEIsUUFBNUMsRUFBc0Q7QUFDcEQsVUFBTSxJQUFJQyxLQUFKLENBQVVDLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPSCxPQUFPLENBQUNDLFFBQWY7QUFDRCxDQUxEOztlQU9lRixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0FOTk9UX0RFVEVSTUlORV9QTEFURk9STSB9IGZyb20gXCIuLi9jb25zdGFudHMvZXJyb3JzXCI7XG5cbi8qKlxuICogQHJldHVybnMgIFRoZSBwcm9jZXNzIHBsYXRmb3JtLlxuICogQHRocm93c1xuICovXG5jb25zdCBnZXRQbGF0Zm9ybSA9ICgpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXByb2Nlc3MgfHwgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoQ0FOTk9UX0RFVEVSTUlORV9QTEFURk9STSk7XG4gIH1cbiAgcmV0dXJuIHByb2Nlc3MucGxhdGZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQbGF0Zm9ybTtcbiJdfQ==