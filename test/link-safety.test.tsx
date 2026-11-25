// @vitest-environment jsdom
import type { PortableTextBlock } from "@portabletext/react"
import { cleanup, render } from "@testing-library/react"
import React from "react"
import { afterEach, describe, expect, test, vi } from "vitest"
import { PortableText } from "../src"

vi.mock("@react-pdf/renderer", () => {
	return {
		Text: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
		View: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
		Link: ({ children, href }: { children: React.ReactNode; href?: string }) => <a href={href}>{children}</a>,
		Font: {
			register: vi.fn()
		}
	}
})

const linkBlock = (href: string): PortableTextBlock => ({
	_key: "block",
	_type: "block",
	style: "normal",
	markDefs: [{ _key: "link", _type: "link", href }],
	children: [{ _key: "span", _type: "span", marks: ["link"], text: "click me" }]
})

const renderLink = (href: string) => {
	const { container } = render(<PortableText value={linkBlock(href)} />)
	return container
}

describe("link mark", () => {
	afterEach(cleanup)

	test.each(["https://sanity.io/", "http://sanity.io/", "mailto:hello@sanity.io", "tel:+4712345678", "#section", "/docs", "../docs", "docs/page"])("links the safe href %s", (href) => {
		const anchor = renderLink(href).querySelector("a")
		expect(anchor?.getAttribute("href")).toBe(href)
		expect(anchor?.textContent).toBe("click me")
	})

	test.each(["javascript:alert(1)", "JaVaScRiPt:alert(1)", " javascript:alert(1)", "data:text/html,<script>alert(1)</script>", "vbscript:msgbox(1)", "file:///etc/passwd"])(
		"renders the text of the unsafe href %s without linking it",
		(href) => {
			const container = renderLink(href)
			expect(container.querySelector("a")).toBeNull()
			expect(container.textContent).toBe("click me")
		}
	)
})
