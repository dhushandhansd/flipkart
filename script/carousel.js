let slideIndex = 1
carousel()
function carousel() {
    let slides = document.getElementById('slides')

    if(slideIndex > slides.length) {
        slideIndex = 1
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    slides[slideIndex - 1].style.display = "block"
    setTimeout(carousel, 3000)
}