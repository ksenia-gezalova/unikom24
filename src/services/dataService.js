import axios from "axios";

const Swapi = axios.create({
  baseURL: "https://swapi.co/api/"
});

class dataService {
  constructor(swapi = Swapi) {
    this.swapi = swapi;
    this.clear = url => url.replace(this.swapi.baseURL, "");
  }

  getData(api, pushMethod, params = { page: 1 }) {
    const method = pushMethod;
    this.swapi
      .get(`${api}`, {
        params: params
      })
      .then(response => {
        pushMethod(response.data.results);
        if (response.data.next) {
          return this.getData(api, method, { page: params.page + 1 });
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

export default new dataService();
