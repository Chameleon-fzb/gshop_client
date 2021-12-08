// 这个函数式让用户获取唯一id标识的
// 首先从localStorage当中区获取,如果没有
// 再调用uuid创建新的标识 还要存在localStorage

import { v4 as uuidV4 } from 'uuid'
function getUserTempId() {
	let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
	if (!userTempId) {
		userTempId = uuidV4()
		localStorage.setItem('USER_TEMP_ID_KEY', userTempId)
	}
	return userTempId
}
export { getUserTempId }
