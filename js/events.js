const events = [
  {
    image: './images/events/20260627_event3_sous_leurs_ailes.jpg',
    title: 'Sous leurs ailes',
    subtitle: 'Le Cycle des Songes - Évent 3',
    date: '2026-06-27'
  },
  {
    image: './images/events/20241019_event2_ne_pleure_pas_jeannette.jpg',
    title: 'Ne pleure pas, Jeannette',
    subtitle: 'Le Cycle des Songes - Évent 2',
    date: '2024/10/19'
  },
  {
    image: './images/events/20230624_event1_je_vous_declare.jpg',
    title: 'Je vous déclare',
    subtitle: 'Le Cycle des Songes - Évent 1',
    date: '2023/06/24'
  }
]

for (let i in events) {
  const event = events[i]
  $('#generated_events').append(`<div class="event" onclick="location.href='./evenements.html'">
    <div class="background-image" style="background-image: url(${event.image})"></div>
    <div class="description">
      <span class="title">${event.title}</span>
      <span class="subtitle">${event.subtitle}</span>
      <span class="date" data="${event.date}">${new Date(event.date).toLocaleDateString()}</span>
    </div>
  </div>`)
}

const pad = (n) => n < 10 ? '0' + n : n

$('.event').each((idx) => {
  const d = $($('.event .date')[idx]).attr('data')
  const date = new Date(d).getTime()
  const today = new Date().getTime()

  if (date - today > 0) {
    $($('.event')[idx]).append(`<div class="countdown">
      <span class="days">00</span> jours <span class="hours">00</span>h <span class="minutes">00</span>min <span class="seconds">00</span>sec
    </div>`)

    const time = () => {
      const distance = date - new Date().getTime()
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      $($('.event .days')[idx]).text(pad(days))
      $($('.event .hours')[idx]).text(pad(hours))
      $($('.event .minutes')[idx]).text(pad(minutes))
      $($('.event .seconds')[idx]).text(pad(seconds))
    }
    time()
    setInterval(time, 1000)
    $($('.event .countdown')[idx]).show()
  } else {
    $($('.event')[idx]).append(
      `<div class="red-corner"></div>
      <div class="ended">Terminé</div>`)
  }
})