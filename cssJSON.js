Element.prototype.css = function() {
    var elemStyle = this.style, 
        args = arguments,
	len = args.length;
    if (len == 2) return void(elemStyle.cssText += args[0] + ':' + args[1]);
    else if (len == 1) {
      var cssString = JSON.stringify(args),
	        computeStyle = JSON.parse(cssString, function(x, y) {
	        return (x != "") ? elemStyle.cssText += x + ':' + y : elemStyle += ""
	    });
    }
