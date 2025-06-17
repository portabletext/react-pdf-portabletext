import type { PortableTextComponent, PortableTextComponentProps } from '@portabletext/react'
import { Text, View } from '@react-pdf/renderer'
import type { PortableTextBlock } from '@portabletext/types'
import type { PortableTextStyles } from '../types/styles'
import { mergeStyles } from '../utils/mergeStyles'
import { defaultStylesFactory } from './styles'


export const defaultBlockFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
    
    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        const { children, value: block } = props
        type StyleKey = keyof typeof mergedStyles.block
        const blockStyles = mergedStyles.block
        const styleKey = (block.style || 'normal') as StyleKey
        const style = blockStyles?.[styleKey]
        return (
            <View key={block._key} style={style}>
                <Text>{children}</Text>
            </View>
        )
    }
}