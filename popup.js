
$(function(){

  localStorage["toggle"] = true;

  $('#pandaBtn').click(function(){
    $('#pandaBtn').toggleClass('onPanda');

    if($('#pandaBtn').hasClass('onPanda')){
      $('#pandaBtn').html("Bring back the Red Pandas!");
      localStorage["toggle"] = false;
    }else{
      $('#pandaBtn').html("I'm tired of Red Pandas.");
      localStorage["toggle"] = true;
    }

  });





  // function storageToggle(){
  //   if(localStorage["toggle"] === true){
  //     $('#onPanda').hide();
  //     $('#offPanda').show();
  //   }
  //   else {
  //     $('#onPanda').show();
  //     $('#offPanda').hide();
  //   }
  // };
  //
  // $('#onPanda').click(function(){
  //   localStorage["toggle"] = true;
  //   storageToggle();
  //   console.log(localStorage)
  // });
  //
  // $('#offPanda').click(function(){
  //   localStorage["toggle"] = false;
  //   storageToggle();
  //   console.log(localStorage)
  // });
});
