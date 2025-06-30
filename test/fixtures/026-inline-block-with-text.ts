import type { PortableTextBlock } from "@portabletext/react"

const input: PortableTextBlock[] = [
	{
		_type: "block",
		_key: "foo",
		style: "normal",
		children: [
			{ _type: "span", text: "Men, " },
			{ _type: "button", text: "bli med du også" },
			{ _type: "span", text: ", da!" }
		]
	}
]

export default input
