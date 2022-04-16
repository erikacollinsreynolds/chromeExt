chrome.action.onClicked.addListener(function (tab) {
  chrome.desktopCapture.chooseDesktopMedia([
      "screen",
      "window",
      "tab"
  ], tab, (streamId) => {
      //check whether the user canceled the request or not
    //   if (streamId && streamId.length) {
    //       setTimeout(() => {
    //           chrome.tabs.sendMessage(tab.id, {name: "stream", streamId}, (response) => console.log(response))
    //       }, 200)
    //   }
  })
})

chrome.runtime.onMessage.addListener((message, sender, senderResponse) => {
  if (message.name === 'download' && message.url) {
      chrome.downloads.download({
          filename: 'screenshot.png',
          url: message.url
      }, (downloadId) => {
          senderResponse({success: true})
      })

      return true;
  }
});

// // // ATTEMPT 1 // // //
// MAC, Linux, Microsoft
// make and eventlistern for our button 
    // that triggers the screenshot button


  // const fullScreen = document.querySelector('#fullScreen');
  // const customScreen = document.querySelector('#customScreen')
  // fullScreen.dispatchEvent(new KeyboardEvent('keydown', {'key':'Shift'}, {'key':'Command'}, {'key':'3'}  ));
  // customScreen.dispatchEvent(new KeyboardEvent( 'keyup' , {'key':'Command', 'key': 'Shift', 'key': '4'} ));
    //try number for 4