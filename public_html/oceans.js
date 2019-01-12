$(function () {
    //Makes menu show up - dates get radio buttons
    makeMenu();
    //Tells it what data is 2007, then sets default map to 2007 data
//    var selectedData = prepData(2010);
//    drawMap(2010, selectedData);
//    var exportData = prepExport();
//    //exports(exportData);
//    info();
    //litterCategories();
    garbagePatches();
});

function makeMenu() {
    $('#menu').empty;
    $('#menu').append('<h4>Menu</h4>');
    $('#menu').append('<h6>Ocean Garbage Patches</h6>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="()">Ocean Currents');
    $('#menu').append('<p>&nbsp;</p>');
    $('#menu').append('<h6>Marine Debris</h6>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="litterCategories()">Marine Litter');
    $('#menu').append('<p>&nbsp;</p>');
    $('#menu').append('<h6>Entanglement and Ingestion</h6>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="entanglement()">Incidences');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="consequences()">Consequences');
}

//function info() {
//    $('#exportsInfo').empty();
//    $('#exportsInfo').append('<h3>Marine Debris is having detrimental effects on our environment</h3>');
//    $('#exportsInfo').append('<h5>The presence of plastic debris in the oceans is unpleasant, dangerious to sea life and hazardous to human health. Sea creatures are regularly entangled by this plastic and often incorrectly identify it as food. This mistake often proves fatal to these animals and allows plastic to enter our food chain.</h5>');
//    $('#exportsInfo').append('<h5>It is estimated that the environmental damage of plastic debris is equivalent to $13 billion per annum.</h5>');
//}

function litterCategories() {
        // Radialize the colors
    //Data from https://www.cbd.int/doc/publications/cbd-ts-67-en.pdf
    Highcharts.setOptions({
        colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        })
    });

    // Build the chart
    $('#container').highcharts('Chart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Proportion of Marine Litter Categories on Reference Beaches (2001-2006)'
//                                Proportion of different categories of marine debris
//                                found on reference beaches between 2001 and 2006. Note the
//                                prevalence of plastic items as the major components of the
//                                debris recorded. These trends are broadly consistent across
//                                regions and at a global scale. The analysis was based on data
//                                from 609 surveys made in eight countries—Belgium, Denmark,
//                                Germany, The Netherlands, Portugal, Spain, Sweden and the
//                                United Kingdom (51 regular reference beaches altogether)
//                                (OSPAR 2007)'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            name: 'Marine Debris',
            data: [
                { name: 'Plastic', y: 75.01 },
                { name: 'Sanitary', y: 7.38 },
                { name: 'Paper and Cardboard', y: 4.37 },
                { name: 'Wood', y: 2.87 },
                { name: 'Cloth', y: 2.96 },
                { name: 'Metal', y: 2.89 },
                { name: 'Glass', y: 2.07 },
                { name: 'Rubber', y: 1.56 },
                { name: 'Pottery and Ceramics', y: 0.40 },
                { name: 'Faeces', y: 0.33 },
                { name: 'Medical', y: 0.16 }
            ]
        }]
    });
    $('#data').empty();
    $('#exportsInfo').empty();
    $('#exportsInfo').append('<h3>Marine Debris is having detrimental effects on our environment</h3>');
    $('#exportsInfo').append('<h5>The presence of plastic debris in the oceans is unpleasant, dangerious to sea life and hazardous to human health. Sea creatures are regularly entangled by this plastic and often incorrectly identify it as food. This mistake often proves fatal to these animals and allows plastic to enter our food chain.</h5>');
    $('#exportsInfo').append('<h5>It is estimated that the environmental damage of plastic debris is equivalent to $13 billion per annum.</h5>');
}

function entanglement() {
    
    //Data from https://www.cbd.int/doc/publications/cbd-ts-67-en.pdf
    $('#container').highcharts('Chart', {
    chart: {
        type: 'column',
//        width: 1200,
//        height: 700,
//        padding: 600
    },
    title: {
        text: 'The Number of Species Affected by Entanglement and Ingestion of Plastic'
    },
//    subtitle: {
//        text: 'Source: WorldClimate.com'
//    },
    xAxis: {
        categories: [
            'Entanglement<br>1997 (Laist)',
            'Entanglement<br>2012 (CBD)',
            'Ingestion<br>1997 (Laist)',
            'Ingestion<br>2012 (CBD)'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of species with entanglement and ingestion records'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Marine Mammals',
        data: [32, 52, 26, 30]

    }, {
        name: 'Fish',
        data: [34, 66, 33, 41]

    }, {
        name: 'Seabirds',
        data: [51, 67, 111, 119]

    }, {
        name: 'Sea Turtles',
        data: [6, 7, 6, 6]

    }]
});
    $('#data').empty();
    $('#exportsInfo').empty();
    $('#exportsInfo').append('<h3>Plastic Debris is destroying the home of marine life</h3>');
    $('#exportsInfo').append('<h5>Between the two inspections made, in the report by Laist (1997) and the report by the Convention on Biological Diversity (2012), it is clear that the number of species affected by entanglement and ingestion of plastic has increased.</h5>');
    $('#exportsInfo').append('<h5>Every known species of sea turtles, 45% of species of marine mammals and 21% of species of sea birds have been affected. In addition, the amount of fish species distressed by this have roughly doubled since 1997.</h5>');
}

function consequences() {

//    $('#container').highcharts('Chart', {
//        chart: {
//            type: 'column'
//        },
//        title: {
//            text: 'Incidence of Ingestion or Entanglement in Marine Debris and the Consequence of the Encounter'
//        },
////        subtitle: {
////            text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
////        },
//        xAxis: {
////            name: 'Effect',
////            type: 'category',
//            categories: [
//                'Direct Harm/Death', 
//                'Indirect Harm/Death', 
//                'Survived', 
//                'Unknown/Unreported'
//            ]
////            crosshair: true
//        },
//        yAxis: {
//            title: {
//                text: 'Number of sea creatures'
//            }
//
//        },
//        legend: {
//            enabled: false
//        },
//        plotOptions: {
//            series: {
//                borderWidth: 0,
//                dataLabels: {
//                    enabled: true,
//                    format: '{point.y:.1f}'
//                }
//            }
//        },
//
//        tooltip: {
//            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
//        },
//
//        series: [
//            {
//                name: "",
//                colorByPoint: true,
//                data: [
//                    {
//                        name: "Entanglement",
//                        data: [21500, 1000, 6500, 5000]
//                    },
////                    {
////                        name: "Ingestion",
////                        data: [500, 4500, 30, 7500]
////                    }
////                    , 1000, 6500, 5000 -- 4500, 30, 7500
////                    {
////                        name: "",
////                        data: []
////                    },
////                    {
////                        name: "",
////                        data: []
////                    }
//                ]
//            }
//        ]
//    });
    
    $('#container').highcharts('Chart', {
    chart: {
        type: 'column'
        //width: 800
    },
    title: {
        text: 'The Consequence of Ingestion or Entanglement in Marine Debris'
    },
//    subtitle: {
//        text: 'Source: WorldClimate.com'
//    },
    xAxis: {
        categories: [
            'Direct Harm/Death',
            'Indirect Harm/Death',
            'Survived',
            'Unknown/Unreported'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of sea creatures'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Entanglement',
        data: [21500, 1000, 6500, 5000]

    }, {
        name: 'Ingestion',
        data: [500, 4500, 200, 7500]

    }]
});
    $('#data').empty();
    $('#exportsInfo').empty();
    $('#exportsInfo').append('<h5>Data gathered in the Netherlands found that around 95% of Northern Fulmars (a breed of sea bird) that were washed ashore dead in the North Sea contain plastic debris, and many contain substantial quantities of debris</h5>');
    $('#exportsInfo').append('<h5>It seems inevitable that entanglement and ingestion of marine debris will alter the biological and ecological performance of the animals. </h5>');
    $('#exportsInfo').append('<h5>It has been suggested that it could compromise their ability to capture and digest food, escape from predators, and reproduce. Additionally, it is likely these harmful chemicals can inhibit bodily function which is essential for migration and survival in their natural habitats.</h5>');
}

//https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/maps/demo/latlon-advanced
var H = Highcharts,
    map = H.maps['custom/world-robinson'],
    chart;

function garbagePatches() {
    //removes container div so line graph is interactive
//    //https://stackoverflow.com/questions/5933157/how-to-remove-an-html-element-using-javascript
//    var containerDiv = document.getElementById('container');
//    containerDiv.parentNode.removeChild(containerDiv);
    
    //Produce graph with data about garbage patches
    //Data from www.seas.columbia.edu/earth/wtert/sofos/sesini_thesis.pdf
    $('#data').highcharts('Chart', {
    chart: {
        type: 'column'
        //width: 800
    },
    title: {
        text: 'Plastic Particle Density in the 5 Garbage Patches'
    },
//    subtitle: {
//        text: 'Source: WorldClimate.com'
//    },
    xAxis: {
        categories: [
            'Eastern Garbage Patch',
            'Western Garbage Patch',
            'Atlantic Garbage Patch (North Atlantic Ocean)',
            'Atlantic Garbage Patch (South Atlantic Ocean)',
            'Indian Garbage Patch'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Pieces of Plastic per km²'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
//        name: 'Surface Area (km²)',
//        data: [8095000, 715520, 3625753, 1296180, 2183480]
//
//    }, {
        name: 'Particle Density (Pieces/km²',
        data: [25000, 40000, 25000, 20000, 10000]
//    }, {
//        name: 'Amount of Plastic (Tonnes)',
//        data: [20240, 2860, 9064, 2590, 2185]
    }]
});

$('#info').empty();
    
    
//    $('#container').highcharts('Map', {
//
//        chart: {
//            map: 'custom/world',
//            borderWidth: 0
//        },
//        title: {
//            text: 'The Five Ocean Garbage Patches'
//        },
//
////        subtitle: {
////            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world-robinson.js">World, Robinson projection, medium resolution</a>'
////        },
//        legend: {
//            title: {
//                text: 'Plastic Particle Density (pieces/km²)',
//                style: {
//                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
//                }
//            }
//        },
//
//        mapNavigation: {
//            enabled: true,
//            buttonOptions: {
//                verticalAlign: 'bottom'
//            }
//        },
//
//        colorAxis: {
//            min: 0,
//            stops: [
//                [0, '#33C7FF'],
//                //[0.5, '#ffbf00'],
//                [1, '#0000e5']
//            ]
//        },
////        colorAxis: {
////            min: 1,
////            max: 1000,
////            type: 'logarithmic'
////        },
//
////        plotOptions:{
////        	series:{
////                    point:{
////                	events:{
////                    	click: function(){
////                        	extraGraphs(this.name);
////                        }
////                    }
////                }
////            }
////        },
////        tooltip: {
////            //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
////            pointFormat: '{point.value} Kt'
////        },
//        tooltip: {
//            backgroundColor: 'none',
//            borderWidth: 0,
//            shadow: false,
//            useHTML: true,
//            padding: 0,
//            pointFormat: '<span class="f32"><span class="flag {point.name}">' +
//                '</span></span> {point.name}<br>' +
//                '<span style="font-size:30px">{point.value}/km²</span>',
//            positioner: function () {
//                return { x: 0, y: 250 };
//            }
//        },
//        series: [
//            
//            {       
//                name: 'Basemap',
//                mapData: Highcharts.maps['custom/world-robinson'],
//                borderColor: '##d3d3d3', //606060',
//                nullColor: 'rgba(173, 216, 230, 1', //200, 200, 200, 0.2)',
//                showInLegend: false
//                    
//            }, {
//                    type: 'mappoint',
//                    name: 'Garbage Patches',
//                    data: [{
//                        name: 'North Pacific Gyre',
//                        data: [25,000],
//                        lat: 33.156,
//                        lon: -177.983
////                        
////                    }, {
////                        name: 'South Pacific Gyre',
////                        data: [40,000],
////                        lat: -34.314,
////                        lon: -105.707
////                    }, {
////                        name: 'South Atlantic Gyre',
////                        data: [25,000],
////                        lat: -30.386,
////                        lon: -15.163
////                    }, {
////                        name: 'North Atlantic Gyre',
////                        data: [20,000],
////                        lat: 32.399,
////                        lon: -39.156
////                    }, {
////                        name: 'Indian Ocean Gyre',
////                        data: [10,000],
////                        lat: -18.402,
////                        lon: 76.122
//                    }
//                ]
//            }]
//    });


}
