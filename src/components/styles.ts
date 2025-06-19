import type { ListStyles, MarksStyles, PortableTextStyles, TypographyStyles } from "../types/styles"

const rem = (baseFontSizePt = 16, units = 1) => units * baseFontSizePt

const blockStylesFactory = (baseFontSizePt: number = 16): TypographyStyles => ({
	normal: {
		marginBottom: rem(baseFontSizePt, 0.25)
	},
	blockquote: {
		marginHorizontal: rem(baseFontSizePt, 1),
		marginTop: rem(baseFontSizePt, 0.5),
		marginBottom: rem(baseFontSizePt, 1),
		paddingLeft: rem(baseFontSizePt, 0.5),
		borderLeft: "2px solid gray",
	},
	h1: {
		marginTop: rem(baseFontSizePt, 1.5),
		marginBottom: rem(baseFontSizePt, 1)
	},
	h2: {
		marginTop: rem(baseFontSizePt, 1.25),
		marginBottom: rem(baseFontSizePt, 0.75)
	},
	h3: {
		marginTop: rem(baseFontSizePt, 1.25),
		marginBottom: rem(baseFontSizePt, 0.75)
	},
	h4: {
		marginTop: rem(baseFontSizePt, 1),
		marginBottom: rem(baseFontSizePt, 0.5)
	},
	h5: {
		marginTop: rem(baseFontSizePt, 0.75),
		marginBottom: rem(baseFontSizePt, 0.5)
	},
	h6: {
		marginTop: rem(baseFontSizePt, 0.75),
		marginBottom: rem(baseFontSizePt, 0.5)
	}
})

const textStylesFactory = (baseFontSizePt: number = 16): TypographyStyles => ({
	normal: {
		fontSize: rem(baseFontSizePt, 1),
		lineHeight: 1.3
	},
	blockquote: {
		fontSize: rem(baseFontSizePt, 1),
		lineHeight: 1.3
	},
	h1: {
		fontSize: rem(baseFontSizePt, 2.5),
		lineHeight: 1.1,
		fontWeight: 700
	},
	h2: {
		fontSize: rem(baseFontSizePt, 2),
		lineHeight: 1.2,
		fontWeight: 600
	},
	h3: {
		fontSize: rem(baseFontSizePt, 1.75),
		lineHeight: 1.2,
		fontWeight: 600
	},
	h4: {
		fontSize: rem(baseFontSizePt, 1.5),
		lineHeight: 1.2,
		fontWeight: 600
	},
	h5: {
		fontSize: rem(baseFontSizePt, 1.25),
		lineHeight: 1.2,
		fontWeight: 600
	},
	h6: {
		fontSize: rem(baseFontSizePt, 1),
		lineHeight: 1.2,
		fontWeight: 600
	}
})

const marksStylesFactory = (baseFontSizePt: number = 16): MarksStyles => ({
	strong: {
		fontWeight: "bold"
	},

	em: {
		fontStyle: "italic"
	},

	link: {
		textDecoration: "underline",
		color: "blue"
	},

	underline: {
		textDecoration: "underline"
	},

	"strike-through": {
		textDecoration: "line-through"
	},

	code: {
		lineHeight: 1,
		backgroundColor: "rgba(27, 31, 35, 0.05)",
		fontFamily: "Courier Prime",
	},

	superscript: {
		verticalAlign: "super",
		fontSize: rem(baseFontSizePt, 0.75)
	},

	subscript: {
		verticalAlign: "sub",
		fontSize: rem(baseFontSizePt, 0.75)
	}
})

const listStylesFactory = (baseFontSizePt: number = 16): ListStyles => ({
	list: {
		marginTop: rem(baseFontSizePt, 0.5),
		marginBottom: rem(baseFontSizePt, 0.5),
	},
	listDeep: {
		marginTop: 0,
		marginBottom: 0,
	},
	listItemWrapper: {
		marginVertical: rem(baseFontSizePt, 0.1),
		flexDirection: 'row',
	},
	listItemDecorator: {
		marginRight: rem(baseFontSizePt, 0.5)
	}
})

export const defaultStylesFactory = (baseFontSizePt: number = 16): PortableTextStyles => ({
	block: blockStylesFactory(baseFontSizePt),
	text: textStylesFactory(baseFontSizePt),
	marks: marksStylesFactory(baseFontSizePt),
	list: listStylesFactory(baseFontSizePt)
})
