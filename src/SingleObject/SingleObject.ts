/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 08:58:23 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 09:03:55
 * @Desc：单例设计模式演示
 */

export default class SingleObject {
    // 获取实例
    public static getInstance():SingleObject {
        // 判断是否创建过，如果创建过，则直接返回
        if (this.instance === null) {
            this.instance = new SingleObject();
        }
        return this.instance;
    }
    // 唯一的实例
    private static instance: SingleObject = null;
    //  私有化构造函数，外界无法new
    private constructor() {

    }
}