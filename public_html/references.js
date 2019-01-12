$(function () {
    references();
});

function references () {
    $('#container').append('<h3>References and Data Description<hr></h3>');
    $('#container').append('<h5>Production</h5>');
    $('#container').append('<h6>1. Plastics Resin Production and Consumption in 59 Countries Worldwide 2007-2018, VDMA and EUROMAP.</h6>');
    $('#container').append('<h6>  Data Sources: International Monetary Fund (IMF) and VDMA Plastics and Rubber Machines</h6>');
    $('#container').append('<h6><br>This source was extremely useful and served as the starter of my project. It was surprisingly difficult to find <br> a dataset with production rates in different countries over a number of years but this source had complied that <br> effectively. A limitation of this source is that it was formatted in a PDF which meant it was extremely time <br> consuming to extract the relevant data.</h6>');
    $('#container').append('<h6><br>2. Population data for United Arab Emirates from https://data.worldbank.org/indicator/SP.POP.TOTL</h6>');
    $('#container').append('<hr><h5>Waste</h5>');
    $('#container').append('<h6>The Recycling Race</h6>');
    $('#container').append('<h6>1. Recycled and Composted Waste as a Share of Total Muncipal Waste in OECD Countries</h6>');
    $('#container').append('<h6>https://www.statista.com/chart/4470/the-countries-winning-the-recycling-race/</h6>');
    $('#container').append('<h6><br>Statista was particularly useful for the project. This piece of data was clear yet complex enough to show <br> interesting patterns about recycling in OECD countries</h6>');
    $('#container').append('<h6><br>2. Recycling rate of packaging waste by type of packaging (EUROSTAT)</h6>');
    $('#container').append('<h6>http://ec.europa.eu/eurostat/tgm/table.do?tab=table&plugin=1&language=en&pcode=cei_wm020</h6>');
    $('#container').append('<h6><br>This source shows the percentage of packaging waste that is sent to recycling. This is important as <br> 75% of all packaging is made from plastic</h6>');
    $('#container').append('<h6><br>3. Origins of Litter in the River Thames (2017)</h6>');
    $('#container').append('<h6><br>4. Top 10 Items of Litter Found in the River Thames (2017)</h6>');
    $('#container').append('<h6>http://www.thames21.org.uk/thames-river-watch-litter/</h6>');
    $('#container').append('<h6><br>This data provided some interesting insights into the issue of litter in London. The other datasets used <br> prior to this focused on whole countries, it ws therefore interesting to focus in on specific issues.</h6>');
    $('#container').append('<h6><br>5. Estimated Time Taken For Different Types of Plastic to Biodegrade</h6>');
    $('#container').append('<h6>http://www.bbc.co.uk/news/science-environment-42264788</h6>');
    $('#container').append('<h6>This information was important to showing the scale of the issue. Plastic will take hundreds of years to break <br> down, thus the issue will not go away on its own. We must take action to remove this harmful material from our <br> natural environment.</h6>');
    $('#container').append('<hr><h5>The Oceans</h5>');
    $('#container').append('<h6>Ocean Garbage Patches</h6>');
    $('#container').append('<h6>1. The Amount of Plastic and Particle Density in the 5 Garbage Patches</h6>');
    $('#container').append('<h6>http://www.seas.columbia.edu/earth/wtert/sofos/sesini_thesis.pdf</h6>');
    $('#container').append('<h6>The information about the five garbage patches is essential to understanding the issues at sea. This data was clear <br> and useful but posed issues with accurately formatting due to the different div already on the page.</h6>');
    $('#container').append('<h6><br>Marine Debris</h6>');
    $('#container').append('<h6>1. Proportion of Marine Litter Categories on Reference Beaches (2001-2006)</h6>');
    $('#container').append('<h6><br>3. Textual information sourced from Taking Action Against Marine Debris</h6>');
    $('#container').append('<h6>https://www.projectaware.org/issue/marine-debris</h6>');
    $('#container').append('<h6><br>Entanglement and Ingestion</h6>');
    $('#container').append('<h6>2. The number of species affected by entanglement and ingestion of plastic debris.</h6>');
    $('#container').append('<h6><br>3. The consequences of entanglement and ingestion on the lives of marine animals.</h6>');
    $('#container').append('<h6>Sources 1, 2 and 3: https://www.cbd.int/doc/publications/cbd-ts-67-en.pdf</h6>');
    $('#container').append('<h6>These graphs were difficult to plot due to the numerous categories, eventually I was able to overcome this and <br> adaquately present the data. These graphs shows important statistics about the effects of plastic pollution on <br> marine life.</h6>');
    $('#container').append('<hr><br><h5>Legislation</h5>');
    $('#container').append('<h6>Carrier Bags Statistics</h6>');
    $('#container').append('<h6>1. UK Voluntary Carrier Bag Agreement 2010-2014 Data (WRAP)</h6>');
    $('#container').append('http///www.wrap.org.uk/sites/files/wrap/UK-Voluntary-Carrier-Bag-Agreement-Presentation_v4_0.pdf.png</h6>');
    $('#container').append('<h6><br>2. Single-use plastic carrier bags charge data for England (2015-6)</h6>');
    $('#container').append('<h6>https://data.gov.uk/dataset/682843a8-168c-4056-b6fe-741161a39f60/single-use-plastic-carrier-bags-charge-data-for-england</h6>');
    $('#container').append('<h6>This dataset was extremely specific and detailed as the legislation has ensured that every large shop in the country <br> submit this data to the government. This was a limitation as the number of shops surveyed in this data set <br> compared to those in the WRAP dataset were different. For this reason, to be able to accurately compare the two it was <br>  essential to add up the data referening only those in the WRAP dataset too. Despite this, this information is useful in <br> demonstrating the positive impact of carrier bag levies.</h6>');
    $('#container').append('<h6><br>3. Northern Ireland Carrier Bag Levy Statistics</h6>');
    $('#container').append('<h6>https://www.daera-ni.gov.uk/articles/northern-ireland-carrier-bag-levy-statistics</h6>');
    $('#container').append('<h6>This data filled in the missing gaps from the data already collected. It was simple to implement.</h6>');
    $('#container').append('<h6><br>4. Extra information on the legislation</h6>');
    $('#container').append('<h6>https://www.gov.uk/government/publications/carrier-bag-charge-summary-of-data-in-england/single-use-plastic-carrier-bags-charge-data-in-england-for-2016-to-2017</h6>');
    $('#container').append('<h6>https://www.gov.uk/government/publications/single-use-plastic-carrier-bags-why-were-introducing-the-charge/carrier-bags-why-theres-a-5p-charge</h6>');
    $('#container').append('<h6><br>UK Exports to China</h6>');
    $('#container').append('<h6>1. Total UK Plastic Waste Exports (2012 to 2017)</h6>');
    $('#container').append('<h6>https://www.theguardian.com/environment/2017/dec/07/chinese-ban-on-plastic-waste-imports-could-see-uk-pollution-rise</h6>');
    $('#container').append('<h6>This data provided insight into the recycling crisis in the UK. The country has exported a large proportion of its waste to China <br> and predominantly other Asia countries in an attempt to reach higher recycling targets and limit the amount of waste entering <br> landfills. It must now develop its own recycling industry.</h6>');
    $('#container').append('<hr>');
}

//'<hr>'