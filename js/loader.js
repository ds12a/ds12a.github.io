var IDs = ["home", "quotes", "helpful_links", "about_me"];

function goToPage(name) {
  document.location = "#"+name;
}

function loadPage(file){
  for(i of IDs){
    if ($('#'+i).hasClass('active')) {
      $('#'+i).removeClass('active');
      break;
    }
  }
  //var id = file.slice(file.lastIndexOf("/")+1,file.length-5);
  var id = file;
  if (!IDs.includes(file)) {
    id = "home";
    file = "home";
  }
  file = "../pages/" + file + ".html";
  $('#'+id).addClass(' active');
  $("#content").load(file);
  document.title = id.charAt(0).toUpperCase() + id.slice(1);
}
