const container = document.querySelector('.container')
const bdg = document.querySelector('.bdg')
const imgs = document.querySelectorAll('.img')

container.addEventListener('click',function(e){
  if ( e.target.className == "img"){
   bdg.src = e.target.src
   bdg.classList.add('fade')

   setTimeout(function(){
     bdg.classList.remove('fade')
   },500)
   
   imgs.forEach(function(img){
     img.className = 'img'
   })
   e.target.classList.add('active')
  }
})
const toggle = document.querySelector('.toggle')
  const menu = document.querySelector('.menuon')

toggle.addEventListener('click',function(){
  menu.classList.toggle('menuoff')
  menu.classList.add('fade2')
  setTimeout(function(){
    menu.classList.remove('fade2')
  },1000)
})

const spans = document.querySelector('.allspan')

spans.addEventListener('click',function(e){
  if (e.target.className == 'span'){
        alert('can aya wa kalem')
  }
})

