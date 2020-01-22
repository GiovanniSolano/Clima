const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=60700fae17c03aa4be78c548a87e6363&units=metric`);


    return resp.data.main.temp;


}

module.exports = {
    getClima
}