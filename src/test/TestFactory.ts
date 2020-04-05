import Factory from '../factory/Factory';
/**
 * 测试工厂模式
 */
export default function testFactory(): void {
    // 创建实例
    const mode = document.createElement('div');
    mode.innerText = '工厂模式：';
    const ul = document.createElement('ul');

    // 创建一个对象
    const xiongDa = Factory.createProduct('熊大');
    const xiongDaElement = document.createElement('li');
    xiongDaElement.innerText = xiongDa.toString();
    // 创建另一个对象
    const xiongEr = Factory.createProduct('熊二');
    const xiongErElement = document.createElement('li');
    xiongErElement.innerText = xiongEr.toString();
    // 添加网页
    ul.appendChild(xiongDaElement);
    ul.appendChild(xiongErElement);

    document.body.appendChild(mode);
    document.body.appendChild(ul);

}