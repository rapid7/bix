/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var grid = {
    column: function column(width) {
        var numDenom;

        if (/((\d*)\/(\d*))/.test(width)) {
            numDenom = width.split("/");
            width = 100 * (parseInt(numDenom[0]) / parseInt(numDenom[1])) + "%";
        }

        return {
            display: "inline-block",
            minHeight: 1,
            width: width || "100%",
            verticalAlign: "top"
        };
    },
    columnFlex: {
        flexGrow: 1,
        flexShrink: 1
    },
    columnFlexFixed: {
        flexGrow: 0,
        flexShrink: 0
    },
    columnFlexGrow: {
        flexGrow: 1,
        flexShrink: 0
    },
    columnFlexShrink: {
        flexGrow: 0,
        flexShrink: 1
    },
    container: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    containerFlex: {
        alignContent: "stretch",
        alignItems: "stretch",
        display: "flex",
        flexDirection: "row",
        width: "100%"
    }
};

grid.container = function (width) {
    return _utils2["default"].merge(grid.containerFixed, {
        width: width || "100%"
    });
};

grid.containerFull = _utils2["default"].merge(grid.containerFixed, {
    width: "100%"
});

grid.rowFlex = _utils2["default"].merge(grid.containerFlex, {
    flexWrap: "nowrap"
});

grid.column_1_12 = grid.column("1/12");
grid.column_1_10 = grid.column("1/10");
grid.column_1_8 = grid.column("1/8");
grid.column_1_6 = grid.column_2_12 = grid.column("1/6");
grid.column_1_5 = grid.column_2_10 = grid.column("1/5");
grid.column_1_4 = grid.column_2_8 = grid.column_3_12 = grid.column("1/4");
grid.column_3_10 = grid.column("3/10");
grid.column_1_3 = grid.column_2_6 = grid.column_4_12 = grid.column("4/12");
grid.column_3_8 = grid.column("3/8");
grid.column_5_12 = grid.column("5/12");
grid.column_2_5 = grid.column_4_10 = grid.column("2/5");
grid.column_1_2 = grid.column_2_4 = grid.column_3_6 = grid.column_4_8 = grid.column_5_10 = grid.column_6_12 = grid.column("6/12");
grid.column_7_12 = grid.column("7/12");
grid.column_5_8 = grid.column("5/8");
grid.column_3_5 = grid.column_6_10 = grid.column("3/5");
grid.column_2_3 = grid.column_4_6 = grid.column_8_12 = grid.column("2/3");
grid.column_7_10 = grid.column("7/10");
grid.column_3_4 = grid.column_6_8 = grid.column_9_12 = grid.column("3/4");
grid.column_4_5 = grid.column_8_10 = grid.column("4/5");
grid.column_5_6 = grid.column_10_12 = grid.column("5/6");
grid.column_7_8 = grid.column("7/8");
grid.column_9_10 = grid.column("9/10");
grid.column_11_12 = grid.column("11/12");
grid.columnFull = grid.column("100%");

exports["default"] = grid;
module.exports = exports["default"];