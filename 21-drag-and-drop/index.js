const boxes = document.querySelectorAll('.box');
const frame = document.querySelector('.fill');

frame.addEventListener('dragstart', dragStart);
frame.addEventListener('dragend', dragEnd);

boxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
})



function dragStart() {

}

function dragEnd() {
    
}

function dragOver() {
    
}

function dragEnter() {
    
}

function dragLeave()) {
    
}

function dragDrop() {
    
}