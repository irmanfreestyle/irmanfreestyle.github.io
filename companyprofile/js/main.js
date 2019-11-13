  document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);

    var sideBar = document.querySelectorAll('.slider');
    M.Slider.init(sideBar, {
    	indicators: false,
    	height: 450
    });


    var parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    var boximg = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(boximg);

  });


  $(".page").click(function(e) {
  	
  	e.preventDefault();
  	_target = $(this).attr("href");
  	_pos = $(_target).offset().top;

  	$("html, body").animate({
  		scrollTop: _pos - 50
  	}, 1000);

  });



  // $(window).scroll(function() {

  // 	_window = $(window).scrollTop();

  // 	if(_window >= $("section").eq(0).offset().top-70) {
  // 		 $(".page").removeClass("active");
  // 		 $(".page").eq(1).addClass("active");
  // 	}

  // 	if(_window >= $("section").eq(1).offset().top-70) {
  // 		 $(".page").removeClass("active");
  // 		 $(".page").eq(2).addClass("active");
  // 	}

  // 	if(_window >= $("section").eq(2).offset().top-70) {
  // 		 $(".page").removeClass("active");
  // 		 $(".page").eq(3).addClass("active");
  // 	}

  // 	if(_window >= $("section").eq(3).offset().top-70) {
  // 		 $(".page").removeClass("active");
  // 		 $(".page").eq(4).addClass("active");
  // 	}

  // 	if(_window >= $("section").eq(4).offset().top-70) {
  // 		 $(".page").removeClass("active");
  // 		 $(".page").eq(5).addClass("active");
  // 	}

  // });