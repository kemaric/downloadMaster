
$(document).ready(function(){
  // alert('test');
  $("#addUrl").click(function(){

    var x=document.forms["forms"]["url"].value;
    var y=document.forms["forms"]["name"].value;
    if (x==null || x=="" || y==null || y=="") {
      alert("Must fill out website and folder name");
      return false;
    }

    var inputUrl = document.createElement("input");
    inputUrl.type = "text";
    inputUrl.placeholder = "url";
    $(forms).append(inputUrl); // put it into the DOM

    var inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "name";
    $(forms).append(inputName); // put it into the DOM
    $(forms).append($("#addUrl"));
  });

});
