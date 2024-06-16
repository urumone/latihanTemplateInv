// Add JS here

var inv = {
    meja: {
      biro: 20,
      belajar: 10
    },
    kursi: {
      lipat: 40,
      kayu:10,
      chitos: 15
    },
  
    mejaRusak: function(x, y) {
      let newMeja = {...this.meja}
      newMeja.biro = x;
      newMeja.belajar = y;
      
      return newMeja
  },
    
    kursiRusak: function(a, b, c) {
      let newKursi = {...this.kursi}
      newKursi.lipat = a;
      newKursi.kayu = b;
      newKursi.chitos = c;
      
      return newKursi
    },
    
     mejaBaik: function(j, k) {
      let newMejaBaik = {...this.meja}
      newMejaBaik.biro = j;
      newMejaBaik.belajar = k;
      
      return newMejaBaik
    },
    
     kursiBaik: function(m, n, o) {
      let newKursiBaik = {...this.kursi}
      newKursiBaik.lipat = m;
      newKursiBaik.kayu = n;
      newKursiBaik.chitos = o;
      
      return newKursiBaik
    }
  }
  
  var mejaRusak = inv.mejaRusak(6, 2)
  var kursiRusak = inv.kursiRusak(5, 4, 2)
  
  console.log(inv.newMeja)
  
  
  console.log(inv.meja)
  console.log(inv.kursi)
  
  
  console.log(mejaRusak)
  console.log(kursiRusak)
  
  
  // Menghitung total Meja Baik
  let getMejaValue = Object.values(inv.meja)
  let getMejaRusakValue = Object.values(mejaRusak)
  
  function totalMeja(satu, dua) {
    var hasilMejaBaik = [
      satu[0] - dua[0],
      satu[1] - dua[1]
    ]
    
    return hasilMejaBaik
  }
  
  var hasilMejaBaik = (totalMeja(getMejaValue, getMejaRusakValue));
  
  
  
  // Menghitung Total Kursi Baik
  let getKursiValue = Object.values(inv.kursi);
  let getKursiRusakValue = Object.values(kursiRusak);
  
  
  function totalKursi(kursiA, kursiB) {
    var hasilKursiBaik = [
      kursiA[0] - kursiB[0],
      kursiA[1] - kursiB[1],
      kursiA[2] - kursiB[2]
    ];
    return hasilKursiBaik
  }
  
  var hasilKursiBaik = totalKursi(getKursiValue, getKursiRusakValue);
  
  
  // Mengembalikan Nilai Fungsi Meja Baik dan Kursi Baik
  
  var mejaBaik = inv.mejaBaik(hasilMejaBaik[0], hasilMejaBaik[1]);
  var kursiBaik = inv.kursiBaik(hasilKursiBaik[0], hasilKursiBaik[1], hasilKursiBaik[2]);
  
  // Tampilkan Hasil di layar
  
  var text = "";
  var text1 = "";
  var text2 = "";
  var text3 = "";
  var text4 = "";
  var text5 = "";
  
  // meja
  for(let [barang, jumlah] of Object.entries(inv.meja)) {
    text += barang + " : " + jumlah + "<br>"
  }
  
  // meja rusak
  for(let [barang, jumlah] of Object.entries(mejaRusak)) {
    text1 += barang + " : " + jumlah + "<br>"
  }
  
  // meja baik
  for(let [barang, jumlah] of Object.entries(mejaBaik)) {
    text4 += barang + " : " + jumlah + "<br>"
  }
  
  // kursi
  
  for(let[barang, jumlah] of Object.entries(inv.kursi)) {
    text2 += barang + " : " + jumlah + "<br>"
  }
  
  // Kursi rusak
  for(let[barang, jumlah] of Object.entries(kursiRusak)) {
    text3 += barang + " : " + jumlah + "<br>"
  }
  
  // kursi baik
  for(let[barang, jumlah] of Object.entries(kursiBaik)) {
    text5 += barang + " : " + jumlah + "<br>"
  }
  
  
  document.getElementById("demo").innerHTML = text
  
  document.getElementById("demo1").innerHTML = text1
  
  document.getElementById("demo2").innerHTML = text2
  
  document.getElementById("demo3").innerHTML = text3
  
  document.getElementById("demo4").innerHTML = text4
  
  document.getElementById("demo5").innerHTML = text5