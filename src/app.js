
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.a , (errorMessage, results) =>{
    if (errorMessage){
        console.log(errorMessage);
    }else {
        console.log(results.address);

        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently ${weatherResults.temperature}°C. It feels like ${weatherResults.apparentTemperature}°C .`);
            }
        });

    }
});
