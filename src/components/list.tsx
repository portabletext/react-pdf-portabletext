import type { PortableTextComponent, PortableTextComponentProps, PortableTextListComponent } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import { mergeStyles } from "../utils/mergeStyles"
import type { PortableTextStyles } from "../types/styles"
import { Text, View } from "@react-pdf/renderer"
import { defaultStylesFactory } from "./styles"
import isNil from "lodash.isnil"

export const defaultListFactory: PortableTextComponent<PortableTextListComponent> = (styles: PortableTextStyles, baseFontSize: number) => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)

    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        const { children, value: list } = props
        const listStyles = mergedStyles.list || {}
        const listLevel = list.level || 1
        const isDeep = list.level && list.level > 1
        const styleKey = isDeep ? 'listDeep' : 'list' 
        let listStyle = listStyles[styleKey] || {}

        let paddingLeft = {}
        if(isNil(listStyle?.paddingLeft)) {
            paddingLeft = { paddingLeft: baseFontSize * listLevel}
        }

        return <View key={list._key} style={[listStyle, paddingLeft]}>{children}</View>
    }
}

export const defaultListItemFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSize: number, itemType: 'bullet' | 'number') => {
    const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)

    return (props: PortableTextComponentProps<PortableTextBlock>) => {
        const { children, value: listItem, index } = props
        const listStyles = mergedStyles?.list

        switch(itemType) {
            case 'bullet':
                return <View key={listItem._key} style={listStyles?.listItemsWrapper}>      
                <Text style={listStyles?.listItemDecorator}>{'\u00B7'}</Text>
                <Text style={listStyles?.listItem}>{children}</Text>
            </View>
            case 'number':
                return <View key={listItem._key}>
                    <Text style={listStyles?.listItemDecorator}>{index + 1}. </Text>
                    <Text style={listStyles?.listItem}>{children}</Text>
                </View>
        }
    }
}