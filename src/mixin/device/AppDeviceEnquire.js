import {deviceEnquire, DEVICE_TYPE} from './device'

export const AppDeviceEnquire = {
  mounted () {
    const { $store } = this
    deviceEnquire(deviceType => {
      switch (deviceType) {
        case DEVICE_TYPE.DESKTOP:
          $store.commit('app/TOGGLE_DEVICE', 'desktop')
          $store.dispatch('app/setSidebar', true)
          break
        case DEVICE_TYPE.TABLET:
          $store.commit('app/TOGGLE_DEVICE', 'tablet')
          $store.dispatch('app/setSidebar', false)
          break
        case DEVICE_TYPE.MOBILE:
        default:
          $store.commit('app/TOGGLE_DEVICE', 'mobile')
          $store.dispatch('app/setSidebar', true)
          break
      }
    })
  }
}
