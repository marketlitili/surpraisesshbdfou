card.addEventListener('click', () => {

  const music = document.getElementById("bgMusic")
  music.play()

  card.classList.toggle('open')

  if(card.classList.contains('open')){
    cardPhoto.classList.add('visible')
  } else {
    cardPhoto.classList.remove('visible')
  }
})