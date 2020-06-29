import Vue from 'vue'
import Router from 'vue-router'
import {RouterConf} from '../config/'
import punchWeekRecord from '@/views/punchWeekRecord'
import punchHistoryRecord from '@/views/punchHistoryRecord'
import punchReward from '@/views/punchReward'
import punchMy from '@/views/punchMy'

Vue.use(Router)

export default new Router({
	linkActiveClass: RouterConf.linkActiveClass,
	mode : RouterConf.mode,
	history: RouterConf.history,
	base : RouterConf.base,
	routes: [
    {
	    path: '/',
      name: 'punchWeekRecord',
      component: punchWeekRecord
    },
    {
	    path: '/punch-history-record',
      name: 'punchHistoryRecord',
      component: punchHistoryRecord
    },
    {
	    path: '/punch-reward',
      name: 'punchReward',
      component: punchReward
    },
    {
	    path: '/punch-my',
      name: 'punchMy',
      component: punchMy
    },
    {
      path:'*',
      redirect: '/'
    }
  ]
})
