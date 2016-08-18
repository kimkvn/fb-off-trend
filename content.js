
var box = document.getElementById('pagelet_trending_tags_and_topics');

box.style.display = "none";
var panda = chrome.extension.getURL('/images/redPanda_1.jpg');
$.get(chrome.extension.getURL('/placeholder.html'), function(data) {
  $(data).appendTo('.home_right_column');
  //$(panda).appendTo('.home_right_column')
});




console.log('OK')
