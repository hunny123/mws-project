if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw_register.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}







