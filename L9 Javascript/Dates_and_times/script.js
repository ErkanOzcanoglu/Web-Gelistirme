let now = new Date(); // current date and time 
sonuc = now;
sonuc = now.getDate(); // day
sonuc = now.getDay(); // 0: pazar 6:cumartesi
sonuc = now.getFullYear(); // year
sonuc = now.getHours(); // hour
sonuc = now.getTime(); // minute

// Set Methods
now.setFullYear(2025);
now.setMonth(7);
sonuc = now;
console.log(sonuc);
console.log(typeof sonuc);
