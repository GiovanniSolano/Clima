const lugar = require('./lugar/lugar');
const clima = require('./climas/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

// lugar.getLugar(argv.direccion).then(console.log);

// clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log);


const getInfo = async(direccion) => {


    try {

        const coordenadas = await lugar.getLugar(direccion);

        const climas = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de: ${coordenadas.direcci} es de ${climas} grados`;

    } catch (error) {

        return 'No hay resultados';

    }


}

getInfo(argv.direccion).then(console.log).catch(console.log);