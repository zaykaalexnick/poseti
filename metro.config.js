module.exports = {
    resolver: {
        sourceExts: [ 'tsx', 'ts', 'jsx', 'js', 'json' ],
    },
    transformer: {
        babelTransformerPath: require.resolve('react-native-typescript-transformer'),
    },
    serializer: {

    },
    server: {

    }
}