"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formats = require("../constants/formats");

var _lineEndings = require("../constants/lineEndings");

var _generator = _interopRequireDefault(require("../lib/generator"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoremIpsum =
/*#__PURE__*/
function () {
  function LoremIpsum() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _formats.FORMAT_PLAIN;
    var suffix = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, LoremIpsum);

    _defineProperty(this, "generator", void 0);

    _defineProperty(this, "format", void 0);

    _defineProperty(this, "suffix", void 0);

    if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
    }

    this.format = format.toLowerCase();
    this.suffix = suffix;
    this.generator = new _generator.default(options);
  }

  _createClass(LoremIpsum, [{
    key: "getLineEnding",
    value: function getLineEnding() {
      if (this.suffix) {
        return this.suffix;
      }

      if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
        return _lineEndings.LINE_ENDINGS.WIN32;
      }

      return _lineEndings.LINE_ENDINGS.POSIX;
    }
  }, {
    key: "formatString",
    value: function formatString(str) {
      if (this.format === _formats.FORMAT_HTML) {
        return "<p>".concat(str, "</p>");
      }

      return str;
    }
  }, {
    key: "formatStrings",
    value: function formatStrings(strings) {
      var _this = this;

      return strings.map(function (str) {
        return _this.formatString(str);
      });
    }
  }, {
    key: "generateWords",
    value: function generateWords(num) {
      return this.formatString(this.generator.generateRandomWords(num));
    }
  }, {
    key: "generateSentences",
    value: function generateSentences(num) {
      return this.formatString(this.generator.generateRandomParagraph(num));
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs(num) {
      var makeString = this.generator.generateRandomParagraph.bind(this.generator);
      return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
    }
  }]);

  return LoremIpsum;
}();

var _default = LoremIpsum;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvTG9yZW1JcHN1bS50cyJdLCJuYW1lcyI6WyJMb3JlbUlwc3VtIiwib3B0aW9ucyIsImZvcm1hdCIsIkZPUk1BVF9QTEFJTiIsInN1ZmZpeCIsIkZPUk1BVFMiLCJpbmRleE9mIiwidG9Mb3dlckNhc2UiLCJFcnJvciIsImpvaW4iLCJnZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJMSU5FX0VORElOR1MiLCJXSU4zMiIsIlBPU0lYIiwic3RyIiwiRk9STUFUX0hUTUwiLCJzdHJpbmdzIiwibWFwIiwiZm9ybWF0U3RyaW5nIiwibnVtIiwiZ2VuZXJhdGVSYW5kb21Xb3JkcyIsImdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoIiwibWFrZVN0cmluZyIsImJpbmQiLCJmb3JtYXRTdHJpbmdzIiwiZ2V0TGluZUVuZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBS0osd0JBSUU7QUFBQSxRQUhBQyxPQUdBLHVFQUg2QixFQUc3QjtBQUFBLFFBRkFDLE1BRUEsdUVBRmlCQyxxQkFFakI7QUFBQSxRQURBQyxNQUNBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNBLFFBQUlDLGlCQUFRQyxPQUFSLENBQWdCSixNQUFNLENBQUNLLFdBQVAsRUFBaEIsTUFBMEMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRCxZQUFNLElBQUlDLEtBQUosV0FDRE4sTUFEQywrQ0FDMENHLGlCQUFRSSxJQUFSLENBQWEsTUFBYixDQUQxQyxPQUFOO0FBR0Q7O0FBRUQsU0FBS1AsTUFBTCxHQUFjQSxNQUFNLENBQUNLLFdBQVAsRUFBZDtBQUNBLFNBQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtNLFNBQUwsR0FBaUIsSUFBSUMsa0JBQUosQ0FBY1YsT0FBZCxDQUFqQjtBQUNEOzs7O29DQUVzQjtBQUNyQixVQUFJLEtBQUtHLE1BQVQsRUFBaUI7QUFDZixlQUFPLEtBQUtBLE1BQVo7QUFDRDs7QUFFRCxVQUFJLENBQUMsMEJBQUQsSUFBb0IsbUJBQXBCLElBQWdDLHNCQUFwQyxFQUFpRDtBQUMvQyxlQUFPUSwwQkFBYUMsS0FBcEI7QUFDRDs7QUFFRCxhQUFPRCwwQkFBYUUsS0FBcEI7QUFDRDs7O2lDQUVtQkMsRyxFQUFxQjtBQUN2QyxVQUFJLEtBQUtiLE1BQUwsS0FBZ0JjLG9CQUFwQixFQUFpQztBQUMvQiw0QkFBYUQsR0FBYjtBQUNEOztBQUNELGFBQU9BLEdBQVA7QUFDRDs7O2tDQUVvQkUsTyxFQUE2QjtBQUFBOztBQUNoRCxhQUFPQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDSCxHQUFEO0FBQUEsZUFBUyxLQUFJLENBQUNJLFlBQUwsQ0FBa0JKLEdBQWxCLENBQVQ7QUFBQSxPQUFaLENBQVA7QUFDRDs7O2tDQUVvQkssRyxFQUFzQjtBQUN6QyxhQUFPLEtBQUtELFlBQUwsQ0FBa0IsS0FBS1QsU0FBTCxDQUFlVyxtQkFBZixDQUFtQ0QsR0FBbkMsQ0FBbEIsQ0FBUDtBQUNEOzs7c0NBRXdCQSxHLEVBQXNCO0FBQzdDLGFBQU8sS0FBS0QsWUFBTCxDQUFrQixLQUFLVCxTQUFMLENBQWVZLHVCQUFmLENBQXVDRixHQUF2QyxDQUFsQixDQUFQO0FBQ0Q7Ozt1Q0FFeUJBLEcsRUFBcUI7QUFDN0MsVUFBTUcsVUFBVSxHQUFHLEtBQUtiLFNBQUwsQ0FBZVksdUJBQWYsQ0FBdUNFLElBQXZDLENBQ2pCLEtBQUtkLFNBRFksQ0FBbkI7QUFHQSxhQUFPLEtBQUtlLGFBQUwsQ0FBbUIsOEJBQW1CTCxHQUFuQixFQUF3QkcsVUFBeEIsQ0FBbkIsRUFBd0RkLElBQXhELENBQ0wsS0FBS2lCLGFBQUwsRUFESyxDQUFQO0FBR0Q7Ozs7OztlQUdZMUIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZPUk1BVF9IVE1MLCBGT1JNQVRfUExBSU4sIEZPUk1BVFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Zvcm1hdHNcIjtcclxuaW1wb3J0IHsgTElORV9FTkRJTkdTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9saW5lRW5kaW5nc1wiO1xyXG5pbXBvcnQgR2VuZXJhdG9yLCB7IElHZW5lcmF0b3JPcHRpb25zIH0gZnJvbSBcIi4uL2xpYi9nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgaXNOb2RlLCBpc1JlYWN0TmF0aXZlLCBpc1dpbmRvd3MsIG1ha2VBcnJheU9mU3RyaW5ncyB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jbGFzcyBMb3JlbUlwc3VtIHtcclxuICBwdWJsaWMgZ2VuZXJhdG9yOiBHZW5lcmF0b3I7XHJcbiAgcHVibGljIGZvcm1hdDogc3RyaW5nO1xyXG4gIHB1YmxpYyBzdWZmaXg/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgb3B0aW9uczogSUdlbmVyYXRvck9wdGlvbnMgPSB7fSxcclxuICAgIGZvcm1hdDogc3RyaW5nID0gRk9STUFUX1BMQUlOLFxyXG4gICAgc3VmZml4Pzogc3RyaW5nLFxyXG4gICkge1xyXG4gICAgaWYgKEZPUk1BVFMuaW5kZXhPZihmb3JtYXQudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgJHtmb3JtYXR9IGlzIGFuIGludmFsaWQgZm9ybWF0LiBQbGVhc2UgdXNlICR7Rk9STUFUUy5qb2luKFwiIG9yIFwiKX0uYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XHJcbiAgICB0aGlzLmdlbmVyYXRvciA9IG5ldyBHZW5lcmF0b3Iob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGluZUVuZGluZygpIHtcclxuICAgIGlmICh0aGlzLnN1ZmZpeCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWZmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc1JlYWN0TmF0aXZlKCkgJiYgaXNOb2RlKCkgJiYgaXNXaW5kb3dzKCkpIHtcclxuICAgICAgcmV0dXJuIExJTkVfRU5ESU5HUy5XSU4zMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTElORV9FTkRJTkdTLlBPU0lYO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IEZPUk1BVF9IVE1MKSB7XHJcbiAgICAgIHJldHVybiBgPHA+JHtzdHJ9PC9wPmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdFN0cmluZ3Moc3RyaW5nczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gc3RyaW5ncy5tYXAoKHN0cikgPT4gdGhpcy5mb3JtYXRTdHJpbmcoc3RyKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVXb3JkcyhudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVTZW50ZW5jZXMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyh0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVBhcmFncmFwaHMobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWFrZVN0cmluZyA9IHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoLmJpbmQoXHJcbiAgICAgIHRoaXMuZ2VuZXJhdG9yLFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZ3MobWFrZUFycmF5T2ZTdHJpbmdzKG51bSwgbWFrZVN0cmluZykpLmpvaW4oXHJcbiAgICAgIHRoaXMuZ2V0TGluZUVuZGluZygpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvcmVtSXBzdW07XHJcbiJdfQ==