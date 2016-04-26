import $ from 'jquery'
import WPCOM from 'wpcom'

var wpcom = WPCOM()
var $noticesContainer = $('.Notices-container')
var html = ''
var template =
`<li class="Notices-item">
  <div class="Notices-imageContainer">
    <img class="Notices-image" src=":noticeImage:">
  </div>
  <div class="Notices-description">
    <span class="Notices-type">Leer mas</span>
    <h3 class="Notices-subTitle">:noticeTitle:</h3>
  </div>
  <a class="Notices-moreInfo" href=":noticeLink:"></a>
</li>`

var blog = wpcom.site('partidomoda.org.do')

function getPost () {
  return Promise.resolve(blog.postsList({ number: 9 }))
}

getPost().then(posts => {
  posts.posts.forEach(post => {
    var noticeTemplate = template
      .replace(':noticeImage:', post.featured_image)
      .replace(':noticeTitle:', post.title)
      .replace(':noticeLink:', post.URL)
    html = html + noticeTemplate
  })
})
.then(() => {
  $noticesContainer.siblings('.loader').remove()
  $noticesContainer.html(html).removeClass('is-active')
})
.catch(err => { return err })
