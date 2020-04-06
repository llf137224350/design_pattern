import GermanPlug from '../adapter/GermanPlug';
import ChinaPlugAdapter from '../adapter/ChinaPlugAdapter';
/*
 * @Author: い 狂奔的蜗牛 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 09:42:01
 * @Last Modified time: 2020-04-06 09:49:59
 * @Desc：适配器测试
 */
export default function () {
    // 我有一个德国插头
    const germanPlug = new GermanPlug('电源插头');
    // 但是我没法用，接口不对
    // 所以我淘宝买个中国标准的适配器
    const chinaPlugAdapter = new ChinaPlugAdapter(germanPlug);
    // 适配了
    // 开始充电
    console.log(chinaPlugAdapter.toString());

    const mode = document.createElement('div');
    mode.innerText = '适配器模式';
    const ul = document.createElement('ul');
    const germanLi = document.createElement('li');
    germanLi.innerText = germanPlug.toString();

    const chinaLi = document.createElement('li');
    chinaLi.innerText = chinaPlugAdapter.toString();

    ul.appendChild(germanLi);

    ul.appendChild(chinaLi);
    document.body.appendChild(mode);
    document.body.appendChild(ul);

}