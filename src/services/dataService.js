//import Vue from "vue";
import axios from "axios";
//import VueAxios from "vue-axios";

//Vue.use(VueAxios, axios);

const Swapi = axios.create({
  baseURL: "https://swapi.co/api/"
});

class dataService {
  constructor(swapi = Swapi) {
    this.swapi = swapi;
    this.clear = url => url.replace(this.swapi.baseURL, "");
  }

  loadPeople(pushMethod) {
    return new Promise(resolve => {
      this.getPeopleList(pushMethod);
      resolve();
    });
  }

  getPeopleList(pushMethod, params = { page: 1 }) {
    const method = pushMethod;
    this.swapi
      .get("people", {
        params: params
      })
      .then(response => {
        pushMethod(response.data.results);
        if (response.data.next) {
          return this.getPeopleList(method, { page: params.page + 1 });
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  loadShips(starships, pushMethod) {
    starships.forEach(shipUrl => {
      this.swapi
        .get(this.clear(shipUrl))
        .then(response => {
          pushMethod(response.data);
        })
        .catch(err => {
          throw new Error(err);
        });
    });
  }
}

export default new dataService();
