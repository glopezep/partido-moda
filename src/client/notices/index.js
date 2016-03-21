import $ from 'jquery'

var $noticesContainer = $('.Notices-container')
var url = './data.json'
var html=''
var template =
`<li class="Notices-item">
  <div class="Notices-imageContainer">
    <img class="Notices-image" src=":noticeImage:">
  </div>
  <div class="Notices-description">
    <span class="Notices-type">:noticeType:</span>
    <h3 class="Notices-subTitle">:noticeTitle:</h3>
    <p class="Notices-text">:noticeText:</p>
  </div>
</li>`

function renderNotice (url) {
  return Promise.resolve($.getJSON(url))
}

renderNotice(url).then(notices => {
  notices.forEach(notice => {
    var noticeTemplate = template
      .replace(':noticeImage:', notice.image)
      .replace(':noticeType:', notice.type)
      .replace(':noticeTitle:', notice.title)
      .replace(':noticeText:', notice.text)
    html = html + noticeTemplate
  })
})
.then(() =>{
  $noticesContainer.html(html)
})
.catch(err => {
  console.log(err)
})
