let hexClockEl = document.getElementById("HexClock");
let hexTimer;

function hexClock(){
	const date = new Date();
	let time = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
	let hex = "#"+('000000' + Math.round((16777216/86400000)*(time[0]*3600000 + time[1]*60000 + time[2]*1000 + time[3])).toString(16).toUpperCase()).slice(-6);
	hexClockEl.style.color = hex;
}

hexClockEl.addEventListener("mouseover", (e)=>{
	hexClock();
	hexTimer = setInterval(hexClock, 250);
});
hexClockEl.addEventListener("mouseout", (e)=>{
	clearInterval(hexTimer);
	hexClockEl.style.color = "";
});