function exchange___Containers() {
    let c1 = document.querySelector(".container")
    let c2 = document.querySelector(".container2")
    let c3 = document.querySelector(".container3")
    let c4 = document.querySelector(".container4")
    let c5 = document.querySelector(".container5")
    // let c6 = document.querySelector(".container6")
    let c7 = document.querySelector(".container7")


    let model = document.querySelectorAll("#model");
    let news = document.querySelectorAll("#buy");
    let head = document.querySelectorAll("#head");
    let map = document.querySelectorAll("#taklif");
    let payments = document.querySelectorAll("#payments");
    let passengers = document.querySelectorAll("#diller");
    // let contacts = document.querySelectorAll("#contacts");

    model.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="block"
            c3.style.display="none"
            c4.style.display="none"
            c7.style.display="none"
            c5.style.display="none"
            // c6.style.display="none"
        })
    })
    news.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="block"
            c4.style.display="none"
            c7.style.display="none"
            c5.style.display="none"
            // c6.style.display="none"
        })
    })
    head.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="block"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="none"
            // c6.style.display="none"
            c7.style.display="none"
        })
    })
    map.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="block"
            c5.style.display="none"
            // c6.style.display="none"
            c7.style.display="none"
        })
    })
    payments.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="block"
            // c6.style.display="none"
            c7.style.display="none"
        })
    })
    passengers.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="none"
            // c6.style.display="block"
            c7.style.display="block"
        })
    })
    // contacts.forEach((e, i) => {
    //     e.addEventListener("click", () => {
    //         c1.style.display="none"
    //         c2.style.display="none"
    //         c3.style.display="none"
    //         c4.style.display="none"
    //         c5.style.display="none"
    //         // c6.style.display="none"
    //         c7.style.display="block"
    //     })
    // })

    



}
exchange___Containers()


function all() {
    let nomi = [
        "<i>O'tkan kunlar</i><br><b>Abdulla Qodiriy</b>",
        "<i>Kuntug'mish</i><br><b>Xalq og'zaki ijodi</b>",
        "<i>Quyonlar saltanati</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Besh bolali yigitcha</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Mehrobdan chayon</i><br><b>Abdulla Qodiriy</b>",
        "<i>Turkiy guliston yoxud axloq</i><br><b>Abdulla Avloniy</b>",
        "<i>Kecha va kunduz</i><br><b>Cho'lpon</b>",
        "<i>Buloqlar quchog'ida</i><br><b>Cho'lpon</b>",
        "<i>Oltin silsila</i><br><b>-</b>",
        "<i>Shum bola</i><br><b>G'afur G'ulom</b>",
        "<i>Yodgor</i><br><b>G'afur G'ulom</b>",
        "<i>Erta qaytgan turnalar</i><br><b>Chingiz Aytmatov</b>",
        "<i>Oq kema</i><br><b>Chingiz Aytmatov</b>",
        "<i>Qulayotgan tog'lar</i><br><b>Chingiz Aytmatov</b>",
        "<i>Sarvqomat dilbarim</i><br><b>Chingiz Aytmatov</b>",
        "<i>Asrga tatigulik kun</i><br><b>Chingiz Aytmatov</b>",
    ]
    let cost = [
        "35 000",
        "29 000",
        "29 000",
        "29 000",
        "29 000",
        "38 000",
        "51 000",
        "19 000",
        "1 224 000",
        "20 000",
        "25 000",
        "28 000",
        "25 000",
        "28 000",
        "30 000",
        "28 000",
    ]

    let books = document.querySelector(".books");

    for (let i = 0; i < nomi.length; i++) {
        books.innerHTML += `
        <div class="card">
                    <div class="img">
                        <img src="./img/kitob${i+1}.webp" alt="kitob">
                    </div>
                    <div class="context">
                        <p class="name">${nomi[i]}</p>
                        <p class="cost" style="color: red;">${cost[i]} so'm</p>
                        <button><i class="fa fa-shopping-cart"></i></button>
                    </div>
        </div>
        `
    }
}
all()
function badiiy() {
    let nomi = [
        "<i>1984</i><br><b>Djordj Oruell</b>",
        "<i>Urush va Tinchlik</i><br><b>Lev Tolstoy</b>",
        "<i>Tumor</i><br><b>Aleksandr Pushkin</b>",
        "<i>Vadim</i><br><b>Mixail Lermontov</b>",
        "<i>Mehrobdan chayon</i><br><b>Abdulla Qodiriy</b>",
        "<i>Kuntug'mish</i><br><b>Xalq og'zaki ijodi</b>",
        "<i>Qutlug' qon</i><br><b>Oybek</b>",
        "<i>Guldahan</i><br><b>Oybek</b>",
        "<i>Qor qo'ynidagi lola</i><br><b>Cho'lpon</b>",
        "<i>Kecha va Kunduz</i><br><b>Cho'lpon</b>",
        "<i>Qutadg'u bilig</i><br><b>Yusuf Xos Hojib</b>",
        "<i>Yulduzli tunlar</i><br><b>Pirimqul Qodirov</b>",
        "<i>Erk</i><br><b>Pirimqul Qodirov</b>",
        "<i>Shaytanat</i><br><b>Tohir Malik</b>",
        "<i>Talvasa</i><br><b>Tohir Malik</b>",
        "<i>Jinoyatning uzun yo'li</i><br><b>Tohir Malik</b>",
        "<i>Charxpalak</i><br><b>Tohir Malik</b>",
        "<i>Iblis devori</i><br><b>Tohir Malik</b>",
        "<i>Doka ro'mol qachon quriydi</i><br><b>Tohir Malik</b>",
        "<i>Yolg'on umidlar dashti</i><br><b>Tohir Malik</b>",
    ]
    let cost = [
        "35 000",
        "59 000",
        "29 000",
        "19 000",
        "29 000",
        "40 000",
        "35 000",
        "28 000",
        "20 000",
        "35 000",
        "55 000",
        "40 000",
        "30 000",
        "145 000",
        "42 000",
        "34 000",
        "42 000",
        "42 000",
        "45 000",
        "40 000",
    ]

    let books = document.querySelector(".badiiy")
    for (let i = 0; i < nomi.length; i++) {
        books.innerHTML += `
        <div class="cart">
                    <div class="img">
                        <img src="./img/k${i+1}.webp" alt="badiiy">
                    </div>
                    <div class="content">
                        <p class="name">
                            ${nomi[i]}
                        </p>
                        <p class="cost">
                            ${cost[i]} so'm
                        </p>
                        <button>Sotib olish</button>
                    </div>
        </div>
        `
    }
}
badiiy()
function fantastic() {
    let nomi = [
        "<i>Ufq</i><br><b>Said Ahmad</b>",
        "<i>Ruhlar isyoni</i><br><b>Erkin Vohidov</b>",
        "<i>Sotilgan vijdon</i><br><b>Tohir Malik</b>",
        "<i>Yelkangga ishq qo'nsa</i><br><b>Ramazon Demir</b>",
        "<i>Oygul bilan Baxtiyor</i><br><b>Hamid Olimjon</b>",
    ]
    let cost = [
        "48 000",
        "46 000",
        "39 000",
        "50 000",
        "35 000",
    ]

    let books = document.querySelector(".romantic")
    for (let i = 0; i < nomi.length; i++) {
        books.innerHTML += `
        <div class="cart">
                    <div class="img">
                        <img src="./img/rk${i+1}.webp" alt="badiiy">
                    </div>
                    <div class="content">
                        <p class="name">
                            ${nomi[i]}
                        </p>
                        <p class="cost">
                            ${cost[i]} so'm
                        </p>
                        <button>Sotib olish</button>
                    </div>
        </div>
        `
    }
}
fantastic()
function romantic() {
    let nomi = [
        "<i>Sariq devni minib</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Sariq devni o'limi</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Shirin qovunlar mamlakati</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Qasoskorning oltin boshi</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Labirint</i><br><b>Ozod Mo'min Xo'ja</b>",
    ]
    let cost = [
        "48 000",
        "45 000",
        "29 000",
        "25 000",
        "35 000",
    ]

    let books = document.querySelector(".fantastic")
    for (let i = 0; i < nomi.length; i++) {
        books.innerHTML += `
        <div class="cart">
                    <div class="img">
                        <img src="./img/fk${i+1}.webp" alt="badiiy">
                    </div>
                    <div class="content">
                        <p class="name">
                            ${nomi[i]}
                        </p>
                        <p class="cost">
                            ${cost[i]} so'm
                        </p>
                        <button>Sotib olish</button>
                    </div>
        </div>
        `
    }
}
romantic()
function children() {
    let nomi = [
        "<i>Peshonasida televizor bor bola</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Besh bolali yigitcha</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Qaylardasan bolaligim</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Sariq devni minib</i><br><b>Xudoyberdi To'xtaboyev</b>",
        "<i>Shum bola</i><br><b>G'afur G'ulom</b>",
        "<i>Oltin yurakli avtobola</i><br><b>Anvar Obidjon</b>",
        "<i>Mulla baqaloq</i><br><b>Anvar Obidjon</b>",
    ]
    let cost = [
        "17 000",
        "25 000",
        "29 000",
        "30 000",
        "35 000",
        "20 000",
        "29 000",
    ]
    let books = document.querySelector(".children")
    for (let i = 0; i < nomi.length; i++) {
        books.innerHTML += `
        <div class="cart">
                    <div class="img">
                        <img src="./img/bk${i+1}.webp" alt="badiiy">
                    </div>
                    <div class="content">
                        <p class="name">
                            ${nomi[i]}
                        </p>
                        <p class="cost">
                            ${cost[i]} so'm
                        </p>
                        <button>Sotib olish</button>
                    </div>
        </div>
        `
    }
}
children()
// window.addEventListener("scroll", counter)