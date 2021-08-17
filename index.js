console.log("Welcome to clock");
let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
console.log(hour,minute,second)

setInterval(() => {
    d=new Date();
    hh=d.getHours();
    mm=d.getMinutes();
    ss=d.getSeconds();
    hrotation=hh*30+mm/2;
    mrotation=6*mm;
    srotation=6*ss;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

    // console.log(hour)
}, 1000);