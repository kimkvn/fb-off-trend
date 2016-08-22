
function hideExtras(){
  document.getElementById('pagelet_trending_tags_and_topics').style.display = "none";;
  document.getElementById('pagelet_ego_pane').style.display = "none";;
};
hideExtras();


//
//--getting ready to read the images
//
var photoSet = [];

photoSet.push(chrome.extension.getURL('images/redPanda_1.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_2.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_3.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_4.jpg'));
photoSet.push(chrome.extension.getURL('images/redPanda_5.jpg'));

//
//--Setting the RNG
//
var number = Math.floor(Math.random() * 5);

//
//--inserting a panda photo
//
function appendPanda(){
  var pandaWrap = document.createElement("div");
  pandaWrap.setAttribute("class", "pandaWrap");

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
document.head.addEventListener('DOMSubtreeModified', function(){
  if(document.getElementsByClassName('pandaWrap').length < 1){
    hideExtras();
    appendPanda();
  }
});

// chrome.pageAction.onClicked.addListener(function(tab){
//   //chrome.pageAction.show(tab.id);
//   alert('hello')
// });
