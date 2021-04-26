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
  var id = file.slice(0,-4);
  alert("id: "+id);
  $('#'+id).addClass(' active');
  $("#content").load(file);
}
