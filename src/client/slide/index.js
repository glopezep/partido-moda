import $ from 'jquery'
import '../lib/responsiveslides.js'
import { getPost } from '../notices/index.js'

var $rSlides = $('.rslides')
var imagesHtml = ''
var imageContainerTemplate =
`<div style="background: url(':src:') no-repeat center center; background-size: cover; height: 400px; position: relative;">
  <p style="position: absolute; bottom: 0; left: 0; right: 0; color: white; text-align: center; background: rgba(0,0,0,.7); font-size: 1.2em; margin: 0; padding: .5em;">:text:</p>
  <a href=":link:" style="position: absolute; top: 0; bottom: 0; right: 0; left: 0;"></a>
</div>`

getPost('partidomoda.org.do', 3)
.then((posts) => {
  var images = posts.posts
  images.forEach(image => {
    var template = imageContainerTemplate
      .replace(':src:', image.featured_image)
      .replace(':text:', image.title)
      .replace(':link:', image.URL)
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

/*
renderImages().then(images => {
  images.forEach(image => {
    var template = imageContainerTemplate.replace(':src:', image)
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
*/
