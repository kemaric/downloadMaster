
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

    var inputUrl = document.createElement("input");
    inputUrl.type = "text";
    inputUrl.placeholder = "url";

    var inputfolder = document.createElement("input");
	$("#edit").append("<li>" + x + " -> " + y + "</li>");
	localStorage.setItem('list', edit.innerHTML);
   // save(x,y);
   $('input[type="text"]').prop("disabled", false);
   $('input[type="text"]').val('');

  });


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
 		// when the page loads
	  if ( localStorage.getItem('list') ) {
		edit.innerHTML = localStorage.getItem('list'); 
	  }
  }

$("#signInButton").click(function(){
		var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		po.src = 'https://apis.google.com/js/client:plusone.js';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	  });  
});
