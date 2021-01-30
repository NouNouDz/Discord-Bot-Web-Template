"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _words = require("../constants/words");

var _util = require("../util");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Generator =
/*#__PURE__*/
function () {
  function Generator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sentencesPerPara = _ref.sentencesPerParagraph,
        sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
      max: 7,
      min: 3
    } : _ref$sentencesPerPara,
        _ref$wordsPerSentence = _ref.wordsPerSentence,
        wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
      max: 15,
      min: 5
    } : _ref$wordsPerSentence,
        random = _ref.random,
        seed = _ref.seed,
        _ref$words = _ref.words,
        words = _ref$words === void 0 ? _words.WORDS : _ref$words;

    _classCallCheck(this, Generator);

    _defineProperty(this, "sentencesPerParagraph", void 0);

    _defineProperty(this, "wordsPerSentence", void 0);

    _defineProperty(this, "random", void 0);

    _defineProperty(this, "words", void 0);

    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words;
    this.wordsPerSentence = wordsPerSentence;
    this.random = random || Math.random;
  }

  _createClass(Generator, [{
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(this.random() * (max - min + 1) + min);
    }
  }, {
    key: "generateRandomWords",
    value: function generateRandomWords(num) {
      var _this = this;

      var _this$wordsPerSentenc = this.wordsPerSentence,
          min = _this$wordsPerSentenc.min,
          max = _this$wordsPerSentenc.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "generateRandomSentence",
    value: function generateRandomSentence(num) {
      return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
    }
  }, {
    key: "generateRandomParagraph",
    value: function generateRandomParagraph(num) {
      var _this2 = this;

      var _this$sentencesPerPar = this.sentencesPerParagraph,
          min = _this$sentencesPerPar.min,
          max = _this$sentencesPerPar.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "pluckRandomWord",
    value: function pluckRandomWord() {
      var min = 0;
      var max = this.words.length - 1;
      var index = this.generateRandomInteger(min, max);
      return this.words[index];
    }
  }]);

  return Generator;
}();

var _default = Generator;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbIkdlbmVyYXRvciIsInNlbnRlbmNlc1BlclBhcmFncmFwaCIsIm1heCIsIm1pbiIsIndvcmRzUGVyU2VudGVuY2UiLCJyYW5kb20iLCJzZWVkIiwid29yZHMiLCJXT1JEUyIsIkVycm9yIiwiTWF0aCIsImZsb29yIiwibnVtIiwibGVuZ3RoIiwiZ2VuZXJhdGVSYW5kb21JbnRlZ2VyIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpbmRleCIsInBsdWNrUmFuZG9tV29yZCIsInRyaW0iLCJnZW5lcmF0ZVJhbmRvbVdvcmRzIiwiZ2VuZXJhdGVSYW5kb21TZW50ZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBdUJNQSxTOzs7QUFNSix1QkFNMkI7QUFBQSxtRkFBSixFQUFJO0FBQUEscUNBTHpCQyxxQkFLeUI7QUFBQSxRQUx6QkEscUJBS3lCLHNDQUxEO0FBQUVDLE1BQUFBLEdBQUcsRUFBRSxDQUFQO0FBQVVDLE1BQUFBLEdBQUcsRUFBRTtBQUFmLEtBS0M7QUFBQSxxQ0FKekJDLGdCQUl5QjtBQUFBLFFBSnpCQSxnQkFJeUIsc0NBSk47QUFBRUYsTUFBQUEsR0FBRyxFQUFFLEVBQVA7QUFBV0MsTUFBQUEsR0FBRyxFQUFFO0FBQWhCLEtBSU07QUFBQSxRQUh6QkUsTUFHeUIsUUFIekJBLE1BR3lCO0FBQUEsUUFGekJDLElBRXlCLFFBRnpCQSxJQUV5QjtBQUFBLDBCQUR6QkMsS0FDeUI7QUFBQSxRQUR6QkEsS0FDeUIsMkJBRGpCQyxZQUNpQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDekIsUUFBSVAscUJBQXFCLENBQUNFLEdBQXRCLEdBQTRCRixxQkFBcUIsQ0FBQ0MsR0FBdEQsRUFBMkQ7QUFDekQsWUFBTSxJQUFJTyxLQUFKLHNEQUVGUixxQkFBcUIsQ0FBQ0UsR0FGcEIsc0NBR3dCRixxQkFBcUIsQ0FBQ0MsR0FIOUMsUUFBTjtBQUtEOztBQUVELFFBQUlFLGdCQUFnQixDQUFDRCxHQUFqQixHQUF1QkMsZ0JBQWdCLENBQUNGLEdBQTVDLEVBQWlEO0FBQy9DLFlBQU0sSUFBSU8sS0FBSixpREFFRkwsZ0JBQWdCLENBQUNELEdBRmYsc0NBR3dCQyxnQkFBZ0IsQ0FBQ0YsR0FIekMsUUFBTjtBQUtEOztBQUVELFNBQUtELHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxTQUFLTSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLSCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFNLElBQUlLLElBQUksQ0FBQ0wsTUFBN0I7QUFDRDs7OzswQ0FFNEJGLEcsRUFBYUQsRyxFQUFxQjtBQUM3RCxhQUFPUSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLTixNQUFMLE1BQWlCSCxHQUFHLEdBQUdDLEdBQU4sR0FBWSxDQUE3QixJQUFrQ0EsR0FBN0MsQ0FBUDtBQUNEOzs7d0NBRTBCUyxHLEVBQXNCO0FBQUE7O0FBQUEsa0NBQzFCLEtBQUtSLGdCQURxQjtBQUFBLFVBQ3ZDRCxHQUR1Qyx5QkFDdkNBLEdBRHVDO0FBQUEsVUFDbENELEdBRGtDLHlCQUNsQ0EsR0FEa0M7QUFFL0MsVUFBTVcsTUFBTSxHQUFHRCxHQUFHLElBQUksS0FBS0UscUJBQUwsQ0FBMkJYLEdBQTNCLEVBQWdDRCxHQUFoQyxDQUF0QjtBQUNBLGFBQU8sNkJBQWtCVyxNQUFsQixFQUNKRSxNQURJLENBQ0csVUFBQ0MsV0FBRCxFQUFzQkMsS0FBdEIsRUFBZ0Q7QUFDdEQseUJBQVUsS0FBSSxDQUFDQyxlQUFMLEVBQVYsY0FBb0NGLFdBQXBDO0FBQ0QsT0FISSxFQUdGLEVBSEUsRUFJSkcsSUFKSSxFQUFQO0FBS0Q7OzsyQ0FFNkJQLEcsRUFBc0I7QUFDbEQsdUJBQVUsc0JBQVcsS0FBS1EsbUJBQUwsQ0FBeUJSLEdBQXpCLENBQVgsQ0FBVjtBQUNEOzs7NENBRThCQSxHLEVBQXNCO0FBQUE7O0FBQUEsa0NBQzlCLEtBQUtYLHFCQUR5QjtBQUFBLFVBQzNDRSxHQUQyQyx5QkFDM0NBLEdBRDJDO0FBQUEsVUFDdENELEdBRHNDLHlCQUN0Q0EsR0FEc0M7QUFFbkQsVUFBTVcsTUFBTSxHQUFHRCxHQUFHLElBQUksS0FBS0UscUJBQUwsQ0FBMkJYLEdBQTNCLEVBQWdDRCxHQUFoQyxDQUF0QjtBQUNBLGFBQU8sNkJBQWtCVyxNQUFsQixFQUNKRSxNQURJLENBQ0csVUFBQ0MsV0FBRCxFQUFzQkMsS0FBdEIsRUFBZ0Q7QUFDdEQseUJBQVUsTUFBSSxDQUFDSSxzQkFBTCxFQUFWLGNBQTJDTCxXQUEzQztBQUNELE9BSEksRUFHRixFQUhFLEVBSUpHLElBSkksRUFBUDtBQUtEOzs7c0NBRWdDO0FBQy9CLFVBQU1oQixHQUFHLEdBQUcsQ0FBWjtBQUNBLFVBQU1ELEdBQUcsR0FBRyxLQUFLSyxLQUFMLENBQVdNLE1BQVgsR0FBb0IsQ0FBaEM7QUFDQSxVQUFNSSxLQUFLLEdBQUcsS0FBS0gscUJBQUwsQ0FBMkJYLEdBQTNCLEVBQWdDRCxHQUFoQyxDQUFkO0FBQ0EsYUFBTyxLQUFLSyxLQUFMLENBQVdVLEtBQVgsQ0FBUDtBQUNEOzs7Ozs7ZUFHWWpCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXT1JEUyB9IGZyb20gXCIuLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbWFrZUFycmF5T2ZMZW5ndGggfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQm91bmRzIHtcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSVBybmcgPSAoKSA9PiBudW1iZXI7XHJcblxyXG5leHBvcnQgdHlwZSBJU2VlZFJhbmRvbSA9IG5ldyAoc2VlZD86IHN0cmluZykgPT4gSVBybmc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXRoIHtcclxuICBzZWVkcmFuZG9tOiBJU2VlZFJhbmRvbTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJhdG9yT3B0aW9ucyB7XHJcbiAgc2VudGVuY2VzUGVyUGFyYWdyYXBoPzogSUJvdW5kcztcclxuICB3b3Jkc1BlclNlbnRlbmNlPzogSUJvdW5kcztcclxuICByYW5kb20/OiBJUHJuZztcclxuICBzZWVkPzogc3RyaW5nO1xyXG4gIHdvcmRzPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmNsYXNzIEdlbmVyYXRvciB7XHJcbiAgcHVibGljIHNlbnRlbmNlc1BlclBhcmFncmFwaDogSUJvdW5kcztcclxuICBwdWJsaWMgd29yZHNQZXJTZW50ZW5jZTogSUJvdW5kcztcclxuICBwdWJsaWMgcmFuZG9tOiBJUHJuZztcclxuICBwdWJsaWMgd29yZHM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBzZW50ZW5jZXNQZXJQYXJhZ3JhcGggPSB7IG1heDogNywgbWluOiAzIH0sXHJcbiAgICB3b3Jkc1BlclNlbnRlbmNlID0geyBtYXg6IDE1LCBtaW46IDUgfSxcclxuICAgIHJhbmRvbSxcclxuICAgIHNlZWQsXHJcbiAgICB3b3JkcyA9IFdPUkRTLFxyXG4gIH06IElHZW5lcmF0b3JPcHRpb25zID0ge30pIHtcclxuICAgIGlmIChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWluID4gc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHNlbnRlbmNlcyBwZXIgcGFyYWdyYXBoICgke1xyXG4gICAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pblxyXG4gICAgICAgIH0pIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoJHtzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod29yZHNQZXJTZW50ZW5jZS5taW4gPiB3b3Jkc1BlclNlbnRlbmNlLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHdvcmRzIHBlciBzZW50ZW5jZSAoJHtcclxuICAgICAgICAgIHdvcmRzUGVyU2VudGVuY2UubWluXHJcbiAgICAgICAgfSkgY2Fubm90IGV4Y2VlZCBtYXhpbXVtICgke3dvcmRzUGVyU2VudGVuY2UubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCA9IHNlbnRlbmNlc1BlclBhcmFncmFwaDtcclxuICAgIHRoaXMud29yZHMgPSB3b3JkcztcclxuICAgIHRoaXMud29yZHNQZXJTZW50ZW5jZSA9IHdvcmRzUGVyU2VudGVuY2U7XHJcbiAgICB0aGlzLnJhbmRvbSA9IHJhbmRvbSB8fCBNYXRoLnJhbmRvbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbUludGVnZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tV29yZHMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMud29yZHNQZXJTZW50ZW5jZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gbWFrZUFycmF5T2ZMZW5ndGgobGVuZ3RoKVxyXG4gICAgICAucmVkdWNlKChhY2N1bXVsYXRvcjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wbHVja1JhbmRvbVdvcmQoKX0gJHthY2N1bXVsYXRvcn1gO1xyXG4gICAgICB9LCBcIlwiKVxyXG4gICAgICAudHJpbSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tU2VudGVuY2UobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtjYXBpdGFsaXplKHRoaXMuZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pKX0uYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zZW50ZW5jZXNQZXJQYXJhZ3JhcGg7XHJcbiAgICBjb25zdCBsZW5ndGggPSBudW0gfHwgdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xyXG4gICAgcmV0dXJuIG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aClcclxuICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3I6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2VuZXJhdGVSYW5kb21TZW50ZW5jZSgpfSAke2FjY3VtdWxhdG9yfWA7XHJcbiAgICAgIH0sIFwiXCIpXHJcbiAgICAgIC50cmltKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGx1Y2tSYW5kb21Xb3JkKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy53b3Jkcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gdGhpcy53b3Jkc1tpbmRleF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0b3I7XHJcbiJdfQ==