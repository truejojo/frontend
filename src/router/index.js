import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';

import TopMenu from '../views/TopMenu.vue';
import SideMenu from '../views/SideMenu.vue';
import Form from '../views/FormView.vue';
import Table from '../views/TableView.vue';
import ButtonGroupView from '../views/ButtonGroupView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'views',
          components: {
            topMenu: TopMenu,
            sideMenu: SideMenu,
            form: Form,
            table: Table,
            buttonGroupView: ButtonGroupView
          },

          prosps: {
            buttonGroupView: {
              checkFormInput: Function
            },
            form: {
              v$: Object
            }
            //  table: {
            //    name: persontable
            //    url: /person
            //   }
          }
        }
      ]
    },
    {
      path: '/fahrzeuge',
      component: Home,
      children: [
        {
          path: '',
          components: {
            topMenu: TopMenu,
            sideMenu: SideMenu,
            form: Form,
            table: Table,
            buttonGroupView: ButtonGroupView
          }
          /**
           * prosps: {
           *  table: {
           *    name: fahrzeugetable
           *    url: /person
           * }
           * }
           */
        }
      ]
    }
  ]
});

export default router;
