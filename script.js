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

// document.getElementById("cards").onmousemove = e => {
//   for(const card of document.getElementsByClassName("card")) {
//     const rect = card.getBoundingClientRect(),
//           x = e.clientX - rect.left,
//           y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   };
// }


let elf = document.querySelector(".elf")
let bell = document.querySelector(".bell")

elf.addEventListener('mouseenter', ()=> bell.classList.add('bellMove'))
elf.addEventListener('mouseleave', ()=> bell.classList.remove('bellMove'));