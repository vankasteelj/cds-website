for (let i in equipe) {
  if (equipe[i].old) {
    $('#other').html(equipe[i].old)
    continue
  }

  const member = equipe[i]
  $('#orgas .row').append(`          
    <div class="orga" onclick="popup(${i})">
      <div class="portrait" style="background-image: url(${member.portrait})"></div>
      <div class="presentation">
        <p class="name">${member.name}</p>
        <p class="roles">${member.roles}</p>
      </div>
    </div>`)
}

const popup = (i) => {
  const content = equipe[i].popup
  console.log('Open popup (%s)', equipe[i].name)
  
  $('#popupcontent').append(`</div><div id="customhtml">
    ${content}
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
