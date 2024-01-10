const container= document.querySelector('#container');
const button=document.querySelector('button');

let number = 20;

const newGrid = (number) => {
    const container= document.querySelector('#container');
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
}

newGrid(number);

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('hover');
    })
})


button.addEventListener('click', () => {
    console.log("Funktioniert!");
    document.querySelector('#container').remove();
    let newContainer = document.createElement('div');
    newContainer.setAttribute('id','container');
    document.querySelector('body').appendChild(newContainer);

    let number=0;
    while (true){
    number = prompt('Please enter a number between 5 and 100');
        if (number >= 5 && number <=100 || number==undefined) break;
    }
    
    newGrid(number);
})



// document.querySelector('button').addEventListener('click', () =>{
//     // delete container
//     // container.remove();
//     let container= document.querySelector('#container');
//     document.querySelector('body').removeChild(container);
//     // create new container
//     let newContainer = document.createElement('div');
//     newContainer.classList.add('container');
//     //add to body
//     document.querySelector('body').appendChild(newContainer);

//     newGrid( () => {
//         let number;
//         while (true){
//             number=prompt('How many rows?')
//             if (number<5 || number > 100){
//                 alert('Please enter a number between 5 and 100');
//             }else return number;
//         }
//     })
// })

// The onmouseenter event is often used together with the onmouseleave event, which occurs when the mouse pointer leaves an element.


