# 🚀 Netlify Yayınlama Rehberi

## ADIM 1: GitHub Hesabı Oluştur (Eğer yoksa)

1. https://github.com/signup adresine git
2. Email adresini gir (gulziraat1@gmail.com gibi)
3. Şifreni belirle
4. Doğrulamayı tamamla

## ADIM 2: GitHub'a Repository Oluştur

1. GitHub'a giriş yap (https://github.com/login)
2. Sağ üstteki "+" simgesine tıkla
3. "New repository" seç
4. Repository adı: `gul-drone` veya `gul-zirai-drone`
5. Description: "GÜL Zirai Drone - Tarım İlaçlama ve Gübreleme Hizmetleri"
6. "Public" seç (herkese açık olsun)
7. "Create repository" butonuna tıkla

## ADIM 3: Dosyaları GitHub'a Push Et

PowerShell'de şu komutları çalıştır:

```powershell
cd "C:\Users\ggulc\Desktop\GUL.com"
git remote add origin https://github.com/YOUR_USERNAME/gul-drone.git
git push -u origin main
```

⚠️ Not: YOUR_USERNAME yerine GitHub kullanıcı adını koy!

Örnek:
```powershell
git remote add origin https://github.com/ggulc/gul-drone.git
git push -u origin main
```

## ADIM 4: Netlify'ye Giriş Yap

1. https://app.netlify.com adresine git
2. "Sign up" butonuna tıkla
3. "Continue with GitHub" seçeneğini seç
4. GitHub hesabı ile yetkilendirmeyi onayla

## ADIM 5: Repository'yi Deploy Et

1. Netlify dashboard'da "New site from Git" butonuna tıkla
2. "GitHub" seçeneğini seç
3. Senin `gul-drone` repository'ni seç
4. Ayarlar:
   - Branch to deploy: `main`
   - Build command: (boş bırak)
   - Publish directory: `.`
5. "Deploy site" butonuna tıkla

## ADIM 6: Otomatik Yayınlama

✅ Netlify otomatik olarak site'i yayınlayacak
✅ Bir subdomain atanacak (örn: guldronetar im.netlify.app)
✅ Her GitHub push'ta otomatik güncelleme yapılacak

## ADIM 7: Custom Domain Bağla (Opsiyonel)

1. Netlify dashboard'da "Domain settings"e git
2. "Add custom domain" butonuna tıkla
3. Almak istediğin domain adını gir (örn: gulziraat.com)
4. DNS kayıtlarını güncelle

Domain Satın Almak İçin:
- https://www.namecheap.com (Ucuz)
- https://www.godaddy.com (Türkiye'de popüler)
- https://www.hostinger.com (Paket fiyatlı)

---

## 🎯 ÖZETİ

1️⃣ GitHub repository oluştur
2️⃣ Dosyaları push et
3️⃣ Netlify'ye bağla
4️⃣ Deploy et
5️⃣ İsteğe bağlı: Domain bağla

## ✅ Tamamlandığında Göreceksin:

- Live URL: https://guldronetar im.netlify.app
- SSL sertifikası (otomatik)
- CDN hızlandırması (otomatik)
- Otomatik güncelleme (her push'ta)

## ❓ Sıkça Sorulan Sorular

**S: Ücretli mi?**
C: Hayır! Netlify tamamen ücretsiz.

**S: Trafik sınırı var mı?**
C: Hayır, sınırı yok.

**S: SSL sertifikası gerekli mi?**
C: Hayır, Netlify otomatik sağlıyor.

**S: Dosyaları güncellesem ne olur?**
C: GitHub'a push et, Netlify otomatik günceller.

---

📞 Sorularım varsa Instagram veya WhatsApp'tan sorabilirsin!
