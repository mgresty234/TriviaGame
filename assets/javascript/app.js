var answers = ['will smith', 'will ferrell', 'tupac'];
var answers1 = ['vince vaughn', 'aj holsinger', 'will ferrell', 'nipsey hustle',];
var answers2 = ['will smith', 'will ferrel', 'austin koeppel', 'dave chapelle',];
var answers3 = ['kevin hart', 'jack black', 'snoop dogg', 'bruce willis',];
var questions = ['Who played Mike in Bad Boys 2', 'Who played in Old School', 'Who used the Cow bell on Saturday Night Live', 'Who played in Die Hard'];













setInterval(changeFerrel,"3000");
var arr = ["url('http://www.lyhyxx.com/data/out/46/4156953-bruce-willis-wallpapers.jpg')", "url('https://wallpaper4rest.com/actors/wallpaper/will-smith-best-pix-wallpaper_1-800x600.jpg')",
"url('https://www.theplace2.ru/archive/will_ferrell/img/Will_Ferrell_Casa_de.jpg')",
"url('http://getwallpapers.com/wallpaper/full/8/d/a/132524.jpg')",
"url('https://images6.alphacoders.com/649/thumb-1920-649500.jpg')"];
function changeFerrel() {
    var image= arr[Math.floor(Math.random()*arr.length)];
    console.log(arr);
    console.log(document.getElementById("body"))
    document.getElementById("body").style.backgroundImage=image;
}

