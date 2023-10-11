import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";

import TopMenu from "../components/TopMenu.vue";
import SideMenu from "../components/SideMenu.vue";
import Form from "../components/FormView.vue";
import Table from "../components/TableView.vue";
import ButtonGroupView from "../components/ButtonGroupView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          components: {
            topMenu: TopMenu,
            sideMenu: SideMenu,
            form: Form,
            table: Table,
            buttonGroupView: ButtonGroupView
          },
          /**
           * prosps: {
           *  table: {
           *    name: persontable
           *    url: /person
           * }
           * }
           */
        },
      ],
    },
    {
      path: "/fahrzeuge",
      component: Home,
      children: [
        {
          path: "",
          components: {
            topMenu: TopMenu,
            sideMenu: SideMenu,
            form: Form,
            table: Table,
            buttonGroupView: ButtonGroupView
          },
          /**
           * prosps: {
           *  table: {
           *    name: fahrzeugetable
           *    url: /person
           * }
           * }
           */
        },
      ],
    }
  ],
});

export default router;
