chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	var rand = Math.random();
	var p = "?reload=" + rand;
	switch (request.info.menuItemId) {
	case "one":
		if (clickedEl.src.indexOf('?') != -1) {
			p = "&reload=" + rand;
		}
		clickedEl.src += p;
		break;
	case "all":
		var imgs = document.getElementsByTagName("img");
		for (var i = 0; i < imgs.length; i++) {
			if (imgs[i].src.indexOf('?') != -1) {
				p = "&reload=" + rand;
			} else {
				p = "?reload=" + rand;
			}
			imgs[i].src += p;
		}
		break;
	}
});
var clickedEl = null;
document.addEventListener("mousedown", function (event) {
	//right click
	if (event.button == 2) {
		clickedEl = event.target;
	}
}, true);