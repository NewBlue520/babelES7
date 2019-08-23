const hw = text => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(text);
    }, 2000)
});

hw('hello world')
    .then((res) => {
        console.log(res);
    });
