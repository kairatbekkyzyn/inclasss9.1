const outputDiv = document.getElementById("output");
        
        for (let i = 1; i <= 100; i++) {
            let output = "";
            if (i % 3 === 0 && i % 5 === 0) {
                output = "FizzBuzz";
            } else if (i % 3 === 0) {
                output = "Fizz";
            } else if (i % 5 === 0) {
                output = "Buzz";
            } else {
                output = i;
            }
            
            const p = document.createElement("p");
            p.textContent = output;
            outputDiv.appendChild(p);
        }