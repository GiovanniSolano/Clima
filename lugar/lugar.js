const axios = require('axios');



const getLugar = async(direccion) => {

    const encodeU = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeU}`,
        headers: { 'X-RapidAPI-Key': '30fef27d1amsh27578c6e9ac15d5p14575bjsn5bdaafaafe08' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados');
    }

    const data = resp.data.Results[0];
    const direcci = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direcci,
        lat,
        lng
    }

}


module.exports = {
    getLugar
}