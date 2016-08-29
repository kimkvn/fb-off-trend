
var photoSet = [];

photoSet.push(chrome.extension.getURL('images/redPanda_1.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_2.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_3.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_4.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_5.jpg'));

var number = Math.floor(Math.random() * 5);

function hideExtras(){
  $('pagelet_trending_tags_and_topics').hide();
  $('pagelet_ego_pane').hide();
};
hideExtras();

//
//--inserting a panda photo
//
function appendPanda(){
  $.get(chrome.extension.getURL('/placeholder.html'), function(data) {
    $(data).appendTo('.home_right_column');
    panda.style.width = "280px";
    panda.style.padding = "15px 0 0 0";
    panda.src = photoSet[number];
  });
};
appendPanda();



//
//--watches for partial DOM changes
//
$('head').bind('DOMSubtreeModified', function(){
  if($('#pandaWrap').length < 1){
    hideExtras();
    appendPanda();
  }
});
