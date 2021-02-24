import Vue from 'vue/dist/vue.esm'
import App from './App.vue'
import CodeEditor from "@/components/CodeEditor";
import Navbar from "@/components/Navbar";

Vue.config.productionTip = false

new Vue({
  components: {
    Navbar,
    CodeEditor
  },
  render: h => h(App),
}).$mount('#app')
