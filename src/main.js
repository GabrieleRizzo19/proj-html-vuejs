import { createApp } from 'vue'
// IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// IMPORT MY STYLE
import './styles/general.scss'

import App from './App.vue'

// IMPORT FONTAWESOME CORE
import { library } from '@fortawesome/fontawesome-svg-core'
// IMPORT FONTAWESOME ICON COMPONENT
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// IMPORT FONTAWESOME ICONS
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// ADD ICONS TO LIBRARY
library.add(faMagnifyingGlass)
library.add(faBagShopping)
library.add(faBars)






createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
