// CLOCK
setInterval(()=> {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();

	$(".clock").text(`${h}:${m}:${s}`);

}, 100);



let pos = 0;
let sounds = document.querySelectorAll(".sound");
let startsound = document.querySelector(".start");
let endsound = document.querySelector(".end");
let arrnum = "";
let n = 0;
let time = 0;
let queue = document.querySelectorAll(".loket-num");

for(i=0;i<5;i++) {
	queue[i].setAttribute("onclick","validate("+(i+1)+");")
}


function validate(e) {
	
	if(time>0) {
		console.log('tunggu')	
		return false;
	} else {
		call(e)
	}
	
}


function call(ev) {

	times = setInterval(()=> {
		if(time<1700) {
			time++
		} else {
			$(".soundimg").slideUp(1000);
			$(".loket-num").removeClass("active");
			time=0;
			clearInterval(times)
		}

	}, 1);
	
	startsound.play();

	let loket = ev;
	console.log(loket)
	let now = "";

	pos++;
	if(pos <10) {
		now = `00${pos}`;
	} else if(pos<100) {
		now = `0${pos}`;
	} else {
		now = `${pos}`;
	}

	$("#no-antri").html(`<span class='target'>A</span> ${now}`)

	$(".loket-num").eq(ev-1).html(`
		<h3>Loket 
			<span class="target pos">${ev}</span>
			<img src="img/sound.png" class="soundimg">
		</h3>
	    <div class="queue"> 
	      <span class="target">A</span>
	      ${now}
	    </div>
	`).addClass("active")

	arrnum = now.replace(/\s/g, "").split("");

	let start = setInterval(()=> {
		sounds[arrnum[n]].play();
		n++;
		if(n>arrnum.length-1) {
			n=0;
			clearInterval(start)
			setTimeout(()=> {
				endsound.play();
			}, 1000);
			setTimeout(()=> {
				sounds[loket].play();
			}, 2400);
		}
	}, 1300);
}
