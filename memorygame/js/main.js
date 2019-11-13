let cardArray = [{
    'name': 'shell',
    'img': 'img/blueshell.png',
  },
  {
    'name': 'star',
    'img': 'img/star.png',
  },
  {
    'name': 'bobomb',
    'img': 'img/bobomb.png',
  },
  {
    'name': 'mario',
    'img': 'img/mario.png',
  },
  {
    'name': '1up',
    'img': 'img/1up.png',
  },
  {
    'name': 'mushroom',
    'img': 'img/mushroom.png',
  },
  {
    'name': 'thwomp',
    'img': 'img/thwomp.png',
  },
  {
    'name': 'bulletbill',
    'img': 'img/bulletbill.png',
  },
  {
    'name': 'coin',
    'img': 'img/coin.png',
  },
  {
    'name': 'goomba',
    'img': 'img/goomba.png',
  },
];

cardArray = cardArray.concat(cardArray);
cardArray.sort(() => 0.5 - Math.random());

$.each(cardArray, function(index, item) {
	$(".container").append(`
			<div class='card'>
				<div class='front'></div>
				<div class='back'></div>
			</div>
	`);
	$(".back").eq(index).css("backgroundImage", `url(${item.img})`);
	$(".card").eq(index).attr("data-name",`${item.name}`);
	$(".card").eq(index).attr("data-key",`${index}`);
});	


let n = 0;
let firstImg  = "";
let secondImg = "";
let firstKey  = "";
let secondKey = "";
let timer = "";

$(".wrap").hide();
$(".h_score").hide();

$(".card").click(function() {
	
	_index = $("div.card").index(this);
	_target = $(".card").eq(_index)[0].dataset.name;
	_key = $(".card").eq(_index)[0].dataset.key;

	console.log(_target+", "+_key)
	
	console.log(n)
	
	if(n>1) {
		return false;
	} else if(n<2) {
		n++;
	}

	$(this).addClass("selected");

	switch(n) {
		case 1:
			firstImg = _target;
			firstKey = _key;
		break;

		case 2:
			secondImg = _target;
			secondKey = _key;

			if(firstImg == secondImg && firstKey != secondKey) {
				setTimeout(()=> {
					$(".selected").addClass("match");
					n = 0;
					if($(".match").length == 20) {
						$(".wrap").fadeIn();
						clearInterval(timer);
						$(".time").html($(".wrap-times").html());
						$(".wrap-timer").fadeOut();
						// _highscore = $(".")
						localStorage.setItem("highscore", $(".time").text());
					}
				}, 1000);
			} else {
				setTimeout(()=> {
					$(".card").removeClass("selected");
					n = 0;
				}, 1000);
			}
		break;
	}

});



// TIMER

let s = 0;
let m = 0;
let ms = 0;


$(".start").click(function() {

	$(".wrap-start").slideUp(200);

	timer = setInterval(()=> {

		if(ms == 100) {
			ms = 0;
			s++;
		}

		if(s == 60) {
			s = 0;
			m++;
		}

		if(m == 60) {
			m = 0;
		}


		if(ms<10) {
			$(".ms").text(`0${ms}`);
		} else {
			$(".ms").text(ms);
		}

		if(s<10) {
			$(".s").text(`0${s}`);
		} else {
			$(".s").text(s);
		}

		if(m<10) {
			$(".m").text(`0${m}`);
		} else {
			$(".m").text(m);
		}

		ms++;
		

	}, 10);

});

// RESTART
$(".restart").click(function() {

	location.reload();

});