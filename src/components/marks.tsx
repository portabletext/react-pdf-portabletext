import type { PortableTextComponent, PortableTextComponentProps } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import {defaultStylesFactory} from "./styles"
import { mergeStyles } from "../utils/mergeStyles"
import type { PortableTextStyles } from "../types/styles"
import { Text } from "@react-pdf/renderer"



export const defaultMarksFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number, itemType: 'em' | 'strong' | 'code' | 'underline' | 'strike-through' | 'link' | 'superscript' | 'subscript') => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        const { children, value: marksItem } = props
        const marksStyles = mergedStyles?.marks || {}
        return <Text key={marksItem._key} style={marksStyles[itemType]}>{children}</Text>    
    }  
}