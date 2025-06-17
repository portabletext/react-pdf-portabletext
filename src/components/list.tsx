import type { PortableTextComponent, PortableTextComponentProps } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import { mergeStyles } from "../utils/mergeStyles"
import type { PortableTextStyles } from "../types/styles"
import { Text, View } from "@react-pdf/renderer"
import { defaultStylesFactory } from "./styles"



export const defaultListFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)


    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        console.log('LIST PROPS: ', props)
        return <View><Text>Placeholder</Text></View>
    }
}