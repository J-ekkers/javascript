console.log("--- Page 2 ---");

const jsonData = [
    {
        "id": 1,
        "todo": "Do something nice for someone I care about",
        "completed": true
    },
    {
        "id": 2,
        "todo": "Memorize the fifty states and their capitals",
        "completed": false
    },
    {
        "id": 3,
        "todo": "Watch a classic movie",
        "completed": false
    },
    {
        "id": 4,
        "todo": "Contribute code or a monetary donation to an open-source software project",
        "completed": false
    }
];

function createTodoCard(todo) {
    return `
        <div class="todo">
            <div class="todo-left"></div>
            <div class="todo-body">
                <p><b>${todo.todo}</b></p>
            </div>
            <div class="todo-right"><span class="${todo.completed ? "done" : "undone"}"></span></div>
        </div>
    `;
}

function showAverage(avg) {
    document.querySelector(".avg").innerHTML = avg;
}

// Opdracht 2a - Toon de objecten Ã©Ã©n voor Ã©Ã©n op console.log()
jsonData.forEach(item => {
    console.log(item);
});

// Opdracht 2b - Toon elk object in een card met behulp van createCard functie
const cardContainer = document.querySelector(".todo-container");
jsonData.forEach(todo => {
    const todoCard = createTodoCard(todo);
    cardContainer.innerHTML += todoCard;
});

// Opdracht 1c - Bepaal de gemiddelde waarde van de rapportcijfers en toon dit in average-container
const grades = [6.5, 4.3, 5.8, 6.1, 5.1, 8.2, 6.5];
const average = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
showAverage(`Gemiddelde: ${average.toFixed(2)}`);
