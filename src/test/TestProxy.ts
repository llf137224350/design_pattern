import ProxyImage from '../proxy/ProxyImage';
import createElementAppendBody from '../utils/Utils';
/*
 * @Author: い 狂奔的蜗牛 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 11:17:17
 * @Last Modified time: 2020-04-06 13:41:43
 * @Desc：测试代理
 */
export default function () {
    console.log('====代理模式====');
    // 外界无法直接访问被代理对象image,只能通过代理方式访问
    const proxy = new ProxyImage('1.png');
    proxy.display();

    createElementAppendBody('代理模式');
}