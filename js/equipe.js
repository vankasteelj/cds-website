const equipe = [
  {
    name: 'Alex',
    roles: 'Logistique<br>PNJ',
    portrait: './images/equipe/alexp.png',
    popup: `<h1>Alex</h1>
    <h2>Grand chambellan de l'ordre logistique</h2>
    <p>Alex est arrivé dans le monde du GN un peu par hasard pour donner un coup de main. Et c'est ainsi qu'il vie sa vie : en allant d'un heureux hasard au suivant, en semant derrière lui les graines de bonne humeur et de joyeux bordel.</p>
    <p>Pacifiste et pacificateur, il mettra tout en œuvre pour que vos projets voient le jour, en y ajoutant la juste dose de préparation et d'improvisation pour les rendre intéressants et pleinement accomplis. Si votre projet concerne la restauration de la Principauté de Liège, il y mettre sans aucun doute les bouchées doubles. Assertif, il n'a aucun mal à mettre les pieds dans le plat pour pointer de la voix ce qui ne fonctionne pas, et le résoudre.</p>
    <p>Tranquille, malicieux et blagueur, son sérieux n'a d'égal que la longueur de ses cheveux.`
  },  
  {
    name: 'Justine',
    roles: 'Gestion de projet<br>Com - Scénarios',
    portrait: './images/equipe/justinep.png',
    popup: `<h1>Justine</h1>
    <h2>Cheffe en chef</h2>
    <p>Islamogauchiste, woke et féministe aux cheveux colorés, Justine aimerait devenir mécène quand elle sera grande.</p>
    <p>Ce qu'elle n'a pas en imagination, elle le compense par une créativité et une façon de penser "out-of-the-box" pour trouver des solutions plutôt que s'épancher sur des problèmes. Ce qui ne l'empêche pas de s'épancher sur les solutions, puisqu'on peut difficilement la faire arrêter de parler quand un sujet la passionne.</p>
    <p>Empathique de nature, elle fera toujours passer le bien-être des humains avant celui du projet. Un des points communs de ses projets c'est qu'elle se retrouve souvent propulsée cheffe sans l'avoir demandé et, chose étonnante pour elle, sans rencontrer d'opposition. Ce qui lui laisse toute latitude poru remettre en page ce que ses co-orgas chaotiques ont écrit.</p>`
  },  
  {
    name: 'Kevin',
    roles: 'Univers<br>Scénarios',
    portrait: './images/equipe/kevinp.png',
    popup: `<h1>Kevin</h1>
    <h2>Gratte-papier</h2>
    <p>Plus personne n'ose faire le compte des GN auxquels Kev a participé, ni même de ceux qu'il est en train d'écrire. Est-ce qu'il y en 50 ? 100 ? Encore plus ?</p>
    <p>Toujours est-il que l'adage qui oppose la qualité à la quantité ne s'applique pas à cet auteur dont l'imagination semble illimitée, de même que sa gentillesse, son amour pour les mauvaises blaques et sa passion pour l'Histoire (la vraie, celle avec un grand H et des femmes).</p>
    <p>Personne ne sait non plus ce que Kev préfère dans le GN : l'évènement ou le trajet en train pour s'y rendre ? Excellent compagnon de route et d'une efficacité redoutable, Kev sera toujours disponible pour vous guider sur la voie de l'ogranisation de GN ou pour vous sortir élégamment d'une impasse scénaristique. Et s'il y a de la sangria, c'est encore mieux.</p>`
  },  
  {
    name: 'Laura',
    roles: 'Scénarios - Univers<br>Com',
    portrait: './images/equipe/laurap.png',
    popup: `<h1>laura</h1>
    <h2>Ministre de l'Univers & de la Propagande</h2>
    <p>Concentré de courage, d'énergie, d'idées et de créativité, Laura est capable de retourner la terre entière si c'est pour un projet qui lui tient à cœur ou une personne qu'elle aime. Gare à quiconque s'en prendrait à l'un ou à l'autre !</p>
    <p>Dotée d'un sens de l'organisation à toute épreuve en plus d'une imagination débordante, elle organiserait bien 40 GN par an si elle disposait de plus de 24h dans une journée (ce dont elle rêve secrètement), et si son énergie n'était pas de la même nature que celle de ses chats : le chaos.</p>
    <p>Laura n'a peur de rien et est capable de tout, elle est la force motrice dont toute l'équipe a besoin pour mener son projet à terme.</p>`
  },  
  {
    name: 'Pilou',
    roles: 'Logistique<br>Scénographie',
    portrait: './images/equipe/piloup.png',
    popup: `<h1>Pilou</h1>
    <h2>Producteur exécutif</h2>
    <p>La seule différence qu'il y a entre Pilou et une marraine fée, c'est que Pilou, il existe bel et bien.</p>
    <p>Il réalise donc véritablement vos rêves de GN, ou les brise s'ils sont impossibles à mettre en musique. Si "impossible" est dans son vocabulaire, "peut-être" n'y a quant à lui pas sa place : c'est oui ou c'est non, mais certainement pas entre les deux.</p>
    <p>Véritable devin, il est capable d'anticiper vos propres pensées et d'avoir résolu les défis logistiques avant même qu'elles ne se forment dans votre cerveau. Logisticien hors pair, écolo convaincu, il viendrait probablement sur les sites de GN en voilier si les voies maritimes le permettaient.</p>`
  },  
  {
    name: 'Sara',
    roles: 'Scénarios<br>Craft - Scénographie',
    portrait: './images/equipe/sarap.png',
    popup: `<h1>Sara</h1>
    <h2>Députée des couteaux suisses</h2>
    <p>Sara essaie de gagner le concours du plus gros syndrome de l'imposteuse d'orga, mais se retrouve face à une rude concurrence interne.</p>
    <p>Versatile, elle a la qualité rare et incroyable d'aimer autant la logistique que la partie écriture et univers, ce qui en fait - de facto - la seule orga complète de l'équipe (prends ça, syndrome).</p>
    <p>La qualité de son écriture n'a d'égale que la beauté de ses décors, et n'est surpassée que par ses qualités musicales. Quand on l'entend chanter, on se dit que "finalement, un épisode comédie musicale, ça serait bien".</p>`
  },
]

for (let i in equipe) {
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
