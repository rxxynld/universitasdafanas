document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const biodataContent = document.getElementById('biodata-content');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Mengambil nilai dari setiap input
        const namaLengkap = document.getElementById('namaLengkap').value;
        const nim = document.getElementById('nim').value;
        const fakultas = document.getElementById('fakultas').value;
        const jurusan = document.getElementById('jurusan').value;
        const email = document.getElementById('email').value;
        const nomorHp = document.getElementById('nomorHp').value;
        
        // Memastikan semua form terisi
        if (!namaLengkap || !nim || !fakultas || !jurusan || !email || !nomorHp) {
            alert('Mohon lengkapi semua data formulir.');
            return;
        }

        // Membentuk konten HTML untuk biodata
        const contentHTML = `
            <h2>Biodata UNDAS</h2>
            <div class="data-item">
                <span class="label">Nama Lengkap:</span> ${namaLengkap}
            </div>
            <div class="data-item">
                <span class="label">NIM:</span> ${nim}
            </div>
            <div class="data-item">
                <span class="label">Fakultas:</span> ${fakultas}
            </div>
            <div class="data-item">
                <span class="label">Jurusan:</span> ${jurusan}
            </div>
            <div class="data-item">
                <span class="label">Email:</span> ${email}
            </div>
            <div class="data-item">
                <span class="label">Nomor HP:</span> ${nomorHp}
            </div>
        `;

        // Masukkan konten ke dalam div yang disembunyikan
        biodataContent.innerHTML = contentHTML;
        biodataContent.style.display = 'block'; // Tampilkan sebentar agar html2canvas bisa menangkapnya

        // Menggunakan html2canvas untuk mengunduh div sebagai gambar
        html2canvas(biodataContent, {
            scale: 2 // Tingkatkan resolusi gambar
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'biodata_undas.png'; // Nama file
            link.href = canvas.toDataURL('image/png');
            link.click();

            // Sembunyikan kembali div setelah selesai
            biodataContent.style.display = 'none';
            alert('Biodata berhasil diunduh sebagai gambar!');
        });
    });
});