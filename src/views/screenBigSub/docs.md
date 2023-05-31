1. 封装layout组件
2. 封装 card 组件
3. 封装头部 homeIcon, showTime组件
4. 封装日期radio和日期范围联动组件
5. 整理页面开发规范，例：
   1. 每个模块的默认配置 cardConfig 变量
   2. 展示用的 配置信息 showMain，第一级表示页面展示哪些模块，模块配置默认使用 cardConfig，可以替换、扩展该配置。
6. 封装面包屑导航
7. 根据路由query，控制页面展示哪些模块
8. 抽离、封装公共逻辑
9. 

如何使用
1. 配置默认 cardConfig 变量（配置自己页面信息）
2. 在 showMain 中配置实际展示的模块信息
3. 每个模块会接收 startTime、endTime两个变量，监听此变量用于更新数据
4. 每个模块会接收点击事件，点击 echart 标签时，调用此事件并把必要的参数传递进来


剩余
创建二级页面模板
1. 二级页面总共有多少布局方案
2. 点击事件改变路由需要传递哪些事件
   1. 路由事件的逻辑处理
3. 面包屑组件和逻辑处理


参数处理
1. 默认有一个受理总量 level = 1
   1. 
   2. 参数为0不做动作
   3. 参数为1或2没有超出范围就进行逻辑处理
   4. 
2. 利用 sessionStorage 对数据进行默认的存取操作
3. 参数可以不携带level = 1, 默认是1
4. 监听点击事件路由push，改变query
5. 