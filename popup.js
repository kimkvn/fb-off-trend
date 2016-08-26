
$(function(){

  localStorage["status"] = 1;

  if(localStorage.status == 1){
    $('#pandaBtn').addClass('offPanda');
    $('#pandaBtn').html("I'm tired of Pandas.");
    $('#pandaBtn').removeClass('onPanda');
    console.log(localStorage)
  }else if (localStorage.status == 0){
    $('#pandaBtn').addClass('onPanda');
    $('#pandaBtn').html('Bring back the Red Pandas!');
    $('#pandaBtn').addClass('ofPanda');
    console.log(localStorage)
  }


  $('#pandaBtn').click(function(){
    if(localStorage.status == 1){
      localStorage.status = 0;
      console.log(localStorage)
    }else{
      localStorage.status = 1;
      console.log(localStorage)
    }

    // if($('#pandaBtn').hasClass('onPanda')){
    //   $('#pandaBtn').html("Bring back the Red Pandas!");
    //   localStorage["status"] = 0;
    //
    // }else{
    //   $('#pandaBtn').html("I'm tired of Red Pandas.");
    //   localStorage["status"] = 1;
    // }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {status: localStorage.status})
    })

  });

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response){
  //       console.log(response.farewell);
  //   });
  // });


});
