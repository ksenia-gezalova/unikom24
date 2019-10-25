import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "catalogue",
      component: loadView("Catalogue")
    },
    {
      path: "/card/:name",
      name: "card",
      component: loadView("Card")
    }
  ]
});

export default router;
