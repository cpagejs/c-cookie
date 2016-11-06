#c-cookie  js cookie--Convenient operation cookie

# Installation
### npm install --save-dev c-cookie
### import { Cookies } from 'c-cookie';

#API
### add cokkie
```
Cookies.insert('name','zhang','0.5');
Cookies.insert('li','yue');
Cookies.insert('li','yue2','1.2');
```

### search cookie
```
var q = Cookies.query();
console.log(q);  //name=zhang; li=yue2

var q1 = Cookies.query("name");
console.log(q1);   //zhang
```

### delete cookie
```
Cookies.remove("name");
var q = Cookies.query();
console.log(q);  //li=yue2
```
