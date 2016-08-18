
var box = document.getElementById('pagelet_trending_tags_and_topics');
box.style.display = "none";

var photo1 = chrome.extension.getURL('images/redPanda_1.jpg');
var photo2 = chrome.extension.getURL('images/redPanda_2.jpg');
var photo3 = chrome.extension.getURL('images/redPanda_3.jpg');
var photo4 = chrome.extension.getURL('images/redPanda_4.jpg');
var photo5 = chrome.extension.getURL('images/redPanda_5.jpg');

var photoSet = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5
];

$.get(chrome.extension.getURL('/placeholder.html'), function(data) {
  $(data).appendTo('.home_right_column');

  var panda = document.getElementById('panda');
  panda.style.width = "290px";
  panda.style.padding = "15px 0 0 0";

  var number = Math.floor(Math.random() * 5);

  panda.src = photoSet[number];

});






console.log('OK')
