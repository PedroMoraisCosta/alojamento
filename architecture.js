document.addEventListener('DOMContentLoaded', function () {
  fetch('header.html')
    .then(res => res.text())
    .then(
      data => (document.getElementById('header-placeholder').innerHTML = data)
    )

  // Load index section if placeholder exists
  const indexSectionEl = document.getElementById('index-section-placeholder')
  if (indexSectionEl) {
    fetch('index-section.html')
      .then(res => res.text())
      .then(data => {
        indexSectionEl.innerHTML = data
      })
  }

  // Load index section if placeholder exists
  const gallerySectionEl = document.getElementById('galley-section-placeholder')
  if (gallerySectionEl) {
    fetch('gallery-section.html')
      .then(res => res.text())
      .then(data => {
        gallerySectionEl.innerHTML = data
      })
  }

   // Load index section if placeholder exists
  const reservationsSectionEl = document.getElementById('reservations-section-placeholder')
  if (reservationsSectionEl) {
    fetch('reservations-section.html')
      .then(res => res.text())
      .then(data => {
        reservationsSectionEl.innerHTML = data
      })
  }

  fetch('footer.html')
    .then(res => res.text())
    .then(
      data => (document.getElementById('footer-placeholder').innerHTML = data)
    )
})
