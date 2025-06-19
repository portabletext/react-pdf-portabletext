// import { Text, View } from "@react-pdf/renderer"
import { Document, PDFViewer, Page } from "@react-pdf/renderer"
import { PortableText } from "./pdf-portabletext"
import blocks from "./test/blocks"

function App() {
	return (
		<>
			<div style={{ width: "100vw", height: "95vh" }}>
				<PDFViewer width='100%' height='100%' style={{ padding: "100px" }} showToolbar={true}>
					<Document>
						<Page size='A4' style={{ padding: "10px" }}>
							<PortableText
								value={blocks}
								baseFontSize={16}
								// defaultComponentStyles={{ text: { normal: { color: 'blue' } } }}
								// components={
								//   {
								//     types: {
								//       block: () => <View><Text>OVERWRITING ANY BLOCK</Text></View>,

								//     },
								//     block: {
								//       normal: undefined,
								//       h1: () => <View><Text>OVERWRITING THE H1 BLOCK</Text></View>,
								//     }
								//   }
								// }
							/>
						</Page>
					</Document>
				</PDFViewer>
			</div>
		</>
	)
}

export default App
