import Subject from './Subject';
/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 11:57:22 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 12:13:17
 * @Desc：观察者
 */
export default class Observer {
    private name:string;
    private subject:Subject;
    public constructor(name:string,subject:Subject) {
        this.name = name;
        // 把自己添加到主题中
        this.subject = subject;
        this.subject.attach(this);
    }
    public update (state:number) {
        console.log(`${this.name} 收到状态通知，state=${state}`);
    }
}