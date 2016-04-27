import $ from 'jquery'

$(document).on('scroll', function (ev) {
  if (window.scrollY >= 620) $('.Socials').addClass('is-fixed')
  else $('.Socials').removeClass('is-fixed')
})
