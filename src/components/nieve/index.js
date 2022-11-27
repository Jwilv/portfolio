import '../../index.css'

const body = document.querySelector('body');

const timeAparicion = 200 ;

const createNieve = ()=>{
    let copo = document.createElement('i')
    let xPosition = window.innerWidth * Math.random()
    let size = (Math.random() * 8) + 2;
    let zIndex = Math.round(Math.random()) * 100;
    let Speed = Math.random() * 5;
    let animacion = Math.random() * 10 + 5;

    
    copo.style.left = xPosition - 10 + 'px' ;
    copo.style.width = size + 'px' ;
    copo.style.height = size + 'px' ;
    copo.style.zIndex = zIndex ;
    copo.style.animationDelay = Speed + 's' ;
    copo.style.animationDuration = animacion + 's'
    
    
    body.appendChild(copo);
    setTimeout( ()=>{
        copo.remove()
    }, animacion * 900)
}

setInterval(createNieve,timeAparicion);