// STATE DATA WITH IMAGES
const stateInfo = {
    "GUJARAT": {
    language: "Gujarati",
    script: "Gujarati",
    region: "West India",
    capital: "Gandhinagar",
    festival: "Navratri",
    dance: "Garba",
    history: "Indus Valley sites, Solanki dynasty",
    cuisine: "Dhokla, Thepla",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Garba_dance.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Garba_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/7/77/Dhokla.jpg"
  },

  "RAJASTHAN": {
    language: "Hindi",
    script: "Devanagari",
    region: "North India",
    capital: "Jaipur",
    festival: "Desert Festival",
    dance: "Ghoomar",
    history: "Rajput kingdoms",
    cuisine: "Dal Baati Churma",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ghoomar_dance.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ghoomar_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Dal_Baati.jpg"
  },

  "MADHYA PRADESH": {
    language: "Hindi",
    script: "Devanagari",
    region: "Central India",
    capital: "Bhopal",
    festival: "Khajuraho Dance Festival",
    dance: "Matki",
    history: "Gupta & Paramara dynasties",
    cuisine: "Poha, Bhutte ka Kees",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Khajuraho_Dance_Festival.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Matki_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Poha.jpg"
  },

  "UTTAR PRADESH": {
    language: "Hindi",
    script: "Devanagari",
    region: "North India",
    capital: "Lucknow",
    festival: "Kumbh Mela",
    dance: "Kathak",
    history: "Mughal & ancient kingdoms",
    cuisine: "Awadhi Biryani",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Kumbh_Mela.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kathak_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Awadhi_Biryani.jpg"
  },

  "BIHAR": {
    language: "Hindi",
    script: "Devanagari",
    region: "East India",
    capital: "Patna",
    festival: "Chhath Puja",
    dance: "Bidesia",
    history: "Magadha Empire",
    cuisine: "Litti Chokha",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/4/44/Chhath_Puja.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bidesia_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Litti_Chokha.jpg"
  },

  "WEST BENGAL": {
    language: "Bengali",
    script: "Bengali",
    region: "East India",
    capital: "Kolkata",
    festival: "Durga Puja",
    dance: "Chhau",
    history: "Bengal Sultanate & British era",
    cuisine: "Rosogolla, Fish Curry",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Durga_Puja.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Chhau_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Rasgulla.jpg"
  },

  "ODISHA": {
    language: "Odia",
    script: "Odia",
    region: "East India",
    capital: "Bhubaneswar",
    festival: "Rath Yatra",
    dance: "Odissi",
    history: "Kalinga kingdom",
    cuisine: "Pakhala Bhata",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Rath_Yatra.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Odissi_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pakhala.jpg"
  },

  "ASSAM": {
    language: "Assamese",
    script: "Assamese",
    region: "North East India",
    capital: "Dispur",
    festival: "Bihu",
    dance: "Bihu Dance",
    history: "Ahom kingdom",
    cuisine: "Masor Tenga",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Bihu_dance.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Bihu_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/4/41/Masor_Tenga.jpg"
  },

  "PUNJAB": {
    language: "Punjabi",
    script: "Gurmukhi",
    region: "North India",
    capital: "Chandigarh",
    festival: "Baisakhi",
    dance: "Bhangra",
    history: "Sikh Empire",
    cuisine: "Makki di Roti, Sarson da Saag",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Baisakhi.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Bhangra_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sarson_ka_saag.jpg"
  },

  "HARYANA": {
    language: "Hindi",
    script: "Devanagari",
    region: "North India",
    capital: "Chandigarh",
    festival: "Teej",
    dance: "Phag",
    history: "Vedic civilization",
    cuisine: "Bajra Khichdi",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Teej_festival.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Phag_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Bajra_Khichdi.jpg"
  },

  "HIMACHAL PRADESH": {
    language: "Hindi",
    script: "Devanagari",
    region: "North India",
    capital: "Shimla",
    festival: "Kullu Dussehra",
    dance: "Nati",
    history: "Hill kingdoms",
    cuisine: "Dham",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Kullu_Dussehra.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/9/97/Nati_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Himachali_Dham.jpg"
  },

  "UTTARAKHAND": {
  language: "Hindi, Garhwali, Kumaoni",
  script: "Devanagari",
  region: "North India",
  capital: "Dehradun",
  festival: "Harela",
  dance: "Chholiya",
  history: "Kumaon & Garhwal kingdoms",
  cuisine: "Kafuli, Bhatt ki Churdkani",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Harela_festival.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/5/55/Chholiya_dance.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/7/79/Kafuli.jpg"
},

  "JHARKHAND": {
    language: "Hindi",
    script: "Devanagari",
    region: "East India",
    capital: "Ranchi",
    festival: "Sarhul",
    dance: "Chhau",
    history: "Tribal heritage",
    cuisine: "Dhuska",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/5/52/Sarhul_festival.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Chhau_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Dhuska.jpg"
  },

  "CHHATTISGARH": {
    language: "Hindi",
    script: "Devanagari",
    region: "Central India",
    capital: "Raipur",
    festival: "Bastar Dussehra",
    dance: "Panthi",
    history: "Kalchuri dynasty",
    cuisine: "Chila",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/1/19/Bastar_Dussehra.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/6/63/Panthi_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Chila_food.jpg"
  },
  "ANDHRA PRADESH": {
    language: "Telugu",
    script: "Telugu",
    region: "South India",
    capital: "Amaravati",
    festival: "Sankranti",
    dance: "Kuchipudi",
    history: "Satavahanas, Eastern Chalukyas",
    cuisine: "Pulihora, Gongura",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Sankranti.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kuchipudi_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pulihora.jpg"
  },

  "KARNATAKA": {
    language: "Kannada",
    script: "Kannada",
    region: "South India",
    capital: "Bengaluru",
    festival: "Mysuru Dasara",
    dance: "Yakshagana",
    history: "Hoysalas, Vijayanagara Empire",
    cuisine: "Bisi Bele Bath",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Mysore_Dasara.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Yakshagana.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Bisi_Bele_Bath.jpg"
  },

    "TAMIL NADU": {
    language: "Tamil",
    script: "Tamil",
    region: "South India",
    capital: "Chennai",
    festival: "Pongal",
    dance: "Bharatanatyam",
    history: "Chola, Chera, Pandya dynasties",
    cuisine: "Dosa, Sambar",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Pongal_festival.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bharatanatyam_dancer.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Plain_dosa.jpg"
  },

  "TELANGANA": {
    language: "Telugu",
    script: "Telugu",
    region: "South India",
    capital: "Hyderabad",
    festival: "Bathukamma",
    dance: "Perini",
    history: "Kakatiya dynasty",
    cuisine: "Hyderabadi Biryani",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Bathukamma.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Perini_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hyderabadi_Biryani.jpg"
  },

  "KERALA": {
    language: "Malayalam",
    script: "Malayalam",
    region: "South India",
    capital: "Thiruvananthapuram",
    festival: "Onam",
    dance: "Kathakali",
    history: "Chera dynasty",
    cuisine: "Sadya",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/4/45/Onam_festival.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kathakali_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Kerala_Sadya.jpg"
  },

  "MAHARASHTRA": {
    language: "Marathi",
    script: "Devanagari",
    region: "West India",
    capital: "Mumbai",
    festival: "Ganesh Chaturthi",
    dance: "Lavani",
    history: "Maratha Empire",
    cuisine: "Vada Pav",
    festivalImg: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ganesh_Chaturthi.jpg",
    danceImg: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lavani_dance.jpg",
    foodImg: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Vada_Pav.jpg"
  }  ,
  "MIZORAM": {
  language: "Mizo",
  script: "Latin",
  region: "North East India",
  capital: "Aizawl",
  festival: "Chapchar Kut",
  dance: "Cheraw (Bamboo Dance)",
  history: "Lushai tribes, British period",
  cuisine: "Bai, Bamboo shoot dishes",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Chapchar_Kut.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Cheraw_dance.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/5/55/Mizo_bai.jpg"
},

"NAGALAND": {
  language: "English, Naga languages",
  script: "Latin",
  region: "North East India",
  capital: "Kohima",
  festival: "Hornbill Festival",
  dance: "Naga War Dance",
  history: "Naga tribes, British rule",
  cuisine: "Smoked pork, Axone",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Hornbill_festival.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Naga_war_dance.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Axone_food.jpg"
},

"ARUNACHAL PRADESH": {
  language: "Tribal languages, English",
  script: "Latin",
  region: "North East India",
  capital: "Itanagar",
  festival: "Losar",
  dance: "Aji Lamu",
  history: "Tibeto-Burman tribes",
  cuisine: "Thukpa, Zan",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Losar_festival.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/7/73/Aji_Lamu_dance.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Thukpa.jpg"
},

"TRIPURA": {
  language: "Bengali, Kokborok",
  script: "Bengali",
  region: "North East India",
  capital: "Agartala",
  festival: "Kharchi Puja",
  dance: "Hojagiri",
  history: "Manikya dynasty",
  cuisine: "Mui Borok, Chakhwi",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/1/12/Kharchi_puja.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/0/01/Hojagiri_dance.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/6/61/Tripura_food.jpg"
},

"MEGHALAYA": {
  language: "Khasi, Garo, English",
  script: "Latin",
  region: "North East India",
  capital: "Shillong",
  festival: "Wangala",
  dance: "Shad Suk Mynsiem",
  history: "Khasi & Garo tribes",
  cuisine: "Jadoh, Tungrymbai",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Wangala_festival.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Shad_suk_mynsiem.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/3/32/Jadoh_rice.jpg"
},

"SIKKIM": {
  language: "Nepali, Bhutia, Lepcha",
  script: "Devanagari",
  region: "North East India",
  capital: "Gangtok",
  festival: "Losar",
  dance: "Cham Dance",
  history: "Namgyal dynasty",
  cuisine: "Momos, Thukpa",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/3/36/Losar_Sikkim.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/8/88/Cham_dance.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Momos_sikkim.jpg"
},

"UTTARAKHAND": {
  language: "Hindi, Garhwali, Kumaoni",
  script: "Devanagari",
  region: "North India",
  capital: "Dehradun",
  festival: "Harela",
  dance: "Chholiya",
  history: "Kumaon & Garhwal kingdoms",
  cuisine: "Kafuli, Bhatt ki churkani",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Harela_festival.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/5/55/Chholiya_dance.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/7/79/Kafuli.jpg"
},

"JAMMU AND KASHMIR": {
  language: "Urdu, Kashmiri, Dogri",
  script: "Perso-Arabic",
  region: "North India",
  capital: "Srinagar / Jammu",
  festival: "Tulip Festival",
  dance: "Rouf",
  history: "Ancient Kashmir & Dogra rule",
  cuisine: "Wazwan",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/5/57/Tulip_festival_kashmir.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/1/19/Rouf_dance.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Wazwan.jpg"
},

"MANIPUR": {
  language: "Meitei (Manipuri), English",
  script: "Meitei Mayek",
  region: "North East India",
  capital: "Imphal",
  festival: "Yaoshang",
  dance: "Manipuri Dance (Ras Lila)",
  history: "Ancient Meitei kingdom, Vaishnavism influence",
  cuisine: "Eromba, Singju",
  festivalImg: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Yaoshang_festival.jpg",
  danceImg: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Manipuri_dance_ras_lila.jpg",
  foodImg: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Eromba_manipur.jpg"
}

};

// ===============================
// MAP
// ===============================
const map = L.map("map").setView([22.5, 79], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);


// ===============================
// STYLE FUNCTIONS (LIGHT GREEN THEME)
// ===============================
function defaultStyle() {
  return {
    color: "#16a34a",       // green border
    weight: 1.4,
    fillColor: "#bbf7d0",   // light green fill
    fillOpacity: 0.35
  };
}

function highlightStyle() {
  return {
    color: "#15803d",       // darker green border
    weight: 2.5,
    fillColor: "#86efac",   // brighter green on hover
    fillOpacity: 0.6
  };
}


// ===============================
// LOAD GEOJSON
// ===============================
fetch("assets/india_map.geojson")
.then(res => res.json())
.then(data => {

  function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle(highlightStyle());
  }

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
  }

  function clickFeature(feature) {
    const name =
      feature.properties.ST_NM ||
      feature.properties.NAME ||
      feature.properties.NAME_1;

    showState(name.toUpperCase());
  }

  function onEachFeature(feature, layer) {

    const name =
      feature.properties.ST_NM ||
      feature.properties.NAME ||
      feature.properties.NAME_1;

    layer.bindTooltip(name, { direction: "center" });

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: () => clickFeature(feature)
    });
  }

  const geojson = L.geoJSON(data, {
    style: defaultStyle,
    onEachFeature: onEachFeature
  }).addTo(map);

});


// ===============================
// UPDATE SIDEBAR
// ===============================
function showState(state) {

  const d = stateInfo[state];
  if (!d) return;

  document.getElementById("state-title").innerText = state;

  document.getElementById("language").innerText = d.language;
  document.getElementById("script").innerText = d.script;
  document.getElementById("region").innerText = d.region;
  document.getElementById("capital").innerText = d.capital;

  document.getElementById("festival").innerText = d.festival;
  document.getElementById("dance").innerText = d.dance;
  document.getElementById("history").innerText = d.history;
  document.getElementById("cuisine").innerText = d.cuisine;

  document.getElementById("festivalImg").src = d.festivalImg;
  document.getElementById("danceImg").src = d.danceImg;
  document.getElementById("foodImg").src = d.foodImg;

}