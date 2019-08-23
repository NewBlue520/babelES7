const presets = [
        [
            "@babel/env",
            {
                useBuiltIns: "usage", // 垫片使用
                corejs: 2
            }
        ]
    ]
;
const plugins = [

];
module.exports = {
    presets,
    plugins
};
