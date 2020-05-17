window.onload =function startTime() {
  document.addEventListener('DOMContentLoaded', function () {
    objectFit.polyfill({
     selector: 'video',
     fittype: 'cover'
    });
   });
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
$(".a").each((index,item)=>{
  item.style.display = 'none'
})

function checkTime(i) {
  if (i < 10) { i = "0" + i };  
  return i;
}
var oloading = document.getElementById('img-box');
$("nav")[0].style.height = window.innerHeight+"px"
setTimeout(function () {
  oloading.style.display = 'none';
  $(oloading).remove()
  $(".a").each((index,item)=>{
    item.style.display = 'block'
  })
  $('nav')[0].style.display ="flex"
}, 5000);
setTimeout(()=>{
  document.getElementById('audio').play()
},4700)
$('#ok').onclick = function(){
  $('#tips')[0].style.display= 'none'
}
document.querySelector('#ok').onclick = function(){
  document.querySelector("#tips").style.display =  'none'
}



// 处理tabbar的出现逻辑
var press = document.querySelector('#press')
var pressbox = document.querySelector('#pressbox')
var inbox = document.querySelector('#inbox')
var inboxs = document.querySelector('.inbox')
var about = $("#about")
pressbox.style.display = 'none'
inboxs.style.display = 'none'
$('.about')[0].style.display = 'none'
$(".she")[0].style.display = 'none'
$(".tpdf")[0].style.display='none'
$(".portf")[0].style.display = 'none'
var zindex = 10,num=0;

function index(){
  if(inboxs.style.display !== 'none'){
    zindex++
    num++
  }
  if(pressbox.style.display!=='none'){
    zindex++
    num++
  }
  if($('.about')[0].style.display !== 'none'){
    zindex++
    num++
  }
  if($(".she")[0].style.display!=='none'){
    zindex++
    num++
  }
  if($(".tpdf")[0].style.display!=='none'){
    zindex++
    num++
  }
  if($(".portf")[0].style.display!=='none'){
    zindex++
    num++
  }
  if(num===6){
    num=0
  }
}

function el(el){
  if(el.style.display==='none'){
    el.style.display = 'block'
    el.style.left = el.offsetLeft + 30*num +"px"
      el.style.top = el.offsetTop + 30*num +"px"
    el.style.zIndex=zindex

  }
  else{
    el.style.zIndex=zindex
  }
  num=0
}

function entermouse(el){
  if(el.style.display !== 'none'){
    if(zindex !== el.style.zIndex*1){
      index()
      el.style.zIndex = zindex
    }
  }
}

press.onclick = function(){
  index()
  el(pressbox)
}
inbox.onclick = function(){
  index()
  el(inboxs)
}
about[0].onclick = function(){
  index()
  el($('.about')[0])
}
$("#views")[0].onclick = function(){
  index()
  el($(".she")[0])
}
$("#pdf")[0].onclick = function(){
  index()
  el($(".tpdf")[0])
}
$("#Briefcase")[0].onclick = function(){
  index()
  el($(".portf")[0])
}


pressbox.onclick = function(){
  entermouse(pressbox)
}
inboxs.onclick = function(){
  entermouse(inboxs)
}
$('.about')[0].onclick = function(){
  entermouse($('.about')[0])
}
$(".she")[0].onclick = function(){
  entermouse($(".she")[0])
}
$(".tpdf")[0].onclick =function(){
  entermouse($(".tpdf")[0])
}
$(".portf")[0].onclick = function(){
  entermouse($(".portf")[0])
}


$($("#pdfdrag")).lzhDrag({
  startDown: function () {
    entermouse($(".tpdf")[0])
    $(".tpdf")[0].style.marginBottom = 0

  },
  overMove: function (e) {
    if($(".tpdf")[0].offsetTop<0){
      $(".tpdf")[0].style.top = 0
    }
    // $("body")[0].style.minHeight=850+"px"
}
})

$($('#pressdrag')).lzhDrag({
  startDown: function () {
    entermouse(pressbox)
    pressbox.style.marginBottom = 0

  },
  overMove: function (e) {
    if(pressbox.offsetTop<0){
      pressbox.style.top = 0
    }
    // $("body")[0].style.minHeight=850+"px"
}
})
$($("#inboxdrag")).lzhDrag({
    startDown: function () {
      entermouse(inboxs)
      inboxs.style.marginBottom = 0
    },
    overMove: function (e) {
      if(inboxs.offsetTop<0){
        inboxs.style.top = 0
      }
      // $("body")[0].style.minHeight=850+"px"
    }
  })
$($("#aboutdrag")).lzhDrag({
  startDown: function () {
    entermouse($('.about')[0])
    $('.about')[0].style.marginBottom = 0

  },
  overMove: function (e) {
    if($('.about')[0].offsetTop<0){
      $('.about')[0].style.top = 0
    }
    // $("body")[0].style.minHeight=850+"px"
}
})
$($("#shedrag")[0]).lzhDrag({
  startDown: function () {
    entermouse($(".she")[0])
    $(".she")[0].style.marginBottom = 0

  },
  overMove: function (e) {
    if($(".she")[0].offsetTop<0){
      $(".she")[0].style.top = 0
    }
    // $("body")[0].style.minHeight=850+"px"
}
})

$($("#portdrag")[0]).lzhDrag({
  startDown: function () {
    entermouse($(".portf")[0])
    $(".portf")[0].style.marginBottom = 0

  },
  overMove: function (e) {
    if($(".portf")[0].offsetTop<0){
      $(".portf")[0].style.top = 0
    }
    // $("body")[0].style.minHeight=850+"px"
}
})





$("#pdfclose")[0].onclick = function(){
  $(".tpdf")[0].style.display = 'none'
}