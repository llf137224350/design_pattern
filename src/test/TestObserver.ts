import Subject from '../observer/Subject';
import Observer from '../observer/Observer';
import createElementAppendBody from '../utils/Utils';
/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 12:06:52 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 13:42:35
 * @Desc：观察者模式测试
 */
export default function () {
    console.log('====代理模式====');
    // 定义主题 
    const subject = new Subject();
    // 定义观察者
    new Observer('观察者1号', subject);
    new Observer('观察者2号', subject);
    // 修改主题状态,看观察者是否对应收到通知
    console.log('2s后修改状态值为1');

    setTimeout(() => {
        subject.setState(1);
    }, 2000);

    createElementAppendBody('观察者模式');
}