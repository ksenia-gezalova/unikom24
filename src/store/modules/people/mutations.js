import {
  PUSH_TO_PEOPLE_LIST,
  PUSH_TO_SHIPS_LIST
} from "@/store/modules/people/mutation-types";

export default {
  [PUSH_TO_PEOPLE_LIST](state, payload) {
    state.peopleList.push(...payload);
  },
  [PUSH_TO_SHIPS_LIST](state, payload) {
    state.shipsList.push(...payload);
  }
};
