import json
from locust import TaskSet, task
from locust.contrib.fasthttp import FastHttpUser
import json
url = None

class UserTask(TaskSet):
    header = {'Content-Type': 'application/json'}

    def on_start(self):
        global url
        import pymysql
        # 打开数据库连接
        self.db = pymysql.connect("localhost", "root", "x", "api_test",port=3306)

        # 使用 cursor() 方法创建一个游标对象 cursor
        cursor = self.db.cursor()

        # 使用 execute()  方法执行 SQL 查询
        cursor.execute("use api_test;")
        cursor.execute("select * from api_test_pressure where id =1;")

        # 使用 fetchone() 方法获取单条数据.
        data_ = cursor.fetchone()
        self.data = json.dumps(eval(data_[2]))
        self.header=json.dumps(eval(data_[3]))
        url = data_[1]


    @task
    def old_transful(self):
        data_ = json.dumps(self.data)
        self.header = {"Content-Type": "application/json", "Accept-Encoding": "gzip,deflate"}
        r = self.client.post("", data=data_,headers = self.header)
        # assert json.loads(r.text) is not None
        pass

    def on_stop(self):
        '''销毁数据，每个虚拟用户只执行一次'''
        # self.client.post("https://www.baidu.com")
        # 关闭数据库连接
        self.db.close()


class WebsiteUser(FastHttpUser):
    import pymysql
    # 打开数据库连接
    db = pymysql.connect("localhost", "root", "x", "api_test")

    # 使用 cursor() 方法创建一个游标对象 cursor
    cursor = db.cursor()

    # 使用 execute()  方法执行 SQL 查询
    cursor.execute("use api_test;")
    cursor.execute("select * from api_test_pressure where id =1;")

    # 使用 fetchone() 方法获取单条数据.
    data_ = cursor.fetchone()
    url = data_[1]
    host = url
    tasks = [UserTask]