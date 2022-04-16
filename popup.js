const a = navigator.mediaDevices.getDisplayMedia;

const takeScreenshot = async() => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {mediaSource:"screen"}
    });

    const track = stream.getVideoTracks()[0];

    const image = new ImageCapture(track);

    const bitmap = await image.grabFrame();

    track.stop();
    
    const canvas = document.getElementById("screenshot");

    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const context = canvas.getContext("2d");

    context.drawImage(bitmap, 0, 0, 790, bitmap.height/2);

    const img = canvas.toDataURL();

    const res = await fetch(img);
    const buff = await res.arrayBuffer();

    const file = [
        new File([buff], ```photo_${new Date()}.bmp```,{
            type:"image/bmp"
        })
    ];
    return file;
};

const button = document.getElementById("btn").onclick = () => a ? takeScreenshot() : {};

//const button = document.getElementById("btn").onclick = () => takeScreenshot();
  
  
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


    