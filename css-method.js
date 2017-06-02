Element.prototype.css = function() {
		var elementStyle = this.style, args = arguments;
		if (args.length == 2) {
			return void(elementStyle.cssText += args[0] + ':' + args[1]);
		} else if (args.length == 1) {
			var cssString = JSON.stringify(args[0]),
				computeStyle = JSON.parse(cssString, function(key, value) {
					return key != "" ? elementStyle.cssText += key + ":" + value : elementStyle = ""
			});
		}
};
