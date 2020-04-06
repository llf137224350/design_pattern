/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 09:34:41 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 09:51:44
 * @Desc：我是德国某某东西
 */
export default class GermanPlug {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public toString():string {
        return `德国标准${this.name}`;
    }
}