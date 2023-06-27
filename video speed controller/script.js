const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(e){
    // console.log(e);
    const y = e.pageY - this.offsetTop;
   const percent = y / this.offsetHeight;
   const min = 0.4;
   const max = 4;
   const height = Math.floor(percent *100) + "%";
   const playBackRate = percent * (max - min) + min;
   bar.textContent = playBackRate.toFixed(2)+'x';
   bar.style.height = height;
   video.playbackRate = playBackRate;
   
})