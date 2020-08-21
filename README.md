# 前端模板项目

## 更新操作
本项目更新请强制同步：https://gitee.com/realucas/vue_template

## 项目说明
本项目是前端团队使用Vue开发项目的模板项目。
更多请见：[vue_template](https://github.com/LucasGoodman/vue_template)

## 运行前须知
- 请检查`public/index.html`中`title`字段修改为项目所需title
- 请检查`package.json`中`name`和`version`字段修改
- 检查`README.md`中关于项目说明修改

## 安装依赖
```shell script
npm install
```

### 本地运行
```shell script
npm run serve
```

### 打包开发版
```shell script
npm run build:dev
```

### 打包正式版
```shell script
npm run build:prod
```

### 运行`npm run build`命令，生成对应的打包分析页面
```shell script
npm run report
```

### Eslint代码检查
```shell script
npm run lint
```

### Eslint代码自动修复

```shell script
# 只能修复部分问题，有些问题需要手动修复
npm run lint:fix
```
**Eslint工具说明：**
- 本项目所用命令默认只会检查`src`目录下所有的`js`和`vue`文件。
- `.eslintignore`文件默认添加了对`src/assets`目录下所有js文件的忽略

### Stylelint代码检查
```shell script
npm run stylelint
```

### Stylelint代码自动修复
```shell script
# 只能修复部分问题，有些问题需要手动修复
npm run stylelint:fix
```

**Stylelint工具说明：**
- 本项目所用命令默认只会检查`src`目录下所有的`html,vue,css,less`文件。
- 在`src/assets`目录下新增样式文件会进行检测，如果有不需要检测（如第三方样式、已经压缩的样式）的文件请添加至`.stylelintignore`
- 如果在`src/assets`目录下添加了需要忽略的文件，但是检查未通过，可以将package.json中这段代码暂时删除（删除但不要提交到代码仓库）：
```$json
"src/**/*.{html,css,less,vue}": [
     "stylelint --fix",
     "git add"
 ]
```

## 私有化部署
1. 将`.env.privatization`Vue应用环境变量文件中的需要动态变化的参数改为`变量名=#变量名`的形式。
2. 在`Dockerfile.privatization`文件中添加docker运行环境变量。
3. 在`./nginx/run.sh`添加docker运行环境变量对Vue应用环境变量替换，参考第三行。
4. Vue应用构建命令`npm run build:privatization`。
5. docker运行命令，通过`-e`指定环境变量:
```shell script
docker run --name DOCKER_NAME -p 8080:80 -e VUE_APP_TEST=TEST  -d IMAGE_NAME:TAG
```
**默认nginx代理地址可通过`VUE_APP_SERVER_URL`变量配置，路径格式为完整url，如`http://27.0.0.1`（地址结尾请勿加`/`）**



