function getMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // beddel true/false si aad u tijaabiso

            if (success) {
                resolve("Success: Data received after 2 seconds");
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}

console.log("Start");

getMessage()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("End");