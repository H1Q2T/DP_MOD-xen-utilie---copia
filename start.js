var s = document.createElement("script");
function gotMessage(request, sender, response) {
  console.log(request), (request.text = "checkcolor");
}
(s.src = chrome.extension.getURL("content.js")),
  (s.onload = function () {
    this.remove();
  }),
  (document.head || document.documentElement).appendChild(s),
  chrome.runtime.onMessage.addListener(gotMessage);
