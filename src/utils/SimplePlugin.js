import store from '@/store'

const $themeList = [
  {
    id: 'theme-default',
    name: '默认主题'
  }, {
    id: 'theme-simple',
    name: '简单主题'
  }
]
export default {
  name: 'SimplePlugin',
  install (Vue, options = {}) {
    Vue.prototype.$changeTheme = function (theme = $themeList[0]) {
      const body = document.querySelector('body')
      $themeList.forEach(t => {
        body.classList.remove(t.id)
      })
      body.classList.add(theme.id)
      store.dispatch('Theme/changeTheme', theme)
    }
    Vue.prototype.$themeList = $themeList
  }
}
