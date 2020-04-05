const Portfolio = function() {

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			// var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				// makeWordCloud(words);
				count++;
			}
		});
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I love everything about code.", "I am a Full-Stack Web Developer", "And, a machine learning enthusiast."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1.2,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "lightseagreen"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
