import { computed } from "vue"
import { pick } from 'lodash-es'
import { CommonComponentProps } from "../defaultProps"

// 抽取重用逻辑
const useComponentCommon = (props: Readonly<Partial<CommonComponentProps & { isEditing: boolean }>>, picks: string[]) => {
    // 样式提取
    const styleProps = computed(() => pick(props, picks))

    // 点击事件
    const handleClick = () => {
        // 当组件编辑时，点击链接不跳转
        if (props.actionType === 'url' && props.url && !props.isEditing) {
            window.location.href = props.url
        }
    }

    return {
        styleProps,
        handleClick
    }
}

export default useComponentCommon