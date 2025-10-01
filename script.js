let elf = document.querySelector(".elf")
let bell = document.querySelector(".bell")

elf.addEventListener('mouseenter', ()=> bell.classList.add('bellMove'))
elf.addEventListener('mouseleave', ()=> bell.classList.remove('bellMove'));