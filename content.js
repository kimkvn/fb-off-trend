
var photoSet = [];

photoSet.push(chrome.extension.getURL('images/redPanda_1.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_2.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_3.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_4.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_5.jpg'));

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

  // $('<div id="pandaWrap"><img id="panda" ></div>').appendTo('.home_right_column');
  // $('#panda').css('width', "280px");
  // $('#panda').css('padding-top', "15px");
  // $('#panda').attr('src', photoSet[number]);


  var pandaWrap = document.createElement("div");
  pandaWrap.setAttribute("id", "pandaWrap");

  var panda = document.createElement("img");
  panda.setAttribute("id", "panda");
  panda.style.width = "280px";
  panda.style.padding = "15px 0 0 0";
  panda.src = photoSet[number];

  document.getElementsByClassName("home_right_column")[0].appendChild(pandaWrap);

  pandaWrap.appendChild(panda);

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

document.head.addEventListener('DOMSubtreeModified', function(){
  if(document.getElementById('pandaWrap').length < 1){
    hideExtras();
    appendPanda();
  }
});

chrome.pageAction.onClicked.addListener(function(tab){
  //chrome.pageAction.show(tab.id);
  alert('hello')
});
