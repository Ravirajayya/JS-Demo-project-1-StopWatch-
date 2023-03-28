function Stopwatch(){

    let started = false;
    let timer = 0;
    let interval;

    this.start = function(){
        if(started){
            throw new Error("Stopwatch alredy started...")
        }
        else{
            started = true;
            interval = setInterval(() => {
                timer++
            }, 0);
        }
    };

    this.stop = function(){
        if(!started){
            throw new Error("Stop wathc not yet started...")
        }
        else{
            started = false;
            clearInterval(interval);
        }
    };

    this.reset = function(){
        started = false;
        timer = 0;
        clearInterval(interval);
    };

    Object.defineProperty(this, "duration", {
        get: function(){
            return timer;
        },
    });

}

    let sw = new Stopwatch();

    function updateTimer() {
        document.getElementById('timer').innerHTML = (Math.round((sw.duration / 250) * 10) / 10).toFixed(1);
      }

    document.getElementById("startBtn").onclick = function(){
        sw.start();
        setInterval(() => { updateTimer() }, 100);
    };

    document.getElementById("stopBtn").onclick = function(){
        sw.stop();
        updateTimer();
    };

    document.getElementById("resetBtn").onclick = function(){
        sw.reset();
        updateTimer();
    };

    updateTimer();
    