
//para el front

const getCountries = require("./getCountries");
const axios = require('axios');
const cheerio = require('cheerio');

const mapApi = async() =>{
    let web;
    let webPageApi;
    let html;

    webPageApi = await getCountries()
    webPageApi = webPageApi.map((el)=>el.map)
    web = webPageApi.map(async(data)=>{
        html = await axios.get(data.data)

    })

}


module.exports = mapApi;

/* 
<input id="mapnik_minlon" name="minlon" type="hidden" value="100.43701171875">

minlon %2c
minlat
maxlon
maxlat

<a class="active" for="long_input" id="long_link" href="https://www.openstreetmap.org/#map=6/4.270/106.403">Enlace</a>

 */