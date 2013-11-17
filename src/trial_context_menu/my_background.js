function getOpeningIds() {
  var ids = [];
  try {
    ids = JSON.parse(localStorage.openWhenComplete);
  } catch (e) {
    localStorage.openWhenComplete = JSON.stringify(ids);
  }
  return ids;
}

function setOpeningIds(ids) {
  localStorage.openWhenComplete = JSON.stringify(ids);
}

var contexts = ["page","selection","link","editable","image","video",
                "audio","launcher","pdf"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Download '" + context + "' item";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
  console.log("'" + context + "' item:" + id);
}

/*
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.downloads.download({url: info.linkUrl, filename:'anish\hack_duke'}, function(downloadId) {
    var ids = getOpeningIds();
    if (ids.indexOf(downloadId) >= 0) {
      return;
    }
    ids.push(downloadId);
    setOpeningIds(ids);
  });
});
*/


function genericOnClick(info, tab) {
 //window.open("http://terpconnect.umd.edu/~akhattar/hack_duke#" + encodeURIComponent(info.linkUrl), "download");
 // document.location.hash // #http:/...
 //var link = document.location.hash;
 //console.log(link);
 
 chrome.downloads.download({url: info.linkUrl, filename:'enee222'}, function(downloadId) {
    var ids = getOpeningIds();
    if (ids.indexOf(downloadId) >= 0) {
      return;
    }
    ids.push(downloadId);
    setOpeningIds(ids);
  });
}


chrome.contextMenus.create({"title": "Oops", "parentId":999}, function() {
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});