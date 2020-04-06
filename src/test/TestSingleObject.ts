/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 09:00:43 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 09:11:50
 * @Desc：测试单例设计模式
 */
import SingleObject from '../SingleObject/SingleObject';

export default function () {
    // ts会提示报错 类“SingleObject”的构造函数是私有的，仅可在类声明中访问。
    // const instance = new SingleObject();

    const instance1 = SingleObject.getInstance();

    const instance2 = SingleObject.getInstance();

    console.log(instance1 === instance2);

    // 创建实例
    const mode = document.createElement('div');
    mode.innerText = '单例模式：';
    const ul = document.createElement('ul');

    // 创建一个对象
    const instanceElement1 = document.createElement('li');
    instanceElement1.innerText = '获取实例一';
    // 创建另一个对象
    const instanceElement2 = document.createElement('li');
    instanceElement2.innerText = '获取实例二';

    // 创建instance === instance2对比结果
    const instanceAndInstance2 = document.createElement('li');
    instanceAndInstance2.innerText = 'instance1 === instance2：' + (instance1 === instance2);

    // 添加网页
    ul.appendChild(instanceElement1);
    ul.appendChild(instanceElement2);
    ul.appendChild(instanceAndInstance2);

    document.body.appendChild(mode);
    document.body.appendChild(ul);
}