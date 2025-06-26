import { Document, PDFViewer, Page } from "@react-pdf/renderer"
import { PortableText } from "../src/pdf-portabletext"
import blocks from "./blocks"

function App() {
	return (
		<>
			<div style={{ width: "100vw", height: "95vh" }}>
				<PDFViewer width='100%' height='100%' style={{ padding: "100px" }} showToolbar={true}>
					<Document>
						<Page size='A4' style={{ padding: "16px" }}>
							<PortableText value={blocks} baseFontSizePt={16} />
						</Page>
					</Document>
				</PDFViewer>
			</div>
		</>
	)
}

export default App
