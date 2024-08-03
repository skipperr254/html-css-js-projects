# Problems encountered!
## Problem \#1

My switched the `0` and the `idx >= careers.length`. The `0` was supposed to be the value and the `idx >= careers.length` was supposed to be the condition. Here is what I was running for about an hour and wondering why the idx kept on increasing!

``` js
idx = 0 ? idx >= careers.length - 1 : idx + 1;
console.log(idx);
```

This had me almost pull my eyes out!


# Some awesome things I discovered in this journey

This gives an error `ReferenceError: i is not defined`.
``` js
for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)
```

On the other hand, this one works really well and gives an output.
``` js
for (var i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)
```

Can you spot the difference between the two pieces of code? 

If you said the difference is the `var` and `let` in the loop variable declaration then you're correct.

On to the next challenge, whay do you think this happened? I mean, don't the both of the keywords declare variables?

Well, they both do but apparently `var` creates global ones not scoped to blocks while `let` does the opposite. This had me stuck on a single line of code for an entire day. **Ain't JavaScript is awesome** ![Paim Inside](https://pbs.twimg.com/media/FAg0WX2VUAEJykg.jpg:large)