let counter = document.querySelector('h1');
let count = 1;

setInterval(()=> {
	
	counter.innerText = count;
	count++

	if (count > 5) location.replace('https://github.com/bunleap-s')

},1000)