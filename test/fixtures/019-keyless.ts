import type { PortableTextBlock } from "@portabletext/react"

const input: PortableTextBlock[] = [
	{
		_type: "block",
		children: [
			{
				_type: "span",
				marks: [],
				text: "sanity"
			},
			{
				_type: "span",
				marks: [],
				text: " is a full time job"
			}
		],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		children: [
			{
				_type: "span",
				marks: [],
				text: "in a world that "
			},
			{
				_type: "span",
				marks: [],
				text: "is always changing"
			}
		],
		markDefs: [],
		style: "normal"
	}
]

export default input
