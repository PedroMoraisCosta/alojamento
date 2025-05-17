function loadLanguage (lang) {
  // Guarda a língua selecionada no armazenamento local
  localStorage.setItem('selectedLanguage', lang)

  fetch(`./lang/${lang}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n')
        if (translations[key]) {
          element.innerText = translations[key]
        }
      })
    })
}

function getLanguage () {
  return localStorage.getItem('selectedLanguage') || 'pt'
}
