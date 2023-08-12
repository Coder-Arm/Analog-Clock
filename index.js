const hr = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function timeUpdate(){
  var now   = new Date()
  hrDeg   = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30;
  minDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6;
  secDeg = now.getSeconds() / 60 * 360;
  hr.style.transform = `rotate(${hrDeg}deg)`
  min.style.transform = `rotate(${minDeg}deg)`
  sec.style.transform = `rotate(${secDeg}deg)`
}

setInterval(() => {
timeUpdate();
},1000)