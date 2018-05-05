const request = require('request');

var fToc = (f) =>{
    return ((f-32)*5/9).toFixed(2);
}

var getWeather = (lat,lng,callback) =>{

    request({
        url: `https://api.darksky.net/forecast/a8a5206097f2c9424d39aaef858702fe/${lat},${lng}`,
        json:true
    },(err, res, body) =>{
        if (!err && res.statusCode === 200) {
            callback(undefined, {
                temperature:fToc(body.currently.temperature),
                apparentTemperature:fToc(body.currently.apparentTemperature)
            });
        }else{
            callback('Unable to fetch weather.');
        }
    });

}

module.exports.getWeather = getWeather;
