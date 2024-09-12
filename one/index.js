//1. check if mouse is on the rectange or not


var rect = document.querySelector('#center');


rect.addEventListener('mousemove', function (details) {
    // console.log('mouse movement'); 
    let rectLocation = rect.getBoundingClientRect();
    let insideRect = details.clientX - rectLocation.left;
    

    if (insideRect < rectLocation.width/2) {
        //left
        // console.log('left')

        var red = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRect)
        gsap.to(rect, {

            backgroundColor: `rgb(${red},0,0)`,
            ease: Power4,
            
        })
    }
    else {
        // console.log('right') 
           var blue = gsap.utils.mapRange(
             rectLocation.width / 2,
             rectLocation.width,
             0,
             255,
             insideRect
           );
           gsap.to(rect, {
             backgroundColor: `rgb(0,0,${blue})`,
             ease: Power4,
           });
    }
})


rect.addEventListener('mouseleave', function () {
    gsap.to(rect, {
        backgroundColor:'white'
    })
})