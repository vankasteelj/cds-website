// timeline
const timeline = [
  {
    date: `2013`,
    title: `22 novembre 2013`,
    content: `Élections législatives communautaires (Mandat 2014-2017).`
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
    title: `12 sepembre 2010`,
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
        `</div>`+
      `</div>`+
      `<div class="ag-timeline-card_arrow"></div>`+
    `</div>`+
  `</div>`

  $('.ag-timeline_list').append(card)
}

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