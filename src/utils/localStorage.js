/*
 * @Author: zhimin
 * @Date: 2021-03-29 16:52:40
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-30 16:43:25
 * @FilePath: \hello\src\utils\localStorage.js
 */
import Storage from 'web-storage-cache'
const localStorage = new Storage()

export function setLocalStorage (key, value) {
  return localStorage.set(key, value)
}
export function getLocalStorage (key) {
  return localStorage.get(key)
}
export function removeLocalStorage (key) {
  return localStorage.delete(key)
}
export function clearLocalStorage () {
  return localStorage.clear()
}
export function setBookLocalStorage (fileName, key, value) {
  let book = getLocalStorage(`${fileName}-info`)
  if (!book) {
    book = {}
  }
  book[key] = value
  return localStorage.set(`${fileName}-info`, book)
}
export function getBookLocalStorage (fileName, key) {
  const book = getLocalStorage(`${fileName}-info`)
  if (book) {
    return book[key]
  } else {
    return null
  }
}
export function getFontFamily (fileName) {
  return getBookLocalStorage(fileName, 'fontFamily')
}
export function saveFontFamily (fileName, value) {
  return setBookLocalStorage(fileName, 'fontFamily', value)
}
export function getTheme (fileName) {
  return getBookLocalStorage(fileName, 'theme')
}
export function saveTheme (fileName, theme) {
  return setBookLocalStorage(fileName, 'theme', theme)
}
export function getFontSize (fileName) {
  return getBookLocalStorage(fileName, 'fontSize')
}
export function saveFontSize (fileName, fontSize) {
  return setBookLocalStorage(fileName, 'fontSize', fontSize)
}
