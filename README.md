#c-cookie  js cookie--Convenient operation cookie

# Installation
### npm install --save-dev c-cookie
### import * from 'c-cookie';

#API
### add cokkie
```
cookies.insert('name','zhang','0.5');
cookies.insert('li','yue');
cookies.insert('li','yue2','1.2');
```

### search cookie
```
var q = cookies.query();
console.log(q);  //name=zhang; li=yue2

var q1 = cookies.query("name");
console.log(q1);   //zhang
```

### delete cookie
```
cookies.remove("name");
var q = cookies.query();
console.log(q);  //li=yue2
```
