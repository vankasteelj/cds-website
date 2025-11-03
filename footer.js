const enc = 'bGVjeWNsZWRlc3Nvbmdlc0BnbWFpbC5jb20='
const split = atob(enc).split('@')
const dec = (elm) => elm.setAttribute('href', atob('bWFpbHRvOg==')+atob(enc))

const footer = `
<div class="flex-container">
  <div class="flex-item-left" id="facebook"><a href="https://www.facebook.com/Lecycledesonges" target="_blank"><img src="./images/facebook.png" alt="Logo Facebook et lien vers la page de ce réseau social"></a></div>
  <div class="flex-item-center"><a href="javascript:void()" onclick="dec(this)">${split[0]}<!--ZnVjayBvZmY=--><span class="ar"></span><!--ZnVjayBvZmY=-->${split[1]}</a></div>
  <div class="flex-item-right"><a href="./equipe.html">Qui sommes-nous&nbsp;?</a></div>
</div>
<p id="madeby">&copy; ${new Date().getFullYear()} Les Chats-pitrés - Site web créé avec &hearts; par <a href="https://github.com/vankasteelj" target="_blank">Jean van Kasteel<a></p>
`

document.getElementById('footer').innerHTML = footer