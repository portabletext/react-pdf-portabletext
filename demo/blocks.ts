export default [
	{
		_type: "block",
		_key: "e1-k1",
		style: "normal",
		markDefs: [],
		children: [
			{
				_type: "span",
				_key: "e1-k2",
				text: "This is a block with both ",
				marks: []
			},
			{ _type: "span", _key: "e1-k3", marks: ["em"], text: "italics " },
			{ _type: "span", _key: "e1-k4", text: "and also ", marks: [] },
			{
				_type: "span",
				_key: "e1-k5",
				marks: ["strong"],
				text: "bold inside"
			}
		]
	},
	{
		_type: "block",
		_key: "e2-k1",
		style: "normal",
		markDefs: [],
		children: [{ _type: "span", _key: "e2-k2", text: "Normal Text", marks: [] }]
	},
	{
		_type: "block",
		_key: "e3-k1",
		children: [{ _type: "span", _key: "e3-k2", text: "Heading 1", marks: [] }],
		markDefs: [],
		style: "h1"
	},
	{
		_type: "block",
		_key: "e4-k1",
		children: [{ _type: "span", _key: "e4-k2", text: "Heading 2", marks: [] }],
		markDefs: [],
		style: "h2"
	},
	{
		_type: "block",
		_key: "e5-k1",
		children: [{ _type: "span", _key: "e5-k2", text: "Heading 3", marks: [] }],
		markDefs: [],
		style: "h3"
	},
	{
		_type: "block",
		_key: "e6-k1",
		children: [{ _type: "span", _key: "e6-k2", text: "Heading 4", marks: [] }],
		markDefs: [],
		style: "h4"
	},
	{
		_type: "block",
		_key: "e7-k1",
		children: [{ _type: "span", _key: "e7-k2", text: "Heading 5", marks: [] }],
		markDefs: [],
		style: "h5"
	},
	{
		_type: "block",
		_key: "e8-k1",
		children: [{ _type: "span", _key: "e8-k2", text: "Heading 6", marks: [] }],
		markDefs: [],
		style: "h6"
	},
	{
		_type: "block",
		_key: "e9-k1",
		children: [
			{
				_type: "span",
				_key: "e9-k2",
				text: "Next are the marks:",
				marks: []
			}
		],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e10-k1",
		children: [{ _type: "span", _key: "e10-k2", text: "Block Quote", marks: [] }],
		markDefs: [],
		style: "blockquote"
	},
	{
		_type: "block",
		_key: "e11-k1",
		children: [{ _type: "span", _key: "e11-k2", text: "Bold", marks: ["strong"] }],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e12-k1",
		children: [{ _type: "span", _key: "e12-k2", text: "Italic", marks: ["em"] }],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e13-k1",
		children: [
			{
				_type: "span",
				_key: "e13-k2",
				text: "Code block",
				marks: ["code"]
			}
		],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e14-k1",
		children: [
			{
				_type: "span",
				_key: "e14-k2",
				text: "Underline",
				marks: ["underline"]
			}
		],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e15-k1",
		children: [
			{
				_type: "span",
				_key: "e15-k2",
				text: "Strikethrough",
				marks: ["strike-through"]
			}
		],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e16-k1",
		children: [{ _type: "span", _key: "e16-k2", text: "Bullet 1", marks: [] }],
		markDefs: [],
		style: "normal",
		listItem: "bullet",
		level: 1
	},
	{
		_type: "block",
		_key: "e17-k1",
		children: [{ _type: "span", _key: "e17-k2", text: "Bullet 2", marks: [] }],
		markDefs: [],
		style: "normal",
		listItem: "bullet",
		level: 1
	},
	{
		_type: "block",
		_key: "e18-k1",
		children: [{ _type: "span", _key: "e18-k2", text: "Numbered 1", marks: [] }],
		markDefs: [],
		style: "normal",
		listItem: "number",
		level: 1
	},
	{
		_type: "block",
		_key: "e19-k1",
		children: [{ _type: "span", _key: "e19-k2", text: "Numbered 2", marks: [] }],
		markDefs: [],
		style: "normal",
		listItem: "number",
		level: 1
	},
	{
		_type: "block",
		_key: "e20-k1",
		style: "normal",
		markDefs: [],
		children: [
			{
				_type: "span",
				_key: "e20-k2",
				text: "Bullet",
				marks: []
			}
		],
		listItem: "bullet",
		level: 1
	},
	{
		_type: "block",
		_key: "e21-k1",
		children: [
			{
				_type: "span",
				_key: "e21-k2",
				text: "Indented white circle",
				marks: []
			}
		],
		markDefs: [],
		style: "normal",
		listItem: "bullet",
		level: 2
	},
	{
		_type: "block",
		_key: "e22-k1",
		children: [
			{
				_type: "span",
				_key: "e22-k2",
				text: "Indented black square",
				marks: []
			}
		],
		markDefs: [],
		style: "normal",
		listItem: "bullet",
		level: 3
	},
	{
		_type: "block",
		_key: "e23-k1",
		children: [
			{
				_type: "span",
				_key: "e23-k2",
				text: "Back to indented bullet",
				marks: []
			}
		],
		markDefs: [],
		style: "normal",
		listItem: "bullet",
		level: 4
	},
	{
		_type: "block",
		_key: "e24-k1",
		style: "normal",
		markDefs: [],
		children: [
			{
				_type: "span",
				_key: "e24-k2",
				text: "Number",
				marks: []
			}
		],
		listItem: "number",
		level: 1
	},
	{
		_type: "block",
		_key: "e25-k1",
		children: [
			{
				_type: "span",
				_key: "e25-k2",
				text: "Indented letter",
				marks: []
			}
		],
		markDefs: [],
		style: "normal",
		listItem: "number",
		level: 2
	},
	{
		_type: "block",
		_key: "e26-k1",
		children: [
			{
				_type: "span",
				_key: "e26-k2",
				text: "Indented roman numberal",
				marks: []
			}
		],
		markDefs: [],
		style: "normal",
		listItem: "number",
		level: 3
	},
	{
		_type: "block",
		_key: "e27-k1",
		children: [
			{
				_type: "span",
				_key: "e27-k2",
				text: "Back to indented number",
				marks: []
			}
		],
		markDefs: [],
		style: "normal",
		listItem: "number",
		level: 4
	},

	{
		_key: "e28-k1",
		_type: "image",
		url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
		alt: "Portable Text logo"
	},
	{
		_type: "block",
		_key: "e29-k1",
		children: [{ _type: "span", _key: "e29-k2", text: "Link", marks: ["link"] }],
		markDefs: [{ _type: "link", _key: "e29-k3", href: "https://example.com" }],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e30-k1",
		children: [
			{ _type: "span", _key: "e30-k2", text: "Superscript", marks: [] },
			{ _type: "span", _key: "e30-k3", text: "x", marks: ["superscript"] }
		],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e31-k1",
		children: [
			{ _type: "span", _key: "e31-k2", text: "Subscript", marks: [] },
			{ _type: "span", _key: "e31-k3", text: "x", marks: ["subscript"] }
		],
		markDefs: [],
		style: "normal"
	},
	{
		_type: "block",
		_key: "e32-k1",
		children: [
			{
				_type: "span",
				_key: "e32-k2",
				text: "Page break next:",
				marks: []
			}
		],
		markDefs: [],
		style: "normal"
	},
	{ _key: "e33-k1", _type: "break" },
	{
		_type: "block",
		_key: "e34-k1",
		children: [
			{
				_type: "span",
				_key: "e34-k2",
				text: "After page break",
				marks: []
			}
		],
		markDefs: [],
		style: "normal"
	}
]
