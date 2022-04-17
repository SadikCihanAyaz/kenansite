var strings = new Object();

if(navigator.browserLanguage){
  lang = navigator.browserLanguage;
}else{
  lang = navigator.language;
}

lang = lang.substr(0,2).toLowerCase();



if(lang=='tr'){/////////////////////////////TR////////////////////////////////////////////////////

    strings["AboutUs"]                              = "HAKKIMIZDA";
    strings["ContactUs"]                              = "İLETİŞİM";
    
    strings["OurClients"]                              = "REFERANSLARIMIZ";
    strings["OurWorks"]                              = "FAALİYETLERİMİZ";
    strings["wedo"]                              = "EMLAK İŞLERİ YAPIYORUZ";
    strings["AboutUsDetail"]                              = "EMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZ";
    
    
        
}else{//////////////////////////////////////EN///////////////////////////////////////////////////

strings["AboutUs"]                              = "About Us";
strings["ContactUs"]                              = "Contact Us";

strings["OurClients"]                              = "Our Clients";
strings["OurWorks"]                              = "Our Works";
strings["wedo"]                                   = "WE DO REAL ESTATE";
strings["AboutUsDetail"]                             = "WE DO REAL ESTATE";

}

for(var i=0; i< Object.keys(strings).length; i++)
{
    if(document.getElementById(Object.keys(strings)[i]) !== null)
    {
      document.getElementById(Object.keys(strings)[i]).innerHTML = Object.values(strings)[i];
    }

}