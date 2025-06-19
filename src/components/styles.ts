import type { Style } from "@react-pdf/types"
import type { ListStyles, MarksStyles, PortableTextStyles, TypographyStyles } from "../types/styles"

const rem = (baseFontSize = 16, units = 1) => units * baseFontSize

const pageStylesFactory = (baseFontSize: number = 16): Style => ({
	paddingHorizontal: rem(baseFontSize, 1),
	paddingVertical: rem(baseFontSize, 1)
})

const blockStylesFactory = (baseFontSize: number = 16): TypographyStyles => ({
	normal: {
		marginBottom: rem(baseFontSize, 0.75)
	},
	blockquote: {
		marginLeft: rem(baseFontSize, 1.5),
		marginRight: rem(baseFontSize, 1.5),
		marginTop: rem(baseFontSize, 1),
		marginBottom: rem(baseFontSize, 1),
		paddingLeft: rem(baseFontSize, 0.75)
	},
	h1: {
		marginTop: rem(baseFontSize, 1.5),
		marginBottom: rem(baseFontSize, 1)
	},
	h2: {
		marginTop: rem(baseFontSize, 1.25),
		marginBottom: rem(baseFontSize, 0.75)
	},
	h3: {
		marginTop: rem(baseFontSize, 1.25),
		marginBottom: rem(baseFontSize, 0.75)
	},
	h4: {
		marginTop: rem(baseFontSize, 1),
		marginBottom: rem(baseFontSize, 0.5)
	},
	h5: {
		marginTop: rem(baseFontSize, 0.75),
		marginBottom: rem(baseFontSize, 0.5)
	},
	h6: {
		marginTop: rem(baseFontSize, 0.75),
		marginBottom: rem(baseFontSize, 0.5)
	}
})

const textStylesFactory = (baseFontSize: number = 16): TypographyStyles => ({
	normal: {
		fontSize: rem(baseFontSize, 1),
		lineHeight: 1.3
	},
	blockquote: {
		fontSize: rem(baseFontSize, 1),
		lineHeight: 1.3
	},
	h1: {
		fontSize: rem(baseFontSize, 2.5),
		lineHeight: 1.1,
		fontWeight: 700
	},
	h2: {
		fontSize: rem(baseFontSize, 2),
		lineHeight: 1.2,
		fontWeight: 600
	},
	h3: {
		fontSize: rem(baseFontSize, 1.75),
		lineHeight: 1.2,
		fontWeight: 600
	},
	h4: {
		fontSize: rem(baseFontSize, 1.5),
		lineHeight: 1.2,
		fontWeight: 600
	},
	h5: {
		fontSize: rem(baseFontSize, 1.25),
		lineHeight: 1.2,
		fontWeight: 600
	},
	h6: {
		fontSize: rem(baseFontSize, 1),
		lineHeight: 1.2,
		fontWeight: 600
	}
})

const marksStylesFactory = (baseFontSize: number = 16): MarksStyles => ({
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
		paddingVertical: 1 * baseFontSize,
		paddingHorizontal: 0.5 * baseFontSize,
		backgroundColor: "rgba(27, 31, 35, 0.05)",
		color: "#24292e"
	},

	superscript: {
		verticalAlign: "super",
		fontSize: rem(baseFontSize, 0.75)
	},

	subscript: {
		verticalAlign: "sub",
		fontSize: rem(baseFontSize, 0.75)
	}
})

const listStylesFactory = (baseFontSize: number = 16): ListStyles => ({
	list: {
		marginTop: rem(baseFontSize, 0.5),
		marginBottom: rem(baseFontSize, 0.5)
	},
	listDeep: {
		marginTop: 0,
		marginBottom: 0
	},
	listItemsWrapper: {
		marginBottom: rem(baseFontSize, 0.25)
	},
	listItem: {
		marginBottom: rem(baseFontSize, 0.5)
	},
	listItemDecorator: {
		marginRight: rem(baseFontSize, 0.5)
	}
})

export const defaultStylesFactory = (baseFontSize: number = 16): PortableTextStyles => ({
	page: pageStylesFactory(baseFontSize),
	block: blockStylesFactory(baseFontSize),
	text: textStylesFactory(baseFontSize),
	marks: marksStylesFactory(baseFontSize),
	list: listStylesFactory(baseFontSize)
})
