var switchObj = new ej.buttons.Switch({ cssClass: 'handle-text' });

// Render initialized Switch.
switchObj.appendTo('#switch1');

//Extension active status from User
//Future work is sendMessage to the background script and inject it.
chrome.storage.sync.get('isActivated', function(result) {
  switchObj.checked = result.isActivated;
  console.log('Extension status is  ' + result.isActivated);
});

let changeActiveStatus =  document.querySelector(".e-switch-wrapper");



changeActiveStatus.onclick = function() {
  let extensionStatus = switchObj.checked;
  chrome.storage.sync.set({"isActivated": extensionStatus}, function() {
    console.log('Extension is set to ' + extensionStatus);
  });
  };
