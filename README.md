# Problems encountered!
## Problem \#1

My switched the `0` and the `idx >= careers.length`. The `0` was supposed to be the value and the `idx >= careers.length` was supposed to be the condition. Here is what I was running for about an hour and wondering why the idx kept on increasing!

``` js
idx = 0 ? idx >= careers.length - 1 : idx + 1;
console.log(idx);
```

This had me almost pull my eyes out!