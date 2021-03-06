"use strict"; // eslint-disable-line quotes

var XLSX = require('xlsx');
var util = XLSX.utils;
var _ = require('lodash');

_.extend(exports, util);

exports.cell_in_range = function (cell, range) {
    cell = util.decode_cell(cell);
    range = util.decode_range(range);
    return range.s.c <= cell.c && range.s.r <= cell.r && range.e.c >= cell.c && range.e.r >= cell.r;
};

exports.encode_cell = function (cell) {
    return util.encode_cell({
        r: _.isString(cell.r) ? util.decode_row(cell.r) : cell.r,
        c: _.isString(cell.c) ? util.decode_col(cell.c) : cell.c
    });
};