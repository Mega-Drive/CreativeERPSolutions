/* JS Document */

/******************************

[Table of Contents]

1. Init Menu


******************************/

$(document).ready(function()
{
	"use strict";

	initMenu();
	initHeader();

	$(document).on('scroll', function()
	{
		initHeader();
	});

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
		});
	}

	/* 

	2. Init Header

	*/
	
	function initHeader()
	{
		let header = $('.header');
		let navbar = $('.navbar');
		let nb = $('.sidebar .navbar-header');
		if($(window).scrollTop() > 180)
		{
			header.addClass('scrolled');
			navbar.addClass('scrolled');
			nb.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			navbar.removeClass('scrolled');
			nb.removeClass('scrolled');
		}
	}
});