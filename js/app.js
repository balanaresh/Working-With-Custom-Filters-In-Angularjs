/*
 Working With Filters in Angularjs 1.5
 (c) 2016 
 License: MIT
*/

var $j = jQuery.noConflict();
var myApp = angular.module('shopping', ['ng', 'ngRoute', 'ngResource']);
function inArray(needle, ary) {
    if (ary instanceof Object) {
        for (var i in ary) {
            if (ary[i] == needle) {
                return {
                    status: true,
                    index: i
                };
            }
        }
    }
    return {
        status: false
    };
}

function arrayKeyExists(needle, ary) {
    if (ary instanceof Object) {
        for (var i in ary) {
            if (i == needle) {
                return {
                    status: true,
                    index: i
                };
            }
        }
    }
    return {
        status: false
    };
}