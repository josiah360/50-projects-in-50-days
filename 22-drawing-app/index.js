const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'black'
ctx.strokeStyle = 'black'

const size = 10
let isPenDowm = false;
let x;
let y;
let x2
let y2

canvas.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
  
    
    if(isPenDowm) {
        drawCircle(x, y, size)
        drawLine(x2, y2, x, y, size)
    }

    x2 = x
    y2 = y
})

canvas.addEventListener('mousedown', () => isPenDowm = true)
canvas.addEventListener('mouseup', () => isPenDowm = false)
canvas.addEventListener('mouseout', () => isPenDowm = false)


function drawCircle(x, y, size) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fill()
}

function drawLine(x1, y1, x2, y2, size) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = size * 2
    ctx.stroke()
}



