import Sensor from "../Models/Sensor.js";

class Service {

    constructor(sensorDAO) {
        this.sensorDAO = sensorDAO;
    }

    getAll= async ()=> {
        return await this.sensorDAO.getAll();
    };

    recibirLectura = async (datos) => {
        Sensor.validar(datos);

        const { id, tipo, valor, timestamp } = datos;
        const sensor = new Sensor({ id, tipo, valor, timestamp });

        const existente = await this.sensorDAO.getById(id);
        if (existente) {
            await this.sensorDAO.update(sensor);
        } else {
            await this.sensorDAO.save(sensor);
        }

        const alerta = this.evaluarAlerta(tipo, valor);

        return { lectura: { id, tipo, valor, timestamp, alerta }, esNuevo: !existente };
    };

    evaluarAlerta = (tipo, valor) => {
        if (tipo === "TEMPERATURA" && valor > 35) return "TEMPERATURA alta";
        if (tipo === "HUMEDAD" && valor < 20) return "HUMEDAD baja";
        if (tipo === "CO2" && valor > 1000) return "CO2 alto";
        return null;
    };
}

export default Service;