import DrawerInitiator from "../utils/drawer-initiator";
import Overview from "./pages/overview";
import DataHistory from './pages/history';
import Account from './pages/account';
import Chart from './pages/chart';
import Settings from './pages/settings';

class App {
    constructor({ button, drawer, content}) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialShell()
    }

    async _initialShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content
        })
    }

    async renderPage({ overviewPages, chartPages, historyPages, settingsPages, accountPages }) {
        overviewPages.innerHTML = await Overview.render()
        await Overview.afterRender()

        chartPages.innerHTML = await Chart.render()
        await Chart.afterRender()

        historyPages.innerHTML = await DataHistory.render()
        await DataHistory.afterRender()
        
        settingsPages.innerHTML = await Settings.render()
        await Settings.afterRender()
        
        accountPages.innerHTML = await Account.render()
        await Account.afterRender()
    }
};

export default App