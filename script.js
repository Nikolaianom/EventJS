const box = document.querySelector('.box')

box.addEventListener('click', () => {
    if(box.style.backgroundColor == 'red'){
    box.style = `
    background-color: blue;
    border-radius: 50%;
    transition: 5s;
    `
    } else {
        box.style = `
    background-color: red;
    border-radius: 0%;
    transition: 5s;
    `
    }
})




