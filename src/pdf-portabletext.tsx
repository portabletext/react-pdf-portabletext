import {PortableText as BasePortableText} from '@portabletext/react'
import type {PortableTextBlock, TypedObject} from '@portabletext/types'
import type { JSX } from 'react'
import {mergeAndStyleComponents} from './components/defaults'
import type { StyledPortableTextProps } from './types/styles'
import { Document, Page, PDFViewer } from '@react-pdf/renderer'

export type * from '@portabletext/react'

const checkPropsOverlap = (props: StyledPortableTextProps<any>) => {
  const { components, defaultComponentStyles = {} } = props
  if(components && defaultComponentStyles) {
    
    const foundOverlap = keys componentKeys.find((key: string) => {
      return key in defaultComponentStyles
    }) ||    componentTypeKeys.find((key: string) => {
      return key in defaultComponentStyles
    })

    if(!!foundOverlap) {
      const errorMessage = `You have provided a matching key for key ${foundOverlap} in both the "components" and "defaultComponentStyles" props.
      Keys within these props should not overlap.`
      console.error(errorMessage)
      throw new Error(errorMessage)
    }
  }
}

export function PortableText<B extends TypedObject = PortableTextBlock>(
  props: StyledPortableTextProps<B>,
): JSX.Element {
  const { baseFontSize = 16, defaultComponentStyles = {}, components, ...portableTextProps } = props
  const mergedAndStyledComponents = mergeAndStyleComponents(components, defaultComponentStyles, baseFontSize)

  checkPropsOverlap(props)

  return (
    <PDFViewer width="100%" height="100%" showToolbar={true}>
      <Document>
        <Page size="A4">
          <BasePortableText
            {...portableTextProps}
            components={mergedAndStyledComponents}
          />
          </Page>
      </Document>
    </PDFViewer>
  )
}
