const popup = (letter, i) => {
  const desc = abcbook[letter][i].desc
  const word = abcbook[letter][i].word

  console.log('Open popup (%s)', abcbook[letter][i].word)
  
  $('#popupcontent').append(`<div id="customhtml">
    <h3>${word}</h3>
    <div class="description">${desc}</p>
  </div>`)

  $('#popup').show()
  document.documentElement.style.overflow = 'hidden'
  document.body.scroll = 'no'

  $('#popupbackground').off('click').on('click', () => {
    $('#popup').hide()
    $('#popupcontent').html('')
    document.documentElement.style.overflow = 'scroll'
    document.body.scroll = 'yes'
  })
}

for (let letter in abcbook) {
  let words = abcbook[letter]

  let elm = `<div class="letter">
    <h3>${letter}</h3>
    <ul>`

  for (let i in words) {
    elm += `<li onclick="popup('${letter}', ${i})">${words[i].word}</li>`
  }

  elm += `</ul></div>`
  $('#abcbook').append(elm)
}