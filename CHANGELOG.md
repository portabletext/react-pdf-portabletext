# @portabletext/react-pdf

## 2.0.0

### Major Changes

- [#39](https://github.com/portabletext/react-pdf-portabletext/pull/39) [`83a3d01`](https://github.com/portabletext/react-pdf-portabletext/commit/83a3d01db22ee4fe7a8ab90d9bc829ab1cf3a870) Thanks [@rexxars](https://github.com/rexxars)! - The package is now ESM only, and requires Node.js 22.12 or later

    #### When you will see a difference

    Only if you load this package with `require()`, or build on Node.js 20 or earlier. If you already `import` it, nothing changes.

    #### What changes

    The package no longer ships a CommonJS build. `require("@portabletext/react-pdf")` will fail, where before it resolved to `dist/index.cjs`. Use `import` instead, or a dynamic `await import()` from a CommonJS file.

    This brings the package in line with the rest of the Portable Text packages, which are already ESM only.

    Node.js 20 reached end of life in April 2026. The package previously declared no `engines` range at all, so nothing was enforced.

### Patch Changes

- [#19](https://github.com/portabletext/react-pdf-portabletext/pull/19) [`f445fda`](https://github.com/portabletext/react-pdf-portabletext/commit/f445fda60966365ab084d427c1611aa1e9d98762) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @portabletext/react to ^3.2.4

- [#26](https://github.com/portabletext/react-pdf-portabletext/pull/26) [`1a34a7d`](https://github.com/portabletext/react-pdf-portabletext/commit/1a34a7d1a1d3aaf767e9656f854fed064dbbf388) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @portabletext/react to v4

## 1.0.7

### Patch Changes

- [#16](https://github.com/portabletext/react-pdf-portabletext/pull/16) [`392d801`](https://github.com/portabletext/react-pdf-portabletext/commit/392d8015a40cecf85d4710202dc69b3997de0ac6) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @portabletext/react to ^3.2.3

- [#17](https://github.com/portabletext/react-pdf-portabletext/pull/17) [`f6a8e47`](https://github.com/portabletext/react-pdf-portabletext/commit/f6a8e4713ee0ff462c9e7aa5c1cd2803da929595) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @portabletext/toolkit to ^2.0.18

- [#27](https://github.com/portabletext/react-pdf-portabletext/pull/27) [`f998b1f`](https://github.com/portabletext/react-pdf-portabletext/commit/f998b1fb770abd5753ec3529653c64e8c31c4197) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @portabletext/toolkit to v3

- [#31](https://github.com/portabletext/react-pdf-portabletext/pull/31) [`673f2f5`](https://github.com/portabletext/react-pdf-portabletext/commit/673f2f5e945e869e2e5241656f836cc97b2f425f) Thanks [@christianhg](https://github.com/christianhg)! - fix: numbered list counter no longer resets after nested lists

## 1.0.6

### Patch Changes

- [`1050ded`](https://github.com/portabletext/react-pdf-portabletext/commit/1050dedbda7c2a07a589acef31425f453e037add) Thanks [@stipsan](https://github.com/stipsan)! - Add LICENSE

## [1.0.5](https://github.com/portabletext/react-pdf-portabletext/compare/v1.0.4...v1.0.5) (2025-07-02)

### Bug Fixes

- **deps:** clean up dependencies, upgrade to latest vite, vitest ([#14](https://github.com/portabletext/react-pdf-portabletext/issues/14)) ([f285be2](https://github.com/portabletext/react-pdf-portabletext/commit/f285be26d4c273810b94abe0f74b4ba0ee1b2a22))
- Update the readme to give infor on the PDFViewer issue, add some keywords ([43772a9](https://github.com/portabletext/react-pdf-portabletext/commit/43772a962e8b59a88bfd1246f7c863fabf61d711))

## [1.0.4](https://github.com/portabletext/react-pdf-portabletext/compare/v1.0.3...v1.0.4) (2025-07-01)

### Bug Fixes

- update package.json with homepage, keywords, bugs url to improve search indexing ([83b9525](https://github.com/portabletext/react-pdf-portabletext/commit/83b9525af89f4b351f13e094e1bb56dba0d4ab21))

## [1.0.3](https://github.com/portabletext/react-pdf-portabletext/compare/v1.0.2...v1.0.3) (2025-07-01)

### Bug Fixes

- no-op change to trigger release ([4ea0011](https://github.com/portabletext/react-pdf-portabletext/commit/4ea0011e3e76024481ec6aee955e2add1a99773e))

## [1.0.2](https://github.com/portabletext/react-pdf-portabletext/compare/v1.0.1...v1.0.2) (2025-07-01)

### Bug Fixes

- built demo not supported for this repo ([2394675](https://github.com/portabletext/react-pdf-portabletext/commit/2394675cd98ae64e5170c8853184618427f216ed))

## [1.0.1](https://github.com/portabletext/react-pdf-portabletext/compare/v1.0.0...v1.0.1) (2025-07-01)

### Bug Fixes

- Update package.json repository settings ([19d19d0](https://github.com/portabletext/react-pdf-portabletext/commit/19d19d01efc200d1c31c17085ed1843fadb838de))

## 1.0.0 (2025-06-30)

### Features

- Add changelog functionality ([9c9e0d6](https://github.com/portabletext/react-pdf-portabletext/commit/9c9e0d6df28030f106dbdf92c59bb754aa456003))

<!-- markdownlint-disable --><!-- textlint-disable -->
