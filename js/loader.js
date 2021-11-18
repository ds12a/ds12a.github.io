var IDs = ["home", "quotes", "projects", "skills", "helpful_links", "accomplishments", "about_me"];

function goToPage(name) {
  document.location = "?page="+name;
}

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

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
