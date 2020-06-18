let changeActiveStatus = document.getElementById('listenAct');

//Extension active status from User
//Future work is sendMessage to the background script and inject it.
chrome.storage.sync.get('isActivated', function(result) {
  changeActiveStatus.checked = result.isActivated;
  console.log('Extension status is  ' + result.isActivated);
});

changeActiveStatus.onclick = function() {
  let extensionStatus = changeActiveStatus.checked  
  chrome.storage.sync.set({"isActivated": extensionStatus}, function() {
    console.log('Extension is set to ' + extensionStatus);
  });
  };
