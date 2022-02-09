import VectorMapComponent from '../components/VectorMap.vue'

export default {
  install(app, options) {
    VectorMapComponent.props.__globalOptions__ = {
      default: () => options,
    }

    // app.config.globalProperties.$jvm = (key) => {
    //   console.log(key);
    // }

    app.component('vectorMap', VectorMapComponent)
  }
}