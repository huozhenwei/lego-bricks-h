import { mapValues, without } from 'lodash-es'

// 业务组件通用属性的接口
export interface CommonComponentProps {
    // actions
    actionType: string;
    url: string;
    // size
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    // border type
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    // shadow and opacity
    boxShadow: string;
    opacity: string;
    // position and x,y
    position: string;
    left: string;
    top: string;
    right: string;
}
// 业务组件 LText 属性接口
export interface TextComponentProps extends CommonComponentProps {
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
}
// 业务组件 LImage 属性接口
export interface ImageComponentProps extends CommonComponentProps {
    src: string;
}
export interface ShapeComponentProps extends CommonComponentProps {
    backgroundColor: string;
}


// 业务组件的通用属性 和 默认值
export const commonDefaultProps: CommonComponentProps = {
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '318px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: '1',
    // position and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0'
}

export type AllComponentProps = TextComponentProps & ImageComponentProps & ShapeComponentProps

// 文本特有属性和默认值
export const textDefaultProps: TextComponentProps = {
    // basic props - font styles
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...commonDefaultProps
}
// 图片特有属性和默认值
export const imageDefaultProps: ImageComponentProps = {
    src: 'test.url',
    ...commonDefaultProps
}
export const shapeDefaultProps: ShapeComponentProps = {
    backgroundColor: '',
    ...commonDefaultProps
}

export const isEditingProp = {
    isEditing: {
        type: Boolean,
        default: false
    }
}

// 保留样式属性，剔除其它属性
export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
export const imageStylePropsNames = without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src')
export const shapeStylePropsNames = without(Object.keys(shapeDefaultProps), 'actionType', 'url')

// 可以把属性转换成 View Props
export const transformToComponentProps = <T extends {}>(props: T) => {
    const mapProps = mapValues(props, (item) => {
        return {
            type: (item as any).constructor as StringConstructor,
            default: item
        }
    })
    return { ...mapProps, ...isEditingProp }
}