chrome.runtime.onMessage.addListener((message, sender, senderResponse) => {
  if (message.name === 'stream' && message.streamId) {
      let track, canvas
      navigator.mediaDevices.getUserMedia({
          video: {
              mandatory: {
                  chromeMediaSource: 'desktop',
                  chromeMediaSourceId: message.streamId
              },
          }
      }).then((stream) => {
          track = stream.getVideoTracks()[0]
          const imageCapture = new ImageCapture(track)
          return imageCapture.grabFrame()
      }).then((bitmap) => {
          track.stop()
          canvas = document.createElement('canvas');
          canvas.width = bitmap.width; //if not set, the width will default to 200px
          canvas.height = bitmap.height;//if not set, the height will default to 200px
          let context = canvas.getContext('2d');
          context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height)
          return canvas.toDataURL();
      }).then((url) => {
          chrome.runtime.sendMessage({name: 'download', url}, (response) => {
              if (response.success) {
                  alert("Screenshot saved");
              } else {
                  alert("Could not save screenshot")
              }
              canvas.remove()
              senderResponse({success: true})
          })
      }).catch((err) => {
          alert("Could not take screenshot")
          senderResponse({success: false, message: err})
      })
      return true;
  }
})

// // // SECOND ATTEMPT // // //

// const a = navigator.mediaDevices.getDisplayMedia;

// const takeScreenshot = async() => {
//     const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: {mediaSource:"screen"}
//     });

//     const track = stream.getVideoTracks()[0];

//     const image = new ImageCapture(track);

//     const bitmap = await image.grabFrame();

//     track.stop();
    
//     const canvas = document.getElementById("screenshot");

//     canvas.width = bitmap.width;
//     canvas.height = bitmap.height;

//     const context = canvas.getContext("2d");

//     context.drawImage(bitmap, 0, 0, 790, bitmap.height/2);

//     const img = canvas.toDataURL();

//     const res = await fetch(img);
//     const buff = await res.arrayBuffer();

//     const file = [
//         new File([buff], `photo_${new Date()}.bmp`,{
//             type:"image/bmp"
//         })
//     ];
//     return file;
// };

// //const button = document.getElementById("btn").onclick = () => a ? takeScreenshot() : {};

// const button = document.getElementById("btn").onclick = () => takeScreenshot();
  
// // // FIRST ATTEMT  
//   const fullScreen = document.querySelector('#fullScreen');
//   const customScreen = document.querySelector('#customScreen')

// fullScreen.addEventListener("click",function(){
//     fullScreen.dispatchEvent(new KeyboardEvent('keydown', {'key':'Shift'}, {'key':'Command'}, {'key':'3'}  ));

// })
// customScreen.addEventListener("click", function(){
//     customScreen.dispatchEvent(new KeyboardEvent( 'keydown' , {'key':'Command', 'key': 'Shift', 'key': '4'} ));

// })
    
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


    