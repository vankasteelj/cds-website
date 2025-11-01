// timeline
const timeline = [
  {
    date: '2024', 
    title: '30 septembre 2024', 
    content: 'Merlin est élu bourgmestre de Latet.',
    popup_type: `images`,
    popup_title: `Lire l'article de la Gazette`,
    popup_content: [`./images/gazette/20240930_merlin.jpg`, `./images/gazette/20240930_merlin2.jpg`]
  },
  {
    date: '2024',
    title: '22 avril 2024',
    content: 'Des affiches "Asphaleia sera entendue" ont été retrouvées placardées partout dans les Cités souterraines, notamment à Latet et Fondcombes.',
    popup_type: `image`, 
    popup_title: `Lire l'article de la Gazette`, 
    popup_content: `./images/gazette/20240422_asphaleia.jpg`
  },
  {
    date: '2023',
    title: '24 juin 2023',
    content: 'Drame au mariage d\'Arwen et Belle : Arwen est morte et a replopé<br>Rupture du "Décret d\'Arwen" par le Parlement Suprême<br>Révolte à Latet : les ENI se soulèvent dans la Cité souterraine',
    popup_type: `images`,
    popup_title: `Lire les articles de la Gazette`,
    popup_content: [
      `./images/gazette/20230624_flash_decret.jpg`,
      `./images/gazette/20230624_reactions_decret.jpg`,
      `./images/gazette/20230624_flash_drame_mariage.jpg`,
      `./images/gazette/20230624_nouvelle_peau_arwen.jpg`,
      `./images/gazette/20230624_flash_revolte_latet.jpg`
    ]
  },
  {
    date: `2013`,
    title: `22 novembre 2013`,
    content: `Élections législatives communautaires (Mandat 2014-2017).`,
  },
  {
    date: `2013`,
    title: `02 mars 2013`,
    content: `Mise en ligne du premier épisode du podcast <i>Chroniques Égrégores</i>.`
  },
  {
    date: `2013`,
    title: `25 février 2013`,
    content: `Affaire du Wagon : meurtre sordide d'un Rêveur par une Égrégore.`
  },
  {
    date: `2010`,
    title: `25 décembre 2010`,
    content: `Détachement provisoire d'Égrégores volontaires dans la Communauté afro-arabe (protection des Égrégores pendant les Printemps arabes).`
  },
  {
    date: `2010`,
    title: `27 octobre 2010`,
    content: `Affaire Mohun Biswas : mort de plusieurs Rêveur·ses dans une collectivité sectaire dirigée par un Égrégore.`
  },
  {
    date: `2010`,
    title: `12 septembre 2010`,
    content: `Démantèlement du "Réseau Cordélia", un réseau de capture et torture d'ENI. <br>Scandale sur la perception des ENI dans la société égrégore.`
  },
  {
    date: `2010`,
    title: `01 avril 2010`,
    content: `Nomination d'Arwen en tant que Présidente du Bureau des Songes (après la démission de Penthésilée).`
  },
  {
    date: `2008`,
    title: `10 juillet 2008`,
    content: `Inauguration officielle de la septième Cité (hors-sol) de la Communauté, dans les Cévennes : Fondcombe, en application du "Décret d'Arwen".`
  },
  {
    date: `2008`,
    title: `01 janvier 2008`,
    content: `Mise en application légale du "Décret d'Arwen", un décret exécutif du BdS limitant les déplacements des ENI et l'autonomie des Cités.`
  },
  {
    date: `1993`,
    title: `05 juillet 1993`,
    content: `Mise à jour d'un réseau clandestin anti-ENI dans les Cités souterraines, et procès retentissant du coupable (Adrien Deume).`
  },
  {
    date: `1991`,
    title: `15 mars 1991`,
    content: `Article-choc d'<b>Hermès </b> dans la <i> Gazette des Égrégores </i> dévoilant une corruption massive dans les Cités souterraines (BdS). <br>Nouvelle législation anticorruption.`
  },
  {
    date: `1985`,
    title: `27 septembre 1985`,
    content: `Dénouement mortel de l'Affaire Henri Chinaski (8 mort·es rêveur·ses). <br> Arrestation d'une bande d'Égrégores semant la terreur sous le nom de "Tueurs du Brabant".`
  },
  {
    date: `1980`,
    title: `01 janvier 1980`,
    content: `Transfert du siège du BdS francophone et du Parlement communautaire de Paris à Namur (pour 50 ans).`
  },
  {
    date: `1973`,
    title: `07 juillet 1973`,
    content: `Début de la politique de représentation féminine (à perpétuité) dans les institutions égrégores. <br> Institution de quotas et politique répressive sous le contrôle de l'APR.`
  },
]

for (i in timeline) {
  const item = timeline[i]
  const card = `<div class="js-timeline_item ag-timeline_item">`+
    `<div class="ag-timeline-card_box">`+
      (i % 2 == 1 ? `<div class="ag-timeline-card_meta-box"><div class="ag-timeline-card_meta">${item.title}</div></div><div class="js-timeline-card_point-box ag-timeline-card_point-box"><div class="ag-timeline-card_point">${item.date}</div></div>` :       `<div class="js-timeline-card_point-box ag-timeline-card_point-box"><div class="ag-timeline-card_point">${item.date}</div></div><div class="ag-timeline-card_meta-box"><div class="ag-timeline-card_meta">${item.title}</div></div>`) +
    `</div>`+
    `<div class="ag-timeline-card_item">`+
      `<div class="ag-timeline-card_inner">`+
        (item.image ? `<div class="ag-timeline-card_img-box"><img src="${item.image}" class="ag-timeline-card_img"/></div>`:'')+
        `<div class="ag-timeline-card_info">`+
          `<div class="ag-timeline-card_title">${item.title}</div>`+
          `<div class="ag-timeline-card_desc">${item.content.length > 130 ? item.content : item.content + ' &nbsp;'.repeat((130 - item.content.length)/2+1)}</div>`+
          (item.popup_type ? `<div class="ag-timeline-card_popup" onclick="popup('${item.popup_type}', '${i}')">${item.popup_title}</div>` : '')+
        `</div>`+
      `</div>`+
      `<div class="ag-timeline-card_arrow"></div>`+
    `</div>`+
  `</div>`

  $('.ag-timeline_list').append(card)
}

const popup = (type, i) => {
  const content = timeline[i].popup_content
  console.log('Open popup (%s) with:', type, content)
  if (type === "image") {
    $('#popupcontent').append(`<img src="${content}">`)
  } else if (type === "images") {
    let elm = `<div class="slideshow-container">`

    // slides
    for (let i in content) {
      elm += `<div class="slides fade">
        <div class="numbertext">${parseInt(i) + 1} / ${content.length}</div>
        <img src="${content[i]}">
      </div>`
    }

    elm += `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    </div>`

    $('#popupcontent').append(elm)
    
    slideIndex = 1
    showSlides(slideIndex)

    $('html').off('keydown').on('keydown', (e) => {
      switch (e.key) {
        case "ArrowLeft":
          plusSlides(-1)
          break;
        case "ArrowRight":
          plusSlides(1)
          break;
      }
    })

    let clicked = true;
    $('.slides img').off('click').on('click', () => {
      clicked = !clicked
      if (!clicked) {
        $('.prev,.next').hide(500)
      } else {
        $('.prev,.next').show()
      }
    })
    $('#popupcontent').off('mousemove').on('mousemove', () => {
      clicked = true
      $('.prev,.next').show()
    })

  } else if (type === "html") {
    $('#popupcontent').append(content)
  }

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

// slides javascript from https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1
const showSlides = (n) => {
  let i
  let slides = document.getElementsByClassName('slides')
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slideIndex-1].style.display = 'block'
}
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

// timeline scroll & animation - taken from https://codepen.io/alvarotrigo/pen/yLzBJaN
(function ($) {
  $(function () {

    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });


    var agTimeline = $('.js-timeline'),
      agTimelineLine = $('.js-timeline_line'),
      agTimelineLineProgress = $('.js-timeline_line-progress'),
      agTimelinePoint = $('.js-timeline-card_point-box'),
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
      });

      f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({height: n + "px"});

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
      })
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }


  });
})(jQuery);