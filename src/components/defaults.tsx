import { mergeComponents, type PortableTextBlock, type PortableTextComponentProps, type PortableTextReactComponents } from "@portabletext/react";
import type { PortableTextStyles } from "../types/styles";
import { defaultBlockFactory } from "./block";
import { defaultMarksFactory } from "./marks";
import { defaultListFactory } from "./list";
import { unknownTypeFactory, hardBreak, defaultUnknownMarkFactory } from "./misc";

const generateStyledDefaultComponentsMap = (styles: PortableTextStyles, baseFontSize: number) => {
    return {
        block: {
            normal: defaultBlockFactory(styles, baseFontSize),
            blockquote: defaultBlockFactory(styles, baseFontSize),
            h1: defaultBlockFactory(styles, baseFontSize),
            h2: defaultBlockFactory(styles, baseFontSize),
            h3: defaultBlockFactory(styles, baseFontSize),
            h4: defaultBlockFactory(styles, baseFontSize),
            h5: defaultBlockFactory(styles, baseFontSize),
        },
        marks: {
            em: defaultMarksFactory(styles, baseFontSize),
            strong: defaultMarksFactory(styles, baseFontSize),
            code: defaultMarksFactory(styles, baseFontSize),
            underline: defaultMarksFactory(styles, baseFontSize),
            'strike-through': defaultMarksFactory(styles, baseFontSize),
            link: defaultMarksFactory(styles, baseFontSize),
            superscript: defaultMarksFactory(styles, baseFontSize),
            subscript: defaultMarksFactory(styles, baseFontSize),
        },
        list: defaultListFactory(styles, baseFontSize),
        listItem: {
            bullet: defaultListFactory(styles, baseFontSize),
            number: defaultListFactory(styles, baseFontSize),
        },
        hardBreak: hardBreak,
        unknownType: defaultUnknownTypeFactory,
        unknownMark: defaultUnknownMarkFactory,
        unknownList: defaultUnknownListFactory,
        unknownListItem: defaultUnknownListItemFactory,
        unknownBlockStyle: defaultUnknownBlockStyleFactory,
    }
}


export const mergeAndStyleComponents = (components: Partial<PortableTextReactComponents> | undefined, styles: PortableTextStyles, baseFontSize: number) => {
    const styledDefaultComponentsMap: PortableTextReactComponents = generateStyledDefaultComponentsMap(styles, baseFontSize)

    if(components) {
        return mergeComponents(styledDefaultComponentsMap, components)
    } 
    return styledDefaultComponentsMap
}