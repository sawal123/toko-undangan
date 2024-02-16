var accor = document.getElementById('accor')
var ac = document.getElementById('ac')
var subAc = document.getElementById('subAc')
var arrow = document.getElementById('arrow')

var elements = document.querySelectorAll('[id^="ac"]');
elements.forEach(function(element){
    console.log(elements)
})

elements.addEventListener('click', function(){
    if(subAc.classList.contains('hidden') ){
        subAc.classList.remove('hidden')
        subAc.classList.remove('opacity-0')
        subAc.classList.add('opacity-100')
        arrow.classList.add('rotate-90')

        
    }else{
        subAc.classList.add('hidden')
        subAc.classList.remove('opacity-100')
        subAc.classList.add('opacity-100')
        arrow.classList.remove('rotate-90')
    }
     
})