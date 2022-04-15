
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color});
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
// MAC, Linux, Microsoft
// make and eventlistern for our button 
    // that triggers the screenshot button


  // const fullScreen = document.querySelector('#fullScreen');
  // const customScreen = document.querySelector('#customScreen')
  // fullScreen.dispatchEvent(new KeyboardEvent('keydown', {'key':'Shift'}, {'key':'Command'}, {'key':'3'}  ));
  // customScreen.dispatchEvent(new KeyboardEvent( 'keyup' , {'key':'Command', 'key': 'Shift', 'key': '4'} ));
    //try number for 4