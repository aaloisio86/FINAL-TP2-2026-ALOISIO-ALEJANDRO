class Sensor {
    constructor({ id, tipo, valor, timestamp }) {
        this.id = id;
        this.tipo = tipo;
        this.valor = valor;
        this.timestamp = timestamp;
    }

    static TIPOS = ["TEMPERATURA", "HUMEDAD", "CO2"];

    static validar = ({ id, tipo, valor, timestamp }) => {
        if (typeof id !== "string" || !/^[a-zA-Z0-9]{8}$/.test(id)) {
            const error = new Error("id debe tener exactamente 8 caracteres alfanuméricos");
            error.status = 400;
            throw error;
        }
        if (!Sensor.TIPOS.includes(tipo)) {
            const error = new Error("tipo debe ser TEMPERATURA, HUMEDAD o CO2");
            error.status = 400;
            throw error;
        }
        if (typeof valor !== "number" || isNaN(valor)) {
            const error = new Error("valor debe ser numérico");
            error.status = 400;
            throw error;
        }
        if (typeof timestamp !== "string") {
            const error = new Error("timestamp debe ser un string");
            error.status = 400;
            throw error;
        }
    };
}

export default Sensor;