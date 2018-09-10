let Url = "";
let year = new Date().getFullYear();
let month =  new Date().getMonth() + 1;
let date = new Date().getDate() - 1;
let jaklat = -6.17511;
let jaklong = 106.8650395;
let quotes = [
    `Jangan sampai ayam jantan lebih pandai darimu. Ia berkokok di waktu shubuh, sedang kamu tetap lelap dalam tidur.
    "Lukman Hakim"`,
    `Lakukanlah kebaikan sekecil apapun, karena engkau tidak pernah tahu kebaikan yang mana yang akan membawamu ke surga.
    "Imam Hasan Al-Basri"`,
    `Ketika Tuhan menjadi pusat dari prioritas hidupmu. Maka, Engkau juga akan jadi pusat dari penjagaan Tuhan.
    "Hamzah Yusuf"`,
    `Jangan mengharapkan persahabatan dari mereka yang tak mengharapkan bersahabat denganmu. 
    "Ali bin Abi Thalib"`

];

$(".times").text(`${date}/${month}/${year}`);
switch(month - 1) {
    case 0:
        $(".header-this-month").text(`Jadwal Salat di Bulan Januari`);
    break;
    case 1:
        $(".header-this-month").text(`Jadwal Salat di Bulan Februari`);
    break;
    case 2:
        $(".header-this-month").text(`Jadwal Salat di Bulan Maret`);
    break;
    case 3:
        $(".header-this-month").text(`Jadwal Salat di Bulan April`);
    break;
    case 4:
        $(".header-this-month").text(`Jadwal Salat di Bulan Mei`);
    break;
    case 5:
        $(".header-this-month").text(`Jadwal Salat di Bulan Juni`);
    break;
    case 6:
        $(".header-this-month").text(`Jadwal Salat di Bulan Juli`);
    break;
    case 7:
        $(".header-this-month").text(`Jadwal Salat di Bulan Agustus`);
    break;
    case 8:
        $(".header-this-month").text(`Jadwal Salat di Bulan September`);
    break;
    case 9:
        $(".header-this-month").text(`Jadwal Salat di Bulan Oktober`);
    break;
    case 10:
        $(".header-this-month").text(`Jadwal Salat di Bulan November`);
    break;
    case 11:
        $(".header-this-month").text(`Jadwal Salat di Bulan Desember`);
    break;
}

// QUOTES
let x = 0;
setInterval(function() {
    $(".quotes").fadeOut(function() {
        $(".quotes").text(quotes[x])
    }).fadeIn();
    x++;
    if(x > 3) x = 0;
}, 8000);

function getUrl(lat, long) {
    Url = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=5&month=${month}&year=${year}`;    
}

function first(lat, long, jak) {
    getUrl(lat, long)
    
        
        // GET DATA
        $.ajax({
            url: Url,
            success: function(datas) {

            // Change City Name
            let city = $("#keyword").val().split(",");
            let cityName = city[0];
            (jak == undefined ? $("#cityName").text(`Jadwal Salat ${cityName}`) : $("#cityName").text(`Jadwal Salat Jakarta`) )

            let today = datas.data[date].timings;                
            
            // Today 
            $(".time-now").eq(0).text(`${today.Imsak}`)
            $(".time-now").eq(1).text(`${today.Fajr}`)
            $(".time-now").eq(2).text(`${today.Dhuhr}`)
            $(".time-now").eq(3).text(`${today.Asr}`)
            $(".time-now").eq(4).text(`${today.Maghrib}`)
            $(".time-now").eq(5).text(`${today.Isha}`)


            console.log(datas)
            $(".this-month").empty();
            datas.data.forEach((data, idx)=> {
                if(idx == date) {
                    $(".this-month").append(`
                        <tr class='active-now'>
                            <th>${++idx}</th>
                            <td>${data.timings.Imsak}</td>
                            <td>${data.timings.Fajr}</td>
                            <td>${data.timings.Dhuhr}</td>
                            <td>${data.timings.Asr}</td>
                            <td>${data.timings.Maghrib}</td>
                            <td>${data.timings.Isha}</td>
                        </tr>
                    `);
                } else {
                    $(".this-month").append(`
                        <tr>
                            <th>${++idx}</th>
                            <td>${data.timings.Imsak}</td>
                            <td>${data.timings.Fajr}</td>
                            <td>${data.timings.Dhuhr}</td>
                            <td>${data.timings.Asr}</td>
                            <td>${data.timings.Maghrib}</td>
                            <td>${data.timings.Isha}</td>
                        </tr>
                    `);
                }
            })
        }
    })
}

function initialize() {
    let input = document.getElementById('keyword');
    let autocomplete = new google.maps.places.Autocomplete(input);

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        let place = autocomplete.getPlace();
        let placeName = place;
        let lat = place.geometry.location.lat();
        let long = place.geometry.location.lng();               

        first(lat, long);
        console.log(place)
        
       

    });
    
}

window.onload = initialize();

// google.maps.event.addDomListener(window, 'load', initialize);


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(pos) {
    lat = pos.coords.latitude;
    long = pos.coords.longitude;
    
    first(lat, long);
    
}

function showError(err) {
    let def = "Jakarta";
    first(jaklat, jaklong, def);    
}

getLocation();
