
var elements = document.querySelectorAll('.ac');
elements.forEach(element =>{
    element.addEventListener('click',()=>{
        const icon = element.querySelector('i')
    const subAc = element.nextElementSibling;
    console.log(element)
    subAc.classList.toggle('hidden')
    icon.classList.toggle('rotate-90')
    


    })
});
