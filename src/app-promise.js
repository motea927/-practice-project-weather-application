
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
    a:{
        demand: false,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

argv.a = argv.a || '台灣高雄市楠梓區';

var fToc = (f) =>{
    return ((f-32)*5/9).toFixed(2);
}


var addressURI = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURI}&key=AIzaSyDdUmZmvdFRszgJSPe7RaN-ltu3FHYPbaM`;
axios.get(geocodeUrl).then( (response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }
    console.log(response.data.results[0].formatted_address);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/a8a5206097f2c9424d39aaef858702fe/${lat},${lng}`
    //console.log(lat,lng);
    return axios.get(weatherUrl);
}).then( (weatherResponse) => {
    var temperature = fToc(weatherResponse.data.currently.temperature);
    var apparentTemperature = fToc(weatherResponse.data.currently.apparentTemperature);
    console.log(`It's currently ${temperature} °C. It feels like ${apparentTemperature} °C`);
}).catch( (e) => {
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
    
});