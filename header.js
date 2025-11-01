const header = `
<a href="index.html">
  <div id="title">
    <img src="./images/logo-full.png" role="presentation" alt="">
    <h1>Le Cycle des Songes</h1>
  </div>
</a>
<label class="switch">
  <input type="checkbox" id="dyslexic">
  <span class="slider round"></span>
  <span class="toggle-label">Mode dyslexique</span>
</label>
<nav>
  <a href="univers.html">Univers</a>
  <a href="timeline.html">Timeline</a>
  <a>Documents</a>
  <a>Nos événements</a>
  <a>Qui sommes-nous&nbsp;?</a>
</nav>
`

document.getElementById('header').innerHTML = header

const onLoad = () => {
  if (localStorage.dyslexic_mode === '1') {
    $('#main').addClass('dyslexic')
    document.getElementById('dyslexic').checked = true
  }
}

const toggleDyslexic = () => {
  if (localStorage.dyslexic_mode === '1') {
    $('#main').addClass('dyslexic')
    document.getElementById('dyslexic').checked = true
  } else {
    $('#main').removeClass('dyslexic')
    localStorage.dyslexic_mode = '0'
    document.getElementById('dyslexic').checked = false
  }
}

$('#dyslexic').on('click', () => {
  if (localStorage.dyslexic_mode === '1') {
    localStorage.dyslexic_mode = '0'
  } else {
    localStorage.dyslexic_mode = '1'
  }
  toggleDyslexic()
})

onLoad()