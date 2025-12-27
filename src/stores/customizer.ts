import { defineStore } from 'pinia'
interface ICustomizerState {
  isDark: boolean,
  skin: 'default' | 'bordered',
  inverted: boolean,
  menuCollapsed?: boolean,
}
export const useCustomizerStore = defineStore('customizer', {
  state: (): ICustomizerState => ({
    isDark: false,
    skin: 'default',
    inverted: false,
    menuCollapsed : false
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.setThemeToBody(this.isDark ? 'dark' : 'light')
    },
    setThemeToBody(theme: 'light' | 'dark') {
      document.documentElement.dataset.theme = theme
    },
    setSkin(skin: 'default' | 'bordered') {
      this.skin = skin
    },
    toggleInverted() {
      this.inverted = !this.inverted
      this.isDark = false
      this.setThemeToBody('light')
    },
    onMenuCollapsed(){
      this.menuCollapsed = true
    },
    onMenuExpanded(){
      this.menuCollapsed = false
    },
  },
})
