## 前端经验积累
        
        ## 1. 微信小程序【正式环境】在访问阿里云OSS图片的时候，阿里云OSS会有防盗链，线上小程序会报403访问错误

          【解决办法】运维在阿里云OSS配置防盗链域名白名单，域名：https://servicewechat.com

        ## 2. 支付宝小程序在联调的时候，真机环境和IDE环境发送http请求，IDE环境可以请求头随意，但是真机环境必须是form表单请求，需要后端处理

## 小程序和H5网页交互注意点
        1. 所有需要授权的接口，比如扫一扫，获取地理定位，相机等，需要用和小程序绑定的微信公众号的appid和secret，否则会出现权限错误

        2. 小程序内嵌H5网页调取微信扫一扫的时候，可以预先在小程序中自定义一个扫码调取页面，然后把结果回传给路径参数，在网页中可以用store保存起来

        3. 小程序扫一扫出来的结果是字符串，对象结构的时候要特别注意格式校验

        4. 微信内嵌H5获取地理定位的时候，有些机型是不支持的，所以可以提前获取地理位置权限，然后通过参数传递给H5，点击的时候做假获取显示，要注意小程序wx.openSetting接口