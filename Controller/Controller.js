class Controller {

    constructor(service) {
        this.service = service;
    }

    getAll=async (req, res, next) => {
        try {
            const data = await this.service.getAll();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    };

    postLectura = async (req, res, next) => {
        try {
            const { lectura, esNuevo } = await this.service.recibirLectura(req.body);
            res.status(esNuevo ? 201 : 200).json(lectura);
        } catch (error) {
            next(error);
        }
    };
}

export default Controller;