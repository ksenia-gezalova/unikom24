import { SET_APP_THEME } from "@/store/modules/theme/mutation-types";

export default {
  [SET_APP_THEME](state, payload) {
    state.currentTheme = payload;
  }
};
