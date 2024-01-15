// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

// NOTE: Comment this before building to device 
document.addEventListener('DOMContentLoaded', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Timestamp', 'Temperature'], // x, y-axis
        ['10/22/22', 32], ['10/23/22', 35], ['10/24/22', 30], ['10/25/22', 29], ['10/26/22', 33], ['10/27/22', 37]// The set of x-y coords for values
    ]);

    // Set Options
    const options = {
        title: 'Temperature (Last 10 Measures)', // label
        hAxis: { title: 'Timestamp' }, // x
        vAxis: { title: 'Temperature' }, // y
        legend: 'none'
    };

    // Draw Chart
    const chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);   
}