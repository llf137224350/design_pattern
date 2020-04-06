import GermanPlug from './GermanPlug';
/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 09:35:43 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 09:51:21
 * @Desc：中国插头适配器
 */
export default class ChinaPlugAdapter {
    public germanPlug: GermanPlug;
    // 给我一个德国插头
    public constructor(germanPlug: GermanPlug) {
        this.germanPlug = germanPlug;
    }
    public toString(): string {
        // 德国插头特性
        const germanPlugToString = this.germanPlug.toString();
        return `我是经过中国标准适配器适配后的：${germanPlugToString},你可以使用了。`;
    }
}