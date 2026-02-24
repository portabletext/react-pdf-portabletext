import type { PortableTextBlock } from "@portabletext/react"

const input: PortableTextBlock[] = [
	{
		_type: "block",
		_key: "a",
		markDefs: [],
		level: 1,
		children: [{ _type: "span", marks: [], text: "Things" }],
		listItem: "number"
	},
	{
		_type: "block",
		_key: "b",
		markDefs: [],
		level: 2,
		children: [{ _type: "span", marks: [], text: "Foo" }],
		listItem: "number"
	},
	{
		_type: "block",
		_key: "c",
		markDefs: [],
		level: 1,
		children: [{ _type: "span", marks: [], text: "Hekkin" }],
		listItem: "number"
	}
]

export default input
