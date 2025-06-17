import type { PortableTextStyles } from "../types/styles"

const rem = (BASE_FONT_SIZE = 16, units = 1) => units * BASE_FONT_SIZE;

const typeographyStylesFactory  = (BASE_FONT_SIZE: number = 16) => ({
    normal: {
        fontSize: rem(BASE_FONT_SIZE, 1),   
        lineHeight: 1.3,
        marginBottom: rem(BASE_FONT_SIZE, 0.75),
    },
    blockquote: {
        fontSize: rem(BASE_FONT_SIZE, 1.25),
        lineHeight: 1.4,
        marginLeft: rem(BASE_FONT_SIZE, 1.5),
        marginRight: rem(BASE_FONT_SIZE, 1.5),
        marginTop: rem(BASE_FONT_SIZE, 1),
        marginBottom: rem(BASE_FONT_SIZE, 1),
        paddingLeft: rem(BASE_FONT_SIZE, 0.75),
        fontStyle: 'italic',
    },
    h1: {
        fontSize: rem(BASE_FONT_SIZE, 2.5),
        lineHeight: 1.1,
        marginTop: rem(BASE_FONT_SIZE, 1.5),
        marginBottom: rem(BASE_FONT_SIZE, 1),
        fontWeight: 700,
    },
    h2: {
        fontSize: rem(BASE_FONT_SIZE, 2),
        lineHeight: 1.2,
        marginTop: rem(BASE_FONT_SIZE, 1.25),
        marginBottom: rem(BASE_FONT_SIZE, 0.75),
        fontWeight: 600,
    },
    h3: {
        fontSize: rem(BASE_FONT_SIZE, 1.75),
        lineHeight: 1.2,
        marginTop: rem(BASE_FONT_SIZE, 1.25),
        marginBottom: rem(BASE_FONT_SIZE, 0.75),
        fontWeight: 600,
    },
    h4: {
        fontSize: rem(BASE_FONT_SIZE, 1.5),
        lineHeight: 1.2,
        marginTop: rem(BASE_FONT_SIZE, 1),
        marginBottom: rem(BASE_FONT_SIZE, 0.5),
        fontWeight: 600,
    },
    h5: {
        fontSize: rem(BASE_FONT_SIZE, 1.25),
        lineHeight: 1.2,
        marginTop: rem(BASE_FONT_SIZE, 0.75),
        marginBottom: rem(BASE_FONT_SIZE, 0.5),
        fontWeight: 600,
    },
    h6: {
        fontSize: rem(BASE_FONT_SIZE, 1),
        lineHeight: 1.2,
        marginTop: rem(BASE_FONT_SIZE, 0.75),
        marginBottom: rem(BASE_FONT_SIZE, 0.5),
        fontWeight: 600,
    },
})

const marksStylesFactory = (BASE_FONT_SIZE: number = 16) => ({
    strong: {
        fontWeight: 'bold',
      },
    
      em: {
        fontStyle: 'italic',
      },
    
      link: {
        textDecorationLine: 'underline',
      },
    
      underline: {
        textDecorationLine: 'underline',
      },
    
      strikeThrough: {
        textDecorationLine: 'line-through',
      },
    
      code: {
        paddingVertical: 1 * BASE_FONT_SIZE,
        paddingHorizontal: 0.5 * BASE_FONT_SIZE,
        backgroundColor: 'rgba(27, 31, 35, 0.05)',
        color: '#24292e',
      },

      superscript: {
        verticalAlign: 'super',
        fontSize: rem(BASE_FONT_SIZE, 0.75),
      },

      subscript: {
        verticalAlign: 'sub',
        fontSize: rem(BASE_FONT_SIZE, 0.75),
      }
})

const listStylesFactory = (BASE_FONT_SIZE: number = 16) => ({
    list: {
        marginTop: rem(BASE_FONT_SIZE, 0.5),
        marginBottom: rem(BASE_FONT_SIZE, 0.5),
    },
    listDeep: {
        marginLeft: rem(BASE_FONT_SIZE, 1.5),
    },
    listItem: {
        marginBottom: rem(BASE_FONT_SIZE, 0.5),
    },
    bulletListIcon: {
        marginRight: rem(BASE_FONT_SIZE, 0.5),
    },
    listItemWrapper: {
        marginBottom: rem(BASE_FONT_SIZE, 0.25),
    },
})

const unknownStylesFactory = (BASE_FONT_SIZE: number = 16) => ({
    hardBreak: {
        marginBottom: rem(BASE_FONT_SIZE, 1),
    },
    unknownType: {
        fontSize: rem(BASE_FONT_SIZE, 1),
        lineHeight: 1.3,
        marginBottom: rem(BASE_FONT_SIZE, 0.75),
    },
    unknownMark: {
        fontSize: rem(BASE_FONT_SIZE, 1),
        lineHeight: 1.3,
    },
    unknownList: {
        marginTop: rem(BASE_FONT_SIZE, 0.5),
        marginBottom: rem(BASE_FONT_SIZE, 0.5),
    },
    unknownListItem: {
        marginBottom: rem(BASE_FONT_SIZE, 0.5),
    },
    unknownBlockStyle: {
        fontSize: rem(BASE_FONT_SIZE, 1),
        lineHeight: 1.3,
        marginBottom: rem(BASE_FONT_SIZE, 0.75),
    },
})

const defaultStylesFactory = (BASE_FONT_SIZE: number = 16): PortableTextStyles => ({
    block: typeographyStylesFactory(BASE_FONT_SIZE),
    text: typeographyStylesFactory(BASE_FONT_SIZE),
    marks: marksStylesFactory(BASE_FONT_SIZE),
    list: listStylesFactory(BASE_FONT_SIZE),
    ...unknownStylesFactory(BASE_FONT_SIZE),
})

export { defaultStylesFactory }