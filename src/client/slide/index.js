import $ from 'jquery'
import '../lib/responsiveslides.js'

var $rSlides = $('.rslides')
var imagesHtml = ''
var imageTemplate = `<img src=":src:">`
var images = ['img/partido-moda2.png', 'img/partido-moda2.png', 'img/partido-moda2.png']

function renderImages (arrayImages, callback) {
  return Promise.resolve(images)
}

renderImages().then(images => {
  images.forEach(image => {
    var template = imageTemplate.replace(':src:', image)
    var slide = `<li>${template}</li>`
    imagesHtml = imagesHtml + slide
  })
})
.then(() => {
  $rSlides.html(imagesHtml)
})
.then(() => {
  $(function () {
    $rSlides.responsiveSlides()
  })
})
