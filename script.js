const btn   = document.getElementById('lihatPesanBtn');
const pesan = document.getElementById('pesanText');
const bgm   = document.getElementById('bgm');

btn.addEventListener('click', function () {
    // munculin pesan
    pesan.style.display = 'block';

    // HILANGKAN tombol setelah diklik
    btn.style.display = 'none';

    // play musik dari awal
    if (bgm) {
        bgm.currentTime = 0;
        bgm.play().catch(err => {
            console.log('Gagal play musik:', err);
        });
    }
});