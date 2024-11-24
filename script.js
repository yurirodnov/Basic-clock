function showTimer(){
	
	let clock = document.getElementById('clock');	
	let time = new Date();
	
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	
	if(hours < 10){
		hours = '0' + hours;
	}
	clock.children[0].innerHTML = hours;
	
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	clock.children[1].innerHTML = minutes;
	
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	clock.children[2].innerHTML = seconds;
	
	
	
}



function startClock(){
	setInterval(showTimer, 1000);
	showTimer();	
}

startClock();