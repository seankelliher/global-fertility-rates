const nations = [
    { "code": "ABW", "tfr": 1.82 }, // Aruba
    { "code": "AFG", "tfr": 4.53 }, // Afghanistan
    { "code": "AGO", "tfr": 5.76 }, // Angola
    { "code": "AIA", "tfr": 1.72 }, // Anguilla
    { "code": "ALA", "tfr": "na" }, // Åland Islands
    { "code": "ALB", "tfr": 1.55 }, // Albania
    { "code": "AND", "tfr": 1.46 }, // Andorra
    { "code": "ARE", "tfr": 1.62 }, // United Arab Emirates
    { "code": "ARG", "tfr": 2.17 }, // Argentina
    { "code": "ARM", "tfr": 1.65 }, // Armenia
    { "code": "ASM", "tfr": 2.13 }, // American Samoa
    { "code": "ATA", "tfr": "na" }, // Antarctica
    { "code": "ATF", "tfr": "na" }, // French Southern Territories
    { "code": "ATG", "tfr": 1.94 }, // Antigua and Barbuda
    { "code": "AUS", "tfr": 1.73 }, // Australia
    { "code": "AUT", "tfr": 1.51 }, // Austria
    { "code": "AZE", "tfr": 1.86 }, // Azerbaijan
    { "code": "BDI", "tfr": 4.96 }, // Burundi
    { "code": "BEL", "tfr": 1.77 }, // Belgium
    { "code": "BEN", "tfr": 5.39 }, // Benin
    { "code": "BES", "tfr": "na" }, // Bonaire, Sint Eustatius and Saba
    { "code": "BFA", "tfr": 4.14 }, // Burkina Faso
    { "code": "BGD", "tfr": 2.08 }, // Bangladesh
    { "code": "BGR", "tfr": 1.51 }, // Bulgaria
    { "code": "BHR", "tfr": 1.66 }, // Bahrain
    { "code": "BHS", "tfr": 1.97 }, // Bahamas
    { "code": "BIH", "tfr": 1.37 }, // Bosnia and Herzegovina
    { "code": "BLM", "tfr": 1.64 }, // Saint Barthélemy
    { "code": "BLR", "tfr": 1.52 }, // Belarus
    { "code": "BLZ", "tfr": 2.59 }, // Belize
    { "code": "BMU", "tfr": 1.89 }, // Bermuda
    { "code": "BOL", "tfr": 2.26 }, // Bolivia (Plurinational State of)
    { "code": "BRA", "tfr": 1.75 }, // Brazil
    { "code": "BRB", "tfr": 1.7 }, // Barbados
    { "code": "BRN", "tfr": 155 }, // Brunei Darussalam
    { "code": "BTN", "tfr": 1.77 }, // Bhutan
    { "code": "BVT", "tfr": "na" }, // Bouvet Island
    { "code": "BWA", "tfr": 2.37 }, // Botswana
    { "code": "CAF", "tfr": 3.99 }, // Central African Republic
    { "code": "CAN", "tfr": 1.57 }, // Canada
    { "code": "CCK", "tfr": "na" }, // Cocos (Keeling) Islands
    { "code": "CHE", "tfr": 1.58 }, // Switzerland
    { "code": "CHL", "tfr": 1.75 }, // Chile
    { "code": "CHN", "tfr": 1.45 }, // China
    { "code": "CIV", "tfr": 3.47 }, // Côte d'Ivoire
    { "code": "CMR", "tfr": 4.5 }, // Cameroon
    { "code": "COD", "tfr": 5.56 }, // Congo, Democratic Republic of the
    { "code": "COG", "tfr": 4.32 }, // Congo
    { "code": "COK", "tfr": 2.04 }, // Cook Islands
    { "code": "COL", "tfr": 1.94 }, // Colombia
    { "code": "COM", "tfr": 2.69 }, // Comoros
    { "code": "CPV", "tfr": 2.11 }, // Cabo Verde
    { "code": "CRI", "tfr": 1.86 }, // Costa Rica
    { "code": "CUB", "tfr": 1.71 }, // Cuba
    { "code": "CUW", "tfr": 1.97 }, // Curaçao
    { "code": "CXR", "tfr": "na" }, // Christmas Island
    { "code": "CYM", "tfr": 1.82 }, // Cayman Islands
    { "code": "CYP", "tfr": 1.48 }, // Cyprus
    { "code": "CZE", "tfr": 1.5 }, // Czechia
    { "code": "DEU", "tfr": 1.58 }, // Germany
    { "code": "DJI", "tfr": 2.13 }, // Djibouti
    { "code": "DMA", "tfr": 2.01 }, // Dominica
    { "code": "DNK", "tfr": 1.77 }, // Denmark
    { "code": "DOM", "tfr": 2.2 }, // Dominican Republic
    { "code": "DZA", "tfr": 2.47 }, // Algeria
    { "code": "ECU", "tfr": 2.02 }, // Ecuador
    { "code": "EGY", "tfr": 2.76 }, // Egypt
    { "code": "ERI", "tfr": 3.5 }, // Eritrea
    { "code": "ESH", "tfr": "na" }, // Western Sahara
    { "code": "ESP", "tfr": 1.29 }, // Spain
    { "code": "EST", "tfr": 1.62 }, // Estonia
    { "code": "ETH", "tfr": 3.92 }, // Ethiopia
    { "code": "FIN", "tfr": 1.74 }, // Finland
    { "code": "FJI", "tfr": 2.23 }, // Fiji
    { "code": "FLK", "tfr": "na" }, // Falkland Islands (Malvinas)
    { "code": "FRA", "tfr": 2.02 }, // France
    { "code": "FRO", "tfr": 2.28 }, // Faroe Islands
    { "code": "FSM", "tfr": 2.22 }, // Micronesia (Federated States of)
    { "code": "GAB", "tfr": 3.26 }, // Gabon
    { "code": "GBR", "tfr": 1.63 }, // United Kingdom of Great Britain and Northern Ireland
    { "code": "GEO", "tfr": 1.75 }, // Georgia
    { "code": "GGY", "tfr": 1.59 }, // Guernsey
    { "code": "GHA", "tfr": 3.61 }, // Ghana
    { "code": "GIB", "tfr": 1.9 }, // Gibraltar
    { "code": "GIN", "tfr": 4.82 }, // Guinea
    { "code": "GLP", "tfr": "na" }, // Guadeloupe
    { "code": "GMB", "tfr": 3.66 }, // Gambia
    { "code": "GNB", "tfr": 4.65 }, // Guinea-Bissau
    { "code": "GNQ", "tfr": 4.19 }, // Equatorial Guinea
    { "code": "GRC", "tfr": 1.4 }, // Greece
    { "code": "GRD", "tfr": 1.92 }, // Grenada
    { "code": "GRL", "tfr": 1.9 }, // Greenland
    { "code": "GTM", "tfr": 2.57 }, // Guatemala
    { "code": "GUF", "tfr": "na" }, // French Guiana
    { "code": "GUM", "tfr": 2.76 }, // Guam
    { "code": "GUY", "tfr": 2.06 }, // Guyana
    { "code": "HKG", "tfr": 1.23 }, // Hong Kong
    { "code": "HMD", "tfr": "na" }, // Heard Island and McDonald Islands
    { "code": "HND", "tfr": 1.98 }, // Honduras
    { "code": "HRV", "tfr": 1.46 }, // Croatia
    { "code": "HTI", "tfr": 2.39 }, // Haiti
    { "code": "HUN", "tfr": 1.49 }, // Hungary
    { "code": "IDN", "tfr": 1.99 }, // Indonesia
    { "code": "IMN", "tfr": 1.88 }, // Isle of Man
    { "code": "IND", "tfr": 2.07 }, // India
    { "code": "IOT", "tfr": "na" }, // British Indian Ocean Territory
    { "code": "IRL", "tfr": 1.91 }, // Ireland
    { "code": "IRN", "tfr": 1.92 }, // Iran (Islamic Republic of)
    { "code": "IRQ", "tfr": 3.17 }, // Iraq
    { "code": "ISL", "tfr": 1.95 }, // Iceland
    { "code": "ISR", "tfr": 2.54 }, // Israel
    { "code": "ITA", "tfr": 1.24 }, // Italy
    { "code": "JAM", "tfr": 2.05 }, // Jamaica
    { "code": "JEY", "tfr": 1.66 }, // Jersey
    { "code": "JOR", "tfr": 2.91 }, // Jordan
    { "code": "JPN", "tfr": 1.39 }, // Japan
    { "code": "KAZ", "tfr": 2.08 }, // Kazakhstan
    { "code": "KEN", "tfr": 3.23 }, // Kenya
    { "code": "KGZ", "tfr": 2.47 }, // Kyrgyzstan
    { "code": "KHM", "tfr": 2.2 }, // Cambodia
    { "code": "KIR", "tfr": 2.18 }, // Kiribati
    { "code": "KNA", "tfr": 1.76 }, // Saint Kitts and Nevis
    { "code": "KOR", "tfr": 1.11 }, // Korea, Republic of (South Korea)
    { "code": "KWT", "tfr": 2.22 }, // Kuwait
    { "code": "LAO", "tfr": 2.3 }, // Lao People's Democratic Republic (Laos)
    { "code": "LBN", "tfr": 1.71 }, // Lebanon
    { "code": "LBR", "tfr": 4.73 }, // Liberia
    { "code": "LBY", "tfr": 3.04 }, // Libya
    { "code": "LCA", "tfr": 1.72 }, // Saint Lucia
    { "code": "LIE", "tfr": 1.69 }, // Liechtenstein
    { "code": "LKA", "tfr": 1.97 }, // Sri Lanka
    { "code": "LSO", "tfr": 2.88 }, // Lesotho
    { "code": "LTU", "tfr": 1.61 }, // Lithuania
    { "code": "LUX", "tfr": 1.63 }, // Luxembourg
    { "code": "LVA", "tfr": 1.55 }, // Latvia
    { "code": "MAC", "tfr": 1.23 }, // Macao (Macau)
    { "code": "MAF", "tfr": 1.8 }, // Saint Martin (French part)
    { "code": "MAR", "tfr": 2.27 }, // Morocco
    { "code": "MCO", "tfr": 1.53 }, // Monaco
    { "code": "MDA", "tfr": 1.59 }, // Moldova, Republic of
    { "code": "MDG", "tfr": 3.55 }, // Madagascar
    { "code": "MDV", "tfr": 1.7 }, // Maldives
    { "code": "MEX", "tfr": 1.73 }, // Mexico
    { "code": "MHL", "tfr": 2.72 }, // Marshall Islands
    { "code": "MKD", "tfr": 1.52 }, // North Macedonia
    { "code": "MLI", "tfr": 5.45 }, // Mali
    { "code": "MLT", "tfr": 1.51 }, // Malta
    { "code": "MMR", "tfr": 2 }, // Myanmar (Burma)
    { "code": "MNE", "tfr": 1.81 }, // Montenegro
    { "code": "MNG", "tfr": 1.89 }, // Mongolia
    { "code": "MNP", "tfr": 2.59 }, // Northern Mariana Islands
    { "code": "MOZ", "tfr": 4.74 }, // Mozambique
    { "code": "MRT", "tfr": 3.46 }, // Mauritania
    { "code": "MSR", "tfr": 1.32 }, // Montserrat
    { "code": "MTQ", "tfr": "na" }, // Martinique
    { "code": "MUS", "tfr": 1.35 }, // Mauritius
    { "code": "MWI", "tfr": 3.3 }, // Malawi
    { "code": "MYS", "tfr": 1.74 }, // Malaysia
    { "code": "MYT", "tfr": "na" }, // Mayotte
    { "code": "NAM", "tfr": 2.94 }, // Namibia
    { "code": "NCL", "tfr": 1.84 }, // New Caledonia
    { "code": "NER", "tfr": 6.73 }, // Niger
    { "code": "NFK", "tfr": "na" }, // Norfolk Island
    { "code": "NGA", "tfr": 4.57 }, // Nigeria
    { "code": "NIC", "tfr": 1.78 }, // Nicaragua
    { "code": "NIU", "tfr": "na" }, // Niue
    { "code": "NLD", "tfr": 1.77 }, // Netherlands, Kingdom of the
    { "code": "NOR", "tfr": 1.83 }, // Norway
    { "code": "NPL", "tfr": 1.88}, // Nepal
    { "code": "NRU", "tfr": 2.58 }, // Nauru
    { "code": "NZL", "tfr": 1.86 }, // New Zealand
    { "code": "OMN", "tfr": 2.67 }, // Oman
    { "code": "PAK", "tfr": 3.39 }, // Pakistan
    { "code": "PAN", "tfr": 2.37 }, // Panama
    { "code": "PCN", "tfr": "na" }, // Pitcairn
    { "code": "PER", "tfr": 2.18 }, // Peru
    { "code": "PHL", "tfr": 2.77 }, // Philippines
    { "code": "PLW", "tfr": 1.7 }, // Palau
    { "code": "PNG", "tfr": 3.85 }, // Papua New Guinea
    { "code": "POL", "tfr": 1.41 }, // Poland
    { "code": "PRI", "tfr": 1.25 }, // Puerto Rico
    { "code": "PRK", "tfr": 1.89 }, // Korea (Democratic People's Republic of) (North Korea)
    { "code": "PRT", "tfr": 1.44 }, // Portugal
    { "code": "PRY", "tfr": 1.88 }, // Paraguay
    { "code": "PSE", "tfr": 3.34 }, // Palestine, State of (Gaza Strip)
    { "code": "PYF", "tfr": 1.8 }, // French Polynesia
    { "code": "QAT", "tfr": 1.9 }, // Qatar
    { "code": "REU", "tfr": "na" }, // Réunion
    { "code": "ROU", "tfr": 1.63 }, // Romania
    { "code": "RUS", "tfr": 1.6 }, // Russian Federation (Russia)
    { "code": "RWA", "tfr": 3.23 }, // Rwanda
    { "code": "SAU", "tfr": 1.89 }, // Saudi Arabia
    { "code": "SDN", "tfr": 4.54 }, // Sudan
    { "code": "SEN", "tfr": 4.17}, // Senegal
    { "code": "SGP", "tfr": 1.17 }, // Singapore
    { "code": "SGS", "tfr": "na" }, // South Georgia and the South Sandwich Islands
    { "code": "SHN", "tfr": 1.61 }, // Saint Helena, Ascension and Tristan da Cunha
    { "code": "SJM", "tfr": "na" }, // Svalbard and Jan Mayen
    { "code": "SLB", "tfr": 2.82 }, // Solomon Islands
    { "code": "SLE", "tfr": 3.71 }, // Sierra Leone
    { "code": "SLV", "tfr": 2.04 }, // El Salvador
    { "code": "SMR", "tfr": 1.53 }, // San Marino
    { "code": "SOM", "tfr": 5.22 }, // Somalia
    { "code": "SPM", "tfr": 1.59 }, // Saint Pierre and Miquelon
    { "code": "SRB", "tfr": 1.46 }, // Serbia
    { "code": "SSD", "tfr": 5.2 }, // South Sudan
    { "code": "STP", "tfr": 3.44 }, // Sao Tome and Principe
    { "code": "SUR", "tfr": 1.91 }, // Suriname
    { "code": "SVK", "tfr": 1.46 }, // Slovakia
    { "code": "SVN", "tfr": 1.6 }, // Slovenia
    { "code": "SWE", "tfr": 1.67 }, // Sweden
    { "code": "SWZ", "tfr": 2.41 }, // Eswatini
    { "code": "SXM", "tfr": 1.98 }, // Sint Maarten (Dutch part)
    { "code": "SYC", "tfr": 1.81 }, // Seychelles
    { "code": "SYR", "tfr": 2.74 }, // Syrian Arab Republic (Syria)
    { "code": "TCA", "tfr": 1.7 }, // Turks and Caicos Islands
    { "code": "TCD", "tfr": 5.35 }, // Chad
    { "code": "TGO", "tfr": 4.18 }, // Togo
    { "code": "THA", "tfr": 1.54 }, // Thailand
    { "code": "TJK", "tfr": 2.42 }, // Tajikistan
    { "code": "TKL", "tfr": "na" }, // Tokelau
    { "code": "TKM", "tfr": 2.03 }, // Turkmenistan
    { "code": "TLS", "tfr": 4.09 }, // Timor-Leste
    { "code": "TON", "tfr": 2.7 }, // Tonga
    { "code": "TTO", "tfr": 1.63 }, // Trinidad and Tobago
    { "code": "TUN", "tfr": 1.96 }, // Tunisia
    { "code": "TUR", "tfr": 1.91 }, // Türkiye (Turkey)
    { "code": "TUV", "tfr": 2.81 }, // Tuvalu
    { "code": "TWN", "tfr": 1.09 }, // Taiwan, Province of China
    { "code": "TZA", "tfr": 4.33 }, // Tanzania, United Republic of
    { "code": "UGA", "tfr": 5.26 }, // Uganda
    { "code": "UKR", "tfr": 1.57 }, // Ukraine
    { "code": "UMI", "tfr": "na" }, // United States Minor Outlying Islands
    { "code": "URY", "tfr": 1.75 }, // Uruguay
    { "code": "USA", "tfr": 1.84 }, // United States of America
    { "code": "UZB", "tfr": 1.72 }, // Uzbekistan
    { "code": "VAT", "tfr": "na" }, // Holy See
    { "code": "VCT", "tfr": 1.74 }, // Saint Vincent and the Grenadines
    { "code": "VEN", "tfr": 2.2 }, // Venezuela (Bolivarian Republic of)
    { "code": "VGB", "tfr": 1.37 }, // Virgin Islands (British)
    { "code": "VIR", "tfr": 1.98 }, // Virgin Islands (U.S.)
    { "code": "VNM", "tfr": 2.04 }, // Viet Nam (Vietnam)
    { "code": "VUT", "tfr": 2.59 }, // Vanuatu
    { "code": "WLF", "tfr": 1.71 }, // Wallis and Futuna
    { "code": "WSM", "tfr": 2.37 }, // Samoa
    { "code": "YEM", "tfr": 2.91 }, // Yemen
    { "code": "ZAF", "tfr": 2.17 }, // South Africa
    { "code": "ZMB", "tfr": 4.49 }, // Zambia
    { "code": "ZWE", "tfr": 3.88 } // Zimbabwe
];

export { nations };

// Kosovo included in CIA Factbook, but not in ISO codes.
// West Bank included in CIA Factbook, but not in ISO codes.
