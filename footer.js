const footer = `
<div class="flex-container">
  <div class="flex-item-left" id="facebook"><a href="https://www.facebook.com/Lecycledesonges" target="_blank"><img src="./images/facebook.png" alt="Logo Facebook et lien vers la page de ce réseau social"></a></div>
  <div class="flex-item-center"><a href="mailto:lecycledessonges@gmail.com">lecycledessonges@gmail.com</a></div>
  <div class="flex-item-right"><a href="./qui-sommes-nous.html">Qui sommes-nous&nbsp;?</a></div>
</div>
<p id="madeby">&copy; ${new Date().getFullYear()} Les Chats-pitrés - Sous l'égide de <a href="https://etencore-asbl.org/" target="_blank">Et Encore... asbl</a> - Site web créé avec &hearts; par <a href="https://github.com/vankasteelj" target="_blank">Jean van Kasteel<a></p>
`

document.getElementById('footer').innerHTML = footer