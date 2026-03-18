

// 1. Blocking Function.
function blockingDelay() {
    const start = Date.now();

    while (Date.now() - start < 2000) {
    }
    return "Done after 2 seconds (blocking)";
}
console.log("qoraalkaan soo bandhig");
console.log(blockingDelay());
console.log("soo daabac qoraalkii udanbeeyay");


// 2.Non- Blocking Function.

function nonBlockingDelay(callback) {
    setTimeout(() => {
        callback("Done after 2 seconds (non-blocking)");
    }, 2000);
}

console.log("Start");

nonBlockingDelay((message) => {
    console.log(message);
});

console.log("End");