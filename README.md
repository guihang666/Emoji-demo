# vue表情图标
两种方式
1.html渲染的方式 
	需要使用精灵图图片 生成好的配套css class属性 
	通过replace 替换成 html 标签 v-html 渲染到页面上显示
	`:text: => <span class="emoji-text"></span>`

2.【推荐】字符图标 😃😃😃
	推荐使用这个插件 v-emoji-picker
	可以跟字符串一样使用
	不用设置 contenteditable[h5 可编辑属性] 也可以实现input 输入框显示表情
	
## 安装教程

##### Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

##### Compiles and minifies for production
```
npm run build
```

##### Run your tests
```
npm run test
```

##### Lints and fixes files
```
npm run lint
```

##### Run your unit tests
```
npm run test:unit
```

##### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
