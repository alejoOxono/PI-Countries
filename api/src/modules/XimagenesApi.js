
//para el front
const axios = require('axios');
const cheerio = require('cheerio');

const imagenesApi = async (name) => {
    const webPageApi = [];
    try {
        const html = await axios.get(`https://espanol.images.search.yahoo.com/search/images;_ylt=AwrE1x1VB3thbUQAyRADEQx.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=${name}&fr2=piv-web&fr=sfp`)
        const htmlData = html.data;
        const $ = cheerio.load(html);
        const prueba = $('a[class=img]').attr('href')
        console.log(prueba)
        return prueba;
    }
    catch (err){
    new Error(err)
    }
}


module.exports = imagenesApi;

/*
<input id="mapnik_minlon" name="minlon" type="hidden" value="100.43701171875">

minlon %2c
minlat
maxlon
maxlat

<a class="active" for="long_input" id="long_link" href="https://www.openstreetmap.org/#map=6/4.270/106.403">Enlace</a>

 */