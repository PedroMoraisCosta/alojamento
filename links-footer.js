/*Traducoes footer*/

/*Links Rentalia*/
const linksRentalia = {
  pt: 'https://pt.rentalia.com/945659',
  fr: 'https://fr.rentalia.com/945659',
  en: 'https://www.rentalia.com/945659'
}

document.getElementById('rentalia-link').href = linksRentalia[getLanguage()]

/*Links Airbnb*/
const linksAirbnb = {
  pt: 'https://www.pixar.com/404',
  fr: 'https://fr.airbnb.ch/hosting/listings',
  en: 'https://www.pixar.com/404'
}

document.getElementById('airbnb-link').href = linksAirbnb[getLanguage()]
