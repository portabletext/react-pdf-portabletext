---
"@portabletext/react-pdf": patch
---

fix(deps): require react ^19.2.2

The package now depends on `react` and `react-dom` `^19.2.2`, raised from `^19.1.1`. This is a raised minimum, not a security fix. The React Server Components vulnerabilities fixed in 19.2.1 and 19.2.2 affect only the `react-server-dom-*` packages, which this package does not use.
