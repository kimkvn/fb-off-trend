
$(function(){

  $('#pandaBtn').click(function(){
    $('#pandaBtn').toggleClass('onPanda');

    if($('#pandaBtn').hasClass('onPanda')){
      $('#pandaBtn').html("Bring back the Red Pandas!");
      localStorage["status"] = false;

    }else{
      $('#pandaBtn').html("I'm tired of Red Pandas.");
      localStorage["status"] = true;
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, localStorage.status)
    })

  });

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response){
  //       console.log(response.farewell);
  //   });
  // });


});
