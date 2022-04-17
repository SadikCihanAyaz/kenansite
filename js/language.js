var strings = new Object();

if(navigator.browserLanguage){
  lang = navigator.browserLanguage;
}else{
  lang = navigator.language;
}

lang = lang.substr(0,2).toLowerCase();



if(lang=='tr'){/////////////////////////////EN////////////////////////////////////////////////////

    strings["AboutUs"]                              = "HAKKIMIZDA";
    strings["ContactUs"]                              = "İLETİŞİM";
    strings["OurClients"]                              = "REFERANSLARIMIZ";
    strings["OurWorks"]                              = "FAALİYETLERİMİZ";
    strings["wedo"]                              = "EMLAK İŞLERİ YAPIYORUZ";
    strings["AboutUsDetail"]                              = "EMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZ";
    
    
        
}else{//////////////////////////////////////TR///////////////////////////////////////////////////

strings["AboutUs"]                              = "About Us";
strings["ContactUs"]                              = "Contact Us";
strings["OurClients"]                              = "Our Clients";
strings["OurClients"]                              = "Our Works";
strings["wedo"]                                   = "WE DO REAL ESTATE";
strings["AboutUsDetail"]                             = "WE DO REAL ESTATE";

}

console.log(Object.values(strings)[0]);

for(var i=0; i< Object.keys(strings).length; i++)
{
    console.log('calistimi');
    document.getElementById(Object.keys(strings)[i]).innerHTML = Object.values(strings)[i];
}