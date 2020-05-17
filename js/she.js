const lis = $("#sheplay li")
$("#sheplay")[0].addEventListener('click',function(e){
  var tar = e.target
  if(tar.className==="toplay"){
    $(tar).prev().find('video')[0].play()
  }
  else if(tar.className==="stoplay"){
    $(tar).next().find('video')[0].pause()
  }
})

$("#sheclose")[0].onclick=function(){
  $(".she")[0].style.display='none'
}
