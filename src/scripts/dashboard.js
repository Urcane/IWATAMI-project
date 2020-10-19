import '../style/dashboard.css'
import '../style/bootstrap.css';
import App from './views/app';

const app = new App({
    button: document.querySelector('#btn-drawer-trigger'),
    drawer: document.querySelector('#sidebar'),
    content: document.querySelector('#main-content')
})

window.addEventListener('load', () => {
    app.renderPage({
        overviewPages: document.querySelector('#overview'),
        chartPages: document.querySelector('#chart'),
        historyPages: document.querySelector('#history'),
        settingsPages: document.querySelector('#settings'),
        accountPages: document.querySelector('#account')
    })
})