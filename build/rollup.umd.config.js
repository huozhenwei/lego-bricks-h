import basicConfig, { name, file } from './rollup.config'
export default {
    ...basicConfig,
    output: {
        name: 'LegoComponents',
        file: file('umd'),
        format: 'umd',
        globals: {
            // 设置全局变量名称
            'vue': 'Vue',
            'lodash-es': '_'
        },
        exports: 'named'
    }
}