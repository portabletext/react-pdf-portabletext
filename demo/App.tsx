import { Document, PDFViewer, Page } from "@react-pdf/renderer"
import { PortableText } from "../src/pdf-portabletext"
import blocks from "./blocks"

function App() {
	const dateKey = Date.now()

	return (
		<div style={{ width: "80vw", height: "85vh" }}>
			<h1>PDF Viewer Rendering Serialized Portable Text:</h1>
			<PDFViewer
				// key is used to force a re-render of the PDFViewer on hot reload
				key={dateKey}
				width='100%'
				height='100%'
				style={{}}
				showToolbar={true}
			>
				<Document>
					<Page size='A4' style={{ padding: "16px" }}>
						<PortableText value={blocks} baseFontSizePt={12} />
					</Page>
				</Document>
			</PDFViewer>
		</div>
	)
}

export default App
