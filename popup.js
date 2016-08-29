document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('options').addEventListener('click', function(){
    chrome.tabs.update({
      url: 'chrome://chrome/extensions'
    })
  });
});
