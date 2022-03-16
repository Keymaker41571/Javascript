function hi() {
    for(let i = 1; i <= 100; i++) {
        if(i % 5 == 0 && i % 3 ==0) {
            console.log("At index " + i + " FizzBuzz");
        }
        else if(i % 3 == 0) {
            console.log("At index " + i + " Fizz");
        }
        else if(i % 5 == 0) {
            console.log("At index " + i + " Buzz");
        }
        else {
            console.log("At index " + i);
        }
    }
}

hi();