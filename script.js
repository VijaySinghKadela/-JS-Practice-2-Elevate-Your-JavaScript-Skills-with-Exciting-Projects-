

window.addEventListener("mousemove", function(deta){
    let rect = document.querySelector('#box')

    let xyval = gsap.utils.mapRange(0 , window.innerWidth,100 + rect.getBoundingClientRect().width/2, window.innerWidth - (100+rect.getBoundingClientRect().width/2) , deta.clientX)

    gsap.to('#box' , {
        left: xyval + 'px',
        ease: Power3,

    })
})