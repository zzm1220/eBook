/*
 * @Author: zhimin
 * @Date: 2021-03-26 14:32:59
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-31 17:42:31
 * @FilePath: \hello\src\utils\book.js
 */
export const FONT_SIZE_LIST = [
  { FontSize: 12 },
  { FontSize: 14 },
  { FontSize: 16 },
  { FontSize: 18 },
  { FontSize: 20 },
  { FontSize: 22 },
  { FontSize: 24 }
]

export const FONT_FAMILY_LIST = [
  {
    font: 'Default'
  },
  {
    font: 'Cabin'
  },
  {
    font: 'Days One'
  },
  {
    font: 'Montserrat'
  },
  {
    font: 'Tangerine'
  }
]

export function themeList (vue) {
  return [
    {
      alias: vue.$t('book.themeDefault'),
      name: 'Default',
      style: {
        body: {
          color: '#4c5059',
          background: '#cecece'
        }
      }
    },
    {
      alias: vue.$t('book.themeGold'),
      name: 'Gold',
      style: {
        body: {
          color: '#5c5b56',
          background: '#c6c2b6'
        }
      }
    },
    {
      alias: vue.$t('book.themeEye'),
      name: 'Eye',
      style: {
        body: {
          color: '#404c42',
          background: '#a9c1a9'
        }
      }
    },
    {
      alias: vue.$t('book.themeNight'),
      name: 'Night',
      style: {
        body: {
          color: '#cecece',
          background: '#000000'
        }
      }
    }
  ]
}

export function addCss (href) {
  let link = document.getElementById('globalTheme')
  if (link) {
    link.setAttribute('href', href)
  } else {
    link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', href)
    link.setAttribute('id', 'globalTheme')
    document.getElementsByTagName('head')[0].appendChild(link)
  }
}
