# Use antd in create-react-app

## Step by Step Documentation

- English: https://ant.design/docs/react/use-with-create-react-app
- 中文：https://ant.design/docs/react/use-with-create-react-app-cn

## Preview

```bash
$ mkdir test && cd test
$ git clone https://github.com/nianhua110/create-react-app-antd.git
$ npm install
$ npm start
```

## What more

- [antd](http://github.com/ant-design/ant-design/)
- [babel-plugin-import](http://github.com/ant-design/babel-plugin-import/)
- [less-loader](https://github.com/webpack/less-loader)
## proxy 
添加proxy,便于本地化调试。
本地化后端代码在 proxy/server.js 中，您可以根据自己的需求添加相应的响应返回。
后端使用的端口是5002,如需修改请自行修改 proxy.server.js中的端口。
