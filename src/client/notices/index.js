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
  return Promise.resolve(blog.postsList())
}

getPost().then(posts => {
  for (var i = 0; i <= 8; i++) {
    var noticeTemplate = template
      .replace(':noticeImage:', posts.posts[i].featured_image)
      //.replace(':noticeType:', post.categories[0].name)
      .replace(':noticeTitle:', posts.posts[i].title)
      .replace(':noticeLink:', posts.posts[i].URL)
    html = html + noticeTemplate
  }
})
.then(() => { $noticesContainer.html(html) })
.catch(err => { return err })
