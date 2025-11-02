
for (i in timeline) {
  const item = timeline[i]
  const card = `<div class="js-timeline_item ag-timeline_item">`+
    `<div class="ag-timeline-card_box">`+
      (i % 2 == 1 ? `<div class="ag-timeline-card_meta-box"><div class="ag-timeline-card_meta">${item.title}</div></div><div class="js-timeline-card_point-box ag-timeline-card_point-box"><div class="ag-timeline-card_point">${item.date}</div></div>` : `<div class="js-timeline-card_point-box ag-timeline-card_point-box"><div class="ag-timeline-card_point">${item.date}</div></div><div class="ag-timeline-card_meta-box"><div class="ag-timeline-card_meta">${item.title}</div></div>`) +
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

    // keyboard arrows to slide prev/next
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

    // click to hide buttons prev/next
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

    // swipe to slide
    let initialTouchX, initialTouchY, finalTouchX, finalTouchY
    const swipeThreshold = 100
    $('#popupcontent').off('touchstart').on('touchstart', function (event) {
      initialTouchX = event.touches[0].clientX
      initialTouchY = event.touches[0].clientY
    })
    $('#popupcontent').off('touchend').on('touchend', function (event) {
      finalTouchX = event.changedTouches[0].clientX
      finalTouchY = event.changedTouches[0].clientY

      const horizontalDistance = finalTouchX - initialTouchX
      const verticalDistance = finalTouchY - initialTouchY

      if (Math.abs(horizontalDistance) > Math.abs(verticalDistance) && Math.abs(horizontalDistance) > swipeThreshold) {
        if (finalTouchX - initialTouchX < 0) {
          plusSlides(1)
        } else {
          plusSlides(-1)
        }
      }
    })

  } else if (type === "html") {
    $('#popupcontent').append(`<div id="customhtml">${content}</div>`)
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
const timelineFn = function () {
  $(window).off('scroll').on('scroll', function () {
    fnOnScroll();
  });

  $(window).off('resize').on('resize', function () {
    fnOnResize();
  });

  var agTimeline = $('.js-timeline'),
    agTimelineLine = $('.js-timeline_line'),
    agTimelineLineProgress = $('.js-timeline_line-progress'),
    agTimelinePoint = $('.js-timeline-card_point-box'),
    agTimelineItem = $('.js-timeline_item:visible'),
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
}
timelineFn()

// search in timeline - taken from github.com/vankasteelj/frak
const searchTimeline = () => {
  const input = $('#search input')
  let timestamp = 0
  let lastSearch = false
  let searchCount = 0
  let searchLoop = false

  input.focus()

  // actual search
  const displayElements = (text) => {
    if (text) {
      console.log('Search for', text)
      $('#searchclose').show()
    } else {
      console.log('Reset search')
      text = ''
      $('#searchclose').hide()
    }
    $('.js-timeline_item').filter(function () {
      $(this).hide()
      return $(this).text().toLowerCase().indexOf(text.toLowerCase()) > -1
    }).show()
    timelineFn()
  }

  // search logic: on keydown check every 500ms is the input has change
  // fire a search when a new input is available and the person is not actively typing
  const clearSearch = () => {
    clearInterval(searchLoop)
    searchLoop = false
    searchCount = 0
    timestamp = 0
  }
  const resetSearch = () => {
    clearSearch()
    lastSearch = null
    input.off('keydown')
    input.val('')
    displayElements()
  }
  const search = () => {
    const split = input.val().split(' ').join('')
    if (timestamp === 0 || Date.now() - timestamp < 500 || lastSearch === split) {
      searchCount++
      if (searchCount > 10) clearSearch()
    } else {
      lastSearch = split
      // The actual search starts here
      displayElements(input.val())
      clearSearch()
    }
  }
  input.on('keydown', (e) => {
    timestamp = Date.now()
    if (searchLoop === false) searchLoop = setInterval(search, 500)
  })
  $('#searchclose').off('click').on('click', () => {
    resetSearch()
  })
}