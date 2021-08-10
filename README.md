# python3.6.3 Django 2.0.2框架

# 版本更新：
## v2.3<br>
引入docker部署,由于采用的docker，基础镜像为centos，所以Windows下部署仍然可以使用定时任务
```
 docker-compose up
```
## v2.2<br>
1.新增钉钉登录<br>
```
1.先在钉钉开发平台上创建账号<br>
2.替换dingConfig.py里的appid和APPSECRET<br>
3.修改前段login.vue里的回调地址<br>
  ```
## V2.1.2<br>
1.增加导出测试用例功能<br>
## V2.1.1<br>
1.新增swaggerUI界面，访问地址127.0.0.1:8000/docs/<br>
## V2.1<br>
1.优化前端代码，适配屏幕分辨率，未做浏览器兼容性，目前只在chrome上浏览正常<br>
2.新增mock功能，api管理模块可启动，关闭mock，启动后，通过访问http://127.0.0.1:8000/mock/+真实url，可返回mock信息
## V2.0<br>
重构接口代码，引入反序列化方式，修改接口为基于类的方式，因修改大量后台接口代码，前端未更新，所以目前前端调用接口会出现大量问题，目前平台暂不可用，后续更新

## 系统声明：
---
1.本系统采用Django REST framework编写接口，前端页面采用比较容易上手的vue+elementUI<br>
2.初步学习web开发，接口统一采用基于方法的方式编写，后续引入权限系统，并修改成基于类的方法<br></br>

## 使用方法：
---
### 1.安装Python3环境<br>
### 2.下载代码到本地并解压<br>
### 3.cmd到根目录下安装相关依赖包<br>
```bash
 pip install -i https://pypi.doubanio.com/simple/ -r requirements.txt
 pip install https://github.com/darklow/django-suit/tarball/v2
```
### 4.安装mysql数据库，配置数据库连接，进入api_automation_test/settings.py<br>
```python
DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        'ENGINE':'django.db.backends.mysql',     # 数据库类型，mysql
        'NAME':'api_test',            #  database名
        'USER':'root',               # 登录用户
        'PASSWORD':'123456',        #  登录用户名
        'HOST':'127.0.0.1',        # 数据库地址
        'PORT':'3306'              # 数据库端口
    }
}
```
### 5.cmd到根目录下，让 Django 知道我们在我们的模型有一些变更<br>
```bash
 python manage.py makemigrations
```
### 6.创造或修改表结构<br>
```bash
 python manage.py migrate 
```
### 7.创建超级用户，用于登录后台管理<br>
```bash
 python manage.py createsuperuser
```
### 8.安装VUE环境，下载node.js并配置环境，下载npm包管理器<br>
```bash
 cd api_automation_test/ && npm init -y 
 npm conf set registry https://registry.npm.taobao.org
 npm install --global vue-cli
```

### 9.cmd进入frontend目录下，运行npm install安装相关依赖包<br>
```bash
 npm install node-sass
 npm install
```

### 10.打包<br>
```bash
 npm run build
```
### 11. gunicorn 运行启动django服务<br>
```bash
 gunicorn --worker-class=gevent --worker-connections=1000 -w 4 api_automation_test.wsgi -b 0.0.0.0:8000 -c manage.py
```

### 12, 配置环境 
```bash
文件: api_automation_test/frontend/src/api/api.js 
配置环境变量  
    export const test = 'http://127.0.0.1:8000'; 
    export const pretest = 'http://127.0.0.1:8001';
   
```