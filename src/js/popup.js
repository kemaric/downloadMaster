
$(document).ready(function(){
  // alert('test');
  $("#addUrl").click(function(e){
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
