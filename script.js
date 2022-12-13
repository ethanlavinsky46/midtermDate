const d = new Date();
let day = d.getDay();



const pics = ["https://pbs.twimg.com/media/BjfqlHZCAAADcSe.png","https://pbs.twimg.com/media/Cb6HQKuUsAAU9wq.jpg","https://pbs.twimg.com/media/FLucWaXWUAA3GTB.png","https://i.pinimg.com/564x/66/d5/00/66d5002f30e25adb91a72004662fcd33.jpg","https://i.pinimg.com/736x/24/fa/55/24fa55c12a4dd29d59fa692df83dbfe5--the-peanuts-snoopy-peanuts.jpg","https://i.pinimg.com/736x/8e/55/9c/8e559c9d46ed5d7c12a13ac97f1c4003.jpg","https://i.pinimg.com/736x/0d/a4/b0/0da4b0bcef41930f03fce3b8605eac98--sunday-greetings-charlie-brown-snoopy.jpg"];

// document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';



	day++;
	console.log(day);
  document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day-1] +'" class = "day">';
