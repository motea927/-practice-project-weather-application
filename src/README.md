## 以Node.js實作weather app

> 藉由實作天氣查詢學習node.js的相關project.

## 功能說明:

* -a參數傳入地址查詢當地溫度及體感溫度，預設參數為高雄市楠梓區
* 檔案內之api key僅供測試，若失效請自行更換

## 藉由此專案學習到:

* 理解async與sync差異及運作原理
* 使用[google geocode api](https://developers.google.com/maps/documentation/geocoding/intro?hl=zh-tw)
* 使用[dark sky api](https://darksky.net/dev)
* 使用[request](https://www.npmjs.com/package/request)
* 理解URI編碼並使用encodeURIcomponent();
* 理解promise機制與then鏈
* 了解process.argv並學習使用[yargs](https://www.npmjs.com/package/yargs)簡化
* 操作json資料
* 理解throw、catch用法
* 使用[axios](https://www.npmjs.com/package/axios)簡化流程並使用鏈式呼叫(於app-promise.js)

## 試著查一下天氣吧!

#### 預設查詢高雄市楠梓區天氣
```javascript
  node app.js 
```
#### 輸入地址查詢天氣
```javascript
  node app.js -a "台北市大安區" 
```
#### app-promise.js是利用[axios](https://www.npmjs.com/package/axios)簡化之，效果同app.js
```javascript
  node app-promise.js -a "台北市大安區" 
```