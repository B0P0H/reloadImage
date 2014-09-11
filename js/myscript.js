(function () {
    "use strict";
    /*global chrome, console*/
    var clickedEl = null;
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        var append = "reload=" + Math.random(),
            imgs,
            i;
        switch (request.info) {
        case "one":
            append += clickedEl.src.indexOf('?') === -1 ? "?" : "&";
            clickedEl.src += append;
            break;
        case "all":
            imgs = document.getElementsByTagName("img");
            i = 0;
            for (i; i < imgs.length; i += 1) {
                append += imgs[i].src.indexOf('?') === -1 ? "?" : "&";
                imgs[i].src += append;
            }
            break;
        }
    });

    document.addEventListener("mousedown", function (event) {
        if (event.button === 2) {
            clickedEl = event.target;
        }
    }, true);
}());