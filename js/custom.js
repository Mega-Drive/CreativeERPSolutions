/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Header
3. Init Menu
4. Init Brands Slider
5. Init Testimonials Slider
6. Init Accordions


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initBrandsSlider();
	initTestimonialsSlider();
	initAccordions();
	initHeader();
	initMenu();

	$(document).on('scroll', function()
	{
		initHeader();
	});

	/* 

	2. Init Header

	*/
	
	function initHeader()
	{
		let header = $('.header');
		let navbar = $('.navbar');
		if($(window).scrollTop() > 180)
		{
			header.addClass('scrolled');
			navbar.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			navbar.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

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

	4. Init Brands Slider

	*/

	function initBrandsSlider()
	{
		if($("#brands_slider").length)
		{
			let brandsSlider = $("#brands_slider");
			
			brandsSlider.owlCarousel(
				{
					items: 5,
					loop: true,
					autoplay:true,
					autoplayTimeout:5000,
					smartSpeed: 500,
					nav: false,
					dots: false,
					margin: 92,
					responsive:
					{
						0:
						{
							items: 5,
							margin: 24
						},
						425:
						{
							items: 5,
							margin: 24
						},
						576:
						{
							items: 5,
							margin: 56
						},
						769:
						{
							items: 5,
							margin: 72
						},
						1200:
						{
							items: 5,
							margin: 92
						},
						1440:
						{
							
						}
					}
				}
			)
		}
	}

	/* 

	5. Init Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		if($('#testimonials_slider').length)
		{
			let testimonialsSlider = $("#testimonials_slider");
			testimonialsSlider.owlCarousel(
				{
					items: 3,
					loop: true,
					autoplay:true,
					autoplayTimeout:5000,
					smartSpeed: 500,
					nav: false,
					dots: false,
					margin: 32,
					responsive:
					{
						0:
						{
							items: 2,
							margin: 18
						},
						574:
						{
							items: 2,
							margin: 32
						},
						1023:
						{
							items: 3,
							margin: 32
						}
					}
				}
			)
		}
	}

	/* 

	6. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			let accs = $('.accordion');

			accs.each(function()
			{
				let acc = $(this);

				if(acc.hasClass('active'))
				{
					let panel = $(acc.next());
					let panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panelH);
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						let panel = $(acc.next());
						let panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panelH);
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						let panel = $(acc.next());
						let panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panelH);
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

});