"use strict";

$(".banner1").banner({
	items: $(".banner1").find("img"),
	left: $(".banner1").find("#left"),
	right: $(".banner1").find("#right"),
	autoPlay: true,
	delayTime: 3000,
	moveTime: 200,
	index: 0
});

var oNav = $('#LoutiNav');
var aNav = oNav.find('li');
var aDiv = $('#main .louceng');
var oTop = $('#goTop');
$(window).scroll(function () {
	var winH = $(window).height();
	var iTop = $(window).scrollTop();

	if (iTop >= $('#header').height()) {
		oNav.fadeIn();
		oTop.fadeIn();
		aDiv.each(function () {
			if (winH + iTop - $(this).offset().top > winH / 2) {
				aNav.removeClass('active');
				aNav.eq($(this).index()).addClass('active');
			}
		});
	} else {
		oNav.fadeOut();
		oTop.fadeOut();
	}
});
oTop.click(function () {
	$('body,html').animate({ "scrollTop": 0 }, 500);
});
aNav.click(function () {
	var t = aDiv.eq($(this).index()).offset().top;
	$('body,html').animate({ "scrollTop": t }, 500);
	$(this).addClass('active').siblings().removeClass('active');
});
var msg = localStorage.getItem("loginUser");
if (msg) {
	$(".p1").hide();
	$(".p2").show();
	$(".p2").find("span").html(JSON.parse(msg).user);
} else {
	$(".p1").show();
	$(".p2").hide();
}

$(".p2").find("a").click(function () {
	localStorage.removeItem("loginUser");
	$(".p1").show();
	$(".p2").hide();
});