const Settings = {
    render() {
        return `
        <form>
        <div class="card">
            <div class="card-header bg-white">
                <h5 class="card-title">Detail Indikator</h5>
            </div>
            <div class="card-body row">
                <div class="col-sm-12 col-md-6" style="margin-bottom: 32px !important">
                    <h4 class="card-title"></h4>
                    <div class="form-group row">
                        <label for="max-ph" class="col-sm-8 col-form-label">Max pH</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="max-ph" placeholder="0">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="min-ph" class="col-sm-8 col-form-label">Min pH</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="min-ph" placeholder="0">
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6" style="margin-bottom: 32px !important">
                    <h4 class="card-title"></h4>
                    <div class="form-group row">
                        <label for="max-kondutivitas" class="col-sm-8 col-form-label">Max Konduktivitas</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="max-kondutivitas" placeholder="0">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="min-konduktivitas" class="col-sm-8 col-form-label">Min Konduktivitas</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="min-konduktivitas" placeholder="0">
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6" style="margin-bottom: 32px !important">
                    <h4 class="card-title"></h4>
                    <div class="form-group row">
                        <label for="max-do" class="col-sm-8 col-form-label">Max DO</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="max-do" placeholder="0">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="min-do" class="col-sm-8 col-form-label">Min DO</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="min-do" placeholder="0">
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6" style="margin-bottom: 32px !important">
                    <h4 class="card-title"></h4>
                    <div class="form-group row">
                        <label for="max-suhu" class="col-sm-8 col-form-label">Max suhu</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="max-suhu" placeholder="0">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="min-suhu" class="col-sm-8 col-form-label">Min Suhu</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="min-suhu" placeholder="0">
                        </div>
                    </div>
                </div>  
                <div class="col-sm-12 col-md-6" style="margin-bottom: 32px !important">
                    <h4 class="card-title"></h4>
                    <div class="form-group row">
                        <label for="min-sisaPangan" class="col-sm-8 col-form-label">Min Sisa Pangan</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="min-sisaPangan" placeholder="0">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-right">
                <a href="#" class="btn btn-outline-primary btn-lg disabled">Simpan</a>
                <a href="#" class="btn btn-light btn-lg disabled">Batal</a>
            </div>
        </div>
    </form>
        `
    },

    afterRender() {

    }
};

export default Settings;