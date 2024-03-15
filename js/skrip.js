function dataPerson() {
    let nama = document.getElementById('nama').value;
    let pekerjaan = document.getElementById('pekerjaan').value;
    let hobby = document.getElementById('hobby').value;

    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = `
        <p>Nama: ${nama}</p>
        <p>Pekerjaan: ${pekerjaan}</p>
        <p>Hobby: ${hobby}</p>
    `;
}
