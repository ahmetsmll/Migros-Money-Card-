let mesaj = `Merhaba Hoşgeldiniz!
Money Kartınız Varmıydı?
Varsa "TAMAM" tuşuna basınız,
Yoksa "İPTAL" tuşuna basınız.
`;
let kartVarmiSonuc = confirm(mesaj);

let ürünler = [
  {
    fiyat: 30,
    ürünAd: "Süt",
  },
  {
    fiyat: 80,
    ürünAd: "Elma",
  },
  {
    fiyat: 20,
    ürünAd: "Çikolata",
  },
];

let ürünFiyat = 0;
    ürünler.forEach(ürün=>{
    ürünFiyat += ürün.fiyat;
    });


if (kartVarmiSonuc) {
  let ad = prompt("Adınızı Giriniz:");
  let soyad = prompt("Soyadınızı Giriniz:"); 
  const müsteri = new Müsteri(ad, soyad, kartVarmiSonuc, ürünler);
  alert(`Adınız : ${ad}
Soyadınız : ${soyad}
İndirimsiz Hesap : ${ürünFiyat} 
İndirim : ${ürünFiyat-müsteri.hesapla()}
Ödemeniz Gereken Hesap :  ${müsteri.hesapla()}   `);
} else {
  const müsteri = new Müsteri(null, null, kartVarmiSonuc, ürünler);
  alert("Ödenecek Tutar : " + müsteri.hesapla());
}
