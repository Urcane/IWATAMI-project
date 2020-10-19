import CONFIG from "../../globals/config";

const overviewCardTemplates = (kolam) => `
    <div class="col-sm-12 col-lg-6">
        <div class="card">
            <div class="card-header bg-white">
                <h5 class="float-left">${kolam.name}</h5>
                <div class="float-right">
                    <select class="form-control" id="kondisi-selector">
                        <option value="ph">pH</option>                            
                        <option value="konduktivitas">Konduktivitas</option>
                        <option value="do">DO</option>            
                        <option value="suhu">Suhu</option>
                        <option value="sisa pangan">Sisa Pangan</option>
                    </select>
                </div>
            </div>
            <img class="card-img-top" src="${CONFIG.DUMMY_IMAGE_CHART}"></img>
            <div class="card-body">
                <div class="row" id="lastest-data">
                    <div class="col-sm-2 text-center">
                        <p class="label-card">pH</p>
                        <h4 class="card-title">${CONFIG.SHORTCUT_LASTEST_DATA(kolam).ph}</h4 class="card-title">
                        <p class="card-text">${(CONFIG.SHORTCUT_LASTEST_DATA(kolam).ph - CONFIG.SHORTCUT_SECOND_LASTEST_DATA(kolam).ph).toString().substr(0,4)}</p>
                    </div>
                    <div class="col-sm-2 text-center">
                        <p class="label-card">Konduktivitas</p>
                        <h4 class="card-title">${CONFIG.SHORTCUT_LASTEST_DATA(kolam).konduktivitas}</h4 class="card-title">
                        <p class="card-text">${(CONFIG.SHORTCUT_LASTEST_DATA(kolam).konduktivitas - CONFIG.SHORTCUT_SECOND_LASTEST_DATA(kolam).konduktivitas).toString().substr(0,4)}</p>
                    </div>
                    <div class="col-sm-4 text-center">
                        <p class="label-card">DO</p>
                        <h2>${CONFIG.SHORTCUT_LASTEST_DATA(kolam).do}ppm</h2>
                        <p class="card-text">${(CONFIG.SHORTCUT_LASTEST_DATA(kolam).do - CONFIG.SHORTCUT_SECOND_LASTEST_DATA(kolam).do).toString().substr(0,4)}ppm</p>
                    </div>
                    <div class="col-sm-2 text-center">
                        <p class="label-card">Suhu</p>
                        <h4 class="card-title">${CONFIG.SHORTCUT_LASTEST_DATA(kolam).suhu}°C</h4 class="card-title">
                        <p class="card-text">${(CONFIG.SHORTCUT_LASTEST_DATA(kolam).suhu - CONFIG.SHORTCUT_SECOND_LASTEST_DATA(kolam).suhu).toString().substr(0,4)}°C</p>
                    </div>
                    <div class="col-sm-2 text-center">
                        <p class="label-card">Sisa pakan</p>
                        <h4 class="card-title">${CONFIG.SHORTCUT_LASTEST_DATA(kolam).sisaPakan}kg</h4 class="card-title">
                        <p class="card-text">${(CONFIG.SHORTCUT_LASTEST_DATA(kolam).sisaPakan - CONFIG.SHORTCUT_SECOND_LASTEST_DATA(kolam).sisaPakan).toString().substr(0,4)}kg</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const createTableHistory = (kolam, tanggal) => `
    <td>${tanggal}</td>
    <td>${kolam.ph}</td>
    <td>${kolam.konduktivitas}</td>
    <td>${kolam.do}</td>
    <td>${kolam.suhu}</td>      
    <td>${kolam.sisaPakan}</td>
`;

export {overviewCardTemplates, createTableHistory}