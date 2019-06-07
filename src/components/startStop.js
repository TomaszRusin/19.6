
    export function start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    export function stop() {
        this.running = false;
        clearInterval(this.watch);
    }