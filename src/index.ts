/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 09:13:36 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 12:12:32
 */
import testFactory from './test/TestFactory';
import testSingleObject from './test/TestSingleObject';
import testAdapter from './test/TestAdapter';
import testDecorator from './test/TestDecorator';
import testProxy from './test/TestProxy';
import testObserver from './test/TestObserver';
// 测试工厂模式
testFactory();
// 测试单例模式
testSingleObject();
// 测试适配器模式
testAdapter();
// 测试装饰器模式
testDecorator ();
// 代理模式
testProxy();
// 观察者模式
testObserver();