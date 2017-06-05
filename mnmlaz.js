function mnmlaz(){
	
	function run(){
		
		var el = document.querySelectorAll('img[data-src]'),
		l=el.length, i=0;
		
		if ( l < 1 ){
			window.removeEventListener('scroll', run );
			window.removeEventListener('resize', run );
		}

		for ( ; i < l; i++ ){
	
			var pos = el[i].getClientRects()[0];
			if ( pos && pos.top < 2 * window.innerHeight ) {
				el[i].src = el[i].getAttribute('data-src');
				el[i].removeAttribute('data-src');
				var sset = el[i].getAttribute('data-srcset')
				if (s) el[i].srcset = sset;
			}
		}
		
	console.log('ran');	
	}

	run();
	window.addEventListener( 'scroll', run );
	window.addEventListener( 'resize', run );
}

// test
var el = document.querySelectorAll('img');
for ( i=0; i < el.length; i++ ) {
	el[i].setAttribute('data-src', el[i].src);
	el[i].removeAttribute('src');
	if (el[i].srcset) {
		el[i].setAttribute('data-srcset', el[i].srcset);
		el[i].removeAttribute('srcset');
	}
}

// implement
document.addEventListener('DOMContentLoaded', function(){
	mnmlaz();
} );


