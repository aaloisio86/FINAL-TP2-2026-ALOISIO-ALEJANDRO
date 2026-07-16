import Controller from "../Controller/Controller.js"; 
import Service from "../Services/Service.js";
import SensorDAO from "../Models/SensorDAO.js";

const sensorDAO= new SensorDAO();
const service= new Service(sensorDAO);
const controller= new Controller(service);


export default controller;