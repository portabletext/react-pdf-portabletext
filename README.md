# Portable Text Serializer to ReactPDF

#### This library provides a serializer for PortableText content to ReactPDF components. The resulting "block content as PDF" can be usedc in both the browser (React) and the server (Node).

## Portable Text

The team at Sanity developed a specification called "Portable Text" which provides a feature-rich, extensible way to represent and intermingle both rich text and custom content, stored and transmitted in a format not rigidly handcuffed to presentation mechanism (in contrast to HTML, Markdown, etc, which assume only one presentation channel and tie the data itself to how that data will be displayed).

For more information on the specification and Portable Text Editor for generating portable text content [PortableText.org](https://www.portabletext.org/))

## Usage

This library provides a React component called `PortableText` that takes block content as a prop and serializes it to ReactPDF components that represent the PDF's contents using ReactPDFs scalar components (`View`, `Text`, `Image`, etc). 

#### ----> It is up to you to wrap the PortableText serialzer component in the `Document` and `Page` components from React PDF as needed before using them in the workflows outlined in the "Browser" and "Node" sections below! The serializer intentionally begins at the `View` level and does not include `Document/Page` wrappers so that it can be used in multiple locations in one PDF (if desired).

#### Browser

These ReactPDF components which represent the contents of PDF can be consumed by ReactPDFs user interface components, which include:

- `PDFViewer`: Renders the generated PDF in the browser in an embedded preview window
- `PDFDownloadLink`: Allows the user to download the generated PDF as a file
- `BlobProvider`: Get the blob data for the generated PDF without rendering a UI element on screen

See the specs for these components in the [React Pdf Components Docs](https://react-pdf.org/components).

#### Node

These ReactPDF components which represent the contents of PDF can also be consumed in a Node environment, using React PDFs Node API, which includes:

- `renderToFile`: create a file from the PDF
- `renderToString`: stringify the PDF
- `renderToBuffer`: turn the PDF into a buffer
- `renderToStream`: turn the PDF into a Node Stream

See the specs for these node handlers in the [React Pdf Node API Docs](https://react-pdf.org/node).

### Props

This library's `PortableText` component is a wrapper around the PortableText React serializer, so it supports all the core props of that library, see [@portabletext/react](https://www.npmjs.com/package/@portabletext/react).

#### Core props inlude but are not limited to:

- `value` (required): an array of portable text blocks to serialize and render
- `components` (optional): an object with custom components to be used for rendering blocks. As stated in the `@portabletext/react` docs:

    > Default components are provided for all standard features of the Portable Text spec.

    > You can pass an object of components to use, both to override the defaults and to provide components for your custom content types. Provided components will be merged with the defaults. In other words, you only need to provide the things you want to override."

#### Library-specific additonal props:

This ReactPDF serializer library also provides a few additional props that are specific to the ReactPDF use case. Because the ReactPDF contents themselves are not part of the DOM/html, they will not respect the CSS rules defined for the parent application.

Therefore, the library provides a default set of styles for its default components, but also exposes the following props to make styling easier without having to overwrite the default components themselves:

- `defaultComponentStyles` (optional): An style object which is deep merged with the style object provided to the default components (meaning you only need to provide any portions of the object for which you want to override or extend the styling). The shape of that object is:

    ```
    {
    	block: {
    		h1: Style
    		h2: Style
    		h3: Style
    		h4: Style
    		h5: Style
    		h6: Style
    		normal: Style
    		blockquote: Style
    	}
    	text: {
    		h1: Style
    		h2: Style
    		h3: Style
    		h4: Style
    		h5: Style
    		h6: Style
    		normal: Style
    		blockquote: Style
    	}
    	marks: {
    		strong: Style
    		em: Style
    		link: Style
    		underline: Style
    		"strike-through": Style
    		code: Style
    		superscript: Style
    		subscript: Style
			highlight: Style
    	}
    	list: {
    		list: Style
    		listDeep: Style
    		listItemWrapper: Style
    		listItemDecorator: Style
    	}
    	image: Style
    }
    ```

    **where "Style" is an object containing any of the "Valid CSS Properties" supported by the ReactPDF styling API**

    See [ReactPDF Styling](https://react-pdf.org/styling#valid-css-properties) for important information on what properties are allowed and what formats are valid for the values of those properties.

    This gives you a convenient way to add/change styling for the **default components without overwriting the component structure itself**. However (as mentioned above) you can also pass an object to the `components` prop to overwrite the default components and/or define components for custom portable text block types (and you should give those components inline styles using the ReactPDF-supported CSS properties).

- `baseFontSize` (optional): A numberic value that represents the font size of the "normal" block type (in "pt") -- this is used to calculate font sizing and layout spacing for all block types. When not provided, defaults to `12`.

#### Prop Conflicts:

You may provide both the `components` and `defaultComponentStyles` props, but conflicts are prohibited and will throw an error. "Conflicts" in this context means providing values for a path in `defaultComponentStyles` that overlap with either a path in `components` or with a direct child of `components.types`.

For example, you can NOT provide a value for:

- both `defaultComponentStyles.block.h1` and `components.block.h1`.
- both `defaultComponentStyles.block` and `components.types.block`.

    and so on

However, you CAN provide a value for :

- both `defaultComponentStyles.block.h1` and `components.block.h2`
- both `defaultComponentStyles.block` and `components.types.list`

    and so on.

The error message thrown when conflicts are encountered contains the same clarification and examples as this readme section.

## Development & Testing

### Local dev:

To launch a simple browser-based demo application (the easiest way develop and visually confirm changes/serializers for new test components), run:

```
	pnpm install && pnpm run dev
```

And open http://localhost:5173. A set of code-defined test blocks are rendered using the `PortableText` component and displayed in a ReactPdf `PDFViewer` component. See `/demo/App.tsx`

To add/modify the test blocks rendered, see `/demo/blocks`.

### Testing:

```
pnpm run test
```

This will compare generated PDFs for a variety of complex test cases to pre-defined snapshots. If you make a change and it no longer passes the test, consider whether that is the result of a bug (in which case, fix it) or if you made an intentional change, for example, to some default styling/layout code. In the latter case, delete the snapshot files for the test case(s) in question (those files will be the base snapshot and the .diff and .new files that were generated next to it by the failed comparison), then re-run the tests to create a new base snapshot. See the [pdf-visual-diff](github.com/moshensky/pdf-visual-diff#readme) library for more information (used for creating/comparing the snapshots in our tests).
