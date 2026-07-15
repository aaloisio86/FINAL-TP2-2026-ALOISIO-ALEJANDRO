import Controller from "../Controller/Controller.js"; 
import Service from "../Services/Service.js";

const service= new Service();
const controller= new Controller(service);


export default controller;