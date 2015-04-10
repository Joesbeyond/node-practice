setTimeout(function () {
    console.log('world');
}, 1000);

console.log('hello');
/*describe
JS本身是单线程的，无法异步执行，因此我们可以认为setTimeout这类JS规范之外的
由运行环境提供的特殊函数做的事情是创建一个平行线程后立即返回，让JS主进程可以接着执行后续代码，
并在收到平行进程的通知后再执行回调函数。
除了setTimeout、setInterval这些常见的，这类函数还包括NodeJS提供的诸如fs.readFile之类的异步API*/