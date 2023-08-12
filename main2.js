
function toggleNav() {
    var nav = document.getElementById("myNavbar");
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
}

function displayLyrics(songTitle) {
    var lyrics = getLyrics(songTitle);
    document.getElementById('song-title').innerText = songTitle;
    document.getElementById('song-lyrics').innerText = lyrics;

}

function getLyrics(songTitle) {
    // Kode di sini untuk mendapatkan lirik lagu berdasarkan judul lagu
    // Misalnya, kita bisa menggunakan objek JavaScript untuk menyimpan lirik lagu berdasarkan judulnya
    var lyrics = '';

    if (songTitle === 'Genit') {
        lyrics = "lihat senyum manis diatas bibir bergincu\n" +
            "kerdip mata merayu jelas coba mengganggu\n" +
            "tawa renyah terpasang bukan tanpa tujuan\n" +
            "satu korban terjerat itulah harapan\n" +

            "wangi parfum semerbak membius pusat syaraf\n" +
            "hadirkan bayangan tuk lepas keresahan\n" +
            "bergejolak semua coba berontak\n" +
            "ketika tak kuasa langsung kulari mengelak\n" +

            "aaah entah sampai kapan\n" +
            "kau mampu bertahan hindari kenyataan\n" +
            "entah sampai kapan kau mampu bertahan\n" +
            "mungkin kau terpikir lepas belenggu hitam\n" +

            "hidup memang selalu penuh dengan warna warni\n" +
            "bila terjebak sulit untuk coba keluar\n" +
            "semua pasti ada jalan keluar\n" +
            "cobalah berusaha\n" +

            "ah entah sampai kapan kau mampu bertahan\n" +
            "hindari kenyataan entah sampai kapan\n" +
            "mungkinkah terpikir lepas belenggu hitam";
    } else if (songTitle === 'Mawar Hitam') {
        lyrics = "Luka itu memang terlalu berat untukmu\n" +
            "Terlalu keras untuk kau rasakan\n" +
            "Tak seperti keinginan dan harapan\n" +
            "Yang selalu kau impikan\n" +
            "Kau inginkan, kau khayalkan\n" +
            "Dan kau bayangkan dulu\n" +
            "Mestinya kau sadari itu\n\n" +

            "Bukan penyesalan yang ada di hati\n" +
            "Saat kau yakinkan diri untuk pergi\n" +
            "Coba hadapi semua ini sendiri\n\n" +

            "* Dan ternyata keyakinan\n" +
            "Tak cukup mampu untuk melawan\n" +
            "Kau pun tak mampu bertahan\n" +
            "Kini kau mawar penghias malam\n\n" +

            "Reff: Kau mawar hitam\n" +
            "Harummu kepedihan\n" +
            "Kau arungi waktu\n" +
            "Di setiap belukar\n\n" +

            "Tapi tetap saja hitam\n" +
            "Meski air mata darah kau curahkan\n" +
            "Berat hati rindukan jalan terbaik\n" +
            "Untuk tetap berdiri\n\n" +

            "Penyesalan memang selalu menakutkan\n" +
            "Tapi itu kenyataan (kenyataan)\n\n" +

            "Repeat *\n" +
            "Repeat Reff\n\n" +

            "Reff2: Jangan menangis\n" +
            "Meski kau sesali\n" +
            "Singkirkan semua\n" +
            "Bila tak kau inginkan";
    } else if (songTitle === 'Selamat Jalan') {
        lyrics = "Terlalu lama engkau terkenang hancurkan diri\n" +
            "Yang jauh tenggelam\n" +
            "Lelah mencoba tuk lepaskan beban\n" +
            "Kau beli mimpi semu tak berarti sendiri\n" +
            "Tak mampu kau beranjak pergi\n" +
            "Jalan yg panjang nanar kau tatap\n" +
            "Tak lagi peduli semua yg terjadi\n" +
            "Smakin dalam larut angan mu melayang\n" +
            "Mimpimu hadirkan semua penantian\n" +
            "Dengan apa aja kau bernyanyi\n" +
            "Akhirnya kau pun pergi... tak kembali\n\n" +

            "Reff :\n" +
            "Banyak sudah kisah yg tertinggal\n" +
            "Kau buat jadi satu kenangan\n" +
            "Seorang sahabat pergi tanpa tangis arungi mimpi\n" +
            "Selamat jalan kawan cepatlah berlalu\n" +
            "Mimpi mu kini tlah kau dapati\n" +
            "Tak ada lagi seorangpun yang menggangu kau bernyanyi\n\n" +

            "Tiap haru kuhanya sanggup mengingat\n" +
            "Jelas bayangmu yg masih melekat\n" +
            "Dalam kecewa ku hanya mampu katakan\n" +
            "Tetaplah tersenyum karena itu jalan\n\n" +

            "Yang kau telah kau pilih......\n" +
            "Terbanglah......terbanglah.....bersama pelangi\n\n" +

            "Banyak sudah kisah yg tertinggal\n" +
            "Kau buat jadi satu kenangan\n" +
            "Seorang sahabat pergi tanpa tangis arungi mimpi\n\n" +

            "Selamat jalan kawan cepatlah berlalu\n" +
            "Mimpi mu kini tlah kau dapati\n" +
            "Tak ada lagi seorang pun yang menggangu kau bernyanyi\n" +
            "Semoga dalam damai engkau mengerti arti dalam kejalan yg\n" +
            "Berarti hingga indah nya bias mentari tak lagi kau nikmati\n\n" +

            "Selamat jalan kawan cepatlah berlalu\n" +
            "Mimpi mu kini tlah kau dapati\n" +
            "Tak ada lagi seorang pun yg mengganggu kau bernyayi....";
    } else if (songTitle === 'Kamu Ngga Sendirian') {
        lyrics = "Bila ku tak di sini\n" +
            "Tetaplah kau bernyanyi\n" +
            "Dan bila ku tlah pergi\n" +
            "Kenanglah yg terjadi\n\n" +

            "Pastikan padaku bahwa kamu\n" +
            "Kan baik” saja\n" +
            "Karna di setiap mimpiku\n" +
            "Pasti selalu ada kamu\n\n" +

            "Dengarkan dan rasakan\n" +
            "Lagu yg kuciptakan untukmu\n" +
            "Walau mungkin terdengar gak merdu\n" +
            "Tapi hanya untukmu\n\n" +

            "Kita pernah bersama di sini\n" +
            "Lalui hari penuh warna-warni\n" +
            "Meski tak seindah pelangi\n" +
            "Tapi kita pernah bermimpi\n\n" +

            "Reff: Percayalah padaku\n" +
            "Meski di gelap malam\n" +
            "Kamu nggak sendirian\n" +
            "Dan semua bintang\n" +
            "Yang ku tinggalkan\n" +
            "Temani kau sampai akhir malam\n\n" +

            "Dengarkan dan rasakan\n" +
            "Lagu yang kuciptakan untukmu\n" +
            "Walau mungkin terdengar gak merdu\n" +
            "Tapi hanya untukmu\n\n" +

            "Kita pernah bersama di sini\n" +
            "Lalui hari penuh warna-warni\n" +
            "Meski tak seindah pelangi\n" +
            "Tapi kita pernah bermimpi\n\n" +

            "Repeat Reff\n\n" +

            "Mungkin ini hanya sementara\n" +
            "Mungkin juga untuk selamanya\n" +
            "Tapi nanti jika ku kembali\n" +
            "Engkau harus ada di sini\n\n" +

            "Repeat Reff";
    } else if (songTitle === 'Salam Rindu') {
        lyrics = "Saat bulan purnama bersinar\n" +
            "Terangi malamku teringat padamu\n" +
            "Dan kukirimkan salam tentang rasa rinduku\n" +
            "Bersama angin malam, kusetia menunggu\n" +
            "Mimpikan .. mimpikan aku, oh sayangku\n" +
            "Peluk erat hati ini dan jagalah selalu\n" +
            "Dan kan kudendangkan lagu ini untukmu\n" +
            "Dengarlah ...\n" +
            "Dengarlah ... sayang\n\n" +

            "Ingatlah saat kita bersama\n" +
            "Kau pegang tanganku, kutatap matamu\n" +
            "Semua terasa indah tak seorangpun mengganggu\n" +
            "Bersedih dan tertawa, kita tetap bersatu\n" +
            "Bintang benderang secerah hatiku\n" +
            "Yang selalu terbayang kekasihku sayang\n" +
            "Di setiap mimpimu ku kan selalu berdendang\n" +
            "Dengarlah ...\n" +
            "Dengarlah ... sayang\n\n" +

            "Reff: Kuatkanlah dinding hati\n" +
            "Janji kita tak akan pernah terbagi\n" +
            "Biar malam terus berganti\n" +
            "Yakinlah kau tetap bungaku\n" +
            "Genggam erat hatiku ini\n" +
            "Kan kuciptakan damai untukmu\n" +
            "Biar bulan terus berlalu\n" +
            "Yakinlah kau tetap bungaku\n" +
            "Yakinlah kau tetap milikku\n" +
            "Yakinlah kau tetap bungaku\n" +
            "Sayangku ...";
    } else if (songTitle === 'Sakit Hati') {
        lyrics = "Sakit hati, bikin sakit hati\n" +
            "Semua ini terjadi berkali-kali\n" +
            "Ngga pernah aku mengerti, mengapa begini\n" +
            "Masih saja kau selalu ingkari janji\n\n" +

            "Cobalah rasakan apa yang kurasa\n" +
            "Hati ini sakit dibohongi\n" +
            "Setiap kali kau tebar ribuan janji\n" +
            "Nggak pernah terbukti cuman mimpi\n\n" +

            "Sakit hati, bikin sakit hati\n" +
            "Semua ini terjadi berkali-kali\n" +
            "Ngga pernah aku mengerti, mengapa begini\n" +
            "Masih saja kau selalu ingkari janji\n\n" +

            "Kau taburkan bunga di angan-angan\n" +
            "Hingga jiwa ragaku melayang\n" +
            "Saat semua kembali, aku tersentak\n" +
            "Yang kurasa hanyalah kecewa\n\n" +

            "Sakit hati, bikin sakit hati\n" +
            "Semua ini terjadi berkali-kali\n" +
            "Ngga pernah aku mengerti, mengapa begini\n" +
            "Masih saja kau selalu ingkari janji\n\n" +

            "Kau taburkan bunga di angan-angan\n" +
            "Hingga jiwa ragaku melayang\n" +
            "Saat semua kembali, aku tersentak\n" +
            "Yang kurasa hanyalah kecewa\n\n" +

            "Sakit hati, bikin sakit hati\n" +
            "Semua ini terjadi berkali-kali\n" +
            "Ngga pernah aku mengerti, mengapa begini\n" +
            "Masih saja kau selalu ingkari janji\n\n" +

            "Sakit hati, bikin sakit hati\n" +
            "Semua ini terjadi berkali-kali\n" +
            "Ngga pernah aku mengerti, mengapa begini\n" +
            "Masih saja kau selalu ingkari janji";
    }

    return lyrics;
}
function displayVideo(videoTitle) {
    var videoUrl = getVideoUrl(videoTitle);
    document.getElementById('video-title').innerText = videoTitle;
    document.getElementById('video-player').src = videoUrl;
}

function getVideoUrl(videoTitle) {
    // Kode di sini untuk mendapatkan URL video berdasarkan judul video
    // Misalnya, kita bisa menggunakan objek JavaScript untuk menyimpan URL video berdasarkan judulnya
    var videoUrl = '';

    if (videoTitle === 'Genit') {
        videoUrl = 'https://www.youtube.com/embed/IS5VS9kZEvk?autoplay=1 ';
    } else if (videoTitle === 'Mawar Hitam') {
        videoUrl = 'https://www.youtube.com/embed/U_-nzi4yTyQ?autoplay=1';
    } else if (videoTitle === 'Selamat Jalan') {
        videoUrl = 'https://www.youtube.com/embed/P9ky5z6d1qs?autoplay=1';
    } else if (videoTitle === 'Kamu Ngga Sendirian') {
        videoUrl = 'https://www.youtube.com/embed/vjm6DSLf1Do?autoplay=1';
    } else if (videoTitle === 'Salam Rindu') {
        videoUrl = 'https://www.youtube.com/embed/krD-5bdLN3g?autoplay=1';
    } else if (videoTitle === 'Sakit Hati') {
        videoUrl = 'https://www.youtube.com/embed/bOuahIpZCno?autoplay=1';
    }

    return videoUrl;
}


function displayTrack(trackTitle) {
    var trackUrl = gettrackUrl(trackTitle);
    document.getElementById('track-title').innerText = trackTitle;
    document.getElementById('video-player').src = trackUrl;
}

function gettrackUrl(trackTitle) {
    // Kode di sini untuk mendapatkan URL track berdasarkan judul track
    // Misalnya, kita bisa menggunakan objek JavaScript untuk menyimpan URL track berdasarkan judulnya
    var trackUrl = '';

    if (trackTitle === 'Genit') {
        trackUrl = 'https://open.spotify.com/embed/track/1VqpUh3Qykgmr8snpr54An?autoplay=1 ';
    } else if (trackTitle === 'Mawar Hitam') {
        trackUrl = 'https://open.spotify.com/embed/track/25Sk65Rg036j9sr1eSOm8l?autoplay=1';
    } else if (trackTitle === 'Selamat Jalan') {
        trackUrl = 'https://open.spotify.com/embed/track/06CZctheMwPh3Q9hO2S89a?utm_source=generator?autoplay=1';
    } else if (trackTitle === 'Kamu Ngga Sendirian') {
        trackUrl = 'https://open.spotify.com/embed/track/6vkwqlK4h0rgpIgL9tChaz?autoplay=1';
    } else if (trackTitle === 'Salam Rindu') {
        trackUrl = 'https://open.spotify.com/embed/track/6O3LRhurLdkBNeAjXer6ye?autoplay=1';
    } else if (trackTitle === 'Sakit Hati') {
        trackUrl = 'https://open.spotify.com/embed/track/2DaGE6g765tbp2MTmYCZs2?autoplay=1';
    }

    return trackUrl;

}






