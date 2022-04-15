  
  
  
  const fullScreen = document.querySelector('#fullScreen');
  const customScreen = document.querySelector('#customScreen')

fullScreen.addEventListener("click",function(){
    fullScreen.dispatchEvent(new KeyboardEvent('keydown', {'key':'Shift'}, {'key':'Command'}, {'key':'3'}  ));

})
customScreen.addEventListener("click", function(){
    customScreen.dispatchEvent(new KeyboardEvent( 'keydown' , {'key':'Command', 'key': 'Shift', 'key': '4'} ));

})
    
  //   "background": {
  //   "service_worker": "background.js" 
  // },
  // "permissions": ["storage", "activeTab", "scripting"],
  // },

  // MAC, Linux, Microsoft
// make and eventlistern for our button 
    // that triggers the screenshot button


  // const fullScreen = document.querySelector('#fullScreen');
  // const customScreen = document.querySelector('#customScreen')
  // fullScreen.dispatchEvent(new KeyboardEvent('keydown', {'key':'Shift'}, {'key':'Command'}, {'key':'3'}  ));
  // customScreen.dispatchEvent(new KeyboardEvent( 'keyup' , {'key':'Command', 'key': 'Shift', 'key': '4'} ));
    //try number for 4