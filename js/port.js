var li = $('.uls li')
var urls=""
li.each(function(){
  $(this)[0].onclick = function(){
    $(".videoplay").empty()
    $(".videoplay")[0].style.display = 'block'
    var url = $(this).find('img').attr("src")
    var videourl = $(this).find('img').attr("vurl")
    var img = `<img src="${url}"/>`
      $(".videoplay").append(img)
      urls = $(".videoplay img")
  }
})
$(".videoplay")[0].addEventListener('click',function(e){
  var tag = e.target.tagName
  if(tag!=="IMG"&&tag !== "VIDEO"){
    $(".videoplay")[0].style.display = 'none'
    urls.remove()
  }
})