// 冒泡算法
// 1 比较两个相邻的元素，如果后一个比前一个大，则交换位置
// 2 第一轮的时候最后一个元素应该是最大的一个
// 3 按照第一步的方法进行两个相邻的元素的比较，由于最后一个元素已经是最大的了，所以最后一个元素不用比较
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {  // len-1 表示最后一个元素是不需要交换的(因为后面元素交换了)
        for (let j = 0; j < len - 1 - i; j++) { // 注意后面需要 -i
            if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
                let temp = arr[j + 1];        // 元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let arr = [3, 5, 1, 2, 7, 8, 4, 5, 3, 4];
let res = bubbleSort(arr);
console.log(res);