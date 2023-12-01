// 获取页面上的HTML元素
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
const context = canvas.getContext('2d');

// 触发用户媒体流
navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } }) // “user”为前置摄像头，“environment”为后置
  .then(function(stream) {
    // 将视频源指定为用户媒体流
    video.srcObject = stream;
    video.play();
  })
  .catch(function(err) {
    console.log("发生错误: " + err);
  });

// 给拍照按钮绑定事件处理器
snapButton.addEventListener('click', function() {
  // 将video元素的当前帧画到canvas上
  context.drawImage(video, 0, 0, 640, 480);
  
  // 可以从这里获取canvas上的图像数据，进行进一步的操作（例如上传保存等）
  // const imageData = canvas.toDataURL('image/png');
});
