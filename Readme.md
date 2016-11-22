# vue-address-picker

  基于vue2的省市区三级联动组件

## 安装

  npm  i  vue-address-picker  --save

## 使用
	
### 导入

	import Vue from 'Vue'
	import addressPicker from 'vue-address-picker'

	Vue.use(addressPicker)

### 在组件中使用

	<address-picker :opts="obj"></address-picker>
	
### opts参数对象属性表

| 属性        | 描述           | 类型  |默认|
| ------------- |:-------------:| -----:|
| noDistrict      |不显示区选项（只要省市） | Boolean | false|


## License 

(The MIT License)

Copyright (c) 2016 gaoge &lt;314013991@qq.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.