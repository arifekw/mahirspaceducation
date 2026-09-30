// Aktifkan hanya setelah periode promo dan harga sebelumnya yang benar ditetapkan.
window.MAHIR_PROMO = {
  enabled: false,
  title: "Promo Mahir Space",
  endsAt: null, // ISO 8601 dengan zona waktu, mis. YYYY-MM-DDTHH:mm:ss+07:00
  previousPackagePrices: null, // {"1on1":[...4 harga lama...],"grup":[...4 harga lama...]}; paket harus sebanding
  quotaEndpoint: null // endpoint HTTPS/same-origin yang mengembalikan {remaining: integer, updatedAt: ISO timestamp}
};
