import axios from 'axios';

export class Botigaservice {
    baseUrl = "http://localhost:8080/botigues/";

    getAll() {
        return axios.get(this.baseUrl + "all").then(res => res.data);
    }

    save(botiga) {
        return axios.post(this.baseUrl + "save", botiga).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseUrl + "delete/" + id).then(res => res.data);
    }

    getQuadres(idBotiga) {
        return axios.get(this.baseUrl + "/botiga/" + idBotiga).then(res => res.data);
    }

    saveQuadre(quadre) {
        return axios.post(this.baseUrl + "/botiga/crearquadre", quadre).then(res => res.data);
    }
}