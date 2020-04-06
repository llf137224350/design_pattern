/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 13:33:18 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 13:35:56
 */
import Iterator from './Iterator';
export default class IteratorFactory {
    //  私有化构造函数，不让new
    private constructor() {}
    // 获取一个迭代器
    public static getIterator(arr:any[]):Iterator {
        return new Iterator(arr);
    }
}