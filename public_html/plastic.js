$(function () {
    //Makes menu show up - dates get radio buttons
    makeMenu(2007, 2018);
    //Tells it what data is 2007, then sets default map to 2007 data
    var selectedData = prepData(2007);
    drawMap(2007, selectedData);
});

function displayMap() {
    //Checks which year has been selected in radio buttons/menu
    var year = $('input[name=selectyear]:checked').val();
    //alert(year);
    
    //Tells it which data matches the year selected, then displays map
    var selectedData = prepData(year);
    drawMap(year, selectedData);
};

function prepData(year) {
    // Prepare data for map

    var allData = [
        [{"iso3": "DZA", "data": [40, 56, 41, 43, 14, 17, 30, 31, 38, 44, 51, 57]}],
        [{"iso3": "ARG", "data": [1279, 1261, 1320, 1284, 1325, 1344, 1351, 1345, 1359, 1369, 1382, 1391]}],
        [{"iso3": "AUS", "data": [875, 816, 829, 854, 848, 839, 844, 770, 778, 780, 792, 794]}],
        [{"iso3": "AUT", "data": [1027, 938, 958, 1028, 958, 1016, 1059, 1081, 1127, 1147, 1161, 1170]}],
        [{"iso3": "BHR", "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}],
        [{"iso3": "BRA", "data": [5389, 5012, 5494, 5859, 5679, 6001, 6102, 6232, 6657, 6929, 7152, 7390]}],
        [{"iso3": "BGR", "data": [139, 122, 77, 37, 55, 69, 78, 73, 75, 75, 76, 77]}],
        [{"iso3": "CAN", "data": [4768, 4040, 3602, 3584, 3743, 3823, 4035, 3955, 3978, 4126, 4336, 4583]}],
        [{"iso3": "CHL", "data": [169, 155, 159, 104, 157, 148, 152, 153, 108, 110, 110, 113]}],
        [{"iso3": "CHN", "data": [31975, 31427, 34332, 42480, 47120, 49329, 54556, 57380, 61063, 65320, 69791, 74113]}],
        [{"iso3": "COL", "data": [906, 918, 882, 890, 941, 945, 929, 939, 987, 1013, 1035, 1046]}],
        [{"iso3": "CZE", "data": [726, 795, 792, 827, 785, 809, 789, 862, 886, 905, 931, 1031]}],
        [{"iso3": "EGY", "data": [386, 414, 394, 391, 390, 492, 476, 926, 1206, 1392, 1615, 1865]}],
        [{"iso3": "ETH", "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}],
        [{"iso3": "FRA", "data": [5678, 5329, 4887, 4746, 4639, 4579, 4650, 4717, 4795, 4877, 4945, 4999]}],
        [{"iso3": "DEU", "data": [8977, 8732, 8401, 8726, 8555, 8400, 8459, 8380, 8381, 8506, 8605, 8691]}],
        [{"iso3": "GHA", "data": [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4]}],
        [{"iso3": "GBR", "data": [2023, 1839, 1660, 1869, 1885, 1969, 1784, 1661, 1745, 1788, 1808, 1825]}],
        [{"iso3": "HUN", "data": [1261, 1172, 1053, 1158, 1148, 1009, 1056, 1095, 1126, 1148, 1165, 1174]}],
        [{"iso3": "IND", "data": [5913, 5822, 6046, 7124, 7863, 8222, 9104, 9523, 10809, 11683, 12504, 13506]}],
        [{"iso3": "IDN", "data": [2988, 2842, 2682, 2445, 2332, 2311, 2296, 2211, 2277, 2317, 2233, 2109]}],
        [{"iso3": "IRN", "data": [2102, 2537, 3316, 4393, 4385, 4857, 5180, 5545, 5911, 6389, 6706, 7431]}],
        [{"iso3": "IRQ", "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]}],
        [{"iso3": "ISR", "data": [468, 647, 626, 548, 645, 611, 606, 622, 633, 631, 628, 639]}],
        [{"iso3": "ITA", "data": [3354, 3225, 2838, 2741, 2575, 2632, 2312, 2195, 2319, 2363, 2411, 2461]}],
        [{"iso3": "JOR", "data": [2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0]}],
        [{"iso3": "KAZ", "data": [4, 4, 6, 21, 31, 41, 22, 42, 42, 43, 681, 900]}],
        [{"iso3": "KEN", "data": [0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 4, 4]}],
        [{"iso3": "KOR", "data": [12089, 12230, 13188, 13356, 13222, 13581, 14278, 14247, 14336, 14384, 14378, 14415]}],
        [{"iso3": "KWT", "data": [701, 688, 827, 946, 919, 930, 943, 927, 958, 992, 1013, 1029]}],
        [{"iso3": "LBN", "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}],
        [{"iso3": "LBY", "data": [170, 180, 191, 190, 39, 36, 46, 65, 74, 85, 88, 92]}],
        [{"iso3": "MYS", "data": [2270, 2202, 2210, 2288, 2202, 2303, 1950, 2061, 2080, 2096, 2100, 2097]}],
        [{"iso3": "MEX", "data": [2762, 2857, 3044, 3095, 3148, 3194, 3082, 3130, 3202, 3913, 4103, 4225]}],
        [{"iso3": "MAR", "data": [42, 47, 47, 53, 53, 60, 61, 63, 100, 121, 132, 134]}],
        [{"iso3": "NGA", "data": [120, 205, 210, 255, 290, 325, 387, 414, 421, 436, 448, 462]}],
        [{"iso3": "OMN", "data": [94, 120, 248, 321, 363, 473, 420, 519, 566, 618, 745, 785]}],
        [{"iso3": "PAK", "data": [269, 301, 339, 348, 381, 404, 410, 420, 423, 438, 444, 467]}],
        [{"iso3": "PER", "data": [3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 8, 8]}],
        [{"iso3": "POL", "data": [1406, 1243, 1217, 1147, 1303, 1236, 1319, 1337, 1402, 1434, 1458, 1497]}],
        [{"iso3": "QAT", "data": [769, 823, 821, 1040, 1561, 1783, 1964, 2003, 2035, 2056, 2100, 2878]}],
        [{"iso3": "ROU", "data": [420, 436, 250, 175, 245, 162, 143, 200, 236, 247, 247, 251]}],
        [{"iso3": "RUS", "data": [2969, 2964, 3153, 3487, 389, 3848, 4474, 4901, 5438, 5711, 6250, 6648]}],
        [{"iso3": "SAU", "data": [5944, 6231, 7861, 10343, 11303, 12960, 13723, 14430, 15107, 15631, 16157, 16527]}],
        [{"iso3": "SRB", "data": [165, 158, 120, 159, 160, 65, 170, 175, 175, 178, 178, 178]}],
        [{"iso3": "ZAF", "data": [994, 1258, 1309, 1246, 1232, 1246, 1300, 1301, 1319, 1327, 1337, 1345]}],
        [{"iso3": "ESP", "data": [3448, 3219, 3061, 3282, 3326, 3263, 3160, 3232, 3188, 3209, 3240, 3279]}],
        [{"iso3": "CHE", "data": [58, 59, 61, 65, 65, 63, 65, 67, 73, 76, 76, 80]}],
        [{"iso3": "SYR", "data": [1, 1, 1, 2, 2, 2, 2, 3, 5, 5, 5, 6]}],
        [{"iso3": "TZA", "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}],
        [{"iso3": "THA", "data": [5135, 5000, 5152, 5881, 6891, 7337, 7488, 7475, 7693, 7717, 7825, 7899]}],
        [{"iso3": "TUN", "data": [0, 0, 0, 0, 2, 2, 22, 3, 4, 4, 5, 6]}],
        [{"iso3": "TUR", "data": [835, 831, 877, 938, 922, 943, 899, 1104, 1264, 1324, 1410, 1453]}],
        [{"iso3": "UKR", "data": [268, 179, 133, 150, 290, 252, 97, 117, 357, 454, 489, 501]}],
        [{"iso3": "ARE", "data": [593, 705, 704, 1012, 1707, 1787, 1833, 2624, 3740, 3999, 4160, 4231]}],
        [{"iso3": "USA", "data": [36634, 32892, 32675, 34033, 34169, 34620, 34743, 35075, 35621, 36772, 38292, 39652]}],
        [{"iso3": "UZB", "data": [111, 106, 92, 95, 95, 86, 84, 91, 93, 101, 107, 347]}],
        [{"iso3": "VNM", "data": [279, 292, 292, 381, 494, 541, 622, 628, 678, 703, 983, 1222]}],
        [{"iso3": "YEM", "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2]}]
    ];

    var selectedData = [];
    // Data runs from 2007-2018
    //var year = 2007;	// this will be changed by radio buttons
    for (var i = 0; i < allData.length; i++) {
        // {"iso-a3": "xxx", "value": nnnnn}
        selectedData.push({"iso-a3": allData[i][0].iso3, "value": allData[i][0].data[year - 2007]});
        //console.log({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-2007]});
    }
    ;
    //console.log(JSON.stringify(selectedData));
    return selectedData;
};

//    function getSeries() {
//        $.getJSON('http://cmp-16nodejs.cmp.uea.ac.uk/resources/data/OECD_GDP_head_all.json', 
//        function (data) {
//            console.log(data);
//            setObject('allData', data);
//        });
//
//    }

function drawMap(year, selectedData) {
    // Initiate the chart
    $('#container').highcharts('Map', {

        title: {
            text: 'Global Plastic Production ' + year
        },

        subtitle: {
            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world-robinson.js">World, Robinson projection, medium resolution</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            stops: [
                [0, '#33C7FF'],
                [0.5, '#88e188'], //#ffbf00'],
                [1, '#0000e5']
            ]
        },
        //adapted from https://stackoverflow.com/questions/33312551/highmaps-get-country-name-on-click-event
        plotOptions:{
        	series:{
                    point:{
                	events:{
                    	click: function(){
                        	extraGraphs(this.name);
                        }
                    }
                }
            }
        },
        tooltip: {
            //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '{point.value} Kt'
        },
        series: [{
                data: selectedData,
                mapData: Highcharts.maps['custom/world-robinson'],
                joinBy: 'iso-a3',
                name: 'Plastic Production ' + year,
                states: {
                    hover: {
                        color: 'palegreen'
                    }
                },
                dataLabels: {
                    enabled: false,
                    format: '{point.name}'
                }
            }]
    });

//Gets the selected year to show up in title of map
function showCurrentYear (year) {
    var selectedData = prepData(year);
    drawMap(year, selectedData);
}
};

function makeMenu(start, finish) {
    var startTag = '<input type="radio" name="selectyear"';
    var endTag = '</input>';
    $('#menu').empty();
    $('#menu').append('<h4>Menu</h4>');
    $('#menu').append('<br />');
    $('#menu').append('<h5>Select Year</h5>');

    for (i = start; i <= finish; i++) {
        var button = startTag + 'value="' + i + '">' + '  ' + i + endTag + '<br />';
        $('#menu').append(button);
    };
    $('#menu').append('<br />');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="displayMap()">Display');
};

//function to produce graphs with more info about each country when click on it
function extraGraphs(name) {
    var name; //name of the country - can get from chart when click
    var iso3Code = getiso3(name); 
    console.log(iso3Code);
    
    //draws consumption graph underneath map
    var dataConsumption = prepConsumption(iso3Code);
    drawConsumption(dataConsumption, name);
    
    var dataPopulation = prepPopulation(iso3Code);
    drawPopulation(dataPopulation, name);
}

//function converts country name to iso3 code to access data
function getiso3(name) {
    var iso3 = [
        {"iso3": "DZA", "country": "Algeria"},
        {"iso3": "ARG", "country": "Argentina"},
        {"iso3": "AUS", "country": "Australia"},
        {"iso3": "AUT", "country": "Austria"},
        {"iso3": "BHR", "country": "Bahrain"},
        {"iso3": "BRA", "country": "Brazil"},
        {"iso3": "BGR", "country": "Bulgaria"},
        {"iso3": "CAN", "country": "Canada"},
        {"iso3": "CHL", "country": "Chile"},
        {"iso3": "CHN", "country": "China"},
        {"iso3": "COL", "country": "Colombia"},
        {"iso3": "CZE", "country": "Czech Republic"},
        {"iso3": "EGY", "country": "Egypt"},
        {"iso3": "ETH", "country": "Ethiopia"},
        {"iso3": "FRA", "country": "France"},
        {"iso3": "DEU", "country": "Germany"},
        {"iso3": "GHA", "country": "Ghana"},
        {"iso3": "GBR", "country": "United Kingdom"},
        {"iso3": "HUN", "country": "Hungary"},
        {"iso3": "IND", "country": "India"},
        {"iso3": "IDN", "country": "Indonesia"},
        {"iso3": "IRN", "country": "Iran"},
        {"iso3": "IRQ", "country": "Iraq"},
        {"iso3": "ISR", "country": "Israel"},
        {"iso3": "ITA", "country": "Italy"},
        {"iso3": "JOR", "country": "Jordan"},
        {"iso3": "KAZ", "country": "Kazakhstan"},
        {"iso3": "KEN", "country": "Kenya"},
        {"iso3": "KOR", "country": "South Korea"},
        {"iso3": "KWT", "country": "Kuwait"},
        {"iso3": "LBN", "country": "Lebanon"},
        {"iso3": "LBY", "country": "Libya"},
        {"iso3": "MYS", "country": "Malaysia"},
        {"iso3": "MEX", "country": "Mexico"},
        {"iso3": "MAR", "country": "Morocco"},
        {"iso3": "NGA", "country": "Nigeria"},
        {"iso3": "OMN", "country": "Oman"},
        {"iso3": "PAK", "country": "Pakistan"},
        {"iso3": "PER", "country": "Peru"},
        {"iso3": "POL", "country": "Poland"},
        {"iso3": "QAT", "country": "Qatar"},
        {"iso3": "ROU", "country": "Romania"},
        {"iso3": "RUS", "country": "Russia"},
        {"iso3": "SAU", "country": "Saudi Arabia"},
        {"iso3": "SRB", "country": "Serbia"},
        {"iso3": "ZAF", "country": "South Africa"},
        {"iso3": "ESP", "country": "Spain"},
        {"iso3": "CHE", "country": "Switzerland"},
        {"iso3": "SYR", "country": "Syria"},
        {"iso3": "TZA", "country": "Tanzania"},
        {"iso3": "THA", "country": "Thailand"},
        {"iso3": "TUN", "country": "Tunisia"},
        {"iso3": "TUR", "country": "Turkey"},
        {"iso3": "UKR", "country": "Ukraine"},
        {"iso3": "ARE", "country": "United Arab Emirates"},
        {"iso3": "USA", "country": "United States of America"},
        {"iso3": "UZB", "country": "Uzbekistan"},
        {"iso3": "VNM", "country": "Vietnam"},
        {"iso3": "YEM", "country": "Yemen"}
    ];
    var name; 
    var result = iso3.filter(function(item) { //searched through the array 
        return item.country === name; //country in array is equal to name from map
    });
    var iso3Code = result[0]["iso3"]; //assigns iso3 code from array to variable iso3Code
    console.log(iso3Code);
    return iso3Code; //returns iso3 code so can access data
}

//function to prepare data for consumption - extraGraphs on each country (when clicked)
function prepConsumption(iso3Code) {
    var allData = [
        {"iso3": "DZA", "data": [338, 396, 440, 472, 525, 578, 687, 756, 811, 864, 917, 972]},
        {"iso3": "ARG", "data": [1427, 1347, 1336, 1514, 1614, 1587, 1615, 1656, 1718, 1777, 1841, 1913]},
        {"iso3": "AUS", "data": [1264, 1263, 1217, 1264, 1330, 1341, 1366, 1396, 1429, 1463, 1500, 1539]},
        {"iso3": "AUT", "data": [785, 793, 770, 804, 791, 782, 801, 816, 829, 844, 860, 875]},
        {"iso3": "BHR", "data": [30, 37, 35, 45, 50, 56, 60, 64, 66, 71, 72, 75]},
        {"iso3": "BRA", "data": [5098, 5407, 5354, 6161, 6163, 6303, 6723, 6967, 7267, 7635, 8015, 8403]},
        {"iso3": "BGR", "data": [254, 262, 233, 242, 258, 269, 273, 289, 307, 322, 341, 357]},
        {"iso3": "CAN", "data": [3229, 2889, 2745, 2847,  2835,  2843,  2883,  2922, 2960, 3004, 3052, 3107]},
        {"iso3": "CHL", "data": [623, 602, 538, 628, 657, 677, 670, 694, 723, 751, 784, 816]},
        {"iso3": "CHN", "data": [44266, 51608, 59091, 62685, 65026, 69853, 74375, 78817, 83366, 88044, 92825]},
        {"iso3": "COL", "data": [797, 798, 779, 826, 926, 970, 982, 1023, 1068, 1118, 1170, 1225]},
        {"iso3": "CZE", "data": [882, 885, 827, 908, 990, 1008, 985, 1022, 1062, 1103, 1150, 1197]},
        {"iso3": "EGY", "data": [882, 919, 976, 1095, 1101, 1175, 1178, 1240, 1320, 1410, 1509, 1618]},
        {"iso3": "ETH", "data": [44, 51, 57, 57, 61, 76, 82, 88, 95, 103, 109, 115]},
        {"iso3": "FRA", "data": [4828, 4575, 4193, 4447, 4322, 4201, 4161, 4259, 4350, 4439, 4532, 4623]},
        {"iso3": "DEU", "data": [7749, 7494, 6847, 7489, 7597, 7412, 7289, 7426, 7569, 7711, 7856, 8009]},
        {"iso3": "GHA", "data": [105, 92, 117, 127, 146, 152, 166, 169, 179, 190, 199, 210]},
        {"iso3": "GBR", "data": [3577, 3496, 3190, 3337, 3380, 3199, 3181, 3237, 3298, 3361, 3431, 3495]},
        {"iso3": "HUN", "data": [658, 616, 622, 634, 680, 651, 634, 663, 691, 722, 751, 784]},
        {"iso3": "IND", "data": [6125, 6331, 7445, 8569, 8907, 10223, 10830, 11605, 12583, 13683, 14943, 16275]},
        {"iso3": "IDN", "data": [2356, 2666, 2812, 3115, 3531, 3849, 3980, 4176, 4431, 4721, 5014, 5312]},
        {"iso3": "IRN", "data": [2223, 2455, 2688, 2886, 3098, 3320, 3433, 3613, 3850, 4081, 4330, 4580]},
        {"iso3": "IRQ", "data": [13, 15, 15, 22, 28, 40, 43, 45, 59, 74, 90, 104]},
        {"iso3": "ISR", "data": [879, 874, 816, 890, 885, 898, 911, 939, 970, 1004, 1036, 1071]},
        {"iso3": "ITA", "data": [6808, 6246, 5781, 5920, 5724, 5580, 5334, 5404, 5487, 5579, 5677, 5764]},
        {"iso3": "JOR", "data": [135, 141, 127, 167, 178, 198, 228, 236, 251, 267, 280, 292]},
        {"iso3": "KAZ", "data": [132, 133, 151, 185, 231, 254, 272, 298, 328, 353, 382, 411]},
        {"iso3": "KEN", "data": [165, 175, 191, 217, 233, 255, 280,299, 317, 336, 355, 376]},
        {"iso3": "KOR", "data": [5544, 5447, 5460, 5890, 6022, 6070, 6360, 6481, 6625, 6769, 6912, 7036]},
        {"iso3": "KWT", "data": [168, 165, 158, 155, 163, 174, 181, 190, 201, 211, 213, 237]},
        {"iso3": "LBN", "data": [101, 109, 120, 127, 130, 145, 164, 170, 175, 182, 187, 192]},
        {"iso3": "LBY", "data": [111, 131, 134, 137, 39, 82, 100, 104, 118, 134, 150, 166]},
        {"iso3": "MYS", "data": [1877, 1865, 1853, 1980, 2042, 2049, 2151, 2234, 2328, 2427, 2527, 2630]},
        {"iso3": "MEX", "data": [4489, 4615, 4486, 4644, 4712, 4958, 5079, 5264, 5461, 5675, 5884, 6083]},
        {"iso3": "MAR", "data": [410, 427, 468, 461, 490, 517, 536, 563, 598, 632, 666, 699]},
        {"iso3": "NGA", "data": [578, 613, 669, 708, 767, 812, 917, 973, 1032, 1098, 1162, 1228]},
        {"iso3": "OMN", "data": [92, 103, 112, 126, 136, 150, 162, 176, 188, 200, 211, 223]},
        {"iso3": "PAK", "data": [746, 726, 738, 819, 885, 925, 980, 1036, 1102, 1169, 1243, 1322]},
        {"iso3": "PER", "data": [474, 508, 527, 618, 650, 711, 729, 761, 799, 838, 880, 923]},
        {"iso3": "POL", "data": [2348, 2278, 2153, 2270, 2472, 2477, 2448, 2541, 2646, 2763, 2885, 3014]},
        {"iso3": "QAT", "data": [39, 43, 45, 54, 63, 69, 74, 83, 90, 98, 107, 116]},
        {"iso3": "ROU", "data": [498, 492, 503, 526, 547, 562, 568, 590, 618, 649, 679, 714]},
        {"iso3": "RUS", "data": [4092, 4207, 3637, 4576, 5225, 5405, 5650, 5908, 6225, 6578, 6949, 7356]},
        {"iso3": "SAU", "data": [1844, 1921, 2140, 2290, 2472, 2565, 2660, 2783, 2915, 3053, 3189, 3327]},
        {"iso3": "SRB", "data": [261, 259, 247, 263, 267, 273, 277, 287, 300, 314, 327, 338]},
        {"iso3": "ZAF", "data": [1241, 1291, 1249, 1350, 1334, 1380, 1360, 1398, 1452, 1512, 1582, 1652]},
        {"iso3": "ESP", "data": [3854, 3503, 3185, 3098, 2963, 2854, 2866, 2900, 2967, 3040, 3107, 3168]},
        {"iso3": "CHE", "data": [607, 589, 555, 582, 581, 557, 555, 566, 579, 591, 606, 616]},
        {"iso3": "SYR", "data": [420, 464, 532, 512, 279, 131, 34, 36, 68, 106, 140, 171]},
        {"iso3": "TZA", "data": [93, 100, 120, 146, 143, 170, 174, 183, 195, 208, 222, 239]},
        {"iso3": "THA", "data": [3120, 3068, 3054, 3556, 3612, 3913, 3982, 4117, 4289, 4483, 4683, 4903]},
        {"iso3": "TUN", "data": [204, 214, 221, 233, 246, 263, 283, 296, 314, 330, 349, 367]},
        {"iso3": "TUR", "data": [3977, 3949, 4062, 4696, 5064, 5414, 5683, 5998, 6312, 6641, 6965, 7279]},
        {"iso3": "UKR", "data": [890, 850, 737, 846, 859, 886, 863, 725, 787, 874, 941, 1004]},
        {"iso3": "ARE", "data": [338, 421, 382, 371, 397, 415, 435, 453, 472, 494, 515, 535]},
        {"iso3": "USA", "data": [32029, 28266, 26043, 27063, 27732, 28115, 28729, 29206, 29727, 30270, 30834, 31418]},
        {"iso3": "UZB", "data": [109, 133, 138, 159, 174, 192, 204, 221, 235, 251, 267, 284]},
        {"iso3": "VNM", "data": [1503, 1519, 1805, 1983, 2185, 2335, 2512, 2683, 2876, 3106, 3332, 3569]},
        {"iso3": "YEM", "data": [70, 74, 83, 83, 71, 85, 94, 104, 114, 122, 133, 142]}
    ];
    
    //Finds the index of array for country clicked on
    var found = allData.filter(function(item) {
        return item.iso3 === iso3Code;
    });
    var dataConsumption = [];
    var dataConsumption = found[0]["data"];
    
//    for (var i = 0; i < allData.length; i++) {
//        dataConsumption.push({"iso-a3": allData[i][0].iso3, "value": allData[i][0].data});
//    }
//    var index = allData.findIndex(function(item){
//        return item.iso3 === iso3Code; //iso3 code is equal to country
//    });

//    if (index > 0) //checks if there is data
//    {


      //Adds data to arrays for each series
 //     dataConsumption = found[0]["consumption"];
      //dataConsumption.push(consumption);
    //}
//    else
//    {
//      //Adds an empty array
//      dataConsumption = [0,0,0,0,0,0,0,0,0,0,0,0];
      console.log(dataConsumption);
//    }
      return dataConsumption;
  }

//Creates consumption graph
function drawConsumption (dataConsumption, country) {
//    var country;
//    var dataConsumption;
    
    // Create the chart
    $('#graph').highcharts('Chart', {
    title: {
        text: 'Plastic Consumption in ' + country + ' (2007-2018)'
    },
    yAxis: {
        title: {
            text: 'Count in Kilotonnes'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2007,
            dataLabels: {
                    enabled: false,
                    format: '{point.y:.1f}Kilotonnes'
                }
        }
    },

    series: [{
                name: "Consumption",
                //colorByPoint: true,
                data: dataConsumption,
                //type: 'spline',
                //yAxis: 0,
                marker: {
                    enabled: false
                }
                
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
}

function prepPopulation(iso3Code) {
    var allData = [
        {"iso3": "DZA", "data": [33858, 34591, 35268, 35978, 36717, 37495, 37900, 38700, 39474, 40224, 40908, 41562]},
        {"iso3": "ARG", "data": [38788, 39226, 39669, 40117, 40570, 41028, 41492, 41961, 42434, 42914, 43398, 43889]},
        {"iso3": "AUS", "data": [21016, 21476, 21866, 22172, 22520, 22920, 23207, 23485, 23767, 24052, 24353, 24658]},
        {"iso3": "AUT", "data": [8301, 8337, 8363, 8388, 8421, 8466, 8484, 8520, 8556, 8594, 8628, 8662]},
        {"iso3": "BHR", "data": [0764, 0779, 1039, 1107, 1129, 1151, 1174, 1198, 1222, 1246, 1271, 1296]},
        {"iso3": "BRA", "data": [187642, 189613, 191481, 193253, 194947, 196526, 198292, 200004, 201663, 203272, 204830, 206335]},
        {"iso3": "BGR", "data": [7640, 7607, 7564, 7505, 7327, 7282, 7238, 7202, 7166, 7130, 7095, 7059]},
        {"iso3": "CAN", "data": [32848, 33199, 33581, 33959, 34303, 34702, 35105, 35494, 35855, 36210, 36554, 36901]},
        {"iso3": "CHL", "data": [16598, 16763, 16929, 17094, 17248, 17403, 17557, 17711, 17865, 18002, 18139, 18276]},
        {"iso3": "CHN", "data": [1321290, 1328020, 1334500, 1340910, 1347350, 1354040, 1360763, 1367520, 1374310, 1381134, 1387992, 1394883]},
        {"iso3": "COL", "data": [43926, 44450, 44978, 45512, 46052, 46598, 47151, 47711, 48277, 48850, 49429, 50016]},
        {"iso3": "CZE", "data": [10254, 10343, 10426, 10462, 10487, 10505, 10516, 10535, 10551, 10565, 10578, 10587]},
        {"iso3": "EGY", "data": [73600, 75200, 76900, 78700, 80400, 82500, 84150, 85833, 87550, 89301, 91087, 92908]},
        {"iso3": "ETH", "data": [77718, 79446, 81188, 82950, 84734, 86768, 88850, 90982, 92984, 95030, 97120, 99063]},
        {"iso3": "FRA", "data": [61795, 62135, 62466, 62765, 63070, 63379, 63660, 63951, 64244, 64538, 64833, 65130]},
        {"iso3": "DEU", "data": [82218, 82002, 81802, 81752, 80328, 80524, 80800, 80925, 81016, 81025, 81004, 80983]},
        {"iso3": "GHA", "data": [21970, 22532, 23108, 23699, 24304, 24926, 25563, 26216, 26886, 27573, 28278, 29001]},
        {"iso3": "GBR", "data": [60986, 61398, 61792, 62262, 63285, 63705, 64087, 64511, 64938, 65386, 65825, 66266]},
        {"iso3": "HUN", "data": [10066, 10045, 10031, 10014, 9986, 9932, 9879, 9859, 9840, 9820, 9800, 9781]},
        {"iso3": "IND", "data": [1146000, 1162000, 1178131, 1194623, 1210980, 1227193, 1243337, 1259695, 1276267, 1293057, 1310069, 1327304]},
        {"iso3": "IDN", "data": [227758, 231006, 234300, 237641, 241030, 244468, 247954, 251490, 255077, 258714, 262404, 266146]},
        {"iso3": "IRN", "data": [71278, 72180, 73201, 74339, 75150, 76117, 77097, 78089, 79093, 80111, 81142, 82186]},
        {"iso3": "IRQ", "data": [29584, 30413, 31234, 31672, 32665, 33703, 34776, 35871, 36977, 38090, 39212, 40348]},
        {"iso3": "ISR", "data": [6907, 7059, 7215, 7373, 7536, 7701, 7871, 8044, 8221, 8402, 8587, 8776]},
        {"iso3": "ITA", "data": [58224, 58653, 59001, 59190, 59365, 59394, 59685, 59960, 60236, 60495, 60737, 60961]},
        {"iso3": "JOR", "data": [5723, 5850, 5980, 6113, 6253, 6397, 6544, 6694, 6848, 7005, 7166, 7331]},
        {"iso3": "KAZ", "data": [15566, 15778, 16198, 16434, 16674, 16912, 17157, 17405, 17657, 17913, 18172, 18435]},
        {"iso3": "KEN", "data": [37752, 38773, 39825, 40909, 42028, 43178, 44351, 45547, 46767, 48009, 49275, 50565]},
        {"iso3": "KOR", "data": [48598, 48949, 49182, 49410, 49779, 50004, 50220, 50437, 50655, 50874, 51093, 51314]},
        {"iso3": "KWT", "data": [3400, 3442, 3485, 3582, 3682, 3785, 3890, 3999, 4110, 4225, 4342, 4463]},
        {"iso3": "LBN", "data": [4140, 4186, 4247, 4341, 4383, 4425, 4467, 4510, 4554, 4597, 4642, 4686]},
        {"iso3": "LBY", "data": [5782, 5877, 5964, 6053, 5943, 6032, 6122, 6213, 6305, 6399, 6495, 6591]},
        {"iso3": "MYS", "data": [27100, 27600, 28082, 28589, 28964, 29337, 29620, 30124, 30636, 31157, 31686, 32225]},
        {"iso3": "MEX", "data": [109002, 110793, 112613, 114292, 115685, 117055, 118397, 119581, 120777, 121984, 123204, 124436]},
        {"iso3": "MAR", "data": [30841, 31177, 31514, 32187, 32522, 32853, 33179, 33503, 33827, 34150, 34473]},
        {"iso3": "NGA", "data": [143854, 147810, 151874, 156051, 160342, 164752, 169282, 173938, 178721, 183636, 188686, 193875]},
        {"iso3": "OMN", "data": [2726, 2785, 2883, 2938, 2993, 3088, 3186, 3288, 3394, 3495, 3599, 3708]},
        {"iso3": "PAK", "data": [158170, 164660, 168180, 171730, 175305, 178910, 182589, 186289, 190008, 193745, 197496, 201261]},
        {"iso3": "PER", "data": [28221, 28657, 29101, 29552, 30009, 30474, 30946, 31424, 31911, 32405, 32907, 33416]},
        {"iso3": "POL", "data": [38125, 38116, 38136, 38167, 38530, 38538, 38533, 38537, 38538, 38536, 38528, 38516]},
        {"iso3": "QAT", "data": [1152, 1554, 1632, 1637, 1708, 1837, 2020, 2212, 2389, 2557, 2672, 2725]},
        {"iso3": "ROU", "data": [21551, 21517, 21484, 21447, 21384, 21336, 21285, 21244, 21204, 21164, 21124, 21083]},
        {"iso3": "RUS", "data": [142800, 142800, 142700, 142900, 142900, 143000, 142929, 142857, 142786, 142714, 142643, 142572]},
        {"iso3": "SAU", "data": [24941, 25787, 26661, 27563, 28376, 29196, 29994, 30624, 31237, 31861, 32499, 33149]},
        {"iso3": "SRB", "data": [7382, 7350, 7321, 7291, 7234, 7199, 7199, 7199, 7199, 7199, 7199, 7199]},
        {"iso3": "ZAF", "data": [48910, 49561, 50223, 50896, 51580, 52275, 52982, 53699, 54425, 55161, 55907, 56663]},
        {"iso3": "ESP", "data": [45236, 45983, 46368, 46562, 46736, 46766, 46610, 46507, 46402, 46292, 46179, 46062]},
        {"iso3": "CHE", "data": [7509, 7593, 7701, 7786, 7870, 7955, 8003, 8051, 8099, 8148, 8197, 8246]},
        {"iso3": "SYR", "data": [20083, 20581, 21092, 21393, , , , , , , , ]},
        {"iso3": "TZA", "data": [39686, 40735, 41783, 42832, 43880, 44929, 46277, 47665, 49095, 50568, 52085, 53647]},
        {"iso3": "THA", "data": [65740, 66321, 66880, 67275, 67584, 67892, 68229, 68554, 68866, 69166, 69454, 69729]},
        {"iso3": "TUN", "data": [10225, 10329, 10440, 10547, 10674, 10778, 10918, 11060, 11203, 11349, 11496, 11646]},
        {"iso3": "TUR", "data": [70215, 71095, 72050, 73003, 73950, 74885, 76484, 77324, 78152, 78967, 79766, 80550]},
        {"iso3": "UKR", "data": [46466, 46192, 45963, 45783, 45598, 45453, 45373, , , , ,  ]},
        //United Arab Emirates data from https://data.worldbank.org/indicator/SP.POP.TOTL
        {"iso3": "ARE", "data": [6044, 6894, 7666, 8271, 8672, 8900, 9006, 9071, 9154, 9270, , ]},
        {"iso3": "USA", "data": [301903, 304718, 307374, 309733, 311941, 314154, 316373, 318814, 321315, 323836, 326377, 328938]},
        {"iso3": "UZB", "data": [27167, 27553, 28000, 28500, 29100, 29746, 30241, 30604, 30971, 31343, 31719, 32100]},
        {"iso3": "VNM", "data": [84219, 85119, 86025, 86933, 87840, 88762, 89691, 90630, 91578, 92537, 93505, 94484]},
        {"iso3": "YEM", "data": [22290, 22978, 23687, 24398, 25130, 25884, 26660, 27460, 28284, 29132, 29977, 30,816]}
    ];
    
    var found = allData.filter(function(item) {
        return item.iso3 === iso3Code;
    });
    var dataPopulation = [];
    var dataPopulation = found[0]["data"];
    
    console.log(dataPopulation);
    return dataPopulation;
}

function drawPopulation(dataPopulation, country) {
    // Create the chart
    $('#graph2').highcharts('Chart', {
    title: {
        text: 'The Population of ' + country + ' (2007-2018)'
    },
    yAxis: {
        title: {
            text: 'Millions'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2007,
            dataLabels: {
                    enabled: false,
                    format: '{point.y:.1f}Million'
                }
        }
    },

    series: [{
                name: "Population",
                //colorByPoint: true,
                data: dataPopulation,
                //type: 'spline',
                //yAxis: 0,
                marker: {
                    enabled: false
                }
                
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
}