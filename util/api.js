const BASE_URL = 'https://api-hmugo-web.itheima.net/'
export const Request = (options) => {
	let paramUrl = '';
	if ((options.method ? options.method.toLocaleUpperCase() : 'GET') === 'GET') {
		if (options.data && JSON.stringify(options.data) !== '{}') {
			paramUrl = '?'
		} else {
			paramUrl = options.url;
			return
		}
		for (var i in options.data) {
			paramUrl += `${i}=${options.data[i]}&`;
		};
		const lastIndexNum = paramUrl.lastIndexOf('&')
		if (lastIndexNum === paramUrl.length - 1) {
			paramUrl = paramUrl.slice(0, paramUrl.length - 1);
		}
	} else {
		paramUrl = options.url;
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + paramUrl,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				// if (res.data.status !== 0) {
				// 	return uni.showToast({
				// 		title: '获取数据失败'
				// 	})
				// }
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}
