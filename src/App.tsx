import { Text, View } from "@react-pdf/renderer"
import { PortableText } from "./pdf-portabletext"
import blocks from "./test/blocks"

function App() {
  return (
    <>
      <div style={{width: '100vw', height: '95vh'}}>
        <PortableText value={blocks} defaultComponentStyles={{ block: { normal: { color:'green' } } }} components={
         {types: {
          block: {
            normal: () => <View><Text>OVERWRITING THE BLOCK</Text></View>,
          },    
        },}


        }/>
      </div>
    </>
  )
}

export default App
