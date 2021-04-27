var IDs = ["home", "quotes", "projects", "skills", "helpful_links"];
function loadPage(file){
  for(i of IDs){
    if ($('#'+i).hasClass('active')) {
      $('#'+i).removeClass('active');
      break;
    }
  }
  var id = file.slice(file.lastIndexOf("/")+1,file.length-5);
  $('#'+id).addClass(' active');
  $("#content").load(file);
}
