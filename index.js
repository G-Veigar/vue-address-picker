var vueAddressPicker  = require('./lib/vue-address-picker.vue');

module.exports = function install (Vue) {
  Vue.component(vueAddressPicker.name, vueAddressPicker)
}
 