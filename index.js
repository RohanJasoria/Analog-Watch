setInterval(() => {
    d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hRotation = 30*htime + mtime/2;
    let mRotation = 6*mtime;
    let sRotation = 6*stime;

    hours.style.transform = `rotate(${hRotation}deg)`;
    minutes.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;
}, 1000);