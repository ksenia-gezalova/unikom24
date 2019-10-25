import {
  SET_CURRENT_ITEMS_PER_PAGE,
  SET_CURRENT_PAGE
} from "@/store/modules/pagination/mutation-types";

export default {
  [SET_CURRENT_PAGE](state, payload) {
    state.currentPage = payload;
  },
  [SET_CURRENT_ITEMS_PER_PAGE](state, payload) {
    state.itemsPerPage = payload;
  }
};
