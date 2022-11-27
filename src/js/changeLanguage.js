import {translations} from './localizations/translations.js';

let arrayText = document.querySelectorAll('[data-translate]');

let language = 'en';
const validLanguages = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh']

function checkQueryParams() {
    const urlParams = new URL(window.location.href.replace('/#', ""));
    const langParam = urlParams.searchParams.get("lang");
    const osLanguage = navigator.language.slice(0, 2);
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
        text.setAttribute('data-translate', language);
        text.innerHTML = translations[language][text.innerHTML];
    })
}

checkQueryParams();