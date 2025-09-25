var cursor = document.querySelector('.glow');
// document.addEventListener('mousemove', function(e){
// var x = e.clientX;
// var y = e.clientY;
// cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 55%), 0)`
// });

document.addEventListener('click', function(e){
    cursor.style.width = `100px`
    cursor.style.height = `100px`
    cursor.style.filter = `blur(90px)`
    setTimeout(() => {
        cursor.style.width = `220px`
        cursor.style.height = `220px`
        cursor.style.filter = `blur(80px)`
    }, 100);
})

let elf = document.querySelector(".elf")
let bell = document.querySelector(".bell")

elf.addEventListener('mouseenter', ()=> bell.classList.add('bellMove'))
elf.addEventListener('mouseleave', ()=> bell.classList.remove('bellMove'));