chrome.contextMenus.create({
	"title": "Reload Image",
	"contexts": ["image"],
	"id": "one"
});
chrome.contextMenus.create({
	"title": "Reload all Images",
	"contexts": ["page"],
	"id": "all"
});
chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
	chrome.tabs.sendMessage(tab.id, {
		info: info
	}, function (response) {
		
	});
}