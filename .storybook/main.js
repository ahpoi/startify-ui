module.exports = {
    stories: ['../stories/**/*.stories.(mdx|tsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport/register',
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            }
        }],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                // Optional
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
