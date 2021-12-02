export var works_tr = [
    
    {
        id: 5,
        date: 2021,
        workType: 'Mobil Uygulama',
        workGroups: ['mobile', 'android', 'ios'],
        title: 'Tulip fotodaki renkleri keşfet',
        description: 'Herkes renkleri sever.<br>Fotoğraflardan renkleri çıkarın, koleksiyona renk paletleri şeklinde ekleyin.<br>Fotoğraftaki renk paletini düzenleyin ve paylaşın.<br><br>Renklerini keşfetmeniz için binlerce fotoğraf sizi bekliyor.<br><br>Beğendiğiniz bir resim veya renkler görüyor musunuz? Tulip ile fotoğrafını çekin ve renk paletini kaydedin.<br><br>Koleksiyonlar:<br>Kendi koleksiyonlarınızı oluşturun. Renk paletlerinizi içine yerleştirin.<br><br>Favoriler:<br>Renkleri, renk paletlerini ve fotoğrafları favorilerinize kaydedebilirsiniz.<br><br>Tulip Premium:<br>Premium abonelik ile sınırsız sayıda renk, palet ve koleksiyon öğesi oluşturabilirsiniz.',
        features: ['Tulip içerisindeki öğreler Firebase - Cloud Firestore içerisine kaydedilir', 'Uygulama içi Satınalma', 'Kullanıcı Kaydı/Girişi', 
            'Sosyal Hesaplar ile Giriş',
            'E-Posta ve Parola ile Kayıt/Giriş','Bildirimler',  'Firebase Analytics'],
        techs: ['dart', 'flutter', 'firebase', 'firestore'],
        link: 'https://onelink.to/tulip',
        icon: 'images/tulip/icon.png',
        images: [
            'images/tulip/t1.png',
            'images/tulip/t2.png',
            'images/tulip/t3.png',
            'images/tulip/t4.png',
        ],
    },
    {
        id: 6,
        date: 2021,
        workType: 'Mobil Uygulama',
        workGroups: ['mobile', 'android', 'ios'],
        title: 'Font Fancy - Süslü/Güzel Yazılar oluşturup paylaşın',
        description: 'Profiliniz veya sohbetleriniz için güzel mesajlar oluşturun. Arkadaşlarınızla iyi vakit geçirin.<br>Font Fancy, sosyal medya profilleriniz veya sohbet mesajlarınız için emojileri, estetik metinleri, ülke bayraklarını ve farklı yazı tiplerini destekler.<br>Sosyal medya uygulamanıza yapıştırmak veya paylaşmak için kolayca kopyala veya paylaş düğmesini kullanın..',
        features: ['Yazıyı Paylaş', 'Yazıyı Kopyala'],
        techs: ['dart', 'flutter'],
        link: 'https://apps.apple.com/gb/app/font-fancy-for-social-media/id1596943808',
        icon: 'images/ff/icon.png',
        images: [
            'images/ff/1.png',
            'images/ff/2.png',
            'images/ff/3.png',
            'images/ff/4.png',
        ],
    },
    {
        id: 4,
        workType: 'Flutter Paketi',
        workGroups: ['mobile'],
        date:2021,
        title: 'Mina Reader',
        description: 'Düz yazı halindeki kitapları okuyup, vurgulamaya yarayan Flutter paketidir.',
        features: ['Otomatik kaydırma', 'Vurgu renkleri', 'Vurgu renklerine etiket belirleme',
            'Her bölüm için son okunan yeri hatırlar',
            'Kalın, italik, altı çizili yazılar',],
        techs: ['dart', 'flutter'],
        link: 'https://pub.dev/packages/mina_reader',
        images: [
            'images/mina_reader/m1.png',
            'images/mina_reader/m2.png',
            'images/mina_reader/m3.png',
        ],
    },
    {
        id: 3,
        workType: 'Mobil Uygulama',
        date:2019,
        workGroups: ['mobile'],
        title: '2.5M+ indirilmiş mobil uygulama',
        description: '',
        techs: ['java', 'android'],
        images: [
            'images/vvv.png',
        ],
    },
    {
        id: 2,
        workType: 'Gıda Dağıtımı',
        date:2019,
        workGroups: ['mobile', 'web'],
        title: 'Elektronik (NFC) Kart  ile Ekmek Dağıtımı',
        description: 'Android cihazda çalışan dağıtım mobil uygulaması ve Sunucu üzerinde hizmet veren yönetim, raporlama web uygulamasından oluşmaktadır.',
        features: ['Aylık dağıtım adedi sınırı', 'Çeşitli Raporlar', 'Kullanıcıya belge ekleme'],
        // capabilities: ['Aylık dağıtım adedi sınırı','Çeşitli Raporlar','Kullanıcıya belge ekleme'],
        techs: ['android', 'java', 'php', 'mysql', 'vuejs'],
        images: [
            'images/any_dist/e1.png',
            'images/any_dist/e2.png',
        ],
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FxKIxl5g8xY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

    },
    {
        id: 1,
        date: '05.08.2019',
        workGroups: ['industrial', 'web'],
        workType: 'Dalgıç Pompa ve Motor',
        title: 'Pompa ve Motor Seçim Programı',
        clientCount: 1,
        description: 'Pompa ve Motor Üreten firmalar kataloglarındaki ürünleri ve fiyatları bayilerine bu yazılım aracılıyla sunar. \
            Bayiler sistem üzerinde üreticinin pompalarına kolayca erişerek son kullanıcının ihtiyacına göre pompa ve motor seçimi yapar.\
            Bunları sepete ekler ve proforma fatura halinde indirebilir. \
            Ayrıca Pompa bilgileri ve eğri grafikleri PDF şeklinde indirilebilir.',
        features: [
            'Çoklu Dil Desteği (İngilizce, İspanyolca, Fransızca, Rusça, Arapça)',
            'Kullanıcı adı ve Parola ile giriş',
            'Akış ve Basma Yüksekliğine göre farklı birimlerde arama',
            'Frekans ve Pompa Materyaline göre arama',
            'Q-Hm, Q-Efficiency, Q-NPSHR, Q-Ne eğrileri',
            'Pompa Performans Eğrisini PDF formatinda indirmek',
            'Eğriler üstündeki çalışma noktasını değiştirmek ve seçilen nokta için Pompa Performans Eğrisini PDF dosya formatında dokumanı indirmek',
            'Proforma Fatura oluşturmak için Ürünleri Sepete Eklemek',
            'Pompa ve Motorların fiyatları, toplam siparişin tutarı Sepette rahatlıkla görülür ve ürün adetleri burada arttırılıp azaltılabilir',
            'Pompa ve Motora ait boyutsal ve elektriksel bilgiler',
            'Her bayi için ayrı ayrı indirim/iskonto oranı belirlenebilir',
        ],
        capabilities: 'User Authentication',
        techs: ['php', 'vuejs', 'vuetify', 'slimphp', 'mysql', 'nodejs', 'ubuntu'],
        images: [
            'images/pump_selector/search_tr.png',
            'images/pump_selector/search_mobile_tr.png',
            'images/pump_selector/login_tr.png',
            'images/pump_selector/language_tr.png',
            'images/pump_selector/cart_tr.png',
            'images/pump_selector/report_1.png',
            'images/pump_selector/report_2.png',

        ],
    },
    {
        id: 0,
        date: '10.02.2018',
        workGroups: ['industrial'],
        workType: 'Güneş Enerjisi',
        title: 'Güneş Takip Yazılımı',
        clientCount: 1,
        description: 'Güneş Panellerinin güneşe  dönük kalarak, sabit sistemlere göre daha fazla enerji üretmesini sağlar. Yazılım güneş panelleri gölgelenmeden, panellerin bağlı olduğu elektrik motorunu çalıştırarak panellerin güneşten uzaklaştırır. Böylelikle gölgeleme olmadan enerji üretmeye devam edilir.',
        features: ['Otomatik Güneş Takip', 'Yerinde Teknik Destek', 'Çoğu Zaman Uzaktan Teknik Destek Yeterlidir'],
        capabilities: ['Otomatik Güneş Takip', 'Gölgelemeyi Önler', 'Merkeziyetsiz'],
        techs: ['python', 'nodejs', 'mysql', 'merkeziyetsiz dağıtık yapı'],
        photosRepresentative: true,
        images: [
            'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        ],
    },
    
    
    

];

