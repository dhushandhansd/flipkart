let prevButton = document.getElementById('prevBtn')
let nextButton = document.getElementById('nextBtn')

let slides = document.getElementById('slidesId')

let matrixVal = new WebKitCSSMatrix(slides.transform)

let pos = matrixVal.m41

console.log(pos)

prevButton.addEventListener('click', () => {
    console.log(pos)
    if(pos == 0) {
        break    
    } else if(pos > 0 && pos < -1345 ) {
        slides.style.transform = "translateX(0)"    
    } else if (pos > -1345 && pos < -2690) {
        slides.style.transform = "translateX(-1345px)"
    } else if (pos > -2690 && pos < -4035) {
        slides.style.transform = "translateX(-2690px)"
    } else if (pos > -4035 && pos < -5380) {
        slides.style.transform = "translateX(-4035px)"
    } else if (pos > -5380) {
        slides.style.transform = "translateX(0)"
    }
    // slides.style.transform = "translateX(1345px)"
})

function next() {
    console.log(pos)
    if(pos == 0) {
        slides.style.transform = "translateX(-1345)"
    } else if(pos < 0 && pos > -1345 ) {
        slides.style.transform = "translateX(0)"    
    } else if (pos > -1345 && pos < -2690) {
        slides.style.transform = "translateX(-1345px)"
    } else if (pos > -2690 && pos < -4035) {
        slides.style.transform = "translateX(-2690px)"
    } else if (pos > -4035 && pos < -5380) {
        slides.style.transform = "translateX(-4035px)"
    } else if (pos > -5380) {
        slides.style.transform = "translateX(0)"
    }
    // slides.style.transform = "translateX(1345px)"
}