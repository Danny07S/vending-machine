var vending = new Vending();

$('#saveUang').click(function(){
    let uang = $('#uang').val();
    saveUang = vending.saveUang(uang);
    if(saveUang.status == true) {
        $('#saldo').val(vending.saldo);
    } else {
        alert(saveUang.keterangan);
    }
});

$('#ambilUang').click(function(){
    let uang = vending.saldo;
    alert("uang kembalian anda adalah " + uang);
    vending.setSaldo(0);
    $('#saldo').val(vending.saldo);
});

function pesan(makanan) {

    cekStokMakanan = vending.cekStokMakanan(makanan);
    if(cekStokMakanan.status) {
        cekSaldo = vending.cekSaldo(makanan);
        if(cekSaldo.status) {
            transaksi = vending.transaksi(makanan);
            alert(transaksi.keterangan);
            $('#saldo').val(vending.saldo);
            $("#jumlah_"+makanan).text('('+transaksi.stok+')');
        } else {
            alert(cekSaldo.keterangan);
        }
    } else {
        alert(cekStokMakanan.keterangan);
    }

}

