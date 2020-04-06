import IteratorFactory from '../iterator/IteratorFactory';
import createElementAppendBody from '../utils/Utils';
export default function () {
    console.log('====迭代器模式====');
    const arr = [1, 2, 9, 4, 5, 6];// 有序数据集合
    const iterator = IteratorFactory.getIterator(arr);
    while (iterator.hasNext()) {
        console.log(iterator.next());

    }
    createElementAppendBody('迭代器模式');
}