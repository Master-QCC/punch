import Vue from 'vue'
import Router from 'vue-router'
import {RouterConf} from '../config/'
import punchInRecord from '@/views/punchInRecord'

Vue.use(Router)

export default new Router({
	linkActiveClass: RouterConf.linkActiveClass,
	mode : RouterConf.mode,
	history: RouterConf.history,
	base : RouterConf.base,
	routes: [
    ,{
	    path: '/',
      name: 'punchInRecord',
      component: punchInRecord
    },{
      path:'*',
      redirect: '/'
    }
  ]
})
