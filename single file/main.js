const eidulfitr = "6/3/2021";
const chinaDiv = document.getElementById('china');
const indiaDiv = document.getElementById('india');
const USADiv = document.getElementById('USA');
const IndonesiaDiv = document.getElementById('Indonesia');
const PakistanDiv = document.getElementById('Pakistan');
const BrazilDiv = document.getElementById('Brazil');
const NigeriaDiv = document.getElementById('Nigeria');
const BangladeshDiv = document.getElementById('Bangladesh');
const RussiaDiv = document.getElementById('Russia');
const MexicoDiv = document.getElementById('Mexico');
const JapanDiv = document.getElementById('Japan');
const EthiopiaDiv = document.getElementById('Ethiopia');
const PhilippinesDiv = document.getElementById('Philippines');
const EgyptDiv = document.getElementById('Egypt');
const VietnamDiv = document.getElementById('Vietnam');
const DRCongoDiv = document.getElementById('DRCongo');
const TurkeyDiv = document.getElementById('Turkey');
const GermanyDiv = document.getElementById('Germany');
const IranDiv = document.getElementById('Iran');
const ThailandDiv = document.getElementById('Thailand');
const ukDiv = document.getElementById('uk');
const FranceDiv = document.getElementById('France');
const ItalyDiv = document.getElementById('Italy');
const TanzaniaDiv = document.getElementById('Tanzania');
const SouthAfricaDiv = document.getElementById('SouthAfrica');
const MyanmarDiv = document.getElementById('Myanmar');
const KenyaDiv = document.getElementById('Kenya');
const SouthKoreaDiv = document.getElementById('SouthKorea');
const ColombiaDiv = document.getElementById('Colombia');
const Spainv = document.getElementById('Spain');
const Ugandav = document.getElementById('Uganda');
const Argentinav = document.getElementById('Argentina');
const Algeriav = document.getElementById('Algeria');
const Sudanv = document.getElementById('Sudan');
const Ukrainev = document.getElementById('Ukraine');
const Iraqv = document.getElementById('Iraq');
const Afghanistanv = document.getElementById('Afghanistan');
const Polandv = document.getElementById('Poland');
const Canadav = document.getElementById('Canada');
const Moroccov = document.getElementById('Morocco');
const SaudiArabiav = document.getElementById('SaudiArabia');
const Uzbekistanv = document.getElementById('Uzbekistan');
const Peruv = document.getElementById('Peru');
const Angolav = document.getElementById('Angola');
const Malaysiav = document.getElementById('Malaysia');
const Mozambiquev = document.getElementById('Mozambique');
const Ghanav = document.getElementById('Ghana');
const Yemenv = document.getElementById('Yemen');
const Nepalv = document.getElementById('Nepal');
const Venezuelav = document.getElementById('Venezuela');
const Madagascarv = document.getElementById('Madagascar');
const Cameroonv = document.getElementById('Cameroon');
const CdIvoirev = document.getElementById('CdIvoire');
const NorthKoreav = document.getElementById('NorthKorea');
const Australiav = document.getElementById('Australia');
const Nigerv = document.getElementById('Niger');
const Taiwanv = document.getElementById('Taiwan');
const SriLankav = document.getElementById('SriLanka');
const BurkinaFasov = document.getElementById('BurkinaFaso');
const Maliv = document.getElementById('Mali');
const Romaniav = document.getElementById('Romania');
const Malawiv = document.getElementById('Malawi');
const Chilev = document.getElementById('Chile');
const Kazakhstanv = document.getElementById('Kazakhstan');
const Zambiav = document.getElementById('Zambia');
const Guatemalav = document.getElementById('Guatemala');
const Ecuadorv = document.getElementById('Ecuador');
const Syriav = document.getElementById('Syria');
const Netherlandsv = document.getElementById('Netherlands');
const Senegalv = document.getElementById('Senegal');
const Cambodiav = document.getElementById('Cambodia');
const Chadv = document.getElementById('Chad');
const Somaliav = document.getElementById('Somalia');
const Zimbabwev = document.getElementById('Zimbabwe');
const Guineav = document.getElementById('Guinea');
const Rwandav = document.getElementById('Rwanda');
const Beninv = document.getElementById('Benin');
const Burundiv = document.getElementById('Burundi');
const Tunisiav = document.getElementById('Tunisia');
const Boliviav = document.getElementById('Bolivia');
const Belgiumv = document.getElementById('Belgium');
const Haitiv = document.getElementById('Haiti');
const Cubav = document.getElementById('Cuba');
const SouthSudanv = document.getElementById('SouthSudan');
const DominicanRepublicv = document.getElementById('DominicanRepublic');
const Czechrv = document.getElementById('Czechr');
const Greecev = document.getElementById('Greece');
const Jordanv = document.getElementById('Jordan');
const Portugalv = document.getElementById('Portugal');
const Azerbaijanv = document.getElementById('Azerbaijan');
const Swedenv = document.getElementById('Sweden');
const Hondurasv = document.getElementById('Honduras');
const UAEv = document.getElementById('UAE');
const Hungaryv = document.getElementById('Hungary');
const Tajikistanv = document.getElementById('Tajikistan');
const Belarusv = document.getElementById('Belarus');
const Austriav = document.getElementById('Austria');
const PNGuineav = document.getElementById('PNGuinea');
const Serbiav = document.getElementById('Serbia');
const Israelv = document.getElementById('Israel');
const Switzerlandv = document.getElementById('Switzerland');
const Togov = document.getElementById('Togo');
const SLeonev = document.getElementById('SLeone');
const HongKongv = document.getElementById('HongKong');
const Laosv = document.getElementById('Laos');
const Paraguayv = document.getElementById('Paraguay');
const Bulgariav = document.getElementById('Bulgaria');
const Libyav = document.getElementById('Libya');
const Lebanonv = document.getElementById('Lebanon');
const Nicaraguav = document.getElementById('Nicaragua');
const Kyrgyzstanv = document.getElementById('Kyrgyzstan');
const ElSalvadorv = document.getElementById('ElSalvador');
const Turkmenistanv = document.getElementById('Turkmenistan');
const Singaporev = document.getElementById('Singapore');
const Denmarkv = document.getElementById('Denmark');
const Finlandv = document.getElementById('Finland');
const Congov = document.getElementById('Congo');
const Slovakiav = document.getElementById('Slovakia');
const Norwayv = document.getElementById('Norway');
const Omanv = document.getElementById('Oman');
const Palestinev = document.getElementById('Palestine');
const CostaRicav = document.getElementById('CostaRica');
const Liberiav = document.getElementById('Liberia');
const Irelandv = document.getElementById('Ireland');
const CAfricanv = document.getElementById('CAfrican');
const NewZealandv = document.getElementById('NewZealand');
const Mauritaniav = document.getElementById('Mauritania');
const Panamav = document.getElementById('Panama');
const Christianityv = document.getElementById('Christianity');
const Islamv = document.getElementById('Islam');
const Hinduismv = document.getElementById('Hinduism');
const Unaffiliatedv = document.getElementById('Unaffiliated');
const Buddhismv = document.getElementById('Buddhism');
const Folkv = document.getElementById('Folk');
const Otherv = document.getElementById('Other');
const Judaismv = document.getElementById('Judaism');
const Asiav = document.getElementById('Asia');
const Africav = document.getElementById('Africa');
const Europev = document.getElementById('Europe');
const LACaribbeanv = document.getElementById('LACaribbean');
const NAmericav = document.getElementById('NAmerica');
const Oceaniav = document.getElementById('Oceania');











function countdowntoeid(){
    const eidday = new Date(eidulfitr);
    const currentday = new Date();

    const oneseconds = (currentday-eidday)/1000;
    const threeseconds = (currentday-eidday)/3000;
    const fiveseconds = (currentday-eidday)/5000;
    const tenseconds = (currentday-eidday)/10000;
    const minute = (currentday-eidday)/60000;
    const twominute = (currentday-eidday)/20000;
    const threeminute = (currentday-eidday)/15000;
    const fiveminute = (currentday-eidday)/4000;
    const tenminute = (currentday-eidday)/6000;
    const tennnzerominute = (currentday-eidday)/7140;
	const tennhalfminute = (currentday-eidday)/630000;
    const twentyminute = (currentday-eidday)/300250;
    const twentynhalfminute = (currentday-eidday)/40000;
    const sevennhalfminute = (currentday-eidday)/7000;
    const thirtyminute = (currentday-eidday)/10100;
    const thirtyyminute = (currentday-eidday)/12000;
    const thirtyyyminute = (currentday-eidday)/35000;
    const thirtyyyyminute = (currentday-eidday)/21000;
    const thirtyyyyyminute = (currentday-eidday)/25000;
    const thirtyyyyzyminute = (currentday-eidday)/30000;
    const thirtyyyyzzyminute = (currentday-eidday)/40000;
    
    const china = Math.floor(fiveseconds)  +1444438762;
    const india = Math.floor(threeseconds)-77070  +1392548873;
    const USA = Math.floor(tenseconds)-23231  +332791784;
    const Indonesia = Math.floor(minute) +276199395;
    const Pakistan = Math.floor(twominute) +224887475;
    const Brazil = Math.floor(threeminute) +213953586;
    const Nigeria = Math.floor(fiveminute) +210918586;
    const Bangladesh = Math.floor(tenminute) +166206557;
    const Russia = Math.floor(fiveminute) +145991752;
    const Mexico = Math.floor(tenminute) +130185719;
    const Japan= Math.floor(thirtyminute) +126478146;
    const Ethiopia= Math.floor(fiveminute) +117627236;
    const Philippines= Math.floor(thirtyminute) +110933122;
    const Egypt= Math.floor(tenminute) +104131288;
    const Vietnam= Math.floor(tenminute) +98147716;
    const DRCongo= Math.floor(threeminute) +92119570;
    const Turkey= Math.floor(twominute) +85178871;
    const Germany= Math.floor(fiveminute) +84989121;
    const Iran= Math.floor(twominute) +84030289;
    const Thailand= Math.floor(threeminute) +69961064;
    const uk= Math.floor(threeminute) +68214586;
    const France= Math.floor(threeminute) +65406289;
    const Italy= Math.floor(tenminute) +60462500;
    const Tanzania= Math.floor(twentynhalfminute) +61330250;
    const SouthAfrica= Math.floor(tennnzerominute) +60001562;
    const Myanmar= Math.floor(twentyminute) +54746126;
    const Kenya= Math.floor(thirtyminute) +54876656;
    const SouthKorea= Math.floor(tenminute) +51309625;
    const Colombia= Math.floor(twentynhalfminute) +51384684;
    const Spain= Math.floor(thirtyyminute) +46771291;
    const Uganda= Math.floor(tenminute) +47099454;
    const Argentina= Math.floor(thirtyyyminute) +45578943;
    const Algeria= Math.floor(thirtyyyyminute) +44587726;
    const Sudan= Math.floor(tennnzerominute) +44805666;
    const Ukraine= Math.floor(thirtyminute) +43734436;
    const Iraq= Math.floor(thirtyyyminute) +41065330;
    const Afghanistan= Math.floor(thirtyminute) +39746919;
    const Poland= Math.floor(tenminute) +37846948;
    const Canada= Math.floor(twentyminute) +38047813;
    const Morocco= Math.floor(thirtyyyyzyminute) +37315634;
    const SaudiArabia= Math.floor(twentynhalfminute) +35317349;
    const Uzbekistan= Math.floor(thirtyyminute) +33919435;
    const Peru= Math.floor(tennnzerominute) +33397822;
    const Angola= Math.floor(thirtyminute) +33827396;
    const Malaysia= Math.floor(tenminute) +32750179;
    const Mozambique= Math.floor(thirtyyyyminute) +32076704;
    const Ghana= Math.floor(thirtyyyminute) +31677855;
    const Yemen= Math.floor(thirtyminute) +30438967;
    const Nepal= Math.floor(thirtyyyyyminute) +29624447;
    const Venezuela= Math.floor(thirtyyyyzzyminute) +28362137;
    const Madagascar= Math.floor(thirtyyyyzyminute) +28357267;
    const Cameroon= Math.floor(twentynhalfminute) +27163921;
    const CdIvoire= Math.floor(tenminute) +26989255;
    const NorthKorea= Math.floor(thirtyyyyminute) +25882949;
    const Australia= Math.floor(twentyminute) +25773865;
    const Niger= Math.floor(sevennhalfminute) +25033979;
    const Taiwan= Math.floor(thirtyminute) +23856541;
	const SriLanka = Math.floor(tennnzerominute) +21495814;
	const BurkinaFaso = Math.floor(thirtyyminute) +21440451;
	const Mali = Math.floor(thirtyyyminute) +20798121;
	const Romania = Math.floor(thirtyminute) +19238365;
	const Malawi = Math.floor(tenminute) +19592653;
	const Chile = Math.floor(thirtyyyyzyminute) +19267851;
	const Kazakhstan = Math.floor(sevennhalfminute) +18984636;
	const Zambia = Math.floor(thirtyyyminute) +18866876;
	const Guatemala = Math.floor(thirtyyyyminute) +18223923;
	const Ecuador = Math.floor(twentynhalfminute) +17891760;
	const Syria = Math.floor(tennnzerominute) +17898318;
	const Netherlands = Math.floor(thirtyyyyyminute) +17169583;
	const Senegal = Math.floor(thirtyminute) +17157089;
	const Cambodia = Math.floor(tenminute) +16933634;
	const Chad = Math.floor(sevennhalfminute) +16868008;
	const Somalia = Math.floor(thirtyminute) +16309080;
	const Zimbabwe = Math.floor(thirtyyminute) +15063776;
	const Guinea = Math.floor(twentyminute) +13466762;
	const Rwanda = Math.floor(twentynhalfminute) +13252485;
	const Benin = Math.floor(twentyminute) +12420434;
	const Burundi = Math.floor(sevennhalfminute) +12223403;
	const Tunisia = Math.floor(thirtyyyyzyminute) +11932862;
	const Bolivia = Math.floor(sevennhalfminute) +11820627;
	const Belgium = Math.floor(tenminute) +11636129;
	const Haiti = Math.floor(thirtyyyminute) +11531262;
	const Cuba = Math.floor(thirtyminute) +11320213;
	const SouthSudan = Math.floor(tennnzerominute) +11315382;
	const DominicanRepublic = Math.floor(thirtyyminute) +10948336;
	const Czechr = Math.floor(thirtyyyyminute) +10727179;
	const Greece = Math.floor(thirtyminute) +10424065;
	const Jordan = Math.floor(twentynhalfminute) +10296820;
	const Portugal = Math.floor(tenminute) +10197383;
	const Azerbaijan = Math.floor(thirtyyyyyminute) +10223764;
	const Sweden = Math.floor(thirtyminute) +10157229;
	const Honduras = Math.floor(twentyminute) +10050865;
	const UAE = Math.floor(twentyminute) +10000938;
	const Hungary = Math.floor(thirtyyyminute) +9661362;
	const Tajikistan = Math.floor(sevennhalfminute) +9737486;
	const Belarus = Math.floor(sevennhalfminute) +9449997;
	const Austria = Math.floor(thirtyminute) +9053915;
	const PNGuinea = Math.floor(thirtyyyyzzyminute) +9104740;
	const Serbia = Math.floor(thirtyyyyminute) +8738045;
	const Israel = Math.floor(tennnzerominute) +8781236;
	const Switzerland = Math.floor(thirtyyyminute) +8712923;
	const Togo = Math.floor(thirtyyyyzyminute) +8460030;
	const SLeone = Math.floor(thirtyminute) +8128296;
	const HongKong = Math.floor(thirtyyminute) +7553260;
	const Laos = Math.floor(twentyminute) +7373627;
	const Paraguay = Math.floor(thirtyminute) +7213755;
	const Bulgaria = Math.floor(twentynhalfminute) +6900591;
	const Libya = Math.floor(sevennhalfminute) +6957901;
	const Lebanon = Math.floor(thirtyminute) +6826119;
	const Nicaragua = Math.floor(thirtyyyminute) +6697683;
	const Kyrgyzstan = Math.floor(tennnzerominute) +6624284;
	const ElSalvador = Math.floor(twentyminute); +6516198;
	const Turkmenistan = Math.floor(thirtyminute) +6113428;
	const Singapore = Math.floor(thirtyyyyyminute) +5892804;
	const Denmark = Math.floor(thirtyyyyminute) +5811074;
	const Finland = Math.floor(twentyminute) +5548471;
	const Congo = Math.floor(thirtyminute) +5645136;
	const Slovakia = Math.floor(thirtyyyminute) +5462001;
	const Norway = Math.floor(thirtyyminute) +5460333;
	const Oman = Math.floor(twentyminute) +5228283;
	const Palestine = Math.floor(twentynhalfminute) +5212287;
	const CostaRica = Math.floor(thirtyminute) +5137254;
	const Liberia = Math.floor(sevennhalfminute) +5168891;
	const Ireland = Math.floor(tennnzerominute) +4988673;
	const CAfrican = Math.floor(thirtyminute) +4907951;
	const NewZealand = Math.floor(sevennhalfminute) +4858292;
	const Mauritania = Math.floor(twentyminute) +4764238;
	const Panama = Math.floor(thirtyminute) +4377786;
	const Christianity = Math.floor(threeseconds) +2486777504;
	const Islam = Math.floor(oneseconds) +1943698837;
	const Hinduism = Math.floor(fiveseconds) +1169592280;
	const Unaffiliated = Math.floor(twominute) +1208106233;
	const Buddhism = Math.floor(threeminute) +523183525;
	const Folk = Math.floor(twominute) +444778959;
	const Other = Math.floor(tenseconds) +66767742;
	const Judaism = Math.floor(minute) +14926811;
	const Asia = Math.floor(threeseconds) +4678346463;
	const Africa = Math.floor(tenseconds) +1371171147;
	const Europe = Math.floor(twominute) +748061982;
	const LACaribbean = Math.floor(tenseconds) +659451625;
	const NAmerica = Math.floor(tennnzerominute) +371001593;
	const Oceania = Math.floor(minute) +43194451;









    






    chinaDiv.innerHTML = china;
    indiaDiv.innerHTML = india;
    USADiv.innerHTML = USA;
    IndonesiaDiv.innerHTML = Indonesia;
    PakistanDiv.innerHTML = Pakistan;
    BrazilDiv.innerHTML = Brazil;
    NigeriaDiv.innerHTML = Nigeria;
    BangladeshDiv.innerHTML = Bangladesh;
    RussiaDiv.innerHTML = Russia;
    MexicoDiv.innerHTML = Mexico;
    JapanDiv.innerHTML = Japan;
    EthiopiaDiv.innerHTML = Ethiopia;
    PhilippinesDiv.innerHTML = Philippines;
    EgyptDiv.innerHTML = Egypt;
    VietnamDiv.innerHTML = Vietnam;
    DRCongoDiv.innerHTML = DRCongo;
    TurkeyDiv.innerHTML = Turkey;
    GermanyDiv.innerHTML = Germany;
    IranDiv.innerHTML = Iran;
    ThailandDiv.innerHTML = Thailand;
    ukDiv.innerHTML = uk;
    FranceDiv.innerHTML = France;
    ItalyDiv.innerHTML = Italy;
    TanzaniaDiv.innerHTML = Tanzania;
    SouthAfricaDiv.innerHTML = SouthAfrica;
    MyanmarDiv.innerHTML = Myanmar;
    KenyaDiv.innerHTML = Kenya;
    SouthKoreaDiv.innerHTML = SouthKorea;
    ColombiaDiv.innerHTML = Colombia;
    Spainv.innerHTML = Spain;
    Ugandav.innerHTML = Uganda;
    Argentinav.innerHTML = Argentina;
    Algeriav.innerHTML = Algeria;
    Sudanv.innerHTML = Sudan;
    Ukrainev.innerHTML = Ukraine;
    Iraqv.innerHTML = Iraq;
    Afghanistanv.innerHTML = Afghanistan;
    Polandv.innerHTML = Poland;
    Canadav.innerHTML = Canada;
    Moroccov.innerHTML = Morocco;
    SaudiArabiav.innerHTML = SaudiArabia;
    Uzbekistanv.innerHTML = Uzbekistan;
    Peruv.innerHTML = Peru;
    Angolav.innerHTML = Angola;
    Malaysiav.innerHTML = Malaysia;
    Mozambiquev.innerHTML = Mozambique;
    Ghanav.innerHTML = Ghana;
    Yemenv.innerHTML = Yemen;
    Nepalv.innerHTML = Nepal;
    Venezuelav.innerHTML = Venezuela;
    Madagascarv.innerHTML = Madagascar;
    Cameroonv.innerHTML = Cameroon;
    CdIvoirev.innerHTML = CdIvoire;
    NorthKoreav.innerHTML = NorthKorea;
    Australiav.innerHTML = Australia;
    Nigerv.innerHTML = Niger;
    Taiwanv.innerHTML = Taiwan;
	SriLankav.innerHTML = SriLanka;
	BurkinaFasov.innerHTML = BurkinaFaso;
	Maliv.innerHTML = Mali;
	Romaniav.innerHTML = Romania;
	Malawiv.innerHTML = Malawi;
	Chilev.innerHTML = Chile;
	Kazakhstanv.innerHTML = Kazakhstan;
	Zambiav.innerHTML = Zambia;
	Guatemalav.innerHTML = Guatemala;
	Ecuadorv.innerHTML = Ecuador;
	Syriav.innerHTML = Syria;
	Netherlandsv.innerHTML = Netherlands;
	Senegalv.innerHTML = Senegal;
	Cambodiav.innerHTML = Cambodia;
	Chadv.innerHTML = Chad;
	Somaliav.innerHTML = Somalia;
	Zimbabwev.innerHTML = Zimbabwe;
	Guineav.innerHTML = Guinea;
	Rwandav.innerHTML = Rwanda;
	Beninv.innerHTML = Benin;
	Burundiv.innerHTML = Burundi;
	Tunisiav.innerHTML = Tunisia;
	Boliviav.innerHTML = Bolivia;
	Belgiumv.innerHTML = Belgium;
	Haitiv.innerHTML = Haiti;
	Cubav.innerHTML = Cuba;
	SouthSudanv.innerHTML = SouthSudan;
	DominicanRepublicv.innerHTML = DominicanRepublic;
	Czechrv.innerHTML = Czechr;
	Greecev.innerHTML = Greece;
	Jordanv.innerHTML = Jordan;
	Portugalv.innerHTML = Portugal;
	Azerbaijanv.innerHTML = Azerbaijan;
	Swedenv.innerHTML = Sweden;
	Hondurasv.innerHTML = Honduras;
	UAEv.innerHTML = UAE;
	Hungaryv.innerHTML = Hungary;
	Tajikistanv.innerHTML = Tajikistan;
	Belarusv.innerHTML = Belarus;
	Austriav.innerHTML = Austria;
	PNGuineav.innerHTML = PNGuinea;
	Serbiav.innerHTML = Serbia;
	Israelv.innerHTML = Israel;
	Switzerlandv.innerHTML = Switzerland;
	Togov.innerHTML = Togo;
	SLeonev.innerHTML = SLeone;
	HongKongv.innerHTML = HongKong;
	Laosv.innerHTML = Laos;
	Paraguayv.innerHTML = Paraguay;
	Bulgariav.innerHTML = Bulgaria;
	Libyav.innerHTML = Libya;
	Lebanonv.innerHTML = Lebanon;
	Nicaraguav.innerHTML = Nicaragua;
	Kyrgyzstanv.innerHTML = Kyrgyzstan;
	ElSalvadorv.innerHTML = ElSalvador;
	Turkmenistanv.innerHTML = Turkmenistan;
	Singaporev.innerHTML = Singapore;
	Denmarkv.innerHTML = Denmark;
	Finlandv.innerHTML = Finland;
	Congov.innerHTML = Congo;
	Slovakiav.innerHTML = Slovakia;
	Norwayv.innerHTML = Norway;
	Omanv.innerHTML = Oman;
	Palestinev.innerHTML = Palestine;
	CostaRicav.innerHTML = CostaRica;
	Liberiav.innerHTML = Liberia;
	Irelandv.innerHTML = Ireland;
	CAfricanv.innerHTML = CAfrican;
	NewZealandv.innerHTML = NewZealand;
	Mauritaniav.innerHTML = Mauritania;
	Panamav.innerHTML = Panama;
	Christianityv.innerHTML = Christianity;
	Islamv.innerHTML = Islam;
	Hinduismv.innerHTML = Hinduism;
	Unaffiliatedv.innerHTML = Unaffiliated;
	Buddhismv.innerHTML = Buddhism;
	Folkv.innerHTML = Folk;
	Otherv.innerHTML = Other;
	Judaismv.innerHTML = Judaism;
	Asiav.innerHTML = Asia;
	Africav.innerHTML = Africa;
	Europev.innerHTML = Europe;
	LACaribbeanv.innerHTML = LACaribbean;
	NAmericav.innerHTML = NAmerica;
	Oceaniav.innerHTML = Oceania;







    





    console.log(china, india, USA, Indonesia, Pakistan, Brazil, Nigeria, Bangladesh, Russia);
}

countdowntoeid();
setInterval(countdowntoeid, 1000);