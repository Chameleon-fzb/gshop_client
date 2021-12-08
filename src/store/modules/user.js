/* 
管理登陆用户数据的 vuex 子模块
*/
import { getUserTempId } from '@/utils/userAbout'
const state = {
	// getUserTempId()//获取临时标识的id
	userTempId: getUserTempId()
}
const mutations = {}
const actions = {}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}
