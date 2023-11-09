// Mengambil nilai jenis kelamin, berat badan, dan tinggi badan dari HTML
function calculateBMI() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const bmi = weight / (height * height);
  
    // rumus dalam brief menggunakan decision
    if (bmi < 18.5) {
      document.getElementById("category").innerText = "Kekurangan berat badan";
    } else if (bmi < 24.9) {
      document.getElementById("category").innerText = "Normal (ideal)";
    } else if (bmi < 29.9) {
      document.getElementById("category").innerText = "Kelebihan berat badan";
    } else {
      document.getElementById("category").innerText = "Kegemukan (Obesitas)";
    }
  
    // Tampilkan data yang dimasukkan pengguna
    document.getElementById("genderResult").innerText = gender === "male" ? "Laki-laki" : "Perempuan";
    document.getElementById("weightResult").innerText = weight;
    document.getElementById("heightResult").innerText = height;
    document.getElementById("result").innerText = bmi;
  }

  // anjay abiez