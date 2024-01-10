const container= document.querySelector('#container');

let number = 50;
id=1;

for (let i=0;i<number;i++){
    const row=document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let j=1;j<number;j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', id);
        row.appendChild(square);
        id++;
    }
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseenter', element => {
        // console.log(element.target.id);
        square.classList.add('hover');
    })

    // square.addEventListener('mouseleave', element => {
    //     // console.log(element.target.id);
    //     square.classList.remove('hover');
    // })
})



// The onmouseenter event is often used together with the onmouseleave event, which occurs when the mouse pointer leaves an element.


