/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 13:30:08 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 13:50:33
 * @Desc：迭代器实现
 */
export default class Iterator {
    private index: number; // 索引
    private list: any; // 有序数据集合
    public constructor(list: any) {
        this.index = 0;
        this.list = list;
    }
    public next(): any {
        if (this.hasNext()) {
            return this.list[this.index++];
        }
        return null;
    }
    public hasNext(): boolean {
        if (this.index >= this.list.length) {
            return false;
        }
        return true;
    }
}