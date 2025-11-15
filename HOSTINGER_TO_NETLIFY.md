# 🌐 HOSTINGER DOMAIN → NETLIFY YÖNLENDIRME REHBERİ

## 🔴 PROBLEM
- Domain: gulhavacılık.com (Hostinger'da)
- Hosting: Netlify (Ücretsiz)
- Şuan: Hostinger sayfasına yönlendiriyor
- İstenen: Netlify'deki sitenizi açsın

## ✅ ÇÖZÜM
Hostinger'ın DNS ayarlarını Netlify'ye yönlendireceğiz.

---

## 📋 ADIM 1: Netlify'den Nameserver Bilgilerini Al

1. https://app.netlify.com adresine git
2. Sitene tıkla (sitenin ismi)
3. "Domain management" sekmesine git
4. "Add custom domain" tıkla
5. `gulhavacılık.com` yaz
6. Netlify'nin verdiği **nameserver'ları not et**

**Netlify Nameserver'ları:**
```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

Bu 4 satırı kopyala ve not et! 📝

---

## 📋 ADIM 2: Hostinger Dashboard'a Giriş Yap

1. https://www.hostinger.com.tr adresine git
2. Sağ üstteki "Giriş Yap" butonuna tıkla
3. Email ve şifreni gir
4. Giriş yap

---

## 📋 ADIM 3: Domain Yönetim Sayfasını Aç

1. Hostinger dashboard'da sol menüye bak
2. "Alanlar" veya "Domains" seçeneğini seç
3. `gulhavacılık.com` alan adını bul
4. "Yönet" veya "Manage" butonuna tıkla

---

## 📋 ADIM 4: DNS Ayarlarını Değiştir

### Seçenek A: Nameserver'ları Değiştir (TAVSİYE EDILEN)

1. Domain yönetim sayfasında "Nameserver" sekmesine git
2. "Özel Nameserver'ları Kullan" veya "Custom Nameservers" seçeneğini seç
3. Şu 4 nameserver'ı gir:

```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

4. **"Kaydet" butonuna tıkla**
5. ✅ DNS ayarları kaydedildi

**Bu yöntem daha iyi çünkü:**
- ✅ Tüm trafik Netlify'ye gider
- ✅ Netlify'deki tüm ayarlar çalışır
- ✅ SSL otomatik
- ✅ CDN aktif

---

### Seçenek B: A Kayıtlarını Değiştir (İLERİ)

Eğer Seçenek A çalışmazsa:

1. "DNS Records" sekmesine git
2. Şu kayıtları ekle:

```
Tip: A
Host: @
Değer: 75.75.75.75
TTL: 3600
```

```
Tip: CNAME
Host: www
Değer: cagrigul1.github.io
TTL: 3600
```

3. Kaydet
4. Mevcut Hostinger A kayıtlarını sil

**NOT:** Bu yöntem daha karışık, Seçenek A önerilir!

---

## ⏳ ADIM 5: DNS Propagation'ını Bekle

**Zaman:** 5-30 dakika (maksimum 24 saat)

Bu sürede DNS yayılıyor. Şabretle bekle! ☕

### Kontrol Etmek İçin:
1. https://www.whatsmydns.net adresine git
2. `gulhavacılık.com` yaz
3. "A Record" kontrolü yap
4. Netlify IP'sini görmeli (75.75.75.75 gibi)

---

## ✅ ADIM 6: Test Et

### 5-30 dakika sonra:

1. Tarayıcıda aç: `https://gulhavacılık.com`
2. Netlify sitesi açılmalı ✅
3. Logo görüntülenmeli
4. Animasyonlar çalışmalı
5. Videolar yüklenmeli

---

## 🔍 SORUN ÇÖZÜMÜ

### "Hala Hostinger Sayfası Açılıyor"

**Çözüm 1: Cache Temizle**
1. Ctrl+Shift+Delete (Chrome)
2. Cache ve cookie'leri sil
3. Siteyi tekrar aç

**Çözüm 2: DNS Propagation Bekle**
1. 5-30 dakika daha bekle
2. https://whatsmydns.net'te kontrol et
3. Durumu izle

**Çözüm 3: Nameserver Kontrol Et**
1. Hostinger'da nameserver'ları kontrol et
2. 4 nameserver doğru mu yazılı?
3. Yazım hatası var mı? (büyük/küçük harf)

**Çözüm 4: Netlify Nameserver Tekrar Kontrol Et**
1. Netlify'de "Domain management"e git
2. Domain ayarlarını kontrol et
3. Doğru nameserver'lar gösteriyor mu?

---

## 📋 KONTROL LİSTESİ

### Netlify Tarafında:
- [ ] Netlify'de site deploy tamamlandı (yeşil checkmark)
- [ ] "Domain management"de custom domain ekledi
- [ ] Nameserver'ları aldı

### Hostinger Tarafında:
- [ ] Hostinger'a giriş yaptı
- [ ] Domain yönetimi açtı
- [ ] Nameserver'ları değiştirdi
- [ ] 4 nameserver yazılı (dns1, dns2, dns3, dns4)
- [ ] Kaydet butonuna tıkladı

### Bekleme:
- [ ] 5-30 dakika bekle
- [ ] whatsmydns.net'te kontrol et
- [ ] Netlify IP'sini görmeli

### Test:
- [ ] https://gulhavacılık.com açtı
- [ ] Netlify sitesi açıldı
- [ ] Logo görüntüleniyor
- [ ] Tüm öğeler yüklü

---

## 🎯 HIZLI ÖZET

```
1. Netlify'de nameserver'ları kopyala
2. Hostinger DNS ayarlarını aç
3. Nameserver'ları Netlify'ninkilerine değiştir
4. Kaydet
5. 5-30 dakika bekle
6. https://gulhavacılık.com TEST ET ✅
```

---

## 📊 DNS PROPAGATION SÜRECI

```
Şimdi:           Hostinger sayfası açılıyor
5 dakika:        Kısmen Netlify açılmaya başlıyor
15 dakika:       Çoğu yer Netlify açıyor
30 dakika:       Tamamen Netlify açılıyor
```

**Tüm dünyada 24 saat içinde:**
- Herkes Netlify sitesini görecek ✅

---

## 🔐 HTTPS/SSL

✅ Netlify otomatik olarak SSL sağlıyor
✅ https://gulhavacılık.com otomatik çalışacak
✅ Tüm bağlantılar şifreli

---

## 📞 HOSTINGER DESTEĞİ

Eğer Hostinger'da sorun yaşarsan:
1. Hostinger dashboard'da "Destek" tıkla
2. "Canlı Sohbet" seçeneğini seç (Türkçe)
3. Sorunu açıkla: "DNS'i Netlify'ye yönlendirmek istiyorum"
4. 5-10 dakikada çözülecek

---

## 🎉 SONUÇ

DNS ayarlarını değiştirdikten 30 dakika sonra:

✅ https://gulhavacılık.com açılacak
✅ Netlify siteniz görünecek
✅ Tüm öğeler çalışacak
✅ Mobilde responsive
✅ HTTPS güvenli

---

## 🚀 HEMEN BAŞLA!

1. Netlify'de nameserver'ları kopyala
2. Hostinger'a giriş yap
3. DNS ayarlarını değiştir
4. Kaydet
5. Bekle ve test et!

**Sorularınız varsa İnstagram veya WhatsApp'tan yazabilirsiniz!** 📱

---

**DETAYLI VIDEOSU İÇİN:**
- YouTube'da "Hostinger to Netlify DNS setup" ara
- Görsel rehberler var
