
export function reset() {
    console.log(this)
    this.times = {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
    };
}