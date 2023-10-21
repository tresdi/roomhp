const heroFigureCarousel = $('#heroFigureCarousel')
const heroTextCarousel = $('#heroTextCarousel')

heroFigureCarousel.carousel({
    ride: 'carousel',
    pause: false,
    interval: 5000,
}, 'cycle')

heroTextCarousel.carousel({
    touch: false
})

$(heroFigureCarousel).on('slide.bs.carousel', (event) => {
    let nextIndex = $(event.relatedTarget).index()
    $(heroTextCarousel).carousel(nextIndex)
})

$('#heroFigureCarousel .prev-btn, #heroTextCarousel .prev-btn').on('click', () => {
    $(heroFigureCarousel).carousel('prev')
})

$('#heroFigureCarousel .next-btn, #heroTextCarousel .next-btn').on('click', () => {
    $(heroFigureCarousel).carousel('next')
})

// -------------------------------------------------------------------------
$('#navSectionWrapper').on('shown.bs.collapse', () => {
    $('#navbarWrapper .navbar__overlay').removeClass('d-none')
})
$('#navSectionWrapper').on('hide.bs.collapse', () => {
    $('#navbarWrapper .navbar__overlay').addClass('d-none')
})