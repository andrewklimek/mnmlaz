function mnmlaz(){
	
	function run(){
		
		var e = document.querySelectorAll('img[data-src]'),
		l=e.length, i=0;
		
		if(l<1){
			window.removeEventListener('scroll', run );
			window.removeEventListener('resize', run );
		}

		for(;i<l;i++){
	
			var p = e[i].getClientRects()[0];
			if ( p && p.top < 2 * window.innerHeight ) {
				e[i].src = e[i].getAttribute('data-src');
				e[i].removeAttribute('data-src');
			}
		}
		
	console.log('ran');	
	}

	run();
	window.addEventListener('scroll', run );
	window.addEventListener('resize', run );
}

// test
var e = document.querySelectorAll('img');
for ( i=0; i < e.length; i++ ) { e[i].setAttribute('data-src', e[i].src);e[i].removeAttribute('src');}

// implement
document.addEventListener('DOMContentLoaded', function(){
	mnmlaz();
} );


