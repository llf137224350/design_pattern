import Factory from '../factory/Factory';
/**
 * 测试工厂模式
 */
export default function testFactory(): void {
    // 创建实例
    const xiongDa = Factory.createProduct('熊大');
    console.log(xiongDa.toString());

    const xiongEr = Factory.createProduct('熊二');
    console.log(xiongEr.toString());
}