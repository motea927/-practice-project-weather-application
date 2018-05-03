const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=811%E5%8F%B0%E7%81%A3%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E6%B5%B7%E5%B0%88%E8%B7%AF142%E8%99%9F',
    json:true
}, (err, res, body) =>{
    console.log(JSON.stringify(body,undefined,2));
});