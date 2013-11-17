
$(document).ready(function(){
  load();
  //chrome.storage.local.set({'results':[]});

  $("#addUrl").click(function(){

    var x= $('input[placeholder="url"]:last').val();
    var y=$('input[placeholder="folder"]:last').val();
    if (x==null || x=="" || y==null || y=="") {
      alert("Must fill out website and folder name");
      return false;
    }
    $('input[type="text"]').prop("disabled", true);


/*    var inputEdit = document.createElement("input");
    inputEdit.type = "button";
    inputEdit.value="Edit" 
    inputEdit.id="editUrl"
    //$(forms).append(inputEdit); // put it into the DOM
    $("#addUrl").replaceWith(inputEdit);*/

    var inputUrl = document.createElement("input");
    inputUrl.type = "text";
    inputUrl.placeholder = "url";
    $(forms).append(inputUrl); // put it into the DOM

    var inputfolder = document.createElement("input");
    inputfolder.type = "text";
    inputfolder.placeholder = "folder";
    $(forms).append(inputfolder); // put it into the DOM
    $(forms).append($("#addUrl"));

    save(x,y);

  });

  $("#editUrl").click(function(){
    $('input[type="text"]').closest().prop("disabled", false);
    var inputAdd = document.createElement("input");
    inputAdd.type = "button";
    inputAdd.value="Add" 
    inputAdd.id="addUrl"
    //$(forms).append(inputAdd); // put it into the DOM
    $("#editUrl").replaceWith(inputAdd);
  });


  function save(x,y) {
/*    chrome.storage.local.set({'urls': x});
    chrome.storage.local.set({'folders': y});*/

     var result = {'urls':x, 'folders':y};

    // next we will push each individual results object into an array
/*    chrome.storage.get('results',function(item){
      item.results.push(result);
      chrome.storage.set({'results':item.results});
    });*/
    // by passing an object you can define default values e.g.: []
    chrome.storage.local.get({urls: []}, function (result) {
        // the input argument is ALWAYS an object containing the queried keys
        // so we select the key we need
        var urls = result.urls;
        urls.push({folders: x, HasBeenUploadedYet: false});
        // set the new array value to the same key
        chrome.storage.local.set({urls: y}, function () {
            // you can use strings instead of objects
            // if you don't  want to define default values
            chrome.storage.local.get('urls', function (result) {
                console.log(result.urls)
            });
        });
    });
  }


/*  function getResults(newsId){
    chrome.storage.get('results', function(item){
      item.results.forEach(function(v,i,a){
        if(v.newsId == newsId){
          // here v.resultsArray is the array we stored
          // we can remove any part of it such as
          v.resultsArray.splice(0,1);
          // or
          a.splice(i,1);
          // to remove the whole object, then simply set it again
          chrome.storage.local.set({'results':a});
        }
      });
    });
  }*/


  function load() {
      var urls = "";
      var folders = "";
      chrome.storage.local.get('urls', function (result) {
          urls = result.urls;
          //alert(result.urls);
          console.log(result.urls);
          // $("#urls").val(urls);
      });

      chrome.storage.local.get('folders', function (result) {
          folders = result.folders;
          console.log(result.folders);
          //alert(result.folders);
          // $("#folders").val(folders);
      });
  } 



});
