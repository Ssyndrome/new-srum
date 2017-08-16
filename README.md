# scrum
## 170816
- [题目](https://school.thoughtworks.cn/bbs/topic/625/%E4%BD%93%E8%83%BD%E5%A4%A7%E6%AF%94%E6%8B%BC%E9%A2%98%E7%9B%AE-8-16-wed-round2)：找出数组 arr 中重复出现过的元素。
- 测试结果：```数组[1,3,3,3,3]中重复的数字有3。```
- 其中的问题：变量设置的有点多。
## 170815
- [题目](https://school.thoughtworks.cn/bbs/topic/618/%E4%BD%93%E8%83%BD%E5%A4%A7%E6%AF%94%E6%8B%BC%E9%A2%98%E7%9B%AE-8-15-tues-round1):统计数组 arr 中值等于 item 的元素出现的次数。
- 测试结果：```数组1,2,3,1中1出现的次数是2次。
          数组4,5,2,3中1出现的次数是0次。```
- 其中的问题：要求不能用for循环，就用了forEach遍历语句hhh。
## 170814
- 题目：设计一个算法，找出只含素因子3，5，7 的第 k 大的数。
- 测试结果：```只含素因子3、5、7的第5大的数为15。```
- 其中的问题：这道题曾经有两个思路，第一个是将排除法，第二个是添加法。排除法需要很长的判断条件，思路容易混乱，改了十分钟代码后我放弃了，转而投奔添加法。结果容易了很多。在原来数组的基础上与素因子相乘，push到数组后去重排序即可。
## 170813
- [题目](https://school.thoughtworks.cn/bbs/topic/613/%E4%BD%93%E8%83%BD%E5%A4%A7%E6%AF%94%E6%8B%BC%E9%A2%98%E7%9B%AE-8-13-sun-round6)：给定一个未排序的整数数组，找到其中位数。
- 测试结果：```数组8,7,6,5,0,3的中位数为
          5.5。```
- 其中的问题：在输出最后的结果时，想把原来的无序数组输出，结果输出的始终是sort后的数组，无奈之下，只能在码头添加了`console.log`。
## **170812**
- [题目](https://school.thoughtworks.cn/bbs/topic/607/%E4%BD%93%E8%83%BD%E5%A4%A7%E6%AF%94%E6%8B%BC%E9%A2%98%E7%9B%AE-8-12-sat-round5)：打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
- 测试结果：```所有的水仙花数为153,370,371,407```
- 其中的问题：可以说是很笨的方法了，可是不知道有什么更简便的方法，等和小伙伴们交流吧。
## **170811**
- [题目](https://school.thoughtworks.cn/bbs/topic/600/%E4%BD%93%E8%83%BD%E5%A4%A7%E6%AF%94%E6%8B%BC%E9%A2%98%E7%9B%AE-8-11-fri-round4)：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
- 测试结果：```1->2->4->5```  
- 其中的问题：刚开始准备用正则表达式实现，结果在如何在字符串中删除一个输入变量这个程序上纠结了很久
## **170810**
- [题目](https://school.thoughtworks.cn/bbs/topic/592/%E4%BD%93%E8%83%BD%E5%A4%A7%E6%AF%94%E6%8B%BC%E9%A2%98%E7%9B%AE-8-10-turs-round3)：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
- 测试结果
```[1,1,3,2,3]中不同的数为2```
- 其中的问题：弄混了slice与splice，浪费了几分钟时间。
## **170809**
- [题目](https://school.thoughtworks.cn/bbs/topic/582/%E4%BD%93%E8%83%BD%E5%A4%A7%E6%AF%94%E6%8B%BC%E9%A2%98%E7%9B%AE-8-9-wed-round2)：查找斐波纳契数列中第 N 个数。
- 测试结果
```裴波拉契数列的第10个数是34```
- 其中的问题：在GitHub上改了仓库的名字，结果本地开始出现各种莫名其妙的错误。干脆整个删除了再clone一遍。
## **170808**
- 题目：将一个正整数分解质因数。例如：输入90,打印出90=2，3，3，5。
- 测试结果
```90=2，3，3，5```
- 其中的问题：代码写得很快，稍微想了一会可以写得出来，可是测试用例写了之后无法`npm test`成功，就直接用`console.log()`实现了。
