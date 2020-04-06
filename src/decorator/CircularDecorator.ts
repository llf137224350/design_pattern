import Circular from './Circular';
/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 10:22:08 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 10:36:13
 * @Desc：我是圆的装饰器
 */
export default class CircularDecorator {
    // 圆
    private circular: Circular;

    public constructor(circular: Circular) {
        this.circular = circular;
    }

    public draw () {
        this.circular.draw();
        this.drawBorder();
    }
    public drawBorder () {
        console.log('我在画圆的边框');
    }

}