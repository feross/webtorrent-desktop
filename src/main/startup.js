module.exports = {
  install,
  uninstall
}

const config = require('../config')
const AutoLaunch = require('auto-launch')

const appLauncher = new AutoLaunch({
  name: config.APP_NAME,
  isHidden: true,
  mac: {
    useLaunchAgent: true
  }
})

function install () {
  return appLauncher
    .isEnabled()
    .then(enabled => {
      if (!enabled) return appLauncher.enable()
    })
}

function uninstall () {
  return appLauncher
    .isEnabled()
    .then(enabled => {
      if (enabled) return appLauncher.disable()
    })
}
