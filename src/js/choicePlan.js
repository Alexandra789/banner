const choicePlanButton = document.querySelector('.continue-btn');

const plans = document.querySelectorAll('.card');

const APPLE_LINK = 'https://apple.com/';
const GOOGLE_LINK = 'https://google.com/';

const PLANS_LINK = {'monthly': APPLE_LINK, 'annually': GOOGLE_LINK};

plans.forEach((plan) => {
    plan.addEventListener('click', () => {
        let currentActive = document.querySelector('.card.active');
        currentActive.classList.remove('active');
        plan.classList.add('active');
        choicePlanButton.setAttribute('href', PLANS_LINK[plan.getAttribute('id')])
    })
})