/*
	后端数据发起
 */

import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'
import defaultSettings from '@/settings'
import { Message } from 'element-ui'


const service = axios.create({
	baseURL:defaultSettings.apiURL
})
// 重写弹窗，判断在已经有弹窗的情况下不出现弹窗
class hasMessage {
	success(options,single = true){
		this[hasMessage]('success', options, single)
	}
	warning(options,single = true){
		this[hasMessage]('warning', options, single)
	}
	info(options,single = true){
		this[hasMessage]('info', options, single)
	}
	error(options,single = true){
		this[hasMessage]('error', options, single)
	}

	[hasMessage](type,options,single){
		if(single){
			if(document.getElementsByClassName('el-message').length === 0){
				Message[type](options)
			}
		}else{
			Message[type](options)
		}
	}
}
//定义弹窗
const MessageOnce = new hasMessage()

service.interceptors.request.use(
	config => {
		if(store.getters.token){
			config.headers['Authorization'] = 'Bearer ' + getToken()
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => response,
	error => {
		if(error.response.status === 401){
			MessageOnce.error({
				message:'登录超时，请重新登录',
				duration:0
			})
			store.dispatch('logout')
			router.push({name:'Login'})
		}
		return Promise.reject(error)
	}
)

export default service