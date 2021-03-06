![前言](https://upload-images.jianshu.io/upload_images/5415189-90d2970b0c09108e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


刷完了udacity上JS的入门课，纯粹为了学习开发小程序而补的前端知识。

一开始在SoloLearn上最先接触的JS，只用了三个小时不到就把证书刷下来了，这毕竟是我在SoloLearn的第一个证书，先炫一下哈！

![SoloLearn证书](https://upload-images.jianshu.io/upload_images/5415189-57405a5d2fc54e65.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


进入正题，JavaScript起初为了出名特地把名字取得和Java很像，因为Java一直都很火，Java web, 移动开发，服务器。当然如果学过java在去学JS得话，就会感觉者这门语言非常得友好，沿袭了Java的大部分风格，这里就说几点不同吧。

## 1. 数据类型
#####1.1自动判断类型。
![JavaScript的数据类型](https://upload-images.jianshu.io/upload_images/5415189-1206601061b03fb5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在传统的语言里，要定义变量，都要是使用int ，float , double ,boolean这些关键字，但是在JS里完全不用。直接使用var关键字，变量的数据类型完全由系统自动判断。

```
#java8,c,c++都要这么写

int age= 25;
float pi = 3.14;

#听说Java9也使用var 自动判断，不过，本人还是坚守Java8.
```

而在JS里就可以这么写：
```
var name = 'javascript';
var age = 25;
var pi = 3.14;
var message = ['hello', 'nihao'];

//注：JavaScript里single quote 和 double quote 没有区别，本人更加倾向single quote,JS好多地方和python很像。
```

##### 1.2 字符串拼接
javaScript的字符串自动拼接，可以在这里把number直接转成字符串。
![字符串自动拼接](https://upload-images.jianshu.io/upload_images/5415189-ca17f5a347d43654.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**注：console.log()是输出日志，相当于Java的System.out.print()。**

-----
##### 1.3 绝对相等
javascript使用了自动判断类型，所以使用===表示数值和数据类型都相等，而==仅仅表示数值相等。
![JavaScript绝对相等](https://upload-images.jianshu.io/upload_images/5415189-83b9b2a9a9dfa14d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
---

![实际测试](https://upload-images.jianshu.io/upload_images/5415189-cf3c8dc3bc6a79ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![比较运算符](https://upload-images.jianshu.io/upload_images/5415189-3a4bd6f0dce5df63.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 2.真假值
在JavaScript里，视为真值的有non-zero number, non-empty string, object, array, true。
![Truthy Values](https://upload-images.jianshu.io/upload_images/5415189-207e8750e8aaec98.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


在JavaScript里，视为假值的有null, undefined, 0, empty string,  NaN, fasle。
![Fasly Values](https://upload-images.jianshu.io/upload_images/5415189-3ee6b6c0b64f57d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



*三元运算符是从c语言一直沿袭下来的，Java也有。不过没怎么常用。*
![三元运算符](https://upload-images.jianshu.io/upload_images/5415189-e992e43a4809b1f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 3.函数
JavaScript里函数使用function()关键字。
![函数](https://upload-images.jianshu.io/upload_images/5415189-6341165c0dbe9c38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 3.1 返回与日志（输出与返回）
![console.log()](https://upload-images.jianshu.io/upload_images/5415189-a5381bb23b172984.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![undefined](https://upload-images.jianshu.io/upload_images/5415189-98d4425e4b7da977.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![输出与返回](https://upload-images.jianshu.io/upload_images/5415189-8d4fa2a5be50297a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![输出与返回](https://upload-images.jianshu.io/upload_images/5415189-273a4a9a5db09305.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 3.2 作用域
![引用传递](https://upload-images.jianshu.io/upload_images/5415189-b17a6a196c0a981b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![值传递](https://upload-images.jianshu.io/upload_images/5415189-69f0d611393edd8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 3.3 提升
1.JavaScript 会将函数声明和变量声明提升到当前作用域的顶部。

2.变量赋值不会提升。

3.在脚本的顶部声明函数和变量，这样语法和行为就会相互保持一致。
![提升](https://upload-images.jianshu.io/upload_images/5415189-1ad1f9629d81e67a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![提升导致的错误（1）](https://upload-images.jianshu.io/upload_images/5415189-75d02f9456f49d1a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![提升导致的错误（2）](https://upload-images.jianshu.io/upload_images/5415189-d8fb279d96d7d789.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 3.4 函数表达式

匿名函数，有点类似lambda表达式。可以把函数储存在变量中。


![函数表达式](https://upload-images.jianshu.io/upload_images/5415189-6a616ec51720c244.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![匿名函数表达式](https://upload-images.jianshu.io/upload_images/5415189-64fce095fe26aed8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

所有函数声明提升和加载后，脚本才会实际地运行。函数表达式不会提升，因为它们涉及变量赋值，只有变量声明会提升。在解析器在脚本中到达该表达式之前，函数表达式不会加载。

![函数对比](https://upload-images.jianshu.io/upload_images/5415189-d1af1d1248a355f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 3.4.1 回调
![回调](https://upload-images.jianshu.io/upload_images/5415189-3b8a8c607746b420.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 3.4.2 有名称的函数表达式
![有名称的函数表达式](https://upload-images.jianshu.io/upload_images/5415189-7b6db2972cdb1976.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![命名函数表达式](https://upload-images.jianshu.io/upload_images/5415189-b83da5d47316d838.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 3.4.3 内嵌函数表达式
这种内嵌函数表达式，在python中称之为把函数视为一等对象。
![内嵌函数表达式](https://upload-images.jianshu.io/upload_images/5415189-f254df1e3b75db1d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
函数表达式，将函数内嵌传递给其他函数的语法在 JavaScript 中很常见

![内嵌函数表达式](https://upload-images.jianshu.io/upload_images/5415189-fb6c2319a36f287d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 4.array
JavaScript的array感觉更像是python的list，用了这么久，感觉都是一样的。
![array](https://upload-images.jianshu.io/upload_images/5415189-8449e39168706b61.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![array method](https://upload-images.jianshu.io/upload_images/5415189-b1a30695bb8bb997.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### array loop
传统的遍历array。
![](https://upload-images.jianshu.io/upload_images/5415189-6bd750c984ffcadd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

forEach()更像是一种迭代。
![forEach()](https://upload-images.jianshu.io/upload_images/5415189-a97dd0685ad1a86a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![forEach()回调函数](https://upload-images.jianshu.io/upload_images/5415189-19bac43ac0cbe6b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

map()返回一个新的array
![](https://upload-images.jianshu.io/upload_images/5415189-8970f1519f4830f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 5.对象
![image.png](https://upload-images.jianshu.io/upload_images/5415189-235c22330df2c81b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 5.1 typeof
既然是自动判断类型的语言，就必然要有用来判断变量类型的函数。在python里是type()，在JavaScript里是typeof()。
![typeof](https://upload-images.jianshu.io/upload_images/5415189-94f75fa83d1b3c36.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 5.2 创建对象
第一次看到这个时候感觉想c语言的结构体，但是后来想了想，感觉Javascript的对象更像散列函数。
![创建对象](https://upload-images.jianshu.io/upload_images/5415189-4c633c057a013776.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/5415189-c0b3f8678df0bc5f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![命名规则](https://upload-images.jianshu.io/upload_images/5415189-bad14ec650686f9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![创建 JavaScript 对象实例](https://upload-images.jianshu.io/upload_images/5415189-79c72273a461e43f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![把属性添加到 JavaScript 对象](https://upload-images.jianshu.io/upload_images/5415189-1df78b9950319a33.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![把方法添加到 JavaScript 对象](https://upload-images.jianshu.io/upload_images/5415189-ea214f6084b8107c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 结束
![结束语](https://upload-images.jianshu.io/upload_images/5415189-1a931cb51bce4f24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

