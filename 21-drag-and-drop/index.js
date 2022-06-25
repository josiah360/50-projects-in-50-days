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
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible')
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'box'
}

function dragDrop() {
    this.appendChild(frame)
    this.className = 'box'
}