
var press  = document.querySelector("#press")
document.querySelector("#pressclose").onclick = function(){
  document.querySelector('#pressbox').style.display = 'none'
}
var li = $('#video li')
var urls=""
li.each(function(){
  $(this)[0].onclick = function(){
    $(".videoplay").empty()
    $(".videoplay")[0].style.display = 'block'
    var url = $(this).find('img').attr("url")
    var videourl = $(this).find('img').attr("vurl")
    var img = `<img src="${url}"/>`
    var video = `<video  autoplay src="${videourl}"></video`
    if(url){
      $(".videoplay").append(img)
      urls = $(".videoplay img")
    }
    else{
      $(".videoplay").append(video)
      urls = $(".videoplay video")

    }
  }
})
$(".videoplay")[0].addEventListener('click',function(e){
  var tag = e.target.tagName
  if(tag!=="IMG"&&tag !== "VIDEO"){
    $(".videoplay")[0].style.display = 'none'
    urls.remove()
  }
})