---
"@portabletext/react-pdf": major
---

React 18 support is dropped: the `react` peer dependency is now `^19` only, and `react` is a peer dependency instead of a dependency.

The default `link` mark now renders a clickable link in the PDF, but only when its `href` looks safe: `http`, `https`, `mailto`, `tel`, `#`, `/` and relative URLs. Any other `href`, such as `javascript:` or `data:`, is rendered as plain text and is not linked. This is the same check `@portabletext/to-html` uses, provided by `@portabletext/toolkit`.

Dependencies are updated, including `@portabletext/toolkit` to v6 and `@portabletext/react` to v8.
