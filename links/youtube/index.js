let counter = document.querySelector('h1');
let count = 1;

setInterval(()=> {
	
	counter.innerText = count;
	count++

	if (count > 5) location.replace('https://www.youtube.com/channel/UCzX0FlMp8Gt8Zfk8hmuC0oQ')

},1000)