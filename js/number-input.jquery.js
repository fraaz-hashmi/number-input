(function ( $ ) {

	$.fn.numberInput = function(options) {
		
		var defaults = {
			inputNumbers : [],
			maxLength : 10,
			debug : true,
			input : document,
			output : this,

		};

		var settings = $.extend( {}, defaults, options );

		function setup() {
			settings.input = $(settings.input);
			settings.output.html('<div class="show-numbers"></div>');
			settings.output.attr('data-val', '');
		}

		function processKey(e) {

			if(settings.debug)
				console.log('Key is, ', e.which, ' ', e.key);
			
			if(e.which == 8) {
				if( settings.inputNumbers.length == 0 ) {
					if(settings.debug)
						console.log('Length is zero, nothing to delete, skipping');
					
					return;
				}
			
				if(settings.debug)
					console.log('Deleting last number');

				settings.inputNumbers.pop();
				settings.output.find('.show-numbers').children().last().remove();
				settings.output.attr('data-val', stringItUp(settings.inputNumbers));
				return;
			}

			if(settings.inputNumbers.length == settings.maxLength) {
				if(settings.debug)
					console.log('At max length, skipping');
				return;

			}

			if(e.which >= 48 && e.which <= 57 ) {
				if(settings.debug)
					console.log('Adding number');							
				var number = e.key;
				settings.inputNumbers.push(number);
				$('.show-numbers').append(markItUp(number));
				settings.output.attr('data-val', stringItUp(settings.inputNumbers));
			}
		}

		function markItUp(character) {
			return "<span>" + character + "</span>";
		}

		function stringItUp(numbers) {
			return numbers.join('');
		}

		function main() {
			setup();
			settings.input.keyup( processKey );

		}

		main();

		return this;
	};

}( jQuery ));