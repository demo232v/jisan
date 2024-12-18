console.log("This is a remote background script!");
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
});
