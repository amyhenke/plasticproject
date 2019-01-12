$(function () {
    //Makes menu show up - dates get radio buttons
    makeMenu();
    //Tells it what data is 2007, then sets default map to 2007 data
    var recycleData = prepData(2013);
    drawMap(2013, recycleData);
    //displayMap();
    var europeData = prepEurope(2015);
//    drawEurope(2015, europeData);
});

function displayMap() {
    //Checks which year has been selected in radio buttons/menu
    //var year = $('input[name=selectyear]:checked').val();
    var year = 2013;
    //alert(year);

    //Tells it which data matches the year selected, then displays map
    var recycleData = prepData(year);
    drawMap(year, recycleData);
};

function drawMap(year, recycleData) {
    
    //Data from https://www.statista.com/chart/4470/the-countries-winning-the-recycling-race/
    $('#container').highcharts('Map', {
        chart: {
            map: 'custom/world',
            borderWidth: 0
        },

        colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
            'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'],

        title: {
            text: 'The Share of Recycled Waste of Total Municipal Waste in OECD Countries (' + year + ')'
        },

        mapNavigation: {
            enabled: true
        },

        legend: {
            title: {
                text: 'Percentage',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black',
                    fontSize: '120%'
                }
            },
            align: 'left',
            verticalAlign: 'bottom',
            floating: true,
            layout: 'vertical',
            valueDecimals: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
            symbolRadius: 8,
            symbolHeight: 17,
            itemStyle: {
                font: '12pt Lucida Grande'
            }
        },

        colorAxis: {
            style: {
                fontSize: '20px'
            },
            dataClasses: [{
                    to: 5,
                    color: '#B2DFEE' //#87CEFA' //#e2360b'
                }, {
                    from: 5.1,
                    to: 20,
                    color: '#63D1F4' //#0EBFE9' //#00BFFF' //#e28409'
                }, {
                    from: 20.1,
                    to: 30,
                    color: '#62B1F6' //#fcb72d'
                }, {
                    from: 30.1,
                    to: 40,
                    color: '#38B0DE' //#1E90FF' //#4682B4' //#f2e30e'
                }, {
                    from: 40.1,
                    to: 50,
                    color: '#4E78A0' //#0198E1' //#4169E1' //#f5f900'
                }, {
                    from: 50.1,
                    to: 60,
                    color: '#003F87' //#0000CD' //#45c600'
                }, {
                    from: 60.1,
                    color: '#120A8F' //#000080' //#03ed00'
                }]
        },

        series: [{
                data: recycleData,
                mapData: Highcharts.maps['custom/world-robinson'],
                joinBy: ['iso-a3'],
                animation: true,
                name: 'Recycled Waste',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                tooltip: {
                    valueSuffix: '%'
                },
                shadow: false
            }]
    });
}

function prepData(year) {
    // Prepare data for map

    var allData = [
        [{"iso3": "DEU", "data": [65]}],
        [{"iso3": "KOR", "data": [59]}],
        [{"iso3": "SVN", "data": [58]}],
        [{"iso3": "AUT", "data": [58]}],
        [{"iso3": "BEL", "data": [55]}],
        [{"iso3": "CHE", "data": [51]}],
        [{"iso3": "SWE", "data": [50]}],
        [{"iso3": "NLD", "data": [50]}],
        [{"iso3": "LUX", "data": [48]}],
        [{"iso3": "ISL", "data": [45]}],
        [{"iso3": "DNK", "data": [44]}],
        [{"iso3": "GBR", "data": [43]}],
        [{"iso3": "AUS", "data": [41]}],
        [{"iso3": "ITA", "data": [41]}],
        [{"iso3": "IRL", "data": [40]}],
        [{"iso3": "NOR", "data": [39]}],
        [{"iso3": "FRA", "data": [38]}],
        [{"iso3": "USA", "data": [35]}],
        [{"iso3": "FIN", "data": [33]}],
        [{"iso3": "EST", "data": [30]}],
        [{"iso3": "ESP", "data": [30]}],
        [{"iso3": "POL", "data": [29]}],
        [{"iso3": "HUN", "data": [26]}],
        [{"iso3": "PRT", "data": [26]}],
        [{"iso3": "CAN", "data": [24]}],
        [{"iso3": "CZE", "data": [24]}],
        [{"iso3": "ISR", "data": [19]}],
        [{"iso3": "GRC", "data": [19]}],
        [{"iso3": "JPN", "data": [19]}],
        [{"iso3": "SVK", "data": [11]}],
        [{"iso3": "MEX", "data": [5]}],
        [{"iso3": "CHL", "data": [1]}],
        [{"iso3": "TUR", "data": [1]}],
        [{"iso3": "NZL", "data": [0]}]
    ];

    var recycleData = [];
//    // Data is 2013
    for (var i = 0; i < allData.length; i++) {
//        // {"iso-a3": "xxx", "value": nnnnn}
        recycleData.push({"iso-a3": allData[i][0].iso3, "value": allData[i][0].data[year - 2013]});
//        //console.log({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-2007]});
    };
//    //console.log(JSON.stringify(selectedData));
    return recycleData;
};

function makeMenu() {
    $('#menu').empty;
    $('#menu').append('<h4>Menu</h4>');
    $('#menu').append('<h6>Waste Management</h6>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="displayMap();">Recycled Waste</input>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="displayEurope()">Packaging</input>');
    $('#menu').append('<p>&nbsp;</p>');
    $('#menu').append('<h6>Origins</h6>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="showPie()">Origins of Litter</input>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="showBar()">Top 10</input>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="biodegrade()">Biodegrade</input>');
}

function drawEurope (year, europeData) {
// Instantiate the map
$('#container').highcharts('Map', {
    chart: {
        map: 'custom/europe',
        borderWidth: 0
    },

    title: {
        text: 'Percentage of Recycled Plastic Packaging Waste in European Countries (' + year + ')'
    },

//    subtitle: {
//        text: 'Demo of drawing all areas in the map, only highlighting partial data'
//    },

        mapNavigation: {
            enabled: true
        },

    legend: {
//        enabled: false
//    },
            title: {
                text: 'Percentage',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black',
                    fontSize: '120%'
                }
            },
            align: 'left',
            verticalAlign: 'bottom',
            floating: true,
            layout: 'vertical',
            valueDecimals: 0,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
            symbolRadius: 8,
            symbolHeight: 17,
            itemStyle: {
                font: '12pt Lucida Grande'
            }
        },

        colorAxis: {
            itemStyle: {
                fontSize: '100%'
            },
            dataClasses: [{
//                    to: 10,
//                    color: '#D8BFD8' //#e2360b'
//                }, {
//                    from: 10.1,
                    to: 20,
                    color: '#D8BFD8' //#e28409'
                }, {
                    from: 20.1,
                    to: 30,
                    color: '#DDA0DD' //#fcb72d'
                }, {
                    from: 30.1,
                    to: 40,
                    color: '#DA70D6' //#f2e30e'
                }, {
                    from: 40.1,
                    to: 50,
                    color: '#9370DB' //#f5f900'
                }, {
                    from: 50.1,
                    to: 60,
                    color: '#8B008B' //#800080' //#45c600'
                }, {
                    from: 60.1,
                    color: '#4B0082' //#03ed00'
                }]
        },

    series: [{
        data: europeData,
        mapData: Highcharts.maps['custom/europe'],
        joinBy: ['iso-a3'],
        dataLabels: {
            enabled: true,
            color: '#FFFFFF',
            formatter: function () {
                if (this.point.value) {
                    return this.point.name;
                }
            }
        },
        animation: true,
        name: 'Recycled Waste',
        states: {
            hover: {
                color: '#a4edba'
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            shadow: false
    }]
});

}

function prepEurope (year) {
    
    //Data from http://ec.europa.eu/eurostat/tgm/table.do?tab=table&plugin=1&language=en&pcode=cei_wm020
    var allData = [
        [{"iso3": "BEL", "data": [42.6]}],
        [{"iso3": "BGR", "data": [60.8]}],
        [{"iso3": "CZE", "data": [61.7]}],
        [{"iso3": "DNK", "data": [30.5]}],
        [{"iso3": "DEU", "data": [48.8]}],
        [{"iso3": "EST", "data": [27.8]}],
        [{"iso3": "IRL", "data": [34]}],
        [{"iso3": "GRC", "data": [36.8]}],
        [{"iso3": "ESP", "data": [44]}],
        [{"iso3": "FRA", "data": [25.5]}],
        [{"iso3": "HRV", "data": [46.3]}],
        [{"iso3": "ITA", "data": [41.1]}],
        [{"iso3": "LVA", "data": [35.3]}],
        [{"iso3": "LTU", "data": [54.8]}],
        [{"iso3": "LUX", "data": [32.5]}],
        [{"iso3": "HUN", "data": [27.4]}],
        [{"iso3": "NLD", "data": [50.7]}],
        [{"iso3": "AUT", "data": [33.6]}],
        [{"iso3": "POL", "data": [31.6]}],
        [{"iso3": "PRT", "data": [43]}],
        [{"iso3": "SVN", "data": [63.4]}],
        [{"iso3": "SVK", "data": [54.4]}],
        [{"iso3": "FIN", "data": [23.7]}],
        [{"iso3": "SWE", "data": [49]}],
        [{"iso3": "GBR", "data": [39.4]}],
        [{"iso3": "ISL", "data": [37.2]}],
        [{"iso3": "LIE", "data": [16.9]}],
        [{"iso3": "NOR", "data": [37.1]}]
    ];

    var europeData = [];
//    // Data is 2013
    for (var i = 0; i < allData.length; i++) {
//        // {"iso-a3": "xxx", "value": nnnnn}
        europeData.push({"iso-a3": allData[i][0].iso3, "value": allData[i][0].data[year - 2015]});
//        //console.log({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-2007]});
    };
//    //console.log(JSON.stringify(selectedData));
    return europeData;
};

function displayEurope() {
    //Checks which year has been selected in radio buttons/menu
    //var year = $('input[name=selectyear]:checked').val();
    var year = 2015;
    //alert(year);
    
    //Tells it which data matches the year selected, then displays map
    var europeData = prepEurope(year);
    drawEurope(year, europeData);
};

function showPie () {
    
    //Data from http://www.thames21.org.uk/thames-river-watch-litter/
    $('#container').highcharts('Map', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Main Origins of Plastic Litter in the River Thames (2017)',
        align: 'center',
        verticalAlign: 'middle',
        y: -150
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Main Origins of Plastic Litter in the River Thames',
        innerSize: '50%',
        data: [
            ['Food Related', 65],
            ['Toiletries/Medical', 18],
            ['Non Food Packaging', 6],
            ['Domestic Products', 4],
            ['Smoking Related', 4],
            ['Construction', 2],
            {
                name: 'Other',
//                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

}

function showBar() {
    
    //Data from http://www.thames21.org.uk/thames-river-watch-litter/
    $('#container').highcharts('Chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 10 Items of Litter Found in the River Thames (2017)'
        },
//        subtitle: {
//            text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
//        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Percentage of Total Items Found'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: "Items",
                colorByPoint: true,
                data: [
                    {
                        name: "Food Wrapper",
                        y: 20,
                        drilldown: "Food Wrapper"
                    },
                    {
                        name: "Cotton Bud Stick",
                        y: 10,
                        drilldown: "Cotton Bud Stick"
                    },
                    {
                        name: "Drink Bottle and Lid",
                        y: 10,
                        drilldown: "Drink Bottle and Lid"
                    },
                    {
                        name: "Takeaway Container",
                        y: 8,
                        drilldown: "Takeaway Container"
                    },
                    {
                        name: "Unidentified Plastic",
                        y: 6,
                        drilldown: "Unidentified Plastic"
                    },
                    {
                        name: "Polystyrene Cup",
                        y: 4,
                        drilldown: "Polystyrene Cup"
                    },
                    {
                        name: "Plastic Cup",
                        y: 4,
                        drilldown: "Plastic Cup"
                    },
                    {
                        name: "Unidentified Synthetic Foam",
                        y: 4,
                        drilldown: "Unidentified Synthetic Foam"
                    },
                    {
                        name: "Cutlery/Straw/Lollipop Stick/Stirrer",
                        y: 3,
                        drilldown: "Cutlery/Straw/Lollipop Stick/Stirrer"
                    },
                    {
                        name: "Wet Wipes",
                        y: 3,
                        drilldown: "Wet Wipes"
                    }
                ]
            }
        ]
    });
    }
    
    function biodegrade() {
        
        //Data from http://www.bbc.co.uk/news/science-environment-42264788
        $('#container').highcharts('Chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Estimated Time Taken To Biodegrade'
        },
//        subtitle: {
//            text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
//        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Years'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.f} years'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: "Items",
                colorByPoint: true,
                data: [
                    {
                        name: "Stryrofoam Cup",
                        y: 50,
                        drilldown: "Stryrofoam Cup"
                    },
                    {
                        name: "Aluminium Can",
                        y: 200,
                        drilldown: "Aluminium Can"
                    },
                    {
                        name: "Nappy",
                        y: 450,
                        drilldown: "Nappy"
                    },
                    {
                        name: "Plastic Bottle",
                        y: 450,
                        drilldown: "Plastic Bottle"
                    },
                    {
                        name: "Fishing Line",
                        y: 600,
                        drilldown: "Fishing Line"
                    }
                ]
            }
        ]
    });
    }