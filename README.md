# design_pattern

javascript设计模式

| 设计模式 | 模式代码 | 测试代码 | 简单描述 |
| - | -| - | - |
| 工厂模式 | src/factory | index.ts/testFactory() | 调用工厂生成需要的对象 |
| 单例模式 | src/SingleObject | index.ts/testSingleObject() | 无法通过new关键字创建实例，只能通过暴露的方法获取一个实例，调用多少次都只有一个，且都是相同的一个对象。
| 适配器模式 | src/adapter | index.ts/testAdapter() | 现有逻辑不符合预期需要，通过装换为需要的形式，如vuejs中的computed计算属性。
| 装饰器模式 | src/decorator | index.ts/testDecorator() | 不改变现有对象，对其进行功能扩充，比如手机与手机壳的关系 |
| 代理模式 | src/proxy | index.ts/testProxy() | 外界无法直接访问被代理对象，需要通过代理进行，类似于明星与经纪人的关系 |
| 观察者模式 | src/observer | index.ts/testObserver() | 订阅、通知 |
| 迭代器模式 | src/iterator | index.ts/testIterator() | 不同数据类型有序数据集合遍历 |

## 代码运行方式

```bash
1、cd design_pattern
2、npm i
4、npm run dev

```
