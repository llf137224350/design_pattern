// 产品类
export default class Product {
    // 产品名字
    private name: string;
    // 构造函数
    constructor(name: string) {
        this.name = name;
    }
    // 方法
    public toString():string {
        return `我是${this.name}的toString方法！`;
    }
}