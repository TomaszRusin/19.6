
import reset from './components/reset';
import { print, format} from './components/print'
import {start, stop} from './components/startStop'
import calculate from './components/calculate'
import step from './components/step'

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.gettElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());

class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset()

    print() 

    format(times)

    start()

    step()

    calculate()

    stop()
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));
