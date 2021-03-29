/*
 * @Author: zhimin
 * @Date: 2021-03-29 16:52:40
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-29 17:22:12
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
  return localStorage.set()
}
