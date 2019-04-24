"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Samarkand"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Samarkand", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Samarkand", { abbr: true, expect: "Asia/Karachi" }),

	"1924" : helpers.makeTestYear("Asia/Samarkand", [
		["1924-05-01T19:32:06+00:00", "23:59:59", "LMT", -16073 / 60],
		["1924-05-01T19:32:07+00:00", "23:32:07", "+04", -240]
	]),

	"1930" : helpers.makeTestYear("Asia/Samarkand", [
		["1930-06-20T19:59:59+00:00", "23:59:59", "+04", -240],
		["1930-06-20T20:00:00+00:00", "01:00:00", "+05", -300]
	]),

	"1981" : helpers.makeTestYear("Asia/Samarkand", [
		["1981-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1981-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1981-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1981-09-30T18:00:00+00:00", "00:00:00", "+06", -360]
	]),

	"1982" : helpers.makeTestYear("Asia/Samarkand", [
		["1982-03-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1982-03-31T18:00:00+00:00", "00:00:00", "+06", -360],
		["1982-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1982-09-30T18:00:00+00:00", "23:00:00", "+05", -300]
	]),

	"1983" : helpers.makeTestYear("Asia/Samarkand", [
		["1983-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1983-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1983-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1983-09-30T18:00:00+00:00", "23:00:00", "+05", -300]
	]),

	"1984" : helpers.makeTestYear("Asia/Samarkand", [
		["1984-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1984-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1984-09-29T20:59:59+00:00", "02:59:59", "+06", -360],
		["1984-09-29T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1985" : helpers.makeTestYear("Asia/Samarkand", [
		["1985-03-30T20:59:59+00:00", "01:59:59", "+05", -300],
		["1985-03-30T21:00:00+00:00", "03:00:00", "+06", -360],
		["1985-09-28T20:59:59+00:00", "02:59:59", "+06", -360],
		["1985-09-28T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1986" : helpers.makeTestYear("Asia/Samarkand", [
		["1986-03-29T20:59:59+00:00", "01:59:59", "+05", -300],
		["1986-03-29T21:00:00+00:00", "03:00:00", "+06", -360],
		["1986-09-27T20:59:59+00:00", "02:59:59", "+06", -360],
		["1986-09-27T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1987" : helpers.makeTestYear("Asia/Samarkand", [
		["1987-03-28T20:59:59+00:00", "01:59:59", "+05", -300],
		["1987-03-28T21:00:00+00:00", "03:00:00", "+06", -360],
		["1987-09-26T20:59:59+00:00", "02:59:59", "+06", -360],
		["1987-09-26T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1988" : helpers.makeTestYear("Asia/Samarkand", [
		["1988-03-26T20:59:59+00:00", "01:59:59", "+05", -300],
		["1988-03-26T21:00:00+00:00", "03:00:00", "+06", -360],
		["1988-09-24T20:59:59+00:00", "02:59:59", "+06", -360],
		["1988-09-24T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1989" : helpers.makeTestYear("Asia/Samarkand", [
		["1989-03-25T20:59:59+00:00", "01:59:59", "+05", -300],
		["1989-03-25T21:00:00+00:00", "03:00:00", "+06", -360],
		["1989-09-23T20:59:59+00:00", "02:59:59", "+06", -360],
		["1989-09-23T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1990" : helpers.makeTestYear("Asia/Samarkand", [
		["1990-03-24T20:59:59+00:00", "01:59:59", "+05", -300],
		["1990-03-24T21:00:00+00:00", "03:00:00", "+06", -360],
		["1990-09-29T20:59:59+00:00", "02:59:59", "+06", -360],
		["1990-09-29T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1991" : helpers.makeTestYear("Asia/Samarkand", [
		["1991-03-30T20:59:59+00:00", "01:59:59", "+05", -300],
		["1991-03-30T21:00:00+00:00", "03:00:00", "+06", -360],
		["1991-09-28T20:59:59+00:00", "02:59:59", "+06", -360],
		["1991-09-28T21:00:00+00:00", "02:00:00", "+05", -300]
	])
};