# 🚀 HOSTINGER KURULUM REHBERI - gulhavacılık.com

## ✅ Alan Adı Satın Alındı: gulhavacılık.com

Şimdi web sitenizi yayınlamak için adım adım yapacağız.

---

## 📋 ADIM 1: Hostinger Kontrol Paneline Giriş Yap

1. https://www.hostinger.com.tr adresine git
2. Sağ üstteki "Giriş Yap" butonuna tıkla
3. Email ve şifreni gir
4. "Giriş Yap" butonuna tıkla

---

## 📂 ADIM 2: File Manager'ı Aç

1. Hostinger dashboard'da sol menüden "Dosya Yöneticisi" veya "File Manager"ı seç
2. `public_html` klasörünü aç
3. Bu klasör senin web sitesinin root'u (ana klasörü)

**ÖNEMLİ:** Tüm dosyaları doğrudan `public_html` içine koyacaksın!

---

## 📤 ADIM 3: Dosyaları Yükle

### Yükleyecek Dosyalar:
1. ✅ `index.html`
2. ✅ `styles.css`
3. ✅ `script.js`
4. ✅ `logo.svg`

### Yükleme Yöntemleri:

#### **YÖNTEM A: Sürükle-Bırak (Kolay)**
1. File Manager'ı aç (`public_html` klasörü)
2. Windows'ta klasörü aç: `C:\Users\ggulc\Desktop\GUL.com`
3. 4 dosyayı seç (Ctrl+A)
4. File Manager'a sürükle-bırak
5. Bekleme: 2-3 saniye
6. ✅ Dosyalar yüklendi!

#### **YÖNTEM B: Tek Tek Yükleme**
1. File Manager'de "Yükle" butonuna tıkla
2. Dosya seç menüsünde 4 dosyayı seç
3. "Aç" butonuna tıkla
4. Bekleme: 5-10 saniye
5. ✅ Dosyalar yüklendi!

---

## ✅ ADIM 4: Alan Adı Bağlantısını Kontrol Et

1. Hostinger dashboard'da "Alanlar" veya "Domains"e git
2. `gulhavacılık.com` alan adını görmelisin
3. Status: "Bağlı" veya "Aktif" olmalı
4. DNS kayıtları otomatik Hostinger'a işaret ediyor

**Eğer sorun varsa:**
- Hostinger'ın nameserver'ları kullanıyorsunuz
- DNS propagation: 5-30 dakika (maksimum 24 saat)

---

## 🌐 ADIM 5: Web Sitenizi Test Et

1. Tarayıcında aç: `https://gulhavacılık.com`
2. Ana sayfanız yüklenmeli
3. Tüm öğeler görüntülenmeli (logo, animasyonlar, videolar)

**Eğer görünmezse:**
- F5 (refresh) tuşuna bas
- Cache'i temizle (Ctrl+Shift+Delete)
- 5-10 dakika bekle (DNS propagation)

---

## ⚙️ ADIM 6: Hostinger Ayarlarını Kontrol Et

### A. PHP Versiyonu (Opsiyonel)
1. Hostinger'da "Ayarlar" → "PHP Versiyonu"
2. En son sürümü seç (8.1+ önerilen)
3. Kaydet

### B. SSL Sertifikası (Otomatik)
✅ Hostinger otomatik olarak SSL sağlıyor
✅ `https://` otomatik çalışacak
✅ Tüm tarayıcılar güvenli olarak görecek

### C. Email Ayarı (Opsiyonel)
Kendi email adresini oluşturabilirsin:
- `info@gulhavacılık.com`
- `satislar@gulhavacılık.com`

---

## 🎨 ADIM 7: İçerik Özelleştirmeleri

Eğer dosyaları güncellemek istersen:

1. Dosyayı düzenle (VS Code'da)
2. Kaydet
3. Hostinger File Manager'da dosyayı sil
4. Yeni dosyayı yükle
5. Tarayıcıda refresh et (F5)

**Daha kolay yöntem: GitHub + Netlify**
- Dosyaları GitHub'a push et
- Netlify otomatik günceller
- Hostinger'da alan adını Netlify'ye yönlendir

---

## 📱 MOBIL TEST

1. Telefonunuzda tarayıcı aç
2. `https://gulhavacılık.com` yazın
3. Tüm bölümler mobilde görüntülenebilmeli
4. Butonlar tıklanabilir olmalı

---

## 🔍 SÖZ KÖNÜŞMESİ KONTROL LİSTESİ

Web sitenizi kontrol edin:

### Görüntüleme
- ✅ Logo görünüyor mu?
- ✅ Başlıklar görünüyor mu?
- ✅ Drone animasyonu çalışıyor mu?
- ✅ Videolar yükleniyor mu?
- ✅ Harita gösteriliyor mu?

### Etkileşim
- ✅ WhatsApp butonu çalışıyor mu?
- ✅ Email butonu çalışıyor mu?
- ✅ Sosyal medya linkleri açılıyor mu?
- ✅ Menü linkler çalışıyor mu?
- ✅ Smooth scroll var mı?

### Mobil
- ✅ Mobilde responsive mi?
- ✅ Menü mobilde görünüyor mu?
- ✅ Butonlar mobilde tıklanabilir mi?

---

## 🚨 SORUN GİDERME

### **Sitesi Açılmıyor (404 Hatası)**
- `public_html` klasörüne dosya yüklendi mi?
- `index.html` dosyası mutlaka var mı?
- Dosya adları doğru mu (büyük/küçük harf)?

### **Sitesi Açılıyor ama Şekli Bozuk**
- F5 ile refresh et
- Ctrl+Shift+Delete ile cache temizle
- 5 dakika bekle
- Tekrar dene

### **Videolar Yüklenmiyorsa**
- İnternet bağlantısı iyi mi?
- YouTube'a erişim var mı?
- Tarayıcının cookie'leri açık mı?

### **DNS Yayılmadıysa (MAKS 24 SAAT)**
- https://www.whatsmydns.net adresine git
- `gulhavacılık.com` yaz
- Hostinger IP'sini görmeli

---

## 📞 HOSTINGER DESTEĞİ

Sorununuz varsa:
1. Hostinger dashboard'da "Destek" seçeneğine git
2. "Canlı Sohbet" tıkla (Türkçe)
3. Sorununuzu açıkla
4. Çözüm 5-10 dakikada gelecek

**Veya:** support@hostinger.com.tr

---

## ✨ SONUÇLAR

🌐 **Web Sitesi:** https://gulhavacılık.com
📧 **Email:** gulziraat1@gmail.com
📱 **Telefon:** +90 542 723 1753
🔐 **SSL:** Otomatik (https://)

---

## 🎁 BONUS: HOSTINGER'DA BAŞKA İŞLER

### Email Adresi Oluştur
1. Hostinger dashboard'da "Email"
2. Yeni email oluştur: `info@gulhavacılık.com`
3. İmza olarak kullan

### Backup Al
1. Hostinger'da "Yedekleme"
2. Günlük otomatik backup
3. İstediğin zaman geri yükle

### İstatistik Kontrol Et
1. "İstatistikler" sekmesi
2. Kaç kişi ziyaret ettiğini gör
3. En çok hangi sayfaya girdiğini gör

---

## 🎉 TAMAMLANDI!

✅ Alan adı: `gulhavacılık.com`
✅ Hosting: Hostinger
✅ Dosyalar: Yüklendi
✅ SSL: Otomatik
✅ Email: Hazırlanabilir

**Web siteniz artık İnternette yayında!** 🚀

---

## 📋 KONTROL ETMELER:

1. [ ] Hostinger'a giriş yaptın
2. [ ] `public_html` klasörüne dosya yükledin
3. [ ] https://gulhavacılık.com açtın
4. [ ] Sitesi yüklendi
5. [ ] Tüm linkler çalışıyor
6. [ ] Mobilde test ettiniz

Tamamlandı mı? 🎉
