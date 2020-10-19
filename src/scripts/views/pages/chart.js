const Chart = {
    render() {
        return `
            <div class="row">
                <nav class="col-sm-10">
                    <div class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="harian-tab" data-toggle="tab" href="#harian" role="tab" aria-controls="harian" aria-selected="true">Data Harian</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link disabled" id="disabled-tab-jam" data-toggle="tab" href="#" role="tab" aria-controls="no-data" aria-selected="false">Data Per Jam</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link disabled" id="disable-tab-menit" data-toggle="tab" href="#" role="tab" aria-controls="no-data-2" aria-selected="false">Data Per Menit</a>
                        </li>
                    </div>
                </nav>
            </div>
        `
    },

    afterRender() {

    }
};

export default Chart;