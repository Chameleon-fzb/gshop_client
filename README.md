# gulishop-client

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



``` js 
  const service = axios.create({
    baseURL:'/api',
    timeout:2000
  })

  service.interceptor.request.use(config=>{
    return config
  })

  service.interceptor.response.use(
    response=>{

    },error=>{

  })
```
```js
Promise.resolve(config)
.then(config=>{
  return config
})
.then(config=>{
  return new Promise((resolve,reject)=>{
    // 根据 config 使用 xhr 发 ajax 请求
    // 如果成功了 创建 response 对象
    resolve(config)
    // 如果失败了, 创建 error 对象
    reject(error)
  })
}).then(response=>{//响应拦截器 成功 回调
  return response.data
},error=>{//响应拦截器失败的回调
throw error
// return Promise.reject(error)

})

```