jQuery(document).ready(function ($) {
		function clearColor(){
			$('body').removeClass('color-green color-blue color-violet color-red color-orange color-turquoise color-yellow')
		}
		$('body').prepend('<div class="demo-rtl"><a class="rtldemo" href="?d=rtl" target="_blank">RTL</a></div><div class="demo-ltr"><a class="ltrdemo" href="?d=ltr" target="_blank">LTR</a></div><div class="tools"><span class="toggle"><img src="'+ changetemplatecolor_object.changetemplatecolor_ajax_url +'" class="img-responsive" alt=""></span><a href="#" class="color-red">Red</a><a href="#" class="color-orange">Orange</a><a href="#" class="color-yellow">Yellow</a><a href="#" class="color-green">Green</a><a href="#" class="color-turquoise">Turquoise</a><a href="#" class="color-blue">Blue</a><a href="#" class="color-violet">Violet</a></div>')
		var $cookievar=readCookie('template');
		if(typeof($cookievar)!='undefined' && $cookievar!='' ){
			$('body').addClass($cookievar)
		}
		$(document).on('click','.tools a', function(e){
			e.preventDefault();
			var $logo = $("header .header-row .logo > a img");
			var $this = $(this);
			if ($this.hasClass('color-green')){
				clearColor();
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_green ); 
				$('body').addClass('color-green')
				createCookie('template','color-green',1);
			}
			if ($this.hasClass('color-blue')){
				clearColor();
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_blue ); 
				$('body').addClass('color-blue')
				createCookie('template','color-blue',1);
			}
			if ($this.hasClass('color-violet')){
				clearColor();
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_violet ); 
				$('body').addClass('color-violet')
				createCookie('template','color-violet',1);
			}
			if ($this.hasClass('color-red')){
				clearColor();
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_red ); 
				$('body').addClass('color-red')
				createCookie('template','color-red',1);
			}
			if ($this.hasClass('color-orange')){
				clearColor();
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_orange ); 
				$('body').addClass('color-orange')
				createCookie('template','color-orange',1);
			}
			if ($this.hasClass('color-turquoise')){
				clearColor();
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_turquoise ); 
				$('body').addClass('color-turquoise')
				createCookie('template','color-turquoise',1);
			}
			if ($this.hasClass('color-yellow')){
				clearColor();
				$logo.attr('src', changetemplatecolor_object.changetemplate_logo_yellow ); 
				$('body').addClass('color-yellow')
				createCookie('template','color-yellow',1);
			}
		})
	
	})
	
	
	
	function createCookie(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}
