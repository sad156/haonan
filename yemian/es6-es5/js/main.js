"use strict";

require.config({
    baseUrl: "module",
    paths: {
        list: "list",
        jq: "../js/jquery.1.12.4"
    }
});

require(["jq", "list"], function (_, l) {
    var list1 = new l({
        allBtn: $("#hn_box"),
        ool: $("#hn_box").children("#hn_list")
    });
});