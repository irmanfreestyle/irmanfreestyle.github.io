let pertanyaan = $(".pertanyaan");
let pilihan = $(".pilih");
let btn = $(".jawab");
let n = 0;
let totalNilai = 0;
let kelar = 1;
let umpan = -1;
let soal = [];
let tampung = [];
let jawaban = [];
let benar = 0;
let salah = 0;

let datas = [
    {
        text: "Ibu Kota Indonesia?",
        pilihan: ["Jakarta", "Bandung", "Surabaya"],
        jawaban: "Jakarta"
    },
    {
        text: "Manakah yang Berbentuk Lingkaran?",
        pilihan: ["Buku", "Roda", "Laptop"],
        jawaban: "Roda"
    },
    {
        text: "Apakah HTML adalah Bahasa Program?",
        pilihan: ["Bisa Jadi", "Bukan", "Ya"],
        jawaban: "Bukan"
    },
    {
        text: "Apakah yang Orang Lakukan ketika Haus?",
        pilihan: ["Makan", "Lari", "Minum"],
        jawaban: "Minum"
    },
    {
        text: "Apakah yang Orang Lakukan ketika Ada Hantu?",
        pilihan: ["Makan", "Lari", "Minum"],
        jawaban: "Lari"
    }
];


// Jum Soal
$(".jum-soal").text(datas.length)

function randomize() {
    datas.sort(() => 0.5 - Math.random());
}

randomize();

function Tanya() {
    $(".info").fadeIn();
    
    datas[n].pilihan.sort(() => 0.5 * Math.random());
    $(".container").html('');
    $(".container").prepend(`        
        <div class="wrap-pertanyaan">
            <h2 class="pertanyaan">${datas[n].text}</h2>
        </div>
    `)
    for(i=0;i<3;i++) {
        $(".container").append(`
            <div class="pilihan">
                <div class="wrap-pilih">
                    <p class="pilih">${datas[n].pilihan[i]}</p>
                    <input type="checkbox" class="dipilih">
                </div>           
            </div>
        `)
    }
    $(".container").append(`
    <div class="btn">
        <button class="jawab">Jawab</button>
    </div>
    `)    
}

Tanya();


$(document).on("click",".wrap-pilih", function() {
    idx = $(".wrap-pilih").index(this);
    $(".wrap-pilih").removeClass('active');
    $(".dipilih").attr("checked", false);
    $(".dipilih").eq(idx).attr("checked", true);
    $(".wrap-pilih").eq(idx).addClass('active');
})


$(document).on("click", ".jawab", function() {
    
    if(!$(".dipilih").eq(i).attr("checked")) {
        $(".warning").slideDown(200);
        setTimeout(()=> {
            $(".warning").slideUp();
        }, 1000)
    }

   validasi();
})

function validasi() {    

    // Tampung jawaban 
    _pilihan = "";
    for(i=0;i<datas[n].pilihan.length;i++) {        
       _pilihan += `
           <div class="pilihan">
               <div class="wrap-pilih">
                   <p class="pilih">${datas[n].pilihan[i]}</p>
                   <input type="checkbox" class="dipilih">
               </div>           
           </div>
       `
    }

    tampung.push([`
       <div class="wrap-pertanyaan">
           <h2 class="pertanyaan">${datas[n].text}</h2>
           ${_pilihan}
       </div>
   `])
    // End Tampung

    // Validasi Pertanyaan Benar / Salah
    $(".dipilih").each(e => {     
        if($(".dipilih").eq(e).attr('checked')) {    

            // Tampung Pilihan User
            jawaban.push(e);

            if(e > umpan) {
                kelar++;
                $(".isi").text(kelar);  
            }
                              
            $(".warning").css("display","none")

            jawab = $(".pilih").eq(e).text();

            if(jawab == datas[n].jawaban) {     
                benar++;                              
                totalNilai += (100 / datas.length);
                n++;                
                if(n>datas.length - 1) {
                    Selesai();
                    return false;
                }               

                Tanya();                
            } else {
                salah++;
                n++;   
                                
                if(n>4) {   
                    Selesai();      
                    return false;
                }

                Tanya();            
            }            
        }
    })
}

function Selesai() {
    $(".container").html(`
        <h1>Selesai</h1>
        <h3>Nilai: ${totalNilai}</h3>
        <div style='text-align: center;'>
            <span><b>Benar:<b> </span> ${benar} <br>
            <span><b>Salah:</b> </span> ${salah}
        </div>
        <div class='wrap-reset'>
            <button class='reset'>Ulang</button>
        </div>        
    `);

    $(".dipilih").remove();
    
    // HEREEEEEEEEEEEEEEEEEEEEEEEEEEEE

    $(".info").hide();
    kelar = 1;
    $(".isi").text(kelar)
}


$(document).on("click", ".reset", function() {    
    benar = 0;
    salah = 0;
    totalNilai = 0;
    n = 0;    
    randomize();
    Tanya();    
})


// setInterval(()=> {
//     let colors = ["lightblue","dodgerblue","lime","white","orange","purple",""];
//     let idx = Math.floor(Math.random() * 6 + 0)
//     $(".intro").css({
//         color: colors[idx]
//     })
// }, 200)