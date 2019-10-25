import { GET_PEOPLE_COUNT } from "@/store/modules/people/getter-types";

export default {
  [GET_PEOPLE_COUNT](state) {
    return state.peopleList.length;
  }
};
