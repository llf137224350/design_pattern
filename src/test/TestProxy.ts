import ProxyImage from '../proxy/ProxyImage';
/*
 * @Author: い 狂奔的蜗牛 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 11:17:17
 * @Last Modified time: 2020-04-06 11:21:00
 * @Desc：测试代理
 */
export default function () {
    console.log('====代理模式====');
    // 外界无法直接访问被代理对象image,只能通过代理方式访问
    const proxy = new ProxyImage('1.png');
    proxy.display();

    const mode = document.createElement('div');
    mode.innerText = '代理模式';
    const ul = document.createElement('ul');

    const li = document.createElement('li');
    li.innerText = '浏览器开发模式下，查看效果';


    ul.appendChild(li);
    document.body.appendChild(mode);
    document.body.appendChild(ul);
}