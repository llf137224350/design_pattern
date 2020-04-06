import Observer from './Observer';

/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 11:55:37 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 12:02:58
 * @Desc：主题
 */
export default class Subject {
    private state:number; // 状态
    private observers: Observer[]; // 所有观察者

    public constructor () {
        this.state = 0;
        this.observers = [];
    }

    public setState(state:number):void {
        this.state = state;
        // 通知所有观察者
        this.notifyAllObserver();
    }

    public getState ():number {
        return this.state;
    }
    // 通知所有观察者
    public notifyAllObserver () : void {
        this.observers.map((observer) => {
            observer.update(this.state);
        });
    }
    // 添加观察者
    public attach (observer:Observer) {
        this.observers.push(observer);
    }
}