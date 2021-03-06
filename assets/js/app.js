import Vue from 'vue'
import makeI18n from './i18n'

/**
* Import componenets
*/
import App from './components/app'
import Topbar from './components/topbar'
import Widget from './components/widget'
import Material from './components/material'
import VueClipboard from 'vue-clipboard2'
import ItkSpinner from './components/itk-spinner'

/**
* Import vue-awesome fontawesome-icons (https://github.com/Justineo/vue-awesome)[https://github.com/Justineo/vue-awesome]
*/
import Icon from 'vue-awesome/components/Icon'
/**
* Import the individual font-awesome icons
*/
import 'vue-awesome/icons/code'
import 'vue-awesome/icons/copy'
import 'vue-awesome/icons/bars'
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/minus'
import 'vue-awesome/icons/angle-left'
import 'vue-awesome/icons/angle-right'

/**
* Import vue-slick https://github.com/staskjs/vue-slick
*/

import Slick from 'vue-slick';

/**
* Require the scss for the app.
*/
require('../css/app.scss')

/**
* Add the Icon component globally
*/
Vue.component('v-icon', Icon)
Vue.component('widget', Widget)
Vue.component('material', Material)
Vue.component('itk-spinner', ItkSpinner)
Vue.component('vue-slick', Slick)

Vue.use(VueClipboard)

const container = document.getElementById('app')

if (null !== container) {
    const config = (() => {
        try {
            return JSON.parse(container.getAttribute('data-configuration'))
        } catch (e) {
            return {}
        }
    })()
    const i18n = makeI18n(config.locale || 'da')

    /**
     * Create Vue Application instance with the id `app`
     */
    new Vue({
        el: container,
        config,
        i18n,
        components: {App, Topbar, Widget, Material, VueClipboard, ItkSpinner}
    })
}
