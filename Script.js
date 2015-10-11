/**
 * Created by Margit on 11/10/2015.
 */

(function() {

    //start running tick every 1000ms
    setInterval(tick, 1000);


})();

function getTime() {
    //return current time
    var x = new Date();
    x.getHours();
    x.getMinutes();
    x.getSeconds();

}

function timeToBinClockTime(time) {
    //start writing binary numbers, fun fun fun!
    //{"HoursTens" =>[0000]}
}

function setClockFace(binTimeRepr) {
    //which square is ON/OFF???
}

function tick() {
    // update timer values
    var CurrentTime=getTime();
    var CurrentTimeBinary =timeToBinClockTime(CurrentTime);
    setClockFace(CurrentTimeBinary);
}