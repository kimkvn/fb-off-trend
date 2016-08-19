

var photoSet = [];

photoSet.push(chrome.extension.getURL('images/redPanda_1.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_2.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_3.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_4.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_5.jpg'));


//
// var photoUrls = [
//   'images/redPanda_1.jpg',
//   'images/redPanda_2.jpg',
//   'images/redPanda_3.jpg',
//   'images/redPanda_4.jpg',
//   'images/redPanda_5.jpg'
// ];
// var photoSet = [];
//
// photoUrls.forEach(function(photo, index){
//   photoSet.push(chrome.extension.getURL(photo));
// });


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

//
//--inserting a panda photo
//
function appendPanda(){
  $('<div id="pandaWrap"><img id="panda" ></div>').appendTo('.home_right_column');
  $('#panda').css('width', "280px");
  $('#panda').css('padding-top', "15px");
  $('#panda').attr('src', photoSet[number]);
};

//
//--watches for partial DOM changes
//
$('head').bind('DOMSubtreeModified', function(){
  if($('#pandaWrap').length < 1){
    hideExtras();
    appendPanda();
  }
});
