/* Author:WebThemez
 * Author URI:http://webthemez.com
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 */


(function($){$(document).ready(function(){
	
		$(".banner-image").backstretch('images/banner1.jpg');
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});
		
	   $('#quote-carousel').carousel({
		 pause: true,
		 interval: 4000,
	   });
		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		// Products List
		//-----------------------------------------------
		const products = [
		{
			"name": "3-Tab Shingle",
			"dimensions": "40in x 13 1/4in ",
			"description": "$1.00",
			"type": "roofing"
		},
		{
			"name": "100% Silicone Roof Coating",
			"dimensions": "4.75gal",
			"description": "$275.00",
			"type": "roofing"
		},
		{
			"name": "Slate Tiles",
			"dimensions": "~115sqft",
			"description": "$375.00",
			"type": "roofing"
		},
		{
			"name": "Stone Coating Metal Roofing",
			"dimensions": "40in x 13 1/3in",
			"description": "$3.75",
			"type": "roofing"
		},
		{
			"name": "TPO Roofing Membrane",
			"dimensions": ".45mm x 5ft x 100ft",
			"description": "**",
			"type": "roofing"
		},
		{
			"name": "TPO Roofing Membrane",
			"dimensions": ".60mm x 5ft x 100ft",
			"description": "**",
			"type": "roofing"
		},
		{
			"name": "TPO Roofing Membrane",
			"dimensions": ".80mm x 5ft x 100ft",
			"description": "**",
			"type": "roofing"
		},
		{
			"name": "TPO Roofing Membrane",
			"dimensions": "1.50mm x 5ft x 100ft",
			"description": "**",
			"type": "roofing"
		},
		{
			"name": "Synthetic Roof Underlayment",
			"dimensions": "48in x 250ft",
			"description": "$99.87",
			"type": "roofing"
		},
		{
			"name": "Rigid Foam Insulation R-10",
			"dimensions": "4ft x 8ft x 2in",
			"description": "$40",
			"type": "wall"
		},
		{
			"name": "Romex Cable 12/2",
			"dimensions": "250ft",
			"description": "$85",
			"type": "electrical"
		},
		{
			"name": "Aluminum Plated 12/2 or 14/2",
			"dimensions": "250ft",
			"description": "$185",
			"type": "electrical"
		},
		{
			"name": "Closed Cell Spray Foam Kit",
			"dimensions": "~600 board feet",
			"description": "$700",
			"type": "wall"
		},
		{
			"name": "100 KVaTransformer Pole",
			"dimensions": "14400/28900 | 240/480V",
			"description": "$5,720",
			"type": "electrical"
		},
		{
			"name": "167 KVa Transformer Pole",
			"dimensions": "14400/28900 | 240/480V",
			"description": "$9,200",
			"type": "electrical"
		},
		{
			"name": "250 KVa Transformer Pole",
			"dimensions": "14400/28900 | 240/480V",
			"description": "$13,000",
			"type": "electrical"
		},
		{
			"name": "333 KVa Transformer Pole",
			"dimensions": "14400/28900 | 240/480V",
			"description": "$17,400",
			"type": "electrical"
		},
		{
			"name": "OSB (oriented strand board)",
			"dimensions": "23/32in x 4ft x 8ft",
			"description": "$18",
			"type": "wall"
		},
		{
			"name": "Galvanized Steel Stud 25Ga",
			"dimensions": "2 1/2in x 1 1/4in x 12ft",
			"description": "**",
			"type": "wall"
		},
		{
			"name": "Galvanized Steel Track 25Ga",
			"dimensions": "2 1/2in x 1 1/4in x 12ft",
			"description": "**",
			"type": "wall"
		},
		{
			"name": "Galvanized Steel Stud 25Ga",
			"dimensions": "3 5/8in x 1/14in x 12ft",
			"description": "**",
			"type": "wall"
		},
		{
			"name": "Galvanized Steel Track 25Ga",
			"dimensions": "3 5/8in x 1/14in x 12ft",
			"description": "**",
			"type": "wall"
		},
		{
			"name": "Galvanized Steel Stud 25Ga",
			"dimensions": "6in x 1 1/4in x 12ft",
			"description": "**",
			"type": "wall"
		},
		{
			"name": "Galvanized Steel Track 25Ga",
			"dimensions": "6in x 1 1/4in x 12ft",
			"description": "**",
			"type": "wall"
		},
		{
			"name": "LED Ultra-thin w/ Junction Box",
			"dimensions": "3in / 4in / 6in / 8in",
			"description": "$10",
			"type": "finishes"
		},
		{
			"name": "Linkable LED Linear Light",
			"dimensions": "4ft",
			"description": "$60",
			"type": "finishes"
		},
		{
			"name": "Linkable LED Linear Light",
			"dimensions": "8ft",
			"description": "$90",
			"type": "finishes"
		},
		{
			"name": "LED Panel 3 CCT",
			"dimensions": "2ft x 4ft",
			"description": "$50",
			"type": "finishes"
		},
		{
			"name": "LED Panel 3 CCT",
			"dimensions": "2ft x 2ft",
			"description": "$35",
			"type": "finishes"
		},
		{
			"name": "LED High Bay",
			"dimensions": "2ft x 4ft",
			"description": "$110",
			"type": "finishes"
		},
		{
			"name": "Silicone Caulk (White)",
			"dimensions": "Bottle",
			"description": "$3.00",
			"type": "roofing"
		},
		{
			"name": "Linkable LED Linear Light",
			"dimensions": "8ft",
			"description": "$90",
			"type": "finishes"
		},
		{
			"name": "Custom Doors and Cabinetry",
			"dimensions": "CHECK CATALOG",
			"description": "**",
			"type": "finishes"
		},
		{
			"name": "Phillips Pan Head Screw",
			"dimensions": "Tested to fit our materials",
			"description": "free",
			"type": "wall"
		},
		{
			"name": "Metallic EMT Pipe",
			"dimensions": "1in x 10ft",
			"description": "$17",
			"type": "electrical"
		},
		{
			"name": "Metallic EMT Pipe",
			"dimensions": "3/4in x 10ft",
			"description": "$9.88",
			"type": "electrical"
		},
		{
			"name": "Metallic EMT Pipe",
			"dimensions": "1/2in x 10ft",
			"description": "$5.88",
			"type": "electrical"
		},
		]

		if($(".table").length>0){
			products.forEach((product) => {
				console.log(product.type);
				let node = document.getElementById(product.type);
				console.log(node);
				node.innerHTML += "<tr><td>" + product.name + "</td><td>" + product.dimensions + "</td><td>" + product.description + "</td></tr>";
			});
		}

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);