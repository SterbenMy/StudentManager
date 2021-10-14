module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/assets/styles/element-variables.scss";`,
            },
        },
    },
};
