/*
 * @Author: い 狂奔的蜗牛 
 * @Date: 2020-04-06 11:12:45 
 * @Last Modified by: い 狂奔的蜗牛
 * @Last Modified time: 2020-04-06 11:13:07
 * @Desc：image类不提供给外界访问，类似公司内网
 */
export default class Image {
    private url: string;
    public constructor(url: string) {
        this.url = url;
        this.loadImage();
    }
    public display () {
        console.log('display image'); 
    }
    public loadImage () {
        console.log(`loading ${this.url} from disk。。。`); 
    }
}