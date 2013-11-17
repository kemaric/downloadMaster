
$(document).ready(function(){
  load();
  //clearLocal();

  $("#addUrl").click(function(){

    var x= $('input[placeholder="url"]:last').val();
    var y=$('input[placeholder="folder"]:last').val();
    if (x==null || x=="" || y==null || y=="") {
      alert("Must fill out website and folder name");
      return false;
    }

    var inputUrl = document.createElement("input");
    inputUrl.type = "text";
    inputUrl.placeholder = "url";

    var inputfolder = document.createElement("input");
    $("#edit").append("<li style='display:inline'>" + x + " -> " + y + "</li>");
    $("#edit").append('<input type="button" value="X" class="deleteUrl btn-danger">');
  	localStorage.setItem('list', edit.innerHTML);
    $('input[type="text"]').prop("disabled", false);
    $('input[type="text"]').val('');

  });

  function load() {
 		// when the page loads
	  if ( localStorage.getItem('list') ) {
		edit.innerHTML = localStorage.getItem('list'); 
	  }
  }

  function clearLocal() {
    clear: localStorage.clear(); 
    return false;
  }

  $(".deleteUrl").click(function(){
    $(this).prev('li').remove();
    $(this).remove();
    localStorage.setItem('list', edit.innerHTML);
  });

/*$("#signInButton").click(function(){
	var po = document.createElement('script'); 
  po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/client:plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	  });  */
});
