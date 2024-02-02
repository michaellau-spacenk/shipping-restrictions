const data = [
    {
        displayValue: "United Kingdom",
        value: "GB"
    },
    {
        displayValue: "Aaland Islands",
        value: "AX"
    },
    {
        displayValue: "Afghanistan",
        value: "AF"
    },
    {
        displayValue: "Albania",
        value: "AL"
    },
    {
        displayValue: "Algeria",
        value: "DZ"
    },
    {
        displayValue: "American Samoa",
        value: "AS"
    },
    {
        displayValue: "Andorra",
        value: "AD"
    },
    {
        displayValue: "Angola",
        value: "AO"
    },
    {
        displayValue: "Anguilla",
        value: "AI"
    },
    {
        displayValue: "Antarctica",
        value: "AQ"
    },
    {
        displayValue: "Antigua and Barbuda",
        value: "AG"
    },
    {
        displayValue: "Argentina",
        value: "AR"
    },
    {
        displayValue: "Armenia",
        value: "AM"
    },
    {
        displayValue: "Aruba",
        value: "AW"
    },
    {
        displayValue: "Australia",
        value: "AU"
    },
    {
        displayValue: "Austria",
        value: "AT"
    },
    {
        displayValue: "Azerbaijan",
        value: "AZ"
    },
    {
        displayValue: "Bahamas",
        value: "BS"
    },
    {
        displayValue: "Bahrain",
        value: "BH"
    },
    {
        displayValue: "Bangladesh",
        value: "BD"
    },
    {
        displayValue: "Barbados",
        value: "BB"
    },
    {
        displayValue: "Belarus",
        value: "BY"
    },
    {
        displayValue: "Belgium",
        value: "BE"
    },
    {
        displayValue: "Belize",
        value: "BZ"
    },
    {
        displayValue: "Benin",
        value: "BJ"
    },
    {
        displayValue: "Bermuda",
        value: "BM"
    },
    {
        displayValue: "Bhutan",
        value: "BT"
    },
    {
        displayValue: "Bolivia",
        value: "BO"
    },
    {
        displayValue: "Bosnia and Herzegovina",
        value: "BA"
    },
    {
        displayValue: "Botswana",
        value: "BW"
    },
    {
        displayValue: "Bouvet Island",
        value: "BV"
    },
    {
        displayValue: "Brazil",
        value: "BR"
    },
    {
        displayValue: "British Indian Ocean Territory",
        value: "IO"
    },
    {
        displayValue: "Brunei Darussalam",
        value: "BN"
    },
    {
        displayValue: "Bulgaria",
        value: "BG"
    },
    {
        displayValue: "Burkina Faso",
        value: "BF"
    },
    {
        displayValue: "Burundi",
        value: "BI"
    },
    {
        displayValue: "Cambodia",
        value: "KH"
    },
    {
        displayValue: "Cameroon",
        value: "CM"
    },
    {
        displayValue: "Canada",
        value: "CA"
    },
    {
        displayValue: "Cape Verde",
        value: "CV"
    },
    {
        displayValue: "Cayman Islands",
        value: "KY"
    },
    {
        displayValue: "Central African Republic",
        value: "CF"
    },
    {
        displayValue: "Chad",
        value: "TD"
    },
    {
        displayValue: "Chile",
        value: "CL"
    },
    {
        displayValue: "China",
        value: "CN"
    },
    {
        displayValue: "Christmas Island",
        value: "CX"
    },
    {
        displayValue: "Cocos Islands",
        value: "CC"
    },
    {
        displayValue: "Colombia",
        value: "CO"
    },
    {
        displayValue: "Comoros",
        value: "KM"
    },
    {
        displayValue: "Congo",
        value: "CG"
    },
    {
        displayValue: "Congo, The Democratic Republic of the",
        value: "CD"
    },
    {
        displayValue: "Cook Islands",
        value: "CK"
    },
    {
        displayValue: "Costa Rica",
        value: "CR"
    },
    {
        displayValue: "Cote D'ivoire",
        value: "CI"
    },
    {
        displayValue: "Croatia",
        value: "HR"
    },
    {
        displayValue: "Cuba",
        value: "CU"
    },
    {
        displayValue: "Cyprus",
        value: "CY"
    },
    {
        displayValue: "Czech Republic",
        value: "CZ"
    },
    {
        displayValue: "Denmark",
        value: "DK"
    },
    {
        displayValue: "Djibouti",
        value: "DJ"
    },
    {
        displayValue: "Dominica",
        value: "DM"
    },
    {
        displayValue: "Dominican Republic",
        value: "DO"
    },
    {
        displayValue: "Ecuador",
        value: "EC"
    },
    {
        displayValue: "Egypt",
        value: "EG"
    },
    {
        displayValue: "El Salvador",
        value: "SV"
    },
    {
        displayValue: "Equatorial Guinea",
        value: "GQ"
    },
    {
        displayValue: "Eritrea",
        value: "ER"
    },
    {
        displayValue: "Estonia",
        value: "EE"
    },
    {
        displayValue: "Ethiopia",
        value: "ET"
    },
    {
        displayValue: "Falkland Islands",
        value: "FK"
    },
    {
        displayValue: "Faroe Islands",
        value: "FO"
    },
    {
        displayValue: "Fiji",
        value: "FJ"
    },
    {
        displayValue: "Finland",
        value: "FI"
    },
    {
        displayValue: "France",
        value: "FR"
    },
    {
        displayValue: "French Guiana",
        value: "GF"
    },
    {
        displayValue: "French Polynesia",
        value: "PF"
    },
    {
        displayValue: "French Southern Territories",
        value: "TF"
    },
    {
        displayValue: "Gabon",
        value: "GA"
    },
    {
        displayValue: "Gambia",
        value: "GM"
    },
    {
        displayValue: "Georgia",
        value: "GE"
    },
    {
        displayValue: "Germany",
        value: "DE"
    },
    {
        displayValue: "Ghana",
        value: "GH"
    },
    {
        displayValue: "Gibraltar",
        value: "GI"
    },
    {
        displayValue: "Greece",
        value: "GR"
    },
    {
        displayValue: "Greenland",
        value: "GL"
    },
    {
        displayValue: "Grenada",
        value: "GD"
    },
    {
        displayValue: "Guadeloupe",
        value: "GP"
    },
    {
        displayValue: "Guam",
        value: "GU"
    },
    {
        displayValue: "Guatemala",
        value: "GT"
    },
    {
        displayValue: "Guernsey",
        value: "GG"
    },
    {
        displayValue: "Guinea",
        value: "GN"
    },
    {
        displayValue: "Guinea-Bissau",
        value: "GW"
    },
    {
        displayValue: "Guyana",
        value: "GY"
    },
    {
        displayValue: "Haiti",
        value: "HT"
    },
    {
        displayValue: "Heard and McDonald Islands",
        value: "HM"
    },
    {
        displayValue: "Holy See (Vatican City State)",
        value: "VA"
    },
    {
        displayValue: "Honduras",
        value: "HN"
    },
    {
        displayValue: "Hongkong",
        value: "HK"
    },
    {
        displayValue: "Hungary",
        value: "HU"
    },
    {
        displayValue: "Iceland",
        value: "IS"
    },
    {
        displayValue: "India",
        value: "IN"
    },
    {
        displayValue: "Indonesia",
        value: "ID"
    },
    {
        displayValue: "Iran",
        value: "IR"
    },
    {
        displayValue: "Iraq",
        value: "IQ"
    },
    {
        displayValue: "Ireland",
        value: "IE"
    },
    {
        displayValue: "Isle of Man",
        value: "IM"
    },
    {
        displayValue: "Israel",
        value: "IL"
    },
    {
        displayValue: "Italy",
        value: "IT"
    },
    {
        displayValue: "Jamaica",
        value: "JM"
    },
    {
        displayValue: "Japan",
        value: "JP"
    },
    {
        displayValue: "Jersey",
        value: "JE"
    },
    {
        displayValue: "Jordan",
        value: "JO"
    },
    {
        displayValue: "Kazakhstan",
        value: "KZ"
    },
    {
        displayValue: "Kenya",
        value: "KE"
    },
    {
        displayValue: "Kiribati",
        value: "KI"
    },
    {
        displayValue: "Korea, Democratic People's Republic of",
        value: "KP"
    },
    {
        displayValue: "Korea, Republic of",
        value: "KR"
    },
    {
        displayValue: "Kuwait",
        value: "KW"
    },
    {
        displayValue: "Kyrgyzstan",
        value: "KG"
    },
    {
        displayValue: "Lao People's Democratic Republic",
        value: "LA"
    },
    {
        displayValue: "Latvia",
        value: "LV"
    },
    {
        displayValue: "Lebanon",
        value: "LB"
    },
    {
        displayValue: "Lesotho",
        value: "LS"
    },
    {
        displayValue: "Liberia",
        value: "LR"
    },
    {
        displayValue: "Libyan Arab Jamahiriya",
        value: "LY"
    },
    {
        displayValue: "Liechtenstein",
        value: "LI"
    },
    {
        displayValue: "Lithuania",
        value: "LT"
    },
    {
        displayValue: "Luxembourg",
        value: "LU"
    },
    {
        displayValue: "Macao",
        value: "MO"
    },
    {
        displayValue: "North Macedonia",
        value: "MK"
    },
    {
        displayValue: "Madagascar",
        value: "MG"
    },
    {
        displayValue: "Malawi",
        value: "MW"
    },
    {
        displayValue: "Malaysia",
        value: "MY"
    },
    {
        displayValue: "Maldives",
        value: "MV"
    },
    {
        displayValue: "Mali",
        value: "ML"
    },
    {
        displayValue: "Malta",
        value: "MT"
    },
    {
        displayValue: "Marshall Islands",
        value: "MH"
    },
    {
        displayValue: "Martinique",
        value: "MQ"
    },
    {
        displayValue: "Mauritania",
        value: "MR"
    },
    {
        displayValue: "Mauritius",
        value: "MU"
    },
    {
        displayValue: "Mayotte",
        value: "YT"
    },
    {
        displayValue: "Mexico",
        value: "MX"
    },
    {
        displayValue: "Micronesia",
        value: "FM"
    },
    {
        displayValue: "Moldova",
        value: "MD"
    },
    {
        displayValue: "Monaco",
        value: "MC"
    },
    {
        displayValue: "Mongolia",
        value: "MN"
    },
    {
        displayValue: "Montenegro",
        value: "ME"
    },
    {
        displayValue: "Montserrat",
        value: "MS"
    },
    {
        displayValue: "Morocco",
        value: "MA"
    },
    {
        displayValue: "Mozambique",
        value: "MZ"
    },
    {
        displayValue: "Myanmar",
        value: "MM"
    },
    {
        displayValue: "Namibia",
        value: "NA"
    },
    {
        displayValue: "Nauru",
        value: "NR"
    },
    {
        displayValue: "Nepal",
        value: "NP"
    },
    {
        displayValue: "Netherlands",
        value: "NL"
    },
    {
        displayValue: "Netherlands Antilles",
        value: "AN"
    },
    {
        displayValue: "New Caledonia",
        value: "NC"
    },
    {
        displayValue: "New Zealand",
        value: "NZ"
    },
    {
        displayValue: "Nicaragua",
        value: "NI"
    },
    {
        displayValue: "Niger",
        value: "NE"
    },
    {
        displayValue: "Nigeria",
        value: "NG"
    },
    {
        displayValue: "Niue",
        value: "NU"
    },
    {
        displayValue: "Norfalk Island",
        value: "NF"
    },
    {
        displayValue: "Northern Mariana Islands",
        value: "MP"
    },
    {
        displayValue: "Norway",
        value: "NO"
    },
    {
        displayValue: "Oman",
        value: "OM"
    },
    {
        displayValue: "Pakistan",
        value: "PK"
    },
    {
        displayValue: "Palau",
        value: "PW"
    },
    {
        displayValue: "Palestine",
        value: "PS"
    },
    {
        displayValue: "Panama",
        value: "PA"
    },
    {
        displayValue: "Papua New Guinea",
        value: "PG"
    },
    {
        displayValue: "Paraguay",
        value: "PY"
    },
    {
        displayValue: "Peru",
        value: "PE"
    },
    {
        displayValue: "Philippines",
        value: "PH"
    },
    {
        displayValue: "Pitcairn Islands",
        value: "PN"
    },
    {
        displayValue: "Poland",
        value: "PL"
    },
    {
        displayValue: "Portugal",
        value: "PT"
    },
    {
        displayValue: "Puerto Rico",
        value: "PR"
    },
    {
        displayValue: "Qatar",
        value: "QA"
    },
    {
        displayValue: "Reunion",
        value: "RE"
    },
    {
        displayValue: "Romania",
        value: "RO"
    },
    {
        displayValue: "Russia",
        value: "RU"
    },
    {
        displayValue: "Rwanda",
        value: "RW"
    },
    {
        displayValue: "Saint Barthelemy",
        value: "BL"
    },
    {
        displayValue: "Saint Kitts and Nevis",
        value: "KN"
    },
    {
        displayValue: "Saint Lucia",
        value: "LC"
    },
    {
        displayValue: "Saint Martin",
        value: "MF"
    },
    {
        displayValue: "Saint Vincent and the Grenadines",
        value: "VC"
    },
    {
        displayValue: "Samoa",
        value: "WS"
    },
    {
        displayValue: "San Marino",
        value: "SM"
    },
    {
        displayValue: "Saotome and Principe",
        value: "ST"
    },
    {
        displayValue: "Saudi Arabia",
        value: "SA"
    },
    {
        displayValue: "Senegal",
        value: "SN"
    },
    {
        displayValue: "Serbia",
        value: "RS"
    },
    {
        displayValue: "Seychelles",
        value: "SC"
    },
    {
        displayValue: "Sierra Leone",
        value: "SL"
    },
    {
        displayValue: "Singapore",
        value: "SG"
    },
    {
        displayValue: "Slovakia",
        value: "SK"
    },
    {
        displayValue: "Slovenia",
        value: "SI"
    },
    {
        displayValue: "Solomon Islands",
        value: "SB"
    },
    {
        displayValue: "Somalia",
        value: "SO"
    },
    {
        displayValue: "South Africa",
        value: "ZA"
    },
    {
        displayValue: "South Georgia and the South Sandwich Islands",
        value: "GS"
    },
    {
        displayValue: "Spain",
        value: "ES"
    },
    {
        displayValue: "Sri Lanka",
        value: "LK"
    },
    {
        displayValue: "St.Helena",
        value: "SH"
    },
    {
        displayValue: "St.Pierre and Miquelon",
        value: "PM"
    },
    {
        displayValue: "Sudan",
        value: "SD"
    },
    {
        displayValue: "South Sudan",
        value: "SS"
    },
    {
        displayValue: "Suriname",
        value: "SR"
    },
    {
        displayValue: "Svalbard and Jan Mayen",
        value: "SJ"
    },
    {
        displayValue: "Swaziland",
        value: "SZ"
    },
    {
        displayValue: "Sweden",
        value: "SE"
    },
    {
        displayValue: "Switzerland",
        value: "CH"
    },
    {
        displayValue: "Syrian Arab Republic",
        value: "SY"
    },
    {
        displayValue: "Taiwan",
        value: "TW"
    },
    {
        displayValue: "Tajikistan",
        value: "TJ"
    },
    {
        displayValue: "Tanzania, United Republic of",
        value: "TZ"
    },
    {
        displayValue: "Thailand",
        value: "TH"
    },
    {
        displayValue: "Timor-Leste",
        value: "TL"
    },
    {
        displayValue: "Togo",
        value: "TG"
    },
    {
        displayValue: "Tokelau",
        value: "TK"
    },
    {
        displayValue: "Tonga",
        value: "TO"
    },
    {
        displayValue: "Trinidad and Tobago",
        value: "TT"
    },
    {
        displayValue: "Tunisia",
        value: "TN"
    },
    {
        displayValue: "Turkey",
        value: "TR"
    },
    {
        displayValue: "Turkmenistan",
        value: "TM"
    },
    {
        displayValue: "Turks and Caicos Islands",
        value: "TC"
    },
    {
        displayValue: "Tuvalu",
        value: "TV"
    },
    {
        displayValue: "Uganda",
        value: "UG"
    },
    {
        displayValue: "Ukraine",
        value: "UA"
    },
    {
        displayValue: "United Arab Emirates",
        value: "AE"
    },
    {
        displayValue: "United States",
        value: "US"
    },
    {
        displayValue: "United States Minor Outlying Islands",
        value: "UM"
    },
    {
        displayValue: "Uruguay",
        value: "UY"
    },
    {
        displayValue: "Uzbekistan",
        value: "UZ"
    },
    {
        displayValue: "Vanuatu",
        value: "VU"
    },
    {
        displayValue: "Venezuela, Bolivarian Republic of",
        value: "VE"
    },
    {
        displayValue: "Vietnam",
        value: "VN"
    },
    {
        displayValue: "Virgin Islands, British",
        value: "VG"
    },
    {
        displayValue: "Virgin Islands, U.S.",
        value: "VI"
    },
    {
        displayValue: "Wallis and Futuna",
        value: "WF"
    },
    {
        displayValue: "Western Sahara",
        value: "EH"
    },
    {
        displayValue: "Yemen",
        value: "YE"
    },
    {
        displayValue: "Zambia",
        value: "ZM"
    },
    {
        displayValue: "United Kingdom - Channel Islands",
        value: "UC"
    },
    {
        displayValue: "Zimbabwe",
        value: "ZW"
    }
]

const regionData = { 
    Asia: [
        {
            displayValue: "Afghanistan",
            value: "AF"
        },
        {
            displayValue: "Armenia",
            value: "AM"
        },
        {
            displayValue: "Azerbaijan",
            value: "AZ"
        },
        {
            displayValue: "Bahrain",
            value: "BH"
        },
        {
            displayValue: "Bangladesh",
            value: "BD"
        },
        {
            displayValue: "Bhutan",
            value: "BT"
        },
        {
            displayValue: "Brunei Darussalam",
            value: "BN"
        },
        {
            displayValue: "Cambodia",
            value: "KH"
        },
        {
            displayValue: "China",
            value: "CN"
        },
        {
            displayValue: "Guam",
            value: "GU"
        },
        {
            displayValue: "Georgia",
            value: "GE"
        },
        {
            displayValue: "India",
            value: "IN"
        },
        {
            displayValue: "Indonesia",
            value: "ID"
        },
        {
            displayValue: "Iran",
            value: "IR"
        },
        {
            displayValue: "Iraq",
            value: "IQ"
        },
        {
            displayValue: "Israel",
            value: "IL"
        },
        {
            displayValue: "Japan",
            value: "JP"
        },
        {
            displayValue: "Jordan",
            value: "JO"
        },
        {
            displayValue: "Kazakhstan",
            value: "KZ"
        },
        {
            displayValue: "Korea, Democratic People's Republic of",
            value: "KP"
        },
        {
            displayValue: "Korea, Republic of",
            value: "KR"
        },
        {
            displayValue: "Kuwait",
            value: "KW"
        },
        {
            displayValue: "Kyrgyzstan",
            value: "KG"
        },
        {
            displayValue: "Lao People's Democratic Republic",
            value: "LA"
        },
        {
            displayValue: "Lebanon",
            value: "LB"
        },
        {
            displayValue: "Macao",
            value: "MO"
        },
        {
            displayValue: "Malaysia",
            value: "MY"
        },
        {
            displayValue: "Maldives",
            value: "MV"
        },
        {
            displayValue: "Mongolia",
            value: "MN"
        },
        {
            displayValue: "Myanmar",
            value: "MM"
        },
        {
            displayValue: "Nepal",
            value: "NP"
        },
        {
            displayValue: "Northern Mariana Islands",
            value: "MP"
        },
        {
            displayValue: "Oman",
            value: "OM"
        },
        {
            displayValue: "Pakistan",
            value: "PK"
        },
        {
            displayValue: "Palestine",
            value: "PS"
        },
        {
            displayValue: "Philippines",
            value: "PH"
        },
        {
            displayValue: "Qatar",
            value: "QA"
        },
        {
            displayValue: "Saudi Arabia",
            value: "SA"
        },
        {
            displayValue: "Singapore",
            value: "SG"
        },
        {
            displayValue: "Sri Lanka",
            value: "LK"
        },
        {
            displayValue: "Syrian Arab Republic",
            value: "SY"
        },
        {
            displayValue: "Taiwan",
            value: "TW"
        },
        {
            displayValue: "Tajikistan",
            value: "TJ"
        },
        {
            displayValue: "Thailand",
            value: "TH"
        },
        {
            displayValue: "Timor-Leste",
            value: "TL"
        },
        {
            displayValue: "Turkey",
            value: "TR"
        },
        {
            displayValue: "Turkmenistan",
            value: "TM"
        },
        {
            displayValue: "United Arab Emirates",
            value: "AE"
        },
        {
            displayValue: "Uzbekistan",
            value: "UZ"
        },
        {
            displayValue: "Vietnam",
            value: "VN"
        },
        {
            displayValue: "Yemen",
            value: "YE"
        }
    ],
    Africa: [
        {
            displayValue: "Algeria",
            value: "DZ"
        },
        {
            displayValue: "Angola",
            value: "AO"
        },
        {
            displayValue: "Benin",
            value: "BJ"
        },
        {
            displayValue: "Botswana",
            value: "BW"
        },
        {
            displayValue: "Burkina Faso",
            value: "BF"
        },
        {
            displayValue: "Burundi",
            value: "BI"
        },
        {
            displayValue: "Cape Verde",
            value: "CV"
        },
        {
            displayValue: "Cameroon",
            value: "CM"
        },
        {
            displayValue: "Central African Republic",
            value: "CF"
        },
        {
            displayValue: "Chad",
            value: "TD"
        },
        {
            displayValue: "Comoros",
            value: "KM"
        },
        {
            displayValue: "Congo",
            value: "CG"
        },
        {
            displayValue: "Congo, The Democratic Republic of the",
            value: "CD"
        },
        {
            displayValue: "Cote D'ivoire",
            value: "CI"
        },
        {
            displayValue: "Djibouti",
            value: "DJ"
        },
        {
            displayValue: "Egypt",
            value: "EG"
        },
        {
            displayValue: "Equatorial Guinea",
            value: "GQ"
        },
        {
            displayValue: "Eritrea",
            value: "ER"
        },
        {
            displayValue: "Ethiopia",
            value: "ET"
        },
        {
            displayValue: "Gabon",
            value: "GA"
        },
        {
            displayValue: "Gambia",
            value: "GM"
        },
        {
            displayValue: "Ghana",
            value: "GH"
        },
        {
            displayValue: "Guinea",
            value: "GN"
        },
        {
            displayValue: "Guinea-Bissau",
            value: "GW"
        },
        {
            displayValue: "Hongkong",
            value: "HK"
        },
        {
            displayValue: "Kenya",
            value: "KE"
        },
        {
            displayValue: "Lesotho",
            value: "LS"
        },
        {
            displayValue: "Liberia",
            value: "LR"
        },
        {
            displayValue: "Libyan Arab Jamahiriya",
            value: "LY"
        },
        {
            displayValue: "Madagascar",
            value: "MG"
        },
        {
            displayValue: "Malawi",
            value: "MW"
        },
        {
            displayValue: "Mali",
            value: "ML"
        },
        {
            displayValue: "Mauritania",
            value: "MR"
        },
        {
            displayValue: "Mauritius",
            value: "MU"
        },
        {
            displayValue: "Mayotte",
            value: "YT"
        },
        {
            displayValue: "Morocco",
            value: "MA"
        },
        {
            displayValue: "Mozambique",
            value: "MZ"
        },
        {
            displayValue: "Namibia",
            value: "NA"
        },
        {
            displayValue: "Niger",
            value: "NE"
        },
        {
            displayValue: "Nigeria",
            value: "NG"
        },
        {
            displayValue: "Reunion",
            value: "RE"
        },
        {
            displayValue: "Rwanda",
            value: "RW"
        },
        {
            displayValue: "Saotome and Principe",
            value: "ST"
        },
        {
            displayValue: "Senegal",
            value: "SN"
        },
        {
            displayValue: "Seychelles",
            value: "SC"
        },
        {
            displayValue: "Sierra Leone",
            value: "SL"
        },
        {
            displayValue: "Somalia",
            value: "SO"
        },
        {
            displayValue: "South Africa",
            value: "ZA"
        },
        {
            displayValue: "Sudan",
            value: "SD"
        },
        {
            displayValue: "South Sudan",
            value: "SS"
        },
        {
            displayValue: "Swaziland",
            value: "SZ"
        },
        {
            displayValue: "Tanzania, United Republic of",
            value: "TZ"
        },
        {
            displayValue: "Togo",
            value: "TG"
        },
        {
            displayValue: "Tunisia",
            value: "TN"
        },
        {
            displayValue: "Uganda",
            value: "UG"
        },
        {
            displayValue: "Western Sahara",
            value: "EH"
        },
        {
            displayValue: "Zambia",
            value: "ZM"
        },
        {
            displayValue: "Zimbabwe",
            value: "ZW"
        }
    ],
    Europe: [
        {
            displayValue: "Aaland Islands",
            value: "AX"
        },
        {
            displayValue: "Albania",
            value: "AL"
        },
        {
            displayValue: "Andorra",
            value: "AD"
        },
        {
            displayValue: "Austria",
            value: "AT"
        },
        {
            displayValue: "Belarus",
            value: "BY"
        },
        {
            displayValue: "Belgium",
            value: "BE"
        },
        {
            displayValue: "Bosnia and Herzegovina",
            value: "BA"
        },
        {
            displayValue: "Bulgaria",
            value: "BG"
        },
        {
            displayValue: "Croatia",
            value: "HR"
        },
        {
            displayValue: "Cyprus",
            value: "CY"
        },
        {
            displayValue: "Czech Republic",
            value: "CZ"
        },
        {
            displayValue: "Denmark",
            value: "DK"
        },
        {
            displayValue: "Estonia",
            value: "EE"
        },
        {
            displayValue: "Faroe Islands",
            value: "FO"
        },
        {
            displayValue: "Finland",
            value: "FI"
        },
        {
            displayValue: "France",
            value: "FR"
        },
        {
            displayValue: "Germany",
            value: "DE"
        },
        {
            displayValue: "Gibraltar",
            value: "GI"
        },
        {
            displayValue: "Greece",
            value: "GR"
        },
        {
            displayValue: "Guernsey",
            value: "GG"
        },
        {
            displayValue: "Hungary",
            value: "HU"
        },
        {
            displayValue: "Holy See (Vatican City State)",
            value: "VA"
        },
        {
            displayValue: "Iceland",
            value: "IS"
        },
        {
            displayValue: "Ireland",
            value: "IE"
        },
        {
            displayValue: "Italy",
            value: "IT"
        },
        {
            displayValue: "Isle of Man",
            value: "IM"
        },
        {
            displayValue: "Jersey",
            value: "JE"
        },
        {
            displayValue: "Latvia",
            value: "LV"
        },
        {
            displayValue: "Liechtenstein",
            value: "LI"
        },
        {
            displayValue: "Lithuania",
            value: "LT"
        },
        {
            displayValue: "Luxembourg",
            value: "LU"
        },
        {
            displayValue: "Malta",
            value: "MT"
        },
        {
            displayValue: "Moldova",
            value: "MD"
        },
        {
            displayValue: "Monaco",
            value: "MC"
        },
        {
            displayValue: "Montenegro",
            value: "ME"
        },
        {
            displayValue: "Netherlands",
            value: "NL"
        },
        {
            displayValue: "North Macedonia",
            value: "MK"
        },
        {
            displayValue: "Norway",
            value: "NO"
        },
        {
            displayValue: "Poland",
            value: "PL"
        },
        {
            displayValue: "Portugal",
            value: "PT"
        },
        {
            displayValue: "Romania",
            value: "RO"
        },
        {
            displayValue: "Russia",
            value: "RU"
        },
        {
            displayValue: "San Marino",
            value: "SM"
        },
        {
            displayValue: "Serbia",
            value: "RS"
        },
        {
            displayValue: "Slovakia",
            value: "SK"
        },
        {
            displayValue: "Slovenia",
            value: "SI"
        },
        {
            displayValue: "Spain",
            value: "ES"
        },
        {
            displayValue: "Sweden",
            value: "SE"
        },
        {
            displayValue: "Switzerland",
            value: "CH"
        },
        {
            displayValue: "Ukraine",
            value: "UA"
        },
        {
            displayValue: "United Kingdom",
            value: "GB"
        },
        {
            displayValue: "United Kingdom - Channel Islands",
            value: "UC"
        }
    ],
    NorthAmerica: [
        {
            displayValue: "Antigua and Barbuda",
            value: "AG"
        },
        {
            displayValue: "Bahamas",
            value: "BS"
        },
        {
            displayValue: "Barbados",
            value: "BB"
        },
        {
            displayValue: "Belize",
            value: "BZ"
        },
        {
            displayValue: "Bermuda",
            value: "BM"
        },
        {
            displayValue: "Canada",
            value: "CA"
        },
        {
            displayValue: "Costa Rica",
            value: "CR"
        },
        {
            displayValue: "Cuba",
            value: "CU"
        },
        {
            displayValue: "Cayman Islands",
            value: "KY"
        },
        {
            displayValue: "Dominica",
            value: "DM"
        },
        {
            displayValue: "Dominican Republic",
            value: "DO"
        },
        {
            displayValue: "El Salvador",
            value: "SV"
        },
        {
            displayValue: "Grenada",
            value: "GD"
        },
        {
            displayValue: "Guatemala",
            value: "GT"
        },
        {
            displayValue: "Guadeloupe",
            value: "GP"
        },
        {
            displayValue: "Haiti",
            value: "HT"
        },
        {
            displayValue: "Honduras",
            value: "HN"
        },
        {
            displayValue: "Jamaica",
            value: "JM"
        },
        {
            displayValue: "Martinique",
            value: "MQ"
        },
        {
            displayValue: "Mexico",
            value: "MX"
        },
        {
            displayValue: "Montserrat",
            value: "MS"
        },
        {
            displayValue: "Netherlands Antilles",
            value: "AN"
        },
        {
            displayValue: "Nicaragua",
            value: "NI"
        },
        {
            displayValue: "Panama",
            value: "PA"
        },
        {
            displayValue: "Puerto Rico",
            value: "PR"
        },
        {
            displayValue: "Saint Kitts and Nevis",
            value: "KN"
        },
        {
            displayValue: "Saint Lucia",
            value: "LC"
        },
        {
            displayValue: "Saint Barthelemy",
            value: "BL"
        },
        {
            displayValue: "Saint Martin",
            value: "MF"
        },
        {
            displayValue: "St.Pierre and Miquelon",
            value: "PM"
        },
        {
            displayValue: "Saint Vincent and the Grenadines",
            value: "VC"
        },
        {
            displayValue: "Trinidad and Tobago",
            value: "TT"
        },
        {
            displayValue: "Turks and Caicos Islands",
            value: "TC"
        },
        {
            displayValue: "United States",
            value: "US"
        },
        {
            displayValue: "Virgin Islands, British",
            value: "VG"
        },
        {
            displayValue: "Virgin Islands, U.S.",
            value: "VI"
        }
    ],
    SouthAmerica: [
        {
            displayValue: "Argentina",
            value: "AR"
        },
        {
            displayValue: "Anguilla",
            value: "AI"
        },
        {
            displayValue: "Aruba",
            value: "AW"
        },
        {
            displayValue: "Bolivia",
            value: "BO"
        },
        {
            displayValue: "Brazil",
            value: "BR"
        },
        {
            displayValue: "Chile",
            value: "CL"
        },
        {
            displayValue: "Colombia",
            value: "CO"
        },
        {
            displayValue: "Ecuador",
            value: "EC"
        },
        {
            displayValue: "Falkland Islands",
            value: "FK"
        },
        {
            displayValue: "French Guiana",
            value: "GF"
        },
        {
            displayValue: "Guyana",
            value: "GY"
        },
        {
            displayValue: "Paraguay",
            value: "PY"
        },
        {
            displayValue: "Peru",
            value: "PE"
        },
        {
            displayValue: "Suriname",
            value: "SR"
        },
        {
            displayValue: "Uruguay",
            value: "UY"
        },
        {
            displayValue: "Venezuela, Bolivarian Republic of",
            value: "VE"
        }
    ],
    Oceania: [
        {
            displayValue: "Australia",
            value: "AU"
        },
        {
            displayValue: "American Samoa",
            value: "AS"
        },
        {
            displayValue: "Cook Islands",
            value: "CK"
        },
        {
            displayValue: "Christmas Island",
            value: "CX"
        },
        {
            displayValue: "Cocos Islands",
            value: "CC"
        },
        {
            displayValue: "Fiji",
            value: "FJ"
        },
        {
            displayValue: "Kiribati",
            value: "KI"
        },
        {
            displayValue: "Marshall Islands",
            value: "MH"
        },
        {
            displayValue: "Micronesia",
            value: "FM"
        },
        {
            displayValue: "Niue",
            value: "NU"
        },
        {
            displayValue: "Nauru",
            value: "NR"
        },
        {
            displayValue: "New Zealand",
            value: "NZ"
        },
        {
            displayValue: "New Caledonia",
            value: "NC"
        },
        {
            displayValue: "Norfalk Island",
            value: "NF"
        },
        {
            displayValue: "Palau",
            value: "PW"
        },
        {
            displayValue: "Papua New Guinea",
            value: "PG"
        },
        {
            displayValue: "Samoa",
            value: "WS"
        },
        {
            displayValue: "Solomon Islands",
            value: "SB"
        },
        {
            displayValue: "Tonga",
            value: "TO"
        },
        {
            displayValue: "Tokelau",
            value: "TK"
        },
        {
            displayValue: "Tuvalu",
            value: "TV"
        },
        {
            displayValue: "Vanuatu",
            value: "VU"
        },
        {
            displayValue: "Wallis and Futuna",
            value: "WF"
        },
    ]
}

export { data, regionData };