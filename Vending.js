class Vending {
    constructor() {
        this.makanan = [
            {
                nama : 'Biskuit',
                harga : 6000,
                stok : 10
            },
            {
                nama : 'Chips',
                harga : 8000,
                stok : 10
            },
            {
                nama : 'Oreo',
                harga : 10000,
                stok : 10
            },
            {
                nama : 'Tango',
                harga : 12000,
                stok : 10
            },
            {
                nama : 'Cokelat',
                harga : 15000,
                stok : 10
            },
            
        ];
        this.pecahanUang = [2000, 5000, 10000, 20000, 50000];
        this.saldo = 0;
    }

    saveUang(uang) {
        if(this.pecahanUang.includes(parseInt(uang))) {
            this.addSaldo(uang);
            return {status: true, keterangan: "Uang diterima silakan memilih makanan."};
        } else {
            return {status: false, keterangan: "Mohon masukkan nominal dengan pecahan (" + this.pecahanUang.join(', ') + ")."};
        }
    }

    addSaldo(saldo) {
        this.saldo = this.saldo + parseInt(saldo);
    }

    setSaldo(saldo) {
        this.saldo = parseInt(saldo);
    }

    cekStokMakanan(makanan) {
        for (var i = this.makanan.length - 1; i >= 0; i--) {
            if(this.makanan[i].nama == makanan) {
                if(this.makanan[i].stok > 0) {
                    return {status: true, keterangan: "stok ada"};
                }
                else {
                    return {status: false, keterangan: "Maaf stok makanan yang anda pilih habis."};
                }
            }
        }
        return {status: false, keterangan: "Maaf makanan yang anda pilih tidak tersedia."};
    }

    cekSaldo(makanan) {
        for (var i = this.makanan.length - 1; i >= 0; i--) {
            if(this.makanan[i].nama == makanan) {
                let currentSaldo = this.saldo;
                if(currentSaldo - this.makanan[i].harga > 0) {
                    return {status: true, keterangan: "Saldo ada"};
                } else {
                    return {status: false, keterangan: "Maaf saldo anda tidak cukup."}; 
                }
            }
        }
    }

    transaksi(makanan) {
        for (var i = this.makanan.length - 1; i >= 0; i--) {
            if(this.makanan[i].nama == makanan) {
                this.makanan[i].stok = this.makanan[i].stok - 1;
                this.setSaldo(this.saldo - this.makanan[i].harga);
                return {status: true, keterangan: "Pesanan sukses", stok: this.makanan[i].stok};
            }
        }
        return {status: false, keterangan: "Maaf makanan yang anda pilih tidak tersedia."}; 
    }
}