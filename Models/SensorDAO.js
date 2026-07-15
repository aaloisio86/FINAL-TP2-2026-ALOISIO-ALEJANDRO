class SensorDAO {
    data = [];

    getAll = async () => {
        return this.data;
    };

    getById = async (id) => {
        return this.data.find(sensor => sensor.id === id);
    };

    save = async (sensor) => {
        this.data.push(sensor);
        return sensor;
    };

    update = async (sensor) => {
        const index = this.data.findIndex(s => s.id === sensor.id);
        this.data[index] = sensor;
        return sensor;
    };
}

export default SensorDAO;