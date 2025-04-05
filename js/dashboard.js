/* JS Document */

/******************************

[Table of Contents]

1. Init Menu


******************************/

$(document).ready(function()
{
	"use strict";

	initMenu();

	/* 

	1. Init Menu

	*/

	function initMenu()
	{
		let btn = $('.navbar-toggler');
		let menu = $('.menu');
		btn.on('click', function()
		{
			menu.toggleClass('active');
			btn.toggleClass('active');
		});
	}
});