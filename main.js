import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import { Request } from './util/api.js'

// 引入全局uView
import uView from 'uview-ui'

Vue.use(uView)

Vue.prototype.$Request = Request
Vue.prototype.$store = store


Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	return year+'-'+month+'-'+day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
