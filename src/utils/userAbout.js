// 这个函数式让用户获取唯一id标识的
// 首先从localStorage当中区获取,如果没有
// 再调用uuid创建新的标识 还要存在localStorage

import { v4 as uuidV4 } from 'uuid'

let TOKEN_KEY = 'TOKEN_KEY'

/**从 localStorage 获取 临时 id*/
function getUserTempId() {
	let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
	if (!userTempId) {
		userTempId = uuidV4()
		localStorage.setItem('USER_TEMP_ID_KEY', userTempId)
	}
	return userTempId
}
/**保存 token 到 localStorage */
function setToken(token) {
	if (!token) return
	localStorage.setItem(TOKEN_KEY, token)
}
/**从 localStorage 获取 token */
function getToken() {
	let token = localStorage.getItem(TOKEN_KEY) || ''
	return token
}
/* 删除 token */
function removeToken() {
	localStorage.removeItem(TOKEN_KEY)
}
export { getUserTempId, setToken, getToken, removeToken }
