for (let i in events) {
  if (events[i].type !== 'event') continue
  const event = events[i]
  $('#generated_events').append(`<div class="event" onclick="location.href='./evenements.html'">
    <div class="background-image" style="background-image: url(${event.image})"></div>
    <div class="description">
      <span class="title">${event.title}</span>
      <span class="subtitle">${event.subtitle}</span>
      <span class="date" data="${event.date}">${event.displayDate}</span>
    </div>
    <div class="countdown">
      <span class="days">00</span> jour(s) <span class="hours">00</span>h <span class="minutes">00</span>min <span class="seconds">00</span>sec
    </div>
  </div>`)
}

const pad = (n) => n < 10 ? '0' + n : n

$('.event').each((idx) => {
  const d = $($('.event .date')[idx]).attr('data')

  if (!d) {
    $($('.event .countdown')[idx]).html(`À venir`).show()
    return true
  }

  const date = new Date(d).getTime()
  const today = new Date().getTime()

  if ((date - today < 0) && (date - today > -(1000*60*60*24))) {
    $($('.event .countdown')[idx]).html(`C'est aujourd'hui`).show()
  } else if (date - today > 0) {
    const time = () => {
      const distance = date - new Date().getTime()
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      $($('.event .countdown')[idx]).find('.days').text(pad(days))
      $($('.event .countdown')[idx]).find('.hours').text(pad(hours))
      $($('.event .countdown')[idx]).find('.minutes').text(pad(minutes))
      $($('.event .countdown')[idx]).find('.seconds').text(pad(seconds))
    }
    time()
    setInterval(time, 1000)
    $($('.event .countdown')[idx]).show()
  } else {
    $($('.event')[idx]).append(`<div class="red-corner"></div>
      <div class="ended">Terminé</div>`)
  }
})