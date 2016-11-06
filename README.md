#c-cookie  js cookie--Convenient operation cookie

## Installation
Download [c-cookie.js](https://gist.githubusercontent.com/chenhaozhi/284205a956b93e3544985f72347c48b7/raw/781b79577002c06951356672d2daa24abf341373/c-cookie.js) and include it in your HTML document, this will add a global object called `Cookies`:
```html
<script type="text/javascript" src="c-cookie.js"></script>
<script type="text/javascript">
	Cookies.insert("uid",10,{"hours":3, "path":"/"});
</script>
```

Alternatively you can use a JavaScript package manager to add it to your project:
```
npm install --save-dev c-cookie
import { Cookies } from 'c-cookie';
```

#API
add cokkie   
param: name,value,{hours,path,domain,secure}
```
Cookies.insert('name','zhang',{"hours":3,"path":"/"});
Cookies.insert('li','yue');
Cookies.insert('li','yue2',{"hours":5});
```

search cookie   
Cookies.query()--return all cookies    
Cookies.query('xxx')--return one cookie   
```
var q = Cookies.query();
console.log(q);  //[["name","zhang"],["li","yue2"]]

var q1 = Cookies.query("name");
console.log(q1);   //zhang
```

delete cookie    
Cookies.remove("name")--delete one cookie      
Cookies.remove()--delete all cookies    
```
Cookies.remove("name");
var q = Cookies.query();
console.log(q);  //li=yue2
```
