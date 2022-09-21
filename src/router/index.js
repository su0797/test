import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '/@views/NotFound.vue';
import Home from '/@views/Home.vue';
import Login from '/@views/Login.vue';
import AdminMain from '/@views/AdminMain.vue';
import TaskList from '/@views/TaskList.vue';
import UserMain from '/@views/UserMain.vue';
import UserList from '/@components/user/UserList.vue';
// import UserWorkPage from '/@views/UserWorkPage.vue';
import UserReg from '/@components/user/UserReg.vue';
import UserModify from '/@components/user/UserModify.vue';
import AdminMainView from '/@components/AdminMainView.vue';

import { advancePositionWithMutation } from '@vue/compiler-core';
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:catchAll(.*)+',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/admin',
    component: AdminMain,
  },
  {
    path: '/tasklist',
    component: TaskList,
  },
  {
    path: '/user',
    component: UserMain,
  },
  {
    path: '/user/list',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/admin/user/list',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/admin/user/register',
    name: 'UserReg',
    component: UserReg,
  },
  {
    path: '/admin/user/modify/:user_id',
    name: 'UserModify',
    component: UserModify,
  },
  {
    path: '/admin/view',
    name: 'AdminMainView',
    component: AdminMainView,
  },
  // {
  //   path: '/admin/user/workpage/:user_id',
  //   name: 'UserWorkPage',
  //   component: UserWorkPage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, _from) => {
  // console.log(to, _from);
});

export default router;
