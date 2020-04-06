import Product from './Product';
/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 08:58:23 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 08:59:06
 * @Desc：工厂设计模式演示
 */
export default class Factory {
    // 工厂静态方法，返回一个产品的实例
    public static createProduct (name:string):Product {
        return new Product(name);
    }
}