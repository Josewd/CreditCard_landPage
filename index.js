//Selecionando o nosso container e card
const card = document.querySelector('.card')
const container = document.querySelector('.container')





container.addEventListener('mousemove', (evento)=>{

    let xAxis = (window.innerWidth / 2 - evento.pageX) / 10
    let yAxis = (window.innerHeight / 2 - evento.pageY)/ 10
    card.style.transition = 'none'
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

    
})


container.addEventListener('mouseleave', (e)=>{

    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    card.style.transition = 'all 1s ease'
})