const Account = {
    render() {
        return `
        <form>
            <div class="card">
                <div class="card-header bg-white">
                    <h5 class="card-title">Detail Profil</h5>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <label for="username-account" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="username-account" placeholder="username">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="user-email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="user-email" placeholder="user@iwatami.com">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="user-password" class="col-sm-2 col-form-label">Kata Sandi</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="user-password" autocomplete="off">
                        </div>
                    </div>

                    
                    <div class="form-group row">
                        <label for="confirm-user-password" class="col-sm-2 col-form-label">Konfirmasi Kata Sandi</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="confirm-user-password" autocomplete="off">
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

export default Account;