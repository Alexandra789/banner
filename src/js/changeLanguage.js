import {translations} from './translations'

let arrayText = document.querySelectorAll('[data-translate]');

let language = 'en';
const validLanguages = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh']

function checkQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const osLanguage = navigator.language.slice(0,2);
    if (langParam) {
        changeLanguage(langParam);
    } else {
        changeLanguage(osLanguage);
    }
}

function changeLanguage(newLanguage) {
    if (validLanguages.includes(newLanguage)) {
        language = newLanguage;
    }
    translatePage(language)
}

function translatePage(language) {
    arrayText.forEach(text => {
        text.setAttribute('data-translate',language);
        text.innerHTML = translations[language][text.innerHTML];
    })
}

checkQueryParams();

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     console.log(navigator.userAgent);
// } else {
// }