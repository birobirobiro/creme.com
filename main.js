// A cada novo slide precisa instanciar de novo com outro id

new Splide(`#splide${1}`, {
  // autoplay: true,
  // interval: 3000,
  pagination: false,
  arrows: false,
  keyboard: true,
  autoWidth: true,
}).mount()
