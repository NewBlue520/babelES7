const as = async () => {
    let text = 'hello world';
    await new Promise((resolve, reject) =>{
        setTimeout( () => {
            text = 'hello';
            return resolve();
        }, 2000);
    });
    return text;
};
(async () => {
    console.log(await as());
})();
