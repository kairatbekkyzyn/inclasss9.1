// Task 1: Average Marks and Grades
const calculateGradesButton = document.getElementById('calculateGradesButton');
const gradesTable = document.getElementById('gradesTable');
const averageResult = document.getElementById('averageResult');

calculateGradesButton.addEventListener('click', () => {
    const rows = gradesTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let totalMarks = 0;
    let count = 0;
    let resultHTML = '';

    for (const row of rows) {
        const name = row.cells[0].innerText;
        const marks = parseInt(row.cells[1].innerText);
        totalMarks += marks;
        count++;

        // Determine grade
        let grade;
        if (marks < 60) {
            grade = 'F';
        } else if (marks < 70) {
            grade = 'D';
        } else if (marks < 80) {
            grade = 'C';
        } else if (marks < 90) {
            grade = 'B';
        } else {
            grade = 'A';
        }

        resultHTML += `<tr><td>${name}</td><td>${marks}</td><td>${grade}</td></tr>`;
    }

    const average = totalMarks / count;
    averageResult.innerHTML = `Average Marks: ${average.toFixed(2)}`;
    gradesTable.getElementsByTagName('tbody')[0].innerHTML += resultHTML;
});

// Task 2: Keydown Event Listener
const textInput = document.getElementById('textInput');
textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        alert(`You pressed Enter! Input value: ${textInput.value}`);
        textInput.value = ''; // Clear input after pressing Enter
    }
});

// Task 3: Double Click Event Listener
const doubleClickArea = document.getElementById('doubleClickArea');
doubleClickArea.addEventListener('dblclick', () => {
    alert('Double-click detected!');
});

// Task 4: Progress Bar
const progressBar = document.getElementById('progressBar');
const completeTaskButton = document.getElementById('completeTaskButton');
let completionPercentage = 0;

completeTaskButton.addEventListener('click', () => {
    if (completionPercentage < 100) {
        completionPercentage += 25; // Increment progress
        progressBar.style.width = `${completionPercentage}%`;
        progressBar.innerText = `${completionPercentage}%`; // Show percentage
    }
});

// Task 5: FizzBuzz
const fizzBuzzResult = document.getElementById('fizzBuzzResult');
let fizzBuzzHTML = '';

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzHTML += 'FizzBuzz<br>';
    } else if (i % 3 === 0) {
        fizzBuzzHTML += 'Fizz<br>';
    } else if (i % 5 === 0) {
        fizzBuzzHTML += 'Buzz<br>';
    } else {
        fizzBuzzHTML += `${i}<br>`;
    }
}

fizzBuzzResult.innerHTML = fizzBuzzHTML;