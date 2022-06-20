const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const box of boxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragover', dragOver);
}

function dragStart(e) {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver() {

}

function dragEnter() {

}

function dragLeave() {
  
}

function dragDrop() {

}