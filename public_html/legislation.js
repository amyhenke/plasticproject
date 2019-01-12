$(function () {
    //Makes menu show up - dates get radio buttons
    makeMenu(2010, 2016);
    //Tells it what data is 2007, then sets default map to 2007 data
    var selectedData = prepData(2010);
    drawMap(2010, selectedData);
//    var exportData = prepExport();
//    //exports(exportData);
});

function displayMap() {
    //Checks which year has been selected in radio buttons/menu
    var year = $('input[name=selectyear]:checked').val();
    //var year = 2013;
    //alert(year);

    //Tells it which data matches the year selected, then displays map
    var selectedData = prepData(year);
    drawMap(year, selectedData);
};

function drawMap(year, selectedData) {
    // Initiate the chart
    $('#container').highcharts('Map', {
        chart: {
            map: 'countries/gb/custom/gb-countries',
            borderWidth: 0
        },
        title: {
            text: 'The Effects of the Single-Use Plastic Carrier Bags Charge in the UK (' + year + ')'
        },

//        subtitle: {
//            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world-robinson.js">World, Robinson projection, medium resolution</a>'
//        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            stops: [
                [0, '#B4CDCD'], //#33C7FF //#8FD8D8 #ADEAEA
                [0.5, '#8FD8D8'], //#ffbf00 //#00CDCD
                [1, '#2F4F4F'] //#0000e5 //#00868B #008080
            ]
        },
        series: [{
                data: selectedData,
                mapData: Highcharts.maps['countries/gb/custom/gb-countries'],
                //joinBy: 'iso-a3',
                name: 'Number of Bags Sold (Million)',
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
    
    $('#exportsInfo').empty();
    $('#exportsInfo').append("<h3>England, Wales, Scotland and Northern Ireland have all introduced a carrier bag charge in an effort to reduce waste</h3>");
    $('#exportsInfo').append("<h5>The law requires that large shops charge 5 pence for every single-use plastic carrier bag. These levies were applied first in Wales (2011), Northern Ireland followed suit in 2013, Scotland in 2014 and England in 2015.</h5>");
    $('#exportsInfo').append("<h5>In England, it has been estimated that the seven largest retailers issued 83% fewer bags in 2016 than in 2014. This is equivalent to each person using approximately 25 bags per year in 2016, compared to 140 bags per year prior to this legislation.</h5>");
}

function prepData(year) {
    // Prepare data for map

    //Data 2010-14 from http///www.wrap.org.uk/sites/files/wrap/UK-Voluntary-Carrier-Bag-Agreement-Presentation_v4_0.pdf.png
    //Data 2015 & 16 from https://data.gov.uk/dataset/682843a8-168c-4056-b6fe-741161a39f60/single-use-plastic-carrier-bags-charge-data-for-england
    //2012+ N. Ireland Data from https://www.daera-ni.gov.uk/articles/northern-ireland-carrier-bag-levy-statistics
    var allData = [
        [{"iso3": "gb-eng", "data": [6287, 6760, 7061, 7402, 7635, 1327, 1215]}],
        [{"iso3": "gb-nir", "data": [173, 188, 300, 84, 91, 101, 99]}], //173, 188, 193, 57, 33, 
        [{"iso3": "gb-sct", "data": [752, 753, 761, 803, 656, null, null]}],
        [{"iso3": "gb-wls", "data": [351, 273, 62, 73, 77, null, null]}],
        //This is a made up one to make sure the scale is correct
        [{"iso3": "go-obg", "data": [null , null, null , null, null, 7500, 7500]}]
    ];

    var selectedData = [];
//    // Data is 2013
    for (var i = 0; i < allData.length; i++) {
//        // {"iso-a3": "xxx", "value": nnnnn}
        selectedData.push({"hc-key": allData[i][0].iso3, "value": allData[i][0].data[year - 2010]});
//        //console.log({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-2007]});
console.log(selectedData);
    };
//    //console.log(JSON.stringify(selectedData));
    return selectedData;
};

function makeMenu(start, finish) {
    var startTag = '<input type="radio" name="selectyear"';
    var endTag = '</input>';
    $('#menu').empty();
    $('#menu').append('<h4>Menu</h4>');
    $('#menu').append('<h6>Carrier Bag Levies in the UK</h6>');
    $('#menu').append('<br />');
    $('#menu').append('<h5>Select Year</h5>');

    for (i = start; i <= finish; i++) {
        var button = startTag + 'value="' + i + '">' + '  ' + i + endTag + '<br />';
        $('#menu').append(button);
    }
    ;
    $('#menu').append('<br />');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="displayMap()">Display');
    $('#menu').append('<br />');
    $('#menu').append('<h6><br>UK Exports of Plastic Waste</h6>');
    $('#menu').append('<button type="button" class="btn btn-info btn-block" id="display" onclick="exports()">Waste Exports');
};

function exports() {
    //Data from https://www.theguardian.com/environment/2017/dec/07/chinese-ban-on-plastic-waste-imports-could-see-uk-pollution-rise
    $('#container').highcharts('Chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total UK Plastic Waste Exports (2012 to 2017)'
        },
//        subtitle: {
//            text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
//        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Tonnes'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0
//                dataLabels: {
//                    enabled: true,
//                    format: '{point.y:.1f}%'
//                }
            }
        },

        tooltip: {
            //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            //pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: "UK Exports",
                colorByPoint: true,
                data:   [
                    {
                        name: "China",
                        y: 1550000,
                        drilldown: "China"
                    },
                    {
                        name: "Hong Kong",
                        y: 1200000,
                        drilldown: "Hong Kong"
                    },
                    {
                        name: "European community",
                        y: 640000,
                        drilldown: "European community"
                    },
                    {
                        name: "Malaysia",
                        y: 300000,
                        drilldown: "Malaysia"
                    },
                    {
                        name: "India",
                        y: 160000,
                        drilldown: "India"
                    },
                    {
                        name: "Indonesia",
                        y: 150000,
                        drilldown: "Indonesia"
                    }
                ]
            }
        ]
    });
    
    //Info from https://www.theguardian.com/environment/2017/dec/07/chinese-ban-on-plastic-waste-imports-could-see-uk-pollution-rise
    $('#exportsInfo').empty();
    $('#exportsInfo').append("<h3>Changes to Chinese Law on Imported Plastic Threatens 'Crisis' for UK Waste Recycling</h3>");
    $('#exportsInfo').append("<h5><br>The Chinese government's ban on the import of plastic waste, introduced in January 2018, has created a situation in desperate need of reform.</h5>");
    $('#exportsInfo').append("<h5>China was the leading market for household waste and recyclable materials. This is due to it's dominant position in manufacteuring. Customs data gathered by Greenpeace found that Britain has exported <i>over 2.7 million tonnes of plastic waste</i> to China and Hong Kong since 2012.</h5>");
    $('#exportsInfo').append("<h5>This Chinese legislation has added pressure on the UK recycling industry that relied upon this foreign market to reach high recycling targets and reduce the amount of garbage sent to landfills, without having to improve the quality of its own operations.</h5>");
}

//function prepExport() {
//
//    //Data from https://www.theguardian.com/environment/2017/dec/07/chinese-ban-on-plastic-waste-imports-could-see-uk-pollution-rise
//    var allData = [
//        [{"name": "China", "data": [1550000]}],
//        [{"name": "Hong Kong", "data": [1200000]}],
//        [{"name": "European community", "data": [640000]}],
//        [{"name": "Malaysia", "data": [300000]}],
//        [{"name": "India", "data": [160000]}],
//        [{"name": "Indonesia", "data": [150000]}]
//    ];
//
//    var exportData = [];
////    // Data is 2013
//    for (var i = 0; i < allData.length; i++) {
////        // {"iso-a3": "xxx", "value": nnnnn}
//        setObject(allData[i][0].data);
//        exportData.push(allData[i][0].name);
////        exportData.push({"country": allData[i][0].name, "value": allData[i][0].data[year - 2012]});
////        //console.log({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-2007]});
//console.log(exportData);
//    };
////    //console.log(JSON.stringify(selectedData));
//    return exportData;
//}
//
//function displayExport() {
//        var exportData = prepExport();
//        exports(exportData);
//}

