## Simple Note（WEB - v2.0） 
跨平台文字信息传递 [http://wenzikuaichuan.herokuapp.com/](http://wenzikuaichuan.herokuapp.com/)

## How to run it
You should run server side first: [wzkc-server](https://github.com/IOriens/wzkc-server)
```
# install deps (remember to use proxy in china)
npm i

# run web application 
npm run dev
```


## 使用场景 
- 代替qq传输文字（比如说不能使用，不想使用）
- 在kindle打开链接

## State Design Process
1. Design the state tree.
2. List associate actions
3. Implement reducers

## Schedules
- [x] a标签在移动端文字过长会有截断（word-wrap: break-word;）
- [x] 移动端适配
- [ ] 提交后内容自动刷新（跨组件通信，redux。。。）
- [ ] 登录注册
- [ ] react router4（现在不用router了）
- [ ] jwt 登录注册
- [ ] pwa（可以添加到主屏幕上）
- [ ] 右滑 手势操作
- [ ] 点击可修改
- [ ] markdown support
- [ ] 频繁刷新后端会炸。。要买阿里云。。。
- [x] 不以http起头的链接不会跳转
- [x] 清除输入内容 
- [x] reverseBug
- [x] bug: 识别到URL会将整段文字转换为链接（已解决：replace第二个参数可以是函数）
- [x] 改版 有草图和设计稿
- [x] 上传有随机bug(原因：reset没有preventDefault导致表单提交)