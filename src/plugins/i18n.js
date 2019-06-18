import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './locales/en'
import ru from './locales/ru'


Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en.strings,
    ru: ru.strings,
  },
  dateTimeFormats: {
    en: en.dateTimeFormat,
    ru: ru.dateTimeFormat,
  },
})
