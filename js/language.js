var strings = new Object();

if(navigator.browserLanguage){
  lang = navigator.browserLanguage;
}else{
  lang = navigator.language;
}

lang = lang.substr(0,2).toLowerCase();



if(lang=='tr'){/////////////////////////////TR////////////////////////////////////////////////////

    strings["AboutUs"]                              = "HAKKIMIZDA";
    strings["ContactUs"]                            = "İLETİŞİM";
    strings["OurClients"]                            = "FAALİYET ALANLARIMIZ";
    strings["OurWorks"]                              = "PROJELER";
    strings["wedo"]                                  = "EMLAK İŞLERİ YAPIYORUZ";
    strings["ManinPage"]                             = "ANASAYFA";
    strings["Client_Detail1"]                          = "MÜHENDİSLİK FAALİYETLERİ";
    strings["Client_Detail2"]                          = "ENDÜSTRİYEL TESİSLER";
    strings["Client_Detail3"]                          = "RESTORASYON";
    strings["Client_Detail4"]                          = "BİNA VE DEKORASYON İŞLERİ";
    strings["Client_Detail5"]                          = "MİMARLIK VE MÜHENDİSLİK HİZMETLERİ VE PROJE GELİŞTİRME";
    strings["Client_Detail6"]                          = "GAYRÜMENKUL PAZARLAMA(REAL ESTATE)";
    strings["AboutUsDetail"]                         = "EMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZEMLAK İŞLERİ YAPIYORUZ";
    strings["Client_Area"]                          = "FAALİYET ALANLARIMIZ";
    strings["AboutUs1"]                              = "HAKKIMIZDA";
    
    
        
}else{//////////////////////////////////////EN///////////////////////////////////////////////////

strings["AboutUs"]                                = "About Us";
strings["ContactUs"]                              = "Contact Us";
strings["OurClients"]                             = "Our Clients";
strings["OurWorks"]                               = "Our Works";
strings["wedo"]                                   = "WE DO REAL ESTATE";
strings["AboutUsDetail"]                          = "WE DO REAL ESTATE";
strings["ManinPage"]                             = "Main Page";
strings["Client_Detail1"]                          = "MÜHENDİSLİK FAALİYETLERİ";
strings["Client_Detail2"]                          = "ENDÜSTRİYEL TESİSLER";
strings["Client_Detail3"]                          = "RESTORASYON";
strings["Client_Detail4"]                          = "BİNA VE DEKORASYON İŞLERİ";
strings["Client_Detail5"]                          = "MİMARLIK VE MÜHENDİSLİK HİZMETLERİ VE PROJE GELİŞTİRME";
strings["Client_Detail6"]                          = "GAYRÜMENKUL PAZARLAMA(REAL ESTATE)";
strings["Client_Area"]                          = "FAALİYET ALANLARIMIZ";
strings["AboutUs1"]                                = "About Us";

}

for(var i=0; i< Object.keys(strings).length; i++)
{
    if(document.getElementById(Object.keys(strings)[i]) !== null)
    {
      document.getElementById(Object.keys(strings)[i]).innerHTML = Object.values(strings)[i];
    }

}