import { createApp } from 'vue'
import App from './App.vue'

// IMPORT FONTAWESOME CORE
import { library } from '@fortawesome/fontawesome-svg-core'
// IMPORT FONTAWESOME ICON COMPONENT
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// IMPORT FONTAWESOME ICONS
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

// ADD ICONS TO LIBRARY
library.add(faMagnifyingGlass)
library.add(faBagShopping)
library.add(faBars)
library.add(faEarthEurope)
library.add(faChevronUp)
library.add(faCartShopping)
library.add(faCircleNotch)
library.add(faUser)
library.add(faTag)
library.add(faPhone)
library.add(faClock)
library.add(faTwitter)
library.add(faInstagram)
library.add(faFacebookF)


// SWIPER
import 'swiper/css';
import 'swiper/css/pagination';




createApp(App)
.component('font-awesome-icon', FontAwesomeIcon) //ADD FONTAWESOME ICON COMPONENT TO APP
.mount('#app')
