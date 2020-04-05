import Product from './Product';
// 工厂
export default class Factory {
    // 工厂静态方法，返回一个产品的实例
    public static createProduct (name:string):Product {
        return new Product(name);
    }
}