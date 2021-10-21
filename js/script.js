console.clear();
var _data = JSON.parse(`{
    "lyrics":[
    
    {"line":"MAGO (Salah Dengar Lirik)","time":750},

    {"line":"..","time":19000},

    {"line":"Tawar cangkir","time":21000},

    {"line":"Bau sih jatuh","time":23000},

    {"line":"Seksi nih","time":25000},

    {"line":"Jajanan ilham dopos peci ye","time":26700},

    {"line":"Sisa-sisa maju","time":30000},

    {"line":"Cium-cium makin rajin","time":32000},

    {"line":"Marahi hantu benar","time":34000},

    {"line":"..","time":37000},

    {"line":"Madu dan cendol","time":37800},

    {"line":"Jenuh hey janda","time":39000},

    {"line":"Cari jagung nara boleh (lupa nih)","time":42000},

    {"line":"Teror haji mak","time":46000},

    {"line":"Kasih cinta naaa","time":48000},

    {"line":"..","time":51000},

    {"line":"Melepis peri penyu","time":52000},

    {"line":"Tissu !","time":54000},   
    
    {"line":"Ngesot ne mogok mundur kenyang","time":55500}, 

    {"line":"Demam jantan","time":58500},

    {"line":"Mama ris piring penyu","time":60000},

    {"line":"Tissu !","time":62000},

    {"line":"Nomor feri deh","time":63300},

    {"line":"Ngamen tik tok tik tok","time":65000},

    {"line":"Ring mahal","time":68000},

    {"line":"..","time":69000},

    {"line":"MAGER MAGER","time":69700},

    {"line":"Setan eh bajingan dah","time":71000},

    {"line":"Gundul licin hamil deh nih","time":73000},

    {"line":"MAGER MAGER","time":77000},

    {"line":"Lari wihan kumul cok","time":79700},

    {"line":"Hamil tik tok tik tok","time":81700},

    {"line":"Pisang hai","time":84000},

    {"line":"..","time":85300},

    {"line":"Pijit jauh kumi teko","time":86000},

    {"line":"Gaji terjun segudang","time":89000},

    {"line":"Suga ih sok","time":91000},

    {"line":"Ih kejam","time":93000},

    {"line":"Warna me warnain deh rok","time":94000},

    {"line":"Ku polisi bunuh terong","time":96000},

    {"line":"Permen gantung goyah","time":98000},

    {"line":"..","time":101000},

    {"line":"Bego sapi gol","time":101500},

    {"line":"Cabe chill garuk kek","time":103000},

    {"line":"Bikin resah des manarik gil","time":105000},

    {"line":"..","time":108000},

    {"line":"Cari terong buah","time":110000},

    {"line":"Pilih gaji buah","time":112000},

    {"line":"..","time":115000},

    {"line":"Mak lapis piring for u","time":116000},

    {"line":"Tissu !","time":118000},

    {"line":"Kau sok nabung","time":119000},

    {"line":"Gaun dan kenyang","time":120000},

    {"line":"Demam jantan","time":122000},

    {"line":"Mahar is beli penyu","time":124000},

    {"line":"Tissu !","time":126000},

    {"line":"Nolak berita","time":128000},

    {"line":"Ambil tik tok tik tok","time":130000},

    {"line":"Ring mahal","time":132000},

    {"line":"..","time":133200},

    {"line":"MAGER MAGER","time":134000},

    {"line":"Setan eh bajingan dah","time":136000},

    {"line":"Gundul licin","time":137000},

    {"line":"Adil teknik","time":139000},

    {"line":"MAGER MAGER","time":141000},

    {"line":"Naro wihan kumul cok","time":143000},

    {"line":"Ngamen tik tok tik tok","time":145000},

    {"line":"Pisang Hai","time":148000},

    {"line":"..","time":149000},

    {"line":"Indomie naik","time":149500},

    {"line":"Iris minyak hoooo","time":153000},

    {"line":"Bego tegor kecil sok","time":157000},

    {"line":"Catati teo mak","time":159000},

    {"line":"Sodara","time":161000},

    {"line":"..","time":163000},

    {"line":"Malam is peri penyu","time":164000},

    {"line":"Tissue !","time":166000},

    {"line":"kusut nabok tuh uh dan kenyang","time":167000},

    {"line":"Demam jantan","time":170000},

    {"line":"Mahal is beli penyu","time":172000},

    {"line":"Tissue !","time":174000},

    {"line":"Nawar beli deh","time":175000},

    {"line":"Ngamen tik tok tik tok","time":177000},

    {"line":"Ring mahal","time":179500},

    {"line":"..","time":180000},

    {"line":"MAGER MAGER","time":181000},

    {"line":"Setan ih bajingan deh","time":183000},

    {"line":"Gundul licin","time":186000},

    {"line":"Anak kami","time":187000},

    {"line":"MAGER MAGER","time":189000},

    {"line":"Nari wihan kumul cok","time":191000},

    {"line":"Ngamen tik tok tik tok","time":193000},

    {"line":"Pisang hai","time":195000}

    
    ]}`);
var currentLine = "";

function align() {
    var a = $(".highlighted").height();
    var c = $(".content").height();
    var d = $(".highlighted").offset().top - $(".highlighted").parent().offset().top;
    var e = d + (a / 2) - (c / 2);
    $(".content").animate({ scrollTop: e + "px" }, { easing: "swing", duration: 250 });
}

var lyricHeight = $(".lyrics").height();
$(window).on("resize", function() {
    if ($(".lyrics").height() != lyricHeight) { //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
        lyricHeight = $(".lyrics").height();
        align();
    }
});

$(document).ready(function() {
    $("video").on('timeupdate', function(e) {
        var time = this.currentTime * 1000;
        var past = _data["lyrics"].filter(function(item) {
            return item.time < time;
        });
        if (_data["lyrics"][past.length] != currentLine) {
            currentLine = _data["lyrics"][past.length];
            $(".lyrics div").removeClass("highlighted");
            $(`.lyrics div:nth-child(${past.length})`).addClass("highlighted"); //Text might take up more lines, do before realigning
            align();
        }
    });
});

generate();

function generate() {
    var html = "";
    for (var i = 0; i < _data["lyrics"].length; i++) {
        html += "<div";
        if (i == 0) {
            html += ` class="highlighted"`;
            currentLine = 0;
        }
        if (_data["lyrics"][i]["note"]) {
            html += ` note="${_data["lyrics"][i]["note"]}"`;
        }
        html += ">";
        html += _data["lyrics"][i]["line"] == "" ? "•" : _data["lyrics"][i]["line"];
        html += "</div>"
    }
    $(".lyrics").html(html);
    align();
}