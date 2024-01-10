const container= document.querySelector('#container');

let number = 15;

for (let i=0;i<number;i++){
    const row=document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let j=0;j<number;j++){
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}

