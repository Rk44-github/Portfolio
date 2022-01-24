setInterval(  function timeLoop()
 {
    var hours = (24 - (new Date().getHours()) );
    var min = new Date().getMinutes();
    let currentTime = ( addZero(hours) + ":" + addZero(min));
    console.log(currentTime);
    return currentTime;
}, 1000);

