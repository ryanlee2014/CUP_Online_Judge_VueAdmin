import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import AddProblem from '@/views/addproblem'
import ListProblem from '@/views/listproblem'
import AddContest from '@/views/addcontest'
import ListContest from '@/views/listcontest'
import AddSubject from '@/views/addsubject'
import ListSubject from '@/views/listsubject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/addproblem',
      name: 'Add Problem',
      component: AddProblem
    },
    {
      path: '/listproblem',
      name: 'List Problem',
      component: ListProblem
    },
    {
      path: '/addcontest',
      name: 'Add Contest',
      component: AddContest
    },
    {
      path: '/listcontest',
      name: 'List Contest',
      component: ListContest
    },
    {
      path: '/addsubject',
      name: 'Add Subject',
      component: AddSubject
    },
    {
      path: '/listsubject',
      name: 'List Subject',
      component: ListSubject
    }
  ]
})
