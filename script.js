const container= document.querySelector('#container');

let number = 50;

for (let i=0;i<number;i++){
    const row=document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let j=1;j<number;j++){
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseenter', element => {
        square.classList.add('hover');
    })
})



// The onmouseenter event is often used together with the onmouseleave event, which occurs when the mouse pointer leaves an element.


