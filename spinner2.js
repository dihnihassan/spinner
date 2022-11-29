let spinCycle = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-','\r\\','\r| '];

let x = 100;

const spinCursor = function(spins, time) {

setTimeout(() => {
    return process.stdout.write(spins)
}, time)
}

for (const cycle of spinCycle) {
   spinCursor(cycle, x);
  x += 200;

};
