const nations = [
    {
        name: "Niger",
        slug: "niger",
        rate: 6.73,
        year: "2023",
        rank: 1,
        region: "Africa"
    },
    {
        name: "Angola",
        slug: "angola",
        rate: 5.76,
        year: "2023",
        rank: 2,
        region: "Africa"
    },
    {
        name: "Congo, Democratic Republic of the",
        slug: "congo-democratic-republic-of-the",
        rate: 5.56,
        year: "2023",
        rank: 3,
        region: "Africa"
    },
    {
        name: "Mali",
        slug: "mali",
        rate: 5.45,
        year: "2023",
        rank: 4,
        region: "Africa"
    },
    {
        name: "Benin",
        slug: "benin",
        rate: 5.39,
        year: "2023",
        rank: 5,
        region: "Africa"
    },
    {
        name: "Chad",
        slug: "chad",
        rate: 5.35,
        year: "2023",
        rank: 6,
        region: "Africa"
    },
    {
        name: "Uganda",
        slug: "uganda",
        rate: 5.26,
        year: "2023",
        rank: 7,
        region: "Africa"
    },
    {
        name: "Somalia",
        slug: "somalia",
        rate: 5.22,
        year: "2023",
        rank: 8,
        region: "Africa"
    },
    {
        name: "South Sudan",
        slug: "south-sudan",
        rate: 5.2,
        year: "2023",
        rank: 9,
        region: "Africa"
    },
    {
        name: "Burundi",
        slug: "burundi",
        rate: 4.96,
        year: "2023",
        rank: 10,
        region: "Africa"
    },
    {
        name: "Guinea",
        slug: "guinea",
        rate: 4.82,
        year: "2023",
        rank: 11,
        region: "Africa"
    },
    {
        name: "Mozambique",
        slug: "mozambique",
        rate: 4.74,
        year: "2023",
        rank: 12,
        region: "Africa"
    },
    {
        name: "Liberia",
        slug: "liberia",
        rate: 4.73,
        year: "2023",
        rank: 13,
        region: "Africa"
    },
    {
        name: "Guinea-Bissau",
        slug: "guinea-bissau",
        rate: 4.65,
        year: "2023",
        rank: 14,
        region: "Africa"
    },
    {
        name: "Nigeria",
        slug: "nigeria",
        rate: 4.57,
        year: "2023",
        rank: 15,
        region: "Africa"
    },
    {
        name: "Sudan",
        slug: "sudan",
        rate: 4.54,
        year: "2023",
        rank: 16,
        region: "Africa"
    },
    {
        name: "Afghanistan",
        slug: "afghanistan",
        rate: 4.53,
        year: "2023",
        rank: 17,
        region: "South Asia"
    },
    {
        name: "Cameroon",
        slug: "cameroon",
        rate: 4.5,
        year: "2023",
        rank: 18,
        region: "Africa"
    },
    {
        name: "Zambia",
        slug: "zambia",
        rate: 4.49,
        year: "2023",
        rank: 19,
        region: "Africa"
    },
    {
        name: "Tanzania",
        slug: "tanzania",
        rate: 4.33,
        year: "2023",
        rank: 20,
        region: "Africa"
    },
    {
        name: "Congo, Republic of the",
        slug: "congo-republic-of-the",
        rate: 4.32,
        year: "2023",
        rank: 21,
        region: "Africa"
    },
    {
        name: "Equatorial Guinea",
        slug: "equatorial-guinea",
        rate: 4.19,
        year: "2023",
        rank: 22,
        region: "Africa"
    },
    {
        name: "Togo",
        slug: "togo",
        rate: 4.18,
        year: "2023",
        rank: 23,
        region: "Africa"
    },
    {
        name: "Senegal",
        slug: "senegal",
        rate: 4.17,
        year: "2023",
        rank: 24,
        region: "Africa"
    },
    {
        name: "Burkina Faso",
        slug: "burkina-faso",
        rate: 4.14,
        year: "2023",
        rank: 25,
        region: "Africa"
    },
    {
        name: "Timor-Leste",
        slug: "timor-leste",
        rate: 4.09,
        year: "2023",
        rank: 26,
        region: "East + SE Asia"
    },
    {
        name: "Central African Republic",
        slug: "central-african-republic",
        rate: 3.99,
        year: "2023",
        rank: 27,
        region: "Africa"
    },
    {
        name: "Ethiopia",
        slug: "ethiopia",
        rate: 3.92,
        year: "2023",
        rank: 28,
        region: "Africa"
    },
    {
        name: "Zimbabwe",
        slug: "zimbabwe",
        rate: 3.88,
        year: "2023",
        rank: 29,
        region: "Africa"
    },
    {
        name: "Papua New Guinea",
        slug: "papua-new-guinea",
        rate: 3.85,
        year: "2023",
        rank: 30,
        region: "East + SE Asia"
    },
    {
        name: "Sierra Leone",
        slug: "sierra-leone",
        rate: 3.71,
        year: "2023",
        rank: 31,
        region: "Africa"
    },
    {
        name: "Gambia, The",
        slug: "gambia-the",
        rate: 3.66,
        year: "2023",
        rank: 32,
        region: "Africa"
    },
    {
        name: "Ghana",
        slug: "ghana",
        rate: 3.61,
        year: "2023",
        rank: 33,
        region: "Africa"
    },
    {
        name: "Madagascar",
        slug: "madagascar",
        rate: 3.55,
        year: "2023",
        rank: 34,
        region: "Africa"
    },
    {
        name: "Eritrea",
        slug: "eritrea",
        rate: 3.5,
        year: "2023",
        rank: 35,
        region: "Africa"
    },
    {
        name: "Cote d'Ivoire",
        slug: "cote-divoire",
        rate: 3.47,
        year: "2023",
        rank: 36,
        region: "Africa"
    },
    {
        name: "Mauritania",
        slug: "mauritania",
        rate: 3.46,
        year: "2023",
        rank: 37,
        region: "Africa"
    },
    {
        name: "Sao Tome and Principe",
        slug: "sao-tome-and-principe",
        rate: 3.44,
        year: "2023",
        rank: 38,
        region: "Africa"
    },
    {
        name: "Pakistan",
        slug: "pakistan",
        rate: 3.39,
        year: "2023",
        rank: 39,
        region: "South Asia"
    },
    {
        name: "Gaza Strip",
        slug: "gaza-strip",
        rate: 3.34,
        year: "2023",
        rank: 40,
        region: "Middle East"
    },
    {
        name: "Malawi",
        slug: "malawi",
        rate: 3.3,
        year: "2023",
        rank: 41,
        region: "Africa"
    },
    {
        name: "Gabon",
        slug: "gabon",
        rate: 3.26,
        year: "2023",
        rank: 42,
        region: "Africa"
    },
    {
        name: "Rwanda",
        slug: "rwanda",
        rate: 3.23,
        year: "2023",
        rank: 43,
        region: "Africa"
    },
    {
        name: "Kenya",
        slug: "kenya",
        rate: 3.23,
        year: "2023",
        rank: 44,
        region: "Africa"
    },
    {
        name: "Iraq",
        slug: "iraq",
        rate: 3.17,
        year: "2023",
        rank: 45,
        region: "Middle East"
    },
    {
        name: "Libya",
        slug: "libya",
        rate: 3.04,
        year: "2023",
        rank: 46,
        region: "Africa"
    },
    {
        name: "Namibia",
        slug: "namibia",
        rate: 2.94,
        year: "2023",
        rank: 47,
        region: "Africa"
    },
    {
        name: "West Bank",
        slug: "west-bank",
        rate: 2.91,
        year: "2023",
        rank: 48,
        region: "Middle East"
    },
    {
        name: "Jordan",
        slug: "jordan",
        rate: 2.91,
        year: "2023",
        rank: 49,
        region: "Middle East"
    },
    {
        name: "Yemen",
        slug: "yemen",
        rate: 2.91,
        year: "2023",
        rank: 50,
        region: "Middle East"
    },
    {
        name: "Lesotho",
        slug: "lesotho",
        rate: 2.88,
        year: "2023",
        rank: 51,
        region: "Africa"
    },
    {
        name: "Solomon Islands",
        slug: "solomon-islands",
        rate: 2.82,
        year: "2023",
        rank: 52,
        region: "AU + Oceania"
    },
    {
        name: "Tuvalu",
        slug: "tuvalu",
        rate: 2.81,
        year: "2023",
        rank: 53,
        region: "AU + Oceania"
    },
    {
        name: "Philippines",
        slug: "philippines",
        rate: 2.77,
        year: "2023",
        rank: 54,
        region: "East + SE Asia"
    },
    {
        name: "Egypt",
        slug: "egypt",
        rate: 2.76,
        year: "2023",
        rank: 55,
        region: "Africa"
    },
    {
        name: "Guam",
        slug: "guam",
        rate: 2.76,
        year: "2023",
        rank: 56,
        region: "AU + Oceania"
    },
    {
        name: "Syria",
        slug: "syria",
        rate: 2.74,
        year: "2023",
        rank: 57,
        region: "Middle East"
    },
    {
        name: "Marshall Islands",
        slug: "marshall-islands",
        rate: 2.72,
        year: "2023",
        rank: 58,
        region: "AU + Oceania"
    },
    {
        name: "Tonga",
        slug: "tonga",
        rate: 2.7,
        year: "2023",
        rank: 59,
        region: "AU + Oceania"
    },
    {
        name: "Comoros",
        slug: "comoros",
        rate: 2.69,
        year: "2023",
        rank: 60,
        region: "Africa"
    },
    {
        name: "Oman",
        slug: "oman",
        rate: 2.67,
        year: "2023",
        rank: 61,
        region: "Middle East"
    },
    {
        name: "Vanuatu",
        slug: "vanuatu",
        rate: 2.59,
        year: "2023",
        rank: 62,
        region: "AU + Oceania"
    },
    {
        name: "Northern Mariana Islands",
        slug: "northern-mariana-islands",
        rate: 2.59,
        year: "2023",
        rank: 63,
        region: "AU + Oceania"
    },
    {
        name: "Belize",
        slug: "belize",
        rate: 2.59,
        year: "2023",
        rank: 64,
        region: "CAM + Carib."
    },
    {
        name: "Nauru",
        slug: "nauru",
        rate: 2.58,
        year: "2023",
        rank: 65,
        region: "AU + Oceania"
    },
    {
        name: "Guatemala",
        slug: "guatemala",
        rate: 2.57,
        year: "2023",
        rank: 66,
        region: "CAM + Carib."
    },
    {
        name: "Israel",
        slug: "israel",
        rate: 2.54,
        year: "2023",
        rank: 67,
        region: "Middle East"
    },
    {
        name: "Algeria",
        slug: "algeria",
        rate: 2.47,
        year: "2023",
        rank: 68,
        region: "Africa"
    },
    {
        name: "Kyrgyzstan",
        slug: "kyrgyzstan",
        rate: 2.47,
        year: "2023",
        rank: 69,
        region: "Central Asia"
    },
    {
        name: "Tajikistan",
        slug: "tajikistan",
        rate: 2.42,
        year: "2023",
        rank: 70,
        region: "Central Asia"
    },
    {
        name: "Eswatini",
        slug: "eswatini",
        rate: 2.41,
        year: "2023",
        rank: 71,
        region: "Africa"
    },
    {
        name: "Haiti",
        slug: "haiti",
        rate: 2.39,
        year: "2023",
        rank: 72,
        region: "CAM + Carib."
    },
    {
        name: "Panama",
        slug: "panama",
        rate: 2.37,
        year: "2023",
        rank: 73,
        region: "CAM + Carib."
    },
    {
        name: "Botswana",
        slug: "botswana",
        rate: 2.37,
        year: "2023",
        rank: 74,
        region: "Africa"
    },
    {
        name: "Samoa",
        slug: "samoa",
        rate: 2.37,
        year: "2023",
        rank: 75,
        region: "AU + Oceania"
    },
    {
        name: "Laos",
        slug: "laos",
        rate: 2.3,
        year: "2023",
        rank: 76,
        region: "East + SE Asia"
    },
    {
        name: "Faroe Islands",
        slug: "faroe-islands",
        rate: 2.28,
        year: "2023",
        rank: 77,
        region: "Europe"
    },
    {
        name: "Morocco",
        slug: "morocco",
        rate: 2.27,
        year: "2023",
        rank: 78,
        region: "Africa"
    },
    {
        name: "Bolivia",
        slug: "bolivia",
        rate: 2.26,
        year: "2023",
        rank: 79,
        region: "South America"
    },
    {
        name: "Fiji",
        slug: "fiji",
        rate: 2.23,
        year: "2023",
        rank: 80,
        region: "AU + Oceania"
    },
    {
        name: "Micronesia, Federated States of",
        slug: "micronesia-federated-states-of",
        rate: 2.22,
        year: "2023",
        rank: 81,
        region: "AU + Oceania"
    },
    {
        name: "Kuwait",
        slug: "kuwait",
        rate: 2.22,
        year: "2023",
        rank: 82,
        region: "Middle East"
    },
    {
        name: "Venezuela",
        slug: "venezuela",
        rate: 2.2,
        year: "2023",
        rank: 83,
        region: "South America"
    },
    {
        name: "Cambodia",
        slug: "cambodia",
        rate: 2.2,
        year: "2023",
        rank: 84,
        region: "East + SE Asia"
    },
    {
        name: "Dominican Republic",
        slug: "dominican-republic",
        rate: 2.2,
        year: "2023",
        rank: 85,
        region: "CAM + Carib."
    },
    {
        name: "Peru",
        slug: "peru",
        rate: 2.18,
        year: "2023",
        rank: 86,
        region: "South America"
    },
    {
        name: "Kiribati",
        slug: "kiribati",
        rate: 2.18,
        year: "2023",
        rank: 87,
        region: "AU + Oceania"
    },
    {
        name: "Argentina",
        slug: "argentina",
        rate: 2.17,
        year: "2023",
        rank: 88,
        region: "South America"
    },
    {
        name: "South Africa",
        slug: "south-africa",
        rate: 2.17,
        year: "2023",
        rank: 89,
        region: "Africa"
    },
    {
        name: "Djibouti",
        slug: "djibouti",
        rate: 2.13,
        year: "2023",
        rank: 90,
        region: "Africa"
    },
    {
        name: "American Samoa",
        slug: "american-samoa",
        rate: 2.13,
        year: "2023",
        rank: 91,
        region: "AU + Oceania"
    },
    {
        name: "Cabo Verde",
        slug: "cabo-verde",
        rate: 2.11,
        year: "2023",
        rank: 92,
        region: "Africa"
    },
    {
        name: "Bangladesh",
        slug: "bangladesh",
        rate: 2.08,
        year: "2023",
        rank: 93,
        region: "South Asia"
    },
    {
        name: "Kazakhstan",
        slug: "kazakhstan",
        rate: 2.08,
        year: "2023",
        rank: 94,
        region: "Central Asia"
    },
    {
        name: "India",
        slug: "india",
        rate: 2.07,
        year: "2023",
        rank: 95,
        region: "South Asia"
    },
    {
        name: "Guyana",
        slug: "guyana",
        rate: 2.06,
        year: "2023",
        rank: 96,
        region: "South America"
    },
    {
        name: "Jamaica",
        slug: "jamaica",
        rate: 2.05,
        year: "2023",
        rank: 97,
        region: "CAM + Carib."
    },
    {
        name: "Vietnam",
        slug: "vietnam",
        rate: 2.04,
        year: "2023",
        rank: 98,
        region: "East + SE Asia"
    },
    {
        name: "Cook Islands",
        slug: "cook-islands",
        rate: 2.04,
        year: "2023",
        rank: 99,
        region: "AU + Oceania"
    },
    {
        name: "El Salvador",
        slug: "el-salvador",
        rate: 2.04,
        year: "2023",
        rank: 100,
        region: "CAM + Carib."
    },
    {
        name: "Turkmenistan",
        slug: "turkmenistan",
        rate: 2.03,
        year: "2023",
        rank: 101,
        region: "Central Asia"
    },
    {
        name: "Ecuador",
        slug: "ecuador",
        rate: 2.02,
        year: "2023",
        rank: 102,
        region: "South America"
    },
    {
        name: "France",
        slug: "france",
        rate: 2.02,
        year: "2023",
        rank: 103,
        region: "Europe"
    },
    {
        name: "Dominica",
        slug: "dominica",
        rate: 2.01,
        year: "2023",
        rank: 104,
        region: "CAM + Carib."
    },
    {
        name: "Burma",
        slug: "burma",
        rate: 2,
        year: "2023",
        rank: 105,
        region: "East + SE Asia"
    },
    {
        name: "Indonesia",
        slug: "indonesia",
        rate: 1.99,
        year: "2023",
        rank: 106,
        region: "East + SE Asia"
    },
    {
        name: "Sint Maarten",
        slug: "sint-maarten",
        rate: 1.98,
        year: "2023",
        rank: 107,
        region: "CAM + Carib."
    },
    {
        name: "Honduras",
        slug: "honduras",
        rate: 1.98,
        year: "2023",
        rank: 108,
        region: "CAM + Carib."
    },
    {
        name: "Virgin Islands",
        slug: "virgin-islands",
        rate: 1.98,
        year: "2023",
        rank: 109,
        region: "CAM + Carib."
    },
    {
        name: "Sri Lanka",
        slug: "sri-lanka",
        rate: 1.97,
        year: "2023",
        rank: 110,
        region: "South Asia"
    },
    {
        name: "Bahamas, The",
        slug: "bahamas-the",
        rate: 1.97,
        year: "2023",
        rank: 111,
        region: "CAM + Carib."
    },
    {
        name: "Curacao",
        slug: "curacao",
        rate: 1.97,
        year: "2023",
        rank: 112,
        region: "CAM + Carib."
    },
    {
        name: "Tunisia",
        slug: "tunisia",
        rate: 1.96,
        year: "2023",
        rank: 113,
        region: "Africa"
    },
    {
        name: "Iceland",
        slug: "iceland",
        rate: 1.95,
        year: "2023",
        rank: 114,
        region: "Europe"
    },
    {
        name: "Antigua and Barbuda",
        slug: "antigua-and-barbuda",
        rate: 1.94,
        year: "2023",
        rank: 115,
        region: "CAM + Carib."
    },
    {
        name: "Colombia",
        slug: "colombia",
        rate: 1.94,
        year: "2023",
        rank: 116,
        region: "South America"
    },
    {
        name: "Grenada",
        slug: "grenada",
        rate: 1.92,
        year: "2023",
        rank: 117,
        region: "CAM + Carib."
    },
    {
        name: "Iran",
        slug: "iran",
        rate: 1.92,
        year: "2023",
        rank: 118,
        region: "Middle East"
    },
    {
        name: "Suriname",
        slug: "suriname",
        rate: 1.91,
        year: "2023",
        rank: 119,
        region: "South America"
    },
    {
        name: "Turkey (Turkiye)",
        slug: "turkey-turkiye",
        rate: 1.91,
        year: "2023",
        rank: 120,
        region: "Middle East"
    },
    {
        name: "Ireland",
        slug: "ireland",
        rate: 1.91,
        year: "2023",
        rank: 121,
        region: "Europe"
    },
    {
        name: "Greenland",
        slug: "greenland",
        rate: 1.9,
        year: "2023",
        rank: 122,
        region: "North America"
    },
    {
        name: "Qatar",
        slug: "qatar",
        rate: 1.9,
        year: "2023",
        rank: 123,
        region: "Middle East"
    },
    {
        name: "Gibraltar",
        slug: "gibraltar",
        rate: 1.9,
        year: "2023",
        rank: 124,
        region: "Europe"
    },
    {
        name: "Mongolia",
        slug: "mongolia",
        rate: 1.89,
        year: "2023",
        rank: 125,
        region: "East + SE Asia"
    },
    {
        name: "Bermuda",
        slug: "bermuda",
        rate: 1.89,
        year: "2023",
        rank: 126,
        region: "North America"
    },
    {
        name: "Korea, North",
        slug: "korea-north",
        rate: 1.89,
        year: "2023",
        rank: 127,
        region: "East + SE Asia"
    },
    {
        name: "Saudi Arabia",
        slug: "saudi-arabia",
        rate: 1.89,
        year: "2023",
        rank: 128,
        region: "Middle East"
    },
    {
        name: "Paraguay",
        slug: "paraguay",
        rate: 1.88,
        year: "2023",
        rank: 129,
        region: "South America"
    },
    {
        name: "Isle of Man",
        slug: "isle-of-man",
        rate: 1.88,
        year: "2023",
        rank: 130,
        region: "Europe"
    },
    {
        name: "Kosovo",
        slug: "kosovo",
        rate: 1.88,
        year: "2023",
        rank: 131,
        region: "Europe"
    },
    {
        name: "Nepal",
        slug: "nepal",
        rate: 1.88,
        year: "2023",
        rank: 132,
        region: "South Asia"
    },
    {
        name: "Azerbaijan",
        slug: "azerbaijan",
        rate: 1.86,
        year: "2023",
        rank: 133,
        region: "Middle East"
    },
    {
        name: "Costa Rica",
        slug: "costa-rica",
        rate: 1.86,
        year: "2023",
        rank: 134,
        region: "CAM + Carib."
    },
    {
        name: "New Zealand",
        slug: "new-zealand",
        rate: 1.86,
        year: "2023",
        rank: 135,
        region: "AU + Oceania"
    },
    {
        name: "United States",
        slug: "united-states",
        rate: 1.84,
        year: "2023",
        rank: 136,
        region: "North America"
    },
    {
        name: "New Caledonia",
        slug: "new-caledonia",
        rate: 1.84,
        year: "2023",
        rank: 137,
        region: "AU + Oceania"
    },
    {
        name: "Norway",
        slug: "norway",
        rate: 1.83,
        year: "2023",
        rank: 138,
        region: "Europe"
    },
    {
        name: "Cayman Islands",
        slug: "cayman-islands",
        rate: 1.82,
        year: "2023",
        rank: 139,
        region: "CAM + Carib."
    },
    {
        name: "Aruba",
        slug: "aruba",
        rate: 1.82,
        year: "2023",
        rank: 140,
        region: "CAM + Carib."
    },
    {
        name: "Seychelles",
        slug: "seychelles",
        rate: 1.81,
        year: "2023",
        rank: 141,
        region: "Africa"
    },
    {
        name: "Montenegro",
        slug: "montenegro",
        rate: 1.81,
        year: "2023",
        rank: 142,
        region: "Europe"
    },
    {
        name: "Saint Martin",
        slug: "saint-martin",
        rate: 1.8,
        year: "2023",
        rank: 143,
        region: "CAM + Carib."
    },
    {
        name: "French Polynesia",
        slug: "french-polynesia",
        rate: 1.8,
        year: "2023",
        rank: 144,
        region: "AU + Oceania"
    },
    {
        name: "Nicaragua",
        slug: "nicaragua",
        rate: 1.78,
        year: "2023",
        rank: 145,
        region: "CAM + Carib."
    },
    {
        name: "Belgium",
        slug: "belgium",
        rate: 1.77,
        year: "2023",
        rank: 146,
        region: "Europe"
    },
    {
        name: "Netherlands",
        slug: "netherlands",
        rate: 1.77,
        year: "2023",
        rank: 147,
        region: "Europe"
    },
    {
        name: "Bhutan",
        slug: "bhutan",
        rate: 1.77,
        year: "2023",
        rank: 148,
        region: "South Asia"
    },
    {
        name: "Denmark",
        slug: "denmark",
        rate: 1.77,
        year: "2023",
        rank: 149,
        region: "Europe"
    },
    {
        name: "Saint Kitts and Nevis",
        slug: "saint-kitts-and-nevis",
        rate: 1.76,
        year: "2023",
        rank: 150,
        region: "CAM + Carib."
    },
    {
        name: "Chile",
        slug: "chile",
        rate: 1.75,
        year: "2023",
        rank: 151,
        region: "South America"
    },
    {
        name: "Georgia",
        slug: "georgia",
        rate: 1.75,
        year: "2023",
        rank: 152,
        region: "Middle East"
    },
    {
        name: "Brazil",
        slug: "brazil",
        rate: 1.75,
        year: "2023",
        rank: 153,
        region: "South America"
    },
    {
        name: "Uruguay",
        slug: "uruguay",
        rate: 1.75,
        year: "2023",
        rank: 154,
        region: "South America"
    },
    {
        name: "Brunei",
        slug: "brunei",
        rate: 1.74,
        year: "2023",
        rank: 155,
        region: "East + SE Asia"
    },
    {
        name: "Finland",
        slug: "finland",
        rate: 1.74,
        year: "2023",
        rank: 156,
        region: "Europe"
    },
    {
        name: "Malaysia",
        slug: "malaysia",
        rate: 1.74,
        year: "2023",
        rank: 157,
        region: "East + SE Asia"
    },
    {
        name: "Saint Vincent and the Grenadines",
        slug: "saint-vincent-and-the-grenadines",
        rate: 1.74,
        year: "2023",
        rank: 158,
        region: "CAM + Carib."
    },
    {
        name: "Australia",
        slug: "australia",
        rate: 1.73,
        year: "2023",
        rank: 159,
        region: "AU + Oceania"
    },
    {
        name: "Mexico",
        slug: "mexico",
        rate: 1.73,
        year: "2023",
        rank: 160,
        region: "North America"
    },
    {
        name: "Uzbekistan",
        slug: "uzbekistan",
        rate: 1.72,
        year: "2023",
        rank: 161,
        region: "Central Asia"
    },
    {
        name: "Anguilla",
        slug: "anguilla",
        rate: 1.72,
        year: "2023",
        rank: 162,
        region: "CAM + Carib."
    },
    {
        name: "Saint Lucia",
        slug: "saint-lucia",
        rate: 1.72,
        year: "2023",
        rank: 163,
        region: "CAM + Carib."
    },
    {
        name: "Lebanon",
        slug: "lebanon",
        rate: 1.71,
        year: "2023",
        rank: 164,
        region: "Middle East"
    },
    {
        name: "Wallis and Futuna",
        slug: "wallis-and-futuna",
        rate: 1.71,
        year: "2023",
        rank: 165,
        region: "AU + Oceania"
    },
    {
        name: "Cuba",
        slug: "cuba",
        rate: 1.71,
        year: "2023",
        rank: 166,
        region: "CAM + Carib."
    },
    {
        name: "Barbados",
        slug: "barbados",
        rate: 1.7,
        year: "2023",
        rank: 167,
        region: "CAM + Carib."
    },
    {
        name: "Turks and Caicos Islands",
        slug: "turks-and-caicos-islands",
        rate: 1.7,
        year: "2023",
        rank: 168,
        region: "CAM + Carib."
    },
    {
        name: "Maldives",
        slug: "maldives",
        rate: 1.7,
        year: "2023",
        rank: 169,
        region: "South Asia"
    },
    {
        name: "Palau",
        slug: "palau",
        rate: 1.7,
        year: "2023",
        rank: 170,
        region: "AU + Oceania"
    },
    {
        name: "Liechtenstein",
        slug: "liechtenstein",
        rate: 1.69,
        year: "2023",
        rank: 171,
        region: "Europe"
    },
    {
        name: "Sweden",
        slug: "sweden",
        rate: 1.67,
        year: "2023",
        rank: 172,
        region: "Europe"
    },
    {
        name: "Jersey",
        slug: "jersey",
        rate: 1.66,
        year: "2023",
        rank: 173,
        region: "Europe"
    },
    {
        name: "Bahrain",
        slug: "bahrain",
        rate: 1.66,
        year: "2023",
        rank: 174,
        region: "Middle East"
    },
    {
        name: "Armenia",
        slug: "armenia",
        rate: 1.65,
        year: "2023",
        rank: 175,
        region: "Middle East"
    },
    {
        name: "Saint Barthelemy",
        slug: "saint-barthelemy",
        rate: 1.64,
        year: "2023",
        rank: 176,
        region: "CAM + Carib."
    },
    {
        name: "Trinidad and Tobago",
        slug: "trinidad-and-tobago",
        rate: 1.63,
        year: "2023",
        rank: 177,
        region: "CAM + Carib."
    },
    {
        name: "Luxembourg",
        slug: "luxembourg",
        rate: 1.63,
        year: "2023",
        rank: 178,
        region: "Europe"
    },
    {
        name: "Romania",
        slug: "romania",
        rate: 1.63,
        year: "2023",
        rank: 179,
        region: "Europe"
    },
    {
        name: "United Kingdom",
        slug: "united-kingdom",
        rate: 1.63,
        year: "2023",
        rank: 180,
        region: "Europe"
    },
    {
        name: "Estonia",
        slug: "estonia",
        rate: 1.62,
        year: "2023",
        rank: 181,
        region: "Europe"
    },
    {
        name: "United Arab Emirates",
        slug: "united-arab-emirates",
        rate: 1.62,
        year: "2023",
        rank: 182,
        region: "Middle East"
    },
    {
        name: "Saint Helena, Ascension, and Tristan da Cunha",
        slug: "saint-helena-ascension-and-tristan-da-cunha",
        rate: 1.61,
        year: "2023",
        rank: 183,
        region: "Africa"
    },
    {
        name: "Lithuania",
        slug: "lithuania",
        rate: 1.61,
        year: "2023",
        rank: 184,
        region: "Europe"
    },
    {
        name: "Russia",
        slug: "russia",
        rate: 1.6,
        year: "2023",
        rank: 185,
        region: "Central Asia"
    },
    {
        name: "Slovenia",
        slug: "slovenia",
        rate: 1.6,
        year: "2023",
        rank: 186,
        region: "Europe"
    },
    {
        name: "Saint Pierre and Miquelon",
        slug: "saint-pierre-and-miquelon",
        rate: 1.59,
        year: "2023",
        rank: 187,
        region: "North America"
    },
    {
        name: "Guernsey",
        slug: "guernsey",
        rate: 1.59,
        year: "2023",
        rank: 188,
        region: "Europe"
    },
    {
        name: "Moldova",
        slug: "moldova",
        rate: 1.59,
        year: "2023",
        rank: 189,
        region: "Europe"
    },
    {
        name: "Switzerland",
        slug: "switzerland",
        rate: 1.58,
        year: "2023",
        rank: 190,
        region: "Europe"
    },
    {
        name: "Germany",
        slug: "germany",
        rate: 1.58,
        year: "2023",
        rank: 191,
        region: "Europe"
    },
    {
        name: "Canada",
        slug: "canada",
        rate: 1.57,
        year: "2023",
        rank: 192,
        region: "North America"
    },
    {
        name: "Ukraine",
        slug: "ukraine",
        rate: 1.57,
        year: "2023",
        rank: 193,
        region: "Europe"
    },
    {
        name: "Latvia",
        slug: "latvia",
        rate: 1.55,
        year: "2023",
        rank: 194,
        region: "Europe"
    },
    {
        name: "Albania",
        slug: "albania",
        rate: 1.55,
        year: "2023",
        rank: 195,
        region: "Europe"
    },
    {
        name: "Thailand",
        slug: "thailand",
        rate: 1.54,
        year: "2023",
        rank: 196,
        region: "East + SE Asia"
    },
    {
        name: "San Marino",
        slug: "san-marino",
        rate: 1.53,
        year: "2023",
        rank: 197,
        region: "Europe"
    },
    {
        name: "Monaco",
        slug: "monaco",
        rate: 1.53,
        year: "2023",
        rank: 198,
        region: "Europe"
    },
    {
        name: "North Macedonia",
        slug: "north-macedonia",
        rate: 1.52,
        year: "2023",
        rank: 199,
        region: "Europe"
    },
    {
        name: "Belarus",
        slug: "belarus",
        rate: 1.52,
        year: "2023",
        rank: 200,
        region: "Europe"
    },
    {
        name: "Malta",
        slug: "malta",
        rate: 1.51,
        year: "2023",
        rank: 201,
        region: "Europe"
    },
    {
        name: "Austria",
        slug: "austria",
        rate: 1.51,
        year: "2023",
        rank: 202,
        region: "Europe"
    },
    {
        name: "Bulgaria",
        slug: "bulgaria",
        rate: 1.51,
        year: "2023",
        rank: 203,
        region: "Europe"
    },
    {
        name: "Czechia",
        slug: "czechia",
        rate: 1.5,
        year: "2023",
        rank: 204,
        region: "Europe"
    },
    {
        name: "Hungary",
        slug: "hungary",
        rate: 1.49,
        year: "2023",
        rank: 205,
        region: "Europe"
    },
    {
        name: "Cyprus",
        slug: "cyprus",
        rate: 1.48,
        year: "2023",
        rank: 206,
        region: "Europe"
    },
    {
        name: "Serbia",
        slug: "serbia",
        rate: 1.46,
        year: "2023",
        rank: 207,
        region: "Europe"
    },
    {
        name: "Slovakia",
        slug: "slovakia",
        rate: 1.46,
        year: "2023",
        rank: 208,
        region: "Europe"
    },
    {
        name: "Croatia",
        slug: "croatia",
        rate: 1.46,
        year: "2023",
        rank: 209,
        region: "Europe"
    },
    {
        name: "Andorra",
        slug: "andorra",
        rate: 1.46,
        year: "2023",
        rank: 210,
        region: "Europe"
    },
    {
        name: "China",
        slug: "china",
        rate: 1.45,
        year: "2023",
        rank: 211,
        region: "East + SE Asia"
    },
    {
        name: "Portugal",
        slug: "portugal",
        rate: 1.44,
        year: "2023",
        rank: 212,
        region: "Europe"
    },
    {
        name: "Poland",
        slug: "poland",
        rate: 1.41,
        year: "2023",
        rank: 213,
        region: "Europe"
    },
    {
        name: "Greece",
        slug: "greece",
        rate: 1.4,
        year: "2023",
        rank: 214,
        region: "Europe"
    },
    {
        name: "Japan",
        slug: "japan",
        rate: 1.39,
        year: "2023",
        rank: 215,
        region: "East + SE Asia"
    },
    {
        name: "British Virgin Islands",
        slug: "british-virgin-islands",
        rate: 1.37,
        year: "2023",
        rank: 216,
        region: "CAM + Carib."
    },
    {
        name: "Bosnia and Herzegovina",
        slug: "bosnia-and-herzegovina",
        rate: 1.37,
        year: "2023",
        rank: 217,
        region: "Europe"
    },
    {
        name: "Mauritius",
        slug: "mauritius",
        rate: 1.35,
        year: "2023",
        rank: 218,
        region: "Africa"
    },
    {
        name: "Montserrat",
        slug: "montserrat",
        rate: 1.32,
        year: "2023",
        rank: 219,
        region: "CAM + Carib."
    },
    {
        name: "Spain",
        slug: "spain",
        rate: 1.29,
        year: "2023",
        rank: 220,
        region: "Europe"
    },
    {
        name: "Puerto Rico",
        slug: "puerto-rico",
        rate: 1.25,
        year: "2023",
        rank: 221,
        region: "CAM + Carib."
    },
    {
        name: "Italy",
        slug: "italy",
        rate: 1.24,
        year: "2023",
        rank: 222,
        region: "Europe"
    },
    {
        name: "Macau",
        slug: "macau",
        rate: 1.23,
        year: "2023",
        rank: 223,
        region: "East + SE Asia"
    },
    {
        name: "Hong Kong",
        slug: "hong-kong",
        rate: 1.23,
        year: "2023",
        rank: 224,
        region: "East + SE Asia"
    },
    {
        name: "Singapore",
        slug: "singapore",
        rate: 1.17,
        year: "2023",
        rank: 225,
        region: "East + SE Asia"
    },
    {
        name: "Korea, South",
        slug: "korea-south",
        rate: 1.11,
        year: "2023",
        rank: 226,
        region: "East + SE Asia"
    },
    {
        name: "Taiwan",
        slug: "taiwan",
        rate: 1.09,
        year: "2023",
        rank: 227,
        region: "East + SE Asia"
    }
];

export { nations };