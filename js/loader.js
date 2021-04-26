var IDs = ["home", "test"];
function loadPage(file){
  alert("loadPage");
  for(i of IDs){
    alert(i);
    if ($('#'+i).hasClass('active')) {
      $('#'+i).removeClass('active');
      break;
    }
  }
  var id = file.slice(file.lastIndexOf("/")+1,file.length-5);
  alert("id: "+id);
  $('#'+id).addClass(' active');
  $("#content").load(file);
}
