# 🚀 ÜCRETSIZ HOSTING + KENDİ DOMAIN REHBERI

## ✨ Çözüm: Netlify + Namecheap (TAMAMEN ÜCRETSIZ HOSTING)

```
gulhavacılık.com (Kendi Domain)
        ↓
    Namecheap DNS Yönetimi
        ↓
    Netlify Hosting (ÜCRETSIZ)
        ↓
    GitHub Repository (Kodun saklanır)
        ↓
    https://gulhavacılık.com CANLIYA GIDER! 🎉
```

**TOPLAM MALIYET: ₺0 (Hosting tamamen ücretsiz!)**

---

## 📋 ADIM 1: GitHub'a Dosya Yükle (ZATENHAZİR)

✅ Dosyalarınız zaten GitHub'da:
- https://github.com/cagrigul1/gul-drone

Yapacak bişey yok! 👍

---

## 📋 ADIM 2: Netlify Hesabı Oluştur

1. https://app.netlify.com adresine git
2. "Sign up" butonuna tıkla
3. "Continue with GitHub" seçeneğini seç
4. GitHub hesabını yetkilendir
5. Hesabın oluşturuldu! ✅

---

## 📋 ADIM 3: GitHub Repository'yi Deploy Et

### ADIM 3.1: Netlify'de Yeni Site Oluştur
1. Netlify dashboard'da "New site from Git" butonuna tıkla
2. "GitHub" seçeneğini seç
3. `cagrigul1/gul-drone` repository'ni seç
4. "Deploy site" butonuna tıkla

### ADIM 3.2: Bekleme
- Netlify otomatik olarak build eder (5-10 saniye)
- Deploy tamamlanır
- Bir subdomain atanır (örn: `guldronetar im.netlify.app`)

**Netlify'nin Verdiği URL:** `https://XXXXX.netlify.app`
(Bu URL'yi not et, sonra kullanacağız)

---

## 📋 ADIM 4: Namecheap'te DNS Ayarlarını Yapılandır

### ADIM 4.1: Namecheap'e Giriş Yap
1. https://www.namecheap.com adresine git
2. "Sign in" butonuna tıkla
3. Email ve şifreni gir
4. Giriş yap

### ADIM 4.2: Domain Yönetimine Git
1. Dashboard'da "Manage Domains" seçeneğini seç
2. `gulhavacılık.com` alan adını bul
3. "Manage" butonuna tıkla

### ADIM 4.3: Netlify Nameserver'ları Ekle
1. "Nameservers" sekmesine git
2. "Custom Nameservers" seçeneğini seç
3. Netlify'nin verdiği nameserver'ları gir

**Netlify Nameserver'ları:**
```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

4. "Save Changes" butonuna tıkla

### ADIM 4.4: Veya DNS Kayıtlarını Yönet (Alternatif)
1. "DNS Records" sekmesine git
2. CNAME kaydı ekle:
   - Host: `www`
   - Value: `cagrigul1.github.io`
3. A kaydı ekle (IP adresi)
4. Kaydet

---

## 📋 ADIM 5: Netlify'de Custom Domain Ekle

1. Netlify dashboard'ında site'ine git
2. "Domain settings" seçeneğini seç
3. "Add custom domain" butonuna tıkla
4. `gulhavacılık.com` yaz
5. "Verify" butonuna tıkla
6. DNS kayıtlarını Namecheap'ta güncelle (üstte yaptık)
7. "Confirm" butonuna tıkla

---

## ⏳ ADIM 6: DNS Propagation'ını Bekle

DNS yayılması: **5-30 dakika** (Max 24 saat)

### Durumu Kontrol Et:
1. https://www.whatsmydns.net adresine git
2. `gulhavacılık.com` yaz
3. DNS propagation durumunu gör

### Veya:
```powershell
nslookup gulhavacılık.com
```

---

## ✅ ADIM 7: Web Sitenizi Test Et

1. Tarayıcıda aç: `https://gulhavacılık.com`
2. Siteniz yüklenmeli
3. Tüm öğeler görüntülenebilmeli
4. Butonlar çalışabilmeli

**Eğer çalışmazsa:**
- 10-15 dakika daha bekle (DNS propagation)
- F5 refresh et
- Ctrl+Shift+Delete cache temizle
- Başka tarayıcı dene

---

## 🔄 ADIM 8: Dosyaları Güncellemek İçin

Dosyaları güncellemek çok kolay:

### Yöntem 1: GitHub'dan Push Et
1. Dosyaları düzenle (VS Code'da)
2. Kaydet
3. Terminal'de:
```powershell
cd "C:\Users\ggulc\Desktop\GUL.com"
git add .
git commit -m "Açıklama yaz"
git push
```
4. Netlify otomatik günceller! ✅

### Yöntem 2: Netlify'de Düzenle
1. Netlify'de site ayarlarına git
2. "Environment variables" (opsiyonel)
3. Build otomatik olur

---

## 📋 NAMECHEAP + NETLIFY AYARLARININ ÖZETİ

| Ayar | Değer |
|------|-------|
| **Domain** | gulhavacılık.com |
| **Registrar** | Namecheap |
| **Hosting** | Netlify (ÜCRETSIZ) |
| **Nameserver** | Netlify Nameserver'ları |
| **GitHub** | cagrigul1/gul-drone |
| **SSL** | Otomatik (HTTPS://) |
| **Email** | gulziraat1@gmail.com |

---

## 🎁 AVANTAJLARI

✅ **Tamamen Ücretsiz Hosting**
✅ **Kendi Domain Adın Kullanılıyor**
✅ **Otomatik Güncellemeler** (GitHub push'ta)
✅ **Ücretsiz SSL Sertifikası**
✅ **CDN Hızlandırması**
✅ **Unlimited Bant Genişliği**
✅ **Unlimited Ziyaretçi**
✅ **Ön İzleme (Preview) Linki**
✅ **Auto Deploy** (GitHub'dan)

---

## 🚨 SORUN GİDERME

### **DNS Yayılmadıysa**
1. https://www.whatsmydns.net adresine git
2. `gulhavacılık.com` yaz
3. Netlify IP'sini görmeli
4. Görmüyorsa DNS propagation bekleme devam et (max 24 saat)

### **Site 404 Hatası Veriyorsa**
1. GitHub'da dosyalar var mı kontrol et
2. `index.html` dosyası mutlaka olmalı
3. Netlify'de build log'u kontrol et

### **HTTPS Çalışmıyorsa**
1. Netlify'de "Domain management"e git
2. SSL/TLS ayarlarını kontrol et
3. "Enable Force HTTPS" seçeneğini aç

### **Sitesi Çok Yavaş Yüklüyorsa**
1. Netlify'nin CDN'si kullanıyor olmalı
2. Cache temizle (F5)
3. Başka tarayıcı dene

---

## 📱 MOBİL TEST

1. Telefonunda tarayıcı aç
2. `https://gulhavacılık.com` yaz
3. Responsive tasarım çalışmalı
4. Butonlar tıklanabilir olmalı

---

## 🔐 GÜVENLIK

✅ Netlify otomatik SSL sağlıyor
✅ HTTPS otomatik aktif
✅ Tüm bağlantılar şifreli
✅ Google tarafından güvenli sayılıyor

---

## 📞 DESTEK

**Sorunlar için:**
- Netlify: https://netlify.com/support
- Namecheap: https://www.namecheap.com/support

---

## 🎯 HIZLI ÖZET

```
1. GitHub'a push et (zaten tamamlandı) ✅
2. Netlify'de deploy et (5 dakika)
3. Namecheap'te DNS ayarla (2 dakika)
4. DNS propagation bekle (5-30 dakika)
5. https://gulhavacılık.com CANLIYA GIDER! 🎉
```

**TOPLAM SÜRE: 20-40 DAKIKA**
**TOPLAM MALIYET: ₺0**

---

## 📝 KONTROL LİSTESİ

- [ ] Netlify hesabı oluşturdum
- [ ] GitHub repo'yu Netlify'ye bağladım
- [ ] Netlify URL'sini aldım
- [ ] Namecheap'te DNS/Nameserver ayarladım
- [ ] DNS propagation'ını bekledim
- [ ] https://gulhavacılık.com çalışıyor
- [ ] Mobilde test ettim

Tamamlandı mı? 🎉

---

## 💡 BONUS: GitHub Pages Alternatifi

Eğer Netlify'yi kullanmak istemezsen:
- https://pages.github.com
- GitHub Pages de ücretsiz
- Aynı işlemi yapabilirsin
- URL: https://cagrigul1.github.io/gul-drone

---

**Başlamaya hazır mısınız?** 🚀
