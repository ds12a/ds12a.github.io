var IDs = ["home", "test"];
function loadPage(file){
  for(i of IDs){
    if ($('#'+i).hasClass('active')) {
      $('#'+i).removeClass('active');
      break;
    }
  }
  var id = file.slice(0,-4);
  $('#'+id).addClass(' active');
  $("#content").load(file);
}
