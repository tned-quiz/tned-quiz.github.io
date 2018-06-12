/***************** fct° TIMER ******************/
//init chrono
var m = 0;
var s = 0;

function startTimer(chrono){

  var timer = setInterval(function(){ myChrono() }, 1000);

  function myChrono(){
    s++;
    if(s>59){
      m++;
      s=0;
    }
    //add style
    if(m > 6){
      chrono.style.color = "crimson";
    }else if (m > 4) {
      chrono.style.color = "orange";
    }
    var mm = checkTime(m);
    var ss = checkTime(s);
    chrono.innerHTML =  mm + " : " + ss;

    // arret du timer
    if(m == 100){
      clearInterval(timer);
      alert('Temps écoulé..');
    }
  }

}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

export {startTimer};
