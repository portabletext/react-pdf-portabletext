import type { PortableTextBlock } from "@portabletext/react"

const input: PortableTextBlock[] = [
	{
		_key: "08707ed2945b",
		_type: "block",
		style: "normal",
		children: [
			{
				_key: "08707ed2945b0",
				text: "Foo! Bar!",
				_type: "span",
				marks: ["code"]
			},
			{
				_key: "a862cadb584f",
				_type: "localCurrency",
				sourceCurrency: "USD",
				sourceAmount: 13.5
			},
			{ _key: "08707ed2945b1", text: "Neat", _type: "span", marks: [] }
		],
		markDefs: []
	},

	{
		_key: "abc",
		_type: "block",
		style: "normal",
		children: [
			{
				_key: "08707ed2945b0",
				text: "Foo! Bar!",
				_type: "span",
				marks: ["code"]
			},
			{
				_key: "a862cadb584f",
				_type: "localCurrency",
				sourceCurrency: "DKK",
				sourceAmount: 200
			},
			{ _key: "08707ed2945b1", text: " Baz!", _type: "span", marks: ["code"] }
		],
		markDefs: []
	},

	{
		_key: "def",
		_type: "block",
		style: "normal",
		children: [
			{
				_key: "08707ed2945b0",
				text: "Foo! Bar! ",
				_type: "span",
				marks: []
			},
			{
				_key: "a862cadb584f",
				_type: "localCurrency",
				sourceCurrency: "EUR",
				sourceAmount: 25
			},
			{ _key: "08707ed2945b1", text: " Baz!", _type: "span", marks: ["code"] }
		],
		markDefs: []
	}
]

export default input
