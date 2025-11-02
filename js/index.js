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
    <div class="message"></div>
  </div>`)
}

$('.event').each((idx) => {
  const d = $($('.event .date')[idx]).attr('data')

  if (!d) {
    $($('.event .message')[idx]).html(`À venir`).show()
    return true
  }

  const date = new Date(d).getTime()
  const today = new Date().getTime()

  if ((date - today < 0) && (date - today > -(1000*60*60*24))) {
    $($('.event .message')[idx]).html(`C'est aujourd'hui`).show()
  } else if (date - today > 0) {
    const distance = date - new Date().getTime()
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    $($('.event .message')[idx]).html(`Plus que ${days} ${days > 1 ? 'dodos':'dodo'}`).show()
  } else {
    $($('.event')[idx]).append(`<div class="red-corner"></div>
      <div class="ended">Terminé</div>`)
  }
})