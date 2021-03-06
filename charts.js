// https://demo-live-data.highcharts.com/aapl-historical.json
// https://futureplaybook.github.io/demoHTML/data_SHILLER_PE_RATIO_MONTH.json
Highcharts.getJSON('data_SHILLER_PE_RATIO_MONTH.json', function(data) {
    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 5
        },

        title: {
            text: meta["name"]
        },

        subtitle: {
            text: 'More details here'
        },

        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },

        legend: {
            enabled: true
        },
        credits: {
            enabled: false
        },

        series: [{
                name: meta["name"],
                data: data,
                id: 'dataseries',
                tooltip: {
                    valueDecimals: 2
                }
            },
            {
                type: 'flags',
                showInLegend: false,
                data: [{
                    x: Date.UTC(2010, 11, 1),
                    title: 'A',
                    text: 'Some event with a description'
                }, {
                    x: Date.UTC(2015, 11, 12),
                    title: 'B',
                    text: 'Some event with a description'
                }, {
                    x: Date.UTC(2017, 11, 22),
                    title: 'C',
                    text: 'Some event with a description'
                }],
                onSeries: 'dataseries',
                shape: 'squarepin',
                width: 16
            }
        ]
    });
});