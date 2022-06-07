// 项目入口文件

import { App } from 'vue'
export {
    textDefaultProps, textStylePropNames, TextComponentProps,
    imageDefaultProps, imageStylePropsNames, ImageComponentProps,
    shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps,
    AllComponentProps
} from './defaultProps'

import LText from './components/LText'
import LImage from './components/LImage'
import LShape from './components/LShape'
const components = [
    LText,
    LImage,
    LShape
]

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

// 导出单个组件
export {
    LText,
    LImage,
    LShape,
    install
}

// 插件入口
export default {
    install
}