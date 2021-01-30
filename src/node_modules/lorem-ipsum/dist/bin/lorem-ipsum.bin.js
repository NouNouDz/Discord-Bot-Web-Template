#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _ = require("..");

var _formats = require("../constants/formats");

var _regex = require("../constants/regex");

var _cli = require("./constants/cli");

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.version((0, _util.getVersion)()).usage(_cli.USAGE).command("[count] [units]", _cli.DESCRIPTION).option("-c --copy", "Copy").option("-f --format <format>", "Format", _regex.REGEX.FORMATS, _formats.FORMAT_PLAIN).action(function () {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1";
  var units = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sentence";

  if (_regex.REGEX.UNITS.test(units) === false) {
    // tslint:disable-next-line:no-console
    console.error("".concat(units, " is not valid. Choose from paragraph(s), sentence(s), or word(s)."));
    process.exit(1);
  }

  var count = parseInt(num, 10);

  if (!count || count < 1) {
    // tslint:disable-next-line:no-console
    console.error("".concat(count, " is not valid. Choose a number greater than 1."));
    process.exit(1);
  }

  var output = (0, _.loremIpsum)({
    count: count,
    format: _commander.default.format,
    units: units
  }); // tslint:disable-next-line:no-console

  console.log(output);

  if (_commander.default.copy === true) {
    (0, _util.copyToClipboard)(output).then(function () {
      // tslint:disable-next-line:no-console
      console.log(""); // tslint:disable-next-line:no-console

      console.log("✓ copied");
    }).catch(function (err) {
      // tslint:disable-next-line:no-console
      console.log(err.message);
    });
  }
});

_commander.default.parse(process.argv);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vbG9yZW0taXBzdW0uYmluLnRzIl0sIm5hbWVzIjpbInByb2dyYW0iLCJ2ZXJzaW9uIiwidXNhZ2UiLCJVU0FHRSIsImNvbW1hbmQiLCJERVNDUklQVElPTiIsIm9wdGlvbiIsIlJFR0VYIiwiRk9STUFUUyIsIkZPUk1BVF9QTEFJTiIsImFjdGlvbiIsIm51bSIsInVuaXRzIiwiVU5JVFMiLCJ0ZXN0IiwiY29uc29sZSIsImVycm9yIiwicHJvY2VzcyIsImV4aXQiLCJjb3VudCIsInBhcnNlSW50Iiwib3V0cHV0IiwiZm9ybWF0IiwibG9nIiwiY29weSIsInRoZW4iLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJwYXJzZSIsImFyZ3YiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsbUJBQ0dDLE9BREgsQ0FDVyx1QkFEWCxFQUVHQyxLQUZILENBRVNDLFVBRlQsRUFHR0MsT0FISCxvQkFHOEJDLGdCQUg5QixFQUlHQyxNQUpILENBSVUsV0FKVixFQUl1QixNQUp2QixFQUtHQSxNQUxILENBS1Usc0JBTFYsRUFLa0MsUUFMbEMsRUFLNENDLGFBQU1DLE9BTGxELEVBSzJEQyxxQkFMM0QsRUFNR0MsTUFOSCxDQU1VLFlBQWlJO0FBQUEsTUFBaElDLEdBQWdJLHVFQUFsSCxHQUFrSDtBQUFBLE1BQTdHQyxLQUE2Ryx1RUFBZixVQUFlOztBQUN2SSxNQUFJTCxhQUFNTSxLQUFOLENBQVlDLElBQVosQ0FBaUJGLEtBQWpCLE1BQTRCLEtBQWhDLEVBQXVDO0FBQ3JDO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsS0FBUixXQUNLSixLQURMO0FBR0FLLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWI7QUFDRDs7QUFFRCxNQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ1QsR0FBRCxFQUFNLEVBQU4sQ0FBdEI7O0FBQ0EsTUFBSSxDQUFDUSxLQUFELElBQVVBLEtBQUssR0FBRyxDQUF0QixFQUF5QjtBQUN2QjtBQUNBSixJQUFBQSxPQUFPLENBQUNDLEtBQVIsV0FBaUJHLEtBQWpCO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWI7QUFDRDs7QUFFRCxNQUFNRyxNQUFNLEdBQUcsa0JBQVc7QUFDeEJGLElBQUFBLEtBQUssRUFBTEEsS0FEd0I7QUFFeEJHLElBQUFBLE1BQU0sRUFBRXRCLG1CQUFRc0IsTUFGUTtBQUd4QlYsSUFBQUEsS0FBSyxFQUFMQTtBQUh3QixHQUFYLENBQWYsQ0FoQnVJLENBc0J2STs7QUFDQUcsRUFBQUEsT0FBTyxDQUFDUSxHQUFSLENBQVlGLE1BQVo7O0FBRUEsTUFBSXJCLG1CQUFRd0IsSUFBUixLQUFpQixJQUFyQixFQUEyQjtBQUN6QiwrQkFBZ0JILE1BQWhCLEVBQ0dJLElBREgsQ0FDUSxZQUFNO0FBQ1Y7QUFDQVYsTUFBQUEsT0FBTyxDQUFDUSxHQUFSLENBQVksRUFBWixFQUZVLENBSVY7O0FBQ0FSLE1BQUFBLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLFVBQVo7QUFDRCxLQVBILEVBUUdHLEtBUkgsQ0FRUyxVQUFDQyxHQUFELEVBQVM7QUFDZDtBQUNBWixNQUFBQSxPQUFPLENBQUNRLEdBQVIsQ0FBWUksR0FBRyxDQUFDQyxPQUFoQjtBQUNELEtBWEg7QUFZRDtBQUNGLENBN0NIOztBQStDQTVCLG1CQUFRNkIsS0FBUixDQUFjWixPQUFPLENBQUNhLElBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2dyYW0gZnJvbSBcImNvbW1hbmRlclwiO1xyXG5pbXBvcnQgeyBsb3JlbUlwc3VtIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IEZPUk1BVF9QTEFJTiB9IGZyb20gXCIuLi9jb25zdGFudHMvZm9ybWF0c1wiO1xyXG5pbXBvcnQgeyBSRUdFWCB9IGZyb20gXCIuLi9jb25zdGFudHMvcmVnZXhcIjtcclxuaW1wb3J0IHsgREVTQ1JJUFRJT04sIFVTQUdFIH0gZnJvbSBcIi4vY29uc3RhbnRzL2NsaVwiO1xyXG5pbXBvcnQgeyBjb3B5VG9DbGlwYm9hcmQsIGdldFZlcnNpb24gfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5wcm9ncmFtXHJcbiAgLnZlcnNpb24oZ2V0VmVyc2lvbigpKVxyXG4gIC51c2FnZShVU0FHRSlcclxuICAuY29tbWFuZChgW2NvdW50XSBbdW5pdHNdYCwgREVTQ1JJUFRJT04pXHJcbiAgLm9wdGlvbihcIi1jIC0tY29weVwiLCBcIkNvcHlcIilcclxuICAub3B0aW9uKFwiLWYgLS1mb3JtYXQgPGZvcm1hdD5cIiwgXCJGb3JtYXRcIiwgUkVHRVguRk9STUFUUywgRk9STUFUX1BMQUlOKVxyXG4gIC5hY3Rpb24oKG51bTogc3RyaW5nID0gXCIxXCIsIHVuaXRzOiBcIndvcmRzXCIgfCBcIndvcmRcIiB8IFwic2VudGVuY2VzXCIgfCBcInNlbnRlbmNlXCIgfCBcInBhcmFncmFwaHNcIiB8IFwicGFyYWdyYXBoXCIgfCB1bmRlZmluZWQgPSBcInNlbnRlbmNlXCIpID0+IHtcclxuICAgIGlmIChSRUdFWC5VTklUUy50ZXN0KHVuaXRzKSA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgJHt1bml0c30gaXMgbm90IHZhbGlkLiBDaG9vc2UgZnJvbSBwYXJhZ3JhcGgocyksIHNlbnRlbmNlKHMpLCBvciB3b3JkKHMpLmAsXHJcbiAgICAgICk7XHJcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KG51bSwgMTApO1xyXG4gICAgaWYgKCFjb3VudCB8fCBjb3VudCA8IDEpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcclxuICAgICAgY29uc29sZS5lcnJvcihgJHtjb3VudH0gaXMgbm90IHZhbGlkLiBDaG9vc2UgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDEuYCk7XHJcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRwdXQgPSBsb3JlbUlwc3VtKHtcclxuICAgICAgY291bnQsXHJcbiAgICAgIGZvcm1hdDogcHJvZ3JhbS5mb3JtYXQsXHJcbiAgICAgIHVuaXRzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XHJcblxyXG4gICAgaWYgKHByb2dyYW0uY29weSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb3B5VG9DbGlwYm9hcmQob3V0cHV0KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcclxuXHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCLinJMgY29waWVkXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5wcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndik7XHJcbiJdfQ==