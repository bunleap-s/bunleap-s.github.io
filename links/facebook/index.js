let counter = document.querySelector('h1');
let count = 1;

setInterval(()=> {
	
	counter.innerText = count;
	count++

	if (count > 5) location.replace('https://www.facebook.com/bunleap.official')

},1000)