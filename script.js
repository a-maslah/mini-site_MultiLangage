let arabe =  document.getElementById("arabe");
let english =  document.getElementById("english");
let title= document.getElementById("title");
let text = document.getElementById("welcome");
let first = document.getElementById("first");
let second = document.getElementById("second");
let assistant  = document.getElementById("assis");
let it = document.getElementById("IT");
let about = document.getElementById("about");
let soft = document.getElementById("soft");
let contact = document.getElementById("contact");

arabe.onclick = () => {
setLanguage("arabe");
localStorage.setItem("lang","arabe");
};



english.onclick = () => {
    setLanguage("english");
    localStorage.setItem("lang","english");

    };

onload = () => {
    setLanguage(localStorage.getItem("lang"));
}
function setLanguage(getLanuage)
{

    if(getLanuage === "arabe"){
        title.innerHTML = "أمين مبرمج";
        text.innerHTML = "مرحبا بكم في موقع الويب الخاص بي ";
        first.innerHTML = "الصورة الأولى";
        second.innerHTML = "الصورة الثانية";
        assistant.innerHTML	=" مساعد الكمبيوتر عبر الإنترنت";
        it.innerHTML ="إدارة تقنية المعلومات" ;
        about.innerHTML="معلومات عنا";
        soft.innerHTML="أنا مهندس برمجيات";
        contact.innerHTML="اتصل بنا";

    }
    else if(getLanuage === "english"){
        title.innerHTML = "AMINE developer";
        text.innerHTML = " welcome to my site web ";
        first.innerHTML ="first photo";
        second.innerHTML ="second photo";
        assistant.innerHTML	="online computer assistant";
        it.innerHTML ="IT management";
        about.innerHTML="About Us";
        soft.innerHTML="Im a software engineer";
        contact.innerHTML="Contact Us";
    }



} 