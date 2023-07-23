const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

setInterval(()=>{
    const curTime = new Date();

    sec.textContent = (curTime.getSeconds()<10?"0":"")+curTime.getSeconds();
    min.textContent = (curTime.getMinutes()<10?"0":"")+curTime.getMinutes();
    hr.textContent = (curTime.getHours()<10?"0":"")+curTime.getHours();
},1000)