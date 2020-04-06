import Image from './Image';
/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 11:13:59 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 11:15:49
 * @Desc：代理image 这个类相当于明星经纪人，image则是明星
 */
export default class ProxyImage{
    private image:Image;
    public constructor(url:string) {
        this.image = new Image(url);
    }

    public display () {
        // 干点啥
        this.image.display();
    }
}