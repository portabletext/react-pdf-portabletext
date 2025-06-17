import type { PortableTextComponent, PortableTextComponentProps } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import {defaultStylesFactory} from "./styles"
import { mergeStyles } from "../utils/mergeStyles"
import type { PortableTextStyles } from "../types/styles"
import { Text, View } from "@react-pdf/renderer"



export const defaultMarksFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        console.log('MARKS PROPS: ', props)
        return <View><Text>Placeholder</Text></View>
    }   
}