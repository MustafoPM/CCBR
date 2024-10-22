const colors = ['red', 'green', 'yellow', 'blue'];

function colorChange() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(function(item) { //переберём их
        if (item.style.background !== 'white') { //проверим что квадрат не красный
            const random = Math.floor(Math.random() * (squares.length + 3));
            item.style.background = colors[random]; // установим рандомный цвет
        }
    });
}