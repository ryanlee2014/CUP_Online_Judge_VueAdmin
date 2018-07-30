import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import Main from '@/views/main'
import AddProblem from '@/views/addproblem'
import ListProblem from '@/views/listproblem'
import AddContest from '@/views/addcontest'
import ListContest from '@/views/listcontest'
import AddSubject from '@/views/addsubject'
import ListSubject from '@/views/listsubject'
import AddPrivilege from '@/views/addprivilege'
import ChangePassword from '@/views/changepassword'
import CheckAccount from '@/views/checkaccount'
import CreateAccount from '@/views/createaccount'
import GlobalSetting from '@/views/globalsetting'
import ListPrivilege from '@/views/listprivilege'
import ProblemRejudge from '@/views/problemrejudge'
import * as process from '../../.eslintrc'
process.env.BUILD_TARGET = 'DEBUG'

let store = {
  state: {
    login: false,
    admin: false
  }
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
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
    },
    {
      path: '/addprivilege',
      name: 'Add Privilege',
      component: AddPrivilege
    },
    {
      path: '/changepassword',
      name: 'Change Password',
      component: ChangePassword
    },
    {
      path: '/checkaccount',
      name: 'Check Account',
      component: CheckAccount
    },
    {
      path: '/createaccount',
      name: 'Create Account',
      component: CreateAccount
    },
    {
      path: '/globalsetting',
      name: 'Global Setting',
      component: GlobalSetting
    },
    {
      path: '/listprivilege',
      name: 'List Privilege',
      component: ListPrivilege
    },
    {
      path: '/problemrejudge',
      name: 'Problem Rejudge',
      component: ProblemRejudge
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (process.env.BUILD_TARGET === 'DEBUG') {
    next()
  } else {
    if (!store.state.login) {
      axios('/api/privilege')
        .then(res => {
          if (res.status === 'OK') {
            store.state.login = true
            store.state.admin = res.data.admin
            if (store.state.admin) {
              next()
            } else {
              next(false)
            }
          } else {
            alert('Server reject your request')
          }
        })
        .catch(err => {
          alert('fail to access privilege API')
          console.error(err)
        })
    } else {
      if (store.state.admin) {
        next()
      } else {
        next(false)
      }
    }
  }
})

export default router
