
  export function step() {
    if (!this.running) return;
    this.calculate();
    this.print();
}