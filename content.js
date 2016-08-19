
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

var number = Math.floor(Math.random() * 5);

function hideExtras(){
  var trending = document.getElementById('pagelet_trending_tags_and_topics');
  var suggestions = document.getElementById('pagelet_ego_pane');
  trending.style.display = "none";
  suggestions.style.display = "none";
};

hideExtras();

// function appendPanda(){
//   $.get(chrome.extension.getURL('/placeholder.html'), function(data) {
//     $(data).appendTo('.home_right_column');
//     panda.style.width = "280px";
//     panda.style.padding = "15px 0 0 0";
//     panda.src = photoSet[number];
//   });
// };
// appendPanda();


$('<div id="pandaWrap"><img id="panda" ></div>').appendTo('.home_right_column');
$('#panda').css('width', "280px");
$('#panda').css('padding-top', "15px");
$('#panda').attr('src', photoSet[number]);


$('head').bind('DOMSubtreeModified', function(){
  if($('#pandaWrap').length < 1){
    hideExtras();
    //appendPanda();
  }
});
