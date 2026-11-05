const token = 123;

// 1. Cek Token
function CekToken(token) {
    console.log("Memeriksa token...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token > 0) {
                resolve({
                    token: token,
                    status: "valid"
                });
            } else {
                reject(new Error("Token tidak valid"));
            }
        }, 1000);
    });
}

// 2. Cek API
function CekAPI(token) {
    console.log("Menghubungi API...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token > 0) {
                resolve({
                    username: "vicky",
                    status: "success"
                });
            } else {
                reject(new Error("Gagal mengakses API"));
            }
        }, 1000);
    });
}

// 3. Cek User
function CekUser(username) {
    console.log("Memeriksa data user...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "vicky") {
                resolve({
                    user: "Vicky",
                    status: "active"
                });
            } else {
                reject(new Error("User tidak aktif"));
            }
        }, 1000);
    });
}

// 4. Proses Login dengan Promise
CekToken(token)
    .then(tokenResult => {
        console.log("Token valid");
        return CekAPI(tokenResult.token);
    })
    .then(api => {
        console.log("API berhasil");
        return CekUser(api.username);
    })
    .then(user => {
        console.log("Berhasil login:", user.user);
    })
    .catch(error => {
        console.log("Login gagal:", error.message);
    });