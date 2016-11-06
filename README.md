#c-cookie  js cookie--Convenient operation cookie

# Installation
### npm install --save-dev c-cookie
### import { Cookies } from 'c-cookie';

#API
### add cokkie
### params: name,value,{hours,path,domain,secure}
```
Cookies.insert('name','zhang',{"hours":3,"path":"/"});
Cookies.insert('li','yue');
Cookies.insert('li','yue2',{"hours":5});
```

### search cookie
### Cookies.query()--return all cookies or Cookies.query('xxx')--return one cookie
```
var q = Cookies.query();
console.log(q);  //[["name","zhang"],["li","yue2"]]

var q1 = Cookies.query("name");
console.log(q1);   //zhang
```

### delete cookie
### Cookies.remove("name")--delete one cookie or Cookies.remove()--delete all cookies
```
Cookies.remove("name");
var q = Cookies.query();
console.log(q);  //li=yue2
```
