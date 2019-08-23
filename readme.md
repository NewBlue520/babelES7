# babel学习

## babel7配置
### 需要的包
```
yarn add @babel/core @babel/cli @babel/preset-env --dev

yarn add @babel/polyfill
```
### babel.config.js 的配置文件

### babel 插件 plugins 
@babel/core @babel/cli
 该包主要可以在终端使用命令
```
./node_modules/.bin/babel src --out-dir lib
or
npx babel src --out-dir lib
```

@babel/plugin-transform-arrow-functions 
将箭头函数转换成普通函数
```
./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
or
npx babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

@babel/preset-env
 将es2015+彻底转换
```
./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
or
npx babel src --out-dir lib --presets=@babel/env
```
@babel/polyfill 
垫片

注意，_使用 --save 参数而不是 --save-dev，因为这是一个需要在你的源码之前运行的 polyfill。_

@babel/plugin-transform-runtime

如果使用了垫片（@babel/polyfill）就不需要使用该插件了会有冗余

babel-plugin-transform-es2015-modules-commonjs


### Preset 的排列顺序
Preset 是逆序排列的（从后往前）。

