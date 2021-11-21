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
  if (id != "" && !IDs.includes(file)) {
    id = "home";
    file = "404";
  }
  file = "../pages/" + file + ".html";
  $('#'+id).addClass(' active');
  $("#content").load(file);
}

function setPageInfo(title, displayTitle, description) {
  document.title = title + " - ds12a";
  document.getElementById("titile").innerHTML = displayTitle;
  document.getElementById("title_description").innerHTML = description;
}
