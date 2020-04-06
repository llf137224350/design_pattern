import Circular from '../decorator/Circular';
import CircularDecorator from '../decorator/CircularDecorator';
import createElementAppendBody from '../utils/Utils';
/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 10:27:26 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 13:42:05
 * @Desc：测试装饰器
 */
export default function () {
    console.log('====装饰器模式====');
    // 创建一个圆
    const circular = new Circular();
    // 画一个圆
    circular.draw();
    console.log('-----------华丽分割线-----------');

    // 我想画个边框？
    // 来个装饰器 不改变现有对象，对现有对象进行扩充
    const circularDecorator = new CircularDecorator(circular);
    circularDecorator.draw();

    createElementAppendBody('装饰模式');
}