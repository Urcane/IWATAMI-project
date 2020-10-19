import SourceIwatami from "../../data/source-iwatami";
import { overviewCardTemplates } from "../templates/create-templates";

const Overview = {
    async render() {
        return `<div id="overviewContainer" class="row"></div>`
    },

    async afterRender() {
        const overviewContainer = document.querySelector('#overviewContainer')
        const data = await SourceIwatami.getAllData()

        Object.keys(data).forEach(kolam => {
            overviewContainer.innerHTML += overviewCardTemplates(data[kolam])
        });
    }
}

export default Overview;
