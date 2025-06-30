import type { Style } from "@react-pdf/types"
import type { ListStyles, MarksStyles, PortableTextStyles, TypographyStyles } from "../types"

const rem = (baseFontSizePt = 12, units = 1) => units * baseFontSizePt

const normalFontSizing = (baseFontSizePt: number = 12) => ({
	fontSize: rem(baseFontSizePt, 1),
	lineHeight: 1.3
})

const blockStylesFactory = (baseFontSizePt: number = 12): TypographyStyles => ({
	normal: {
		marginBottom: rem(baseFontSizePt, 0.25)
	},
	blockquote: {
		marginHorizontal: rem(baseFontSizePt, 1),
		marginTop: rem(baseFontSizePt, 0.5),
		marginBottom: rem(baseFontSizePt, 1),
		paddingLeft: rem(baseFontSizePt, 0.5),
		borderLeft: "2px solid gray"
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

const textStylesFactory = (baseFontSizePt: number = 12): TypographyStyles => ({
	normal: {
		...normalFontSizing(baseFontSizePt)
	},
	blockquote: {
		...normalFontSizing(baseFontSizePt)
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

const marksStylesFactory = (baseFontSizePt: number = 12): MarksStyles => ({
	strong: {
		fontWeight: "bold"
	},

	highlight: {
		backgroundColor: "lightyellow"
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
		fontFamily: "Courier Prime"
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

const imageStylesFactory = (baseFontSizePt: number = 12): Style => ({
	maxWidth: "100%",
	height: "auto",
	objectFit: "contain",
	marginBottom: rem(baseFontSizePt, 0.5)
})

const listStylesFactory = (baseFontSizePt: number = 12): ListStyles => ({
	list: {
		...normalFontSizing(baseFontSizePt),
		marginTop: rem(baseFontSizePt, 0.5),
		marginBottom: rem(baseFontSizePt, 0.5)
	},
	listDeep: {
		...normalFontSizing(baseFontSizePt),
		marginTop: 0,
		marginBottom: 0
	},
	listItemWrapper: {
		marginVertical: rem(baseFontSizePt, 0.1),
		flexDirection: "row"
	},
	listItemDecorator: {
		marginRight: rem(baseFontSizePt, 0.5),
		fontFamily: "Dejavu Mono",
	},
	listItemNumber: {
		marginRight: rem(baseFontSizePt, 0.5)
	}
})

export const defaultStylesFactory = (baseFontSizePt: number = 12): PortableTextStyles => ({
	block: blockStylesFactory(baseFontSizePt),
	text: textStylesFactory(baseFontSizePt),
	marks: marksStylesFactory(baseFontSizePt),
	list: listStylesFactory(baseFontSizePt),
	image: imageStylesFactory()
})
