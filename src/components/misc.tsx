import type { PortableTextComponent, PortableTextComponentProps } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import { Text, View } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types/styles"
import { defaultStylesFactory } from "./styles"
import { mergeStyles } from "../utils/mergeStyles"

const hardBreak = () => <View><Text>{`\n`}</Text></View>

export const defaultUnknownTypeFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        const { value: block } = props
        const warning = `Unknown block type "${block._type}", specify a component for it in the \`components.types\` prop`
        type StyleKey = keyof typeof mergedStyles.block
        const blockStyles = mergedStyles.block
        const styleKey = (block.style || 'normal') as StyleKey
        const style = blockStyles?.[styleKey]

        console.warn(warning)
        return (<View key={block._key} style={style}>
            < Text>{warning}</Text>
        </View >)
    }
}

export const defaultUnknownMarkFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        return <View><Text>Placeholder</Text></View>
    }   
}

export const defaultUnknownListFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        return <View><Text>Placeholder</Text></View>
    }   
}

export const defaultUnknownListItemFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        return <View><Text>Placeholder</Text></View>
    }   
}

export const defaultUnknownBlockStyleFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        return <View><Text>Placeholder</Text></View>
    }   
}


export default { hardBreak, defaultUnknownTypeFactory, defaultUnknownMarkFactory, defaultUnknownListFactory, defaultUnknownListItemFactory, defaultUnknownBlockStyleFactory}