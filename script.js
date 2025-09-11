var cursor = document.querySelector('.glow');
document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 75%), 0)`
});

document.addEventListener('click', function(e){
    cursor.style.width = `220px`
    cursor.style.height = `220px`
    cursor.style.filter = `blur(50px)`
    // setTimeout(() => {
    //     cursor.style.width = `350px`
    //     cursor.style.height = `350px`
    //     cursor.style.filter = `blur(150px)`
    // }, 8000);
})