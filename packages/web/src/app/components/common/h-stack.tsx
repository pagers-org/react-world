import { containerStyle } from './h-stack.css'
import BaseProps, { getMargin, getPadding } from '@web/app/_types/base-props'
import { CSSProperties, ReactNode } from 'react'

export type HStackProps = BaseProps & {
  gap?: CSSProperties['gap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  flexWrap?: CSSProperties['flexWrap']
  width?: string
  height?: string
  children: ReactNode
}

type CSSVariableStyles = {
  [key: string]: string | number | undefined
}

type ExtendedStyleProps = CSSProperties & CSSVariableStyles

const getAlign = (align: string) => {
  switch (align) {
    case 'flexStart':
      return 'flex-start'
    case 'flexEnd':
      return 'flex-end'
    case 'spaceBetween':
      return 'space-between'
    case 'center':
      return 'center'
    default:
      throw new Error('invalid align input')
  }
}

const HStack = ({
  gap = '0.875rem',
  justifyContent = 'flexStart',
  alignItems = 'stretch',
  flexWrap,
  width,
  height,
  children,
  margin,
  mt = '0',
  ml = '0',
  mr = '0',
  mb = '0',
  padding,
  pt = '0',
  pl = '0',
  pr = '0',
  pb = '0',
}: HStackProps) => {
  return (
    <div
      className={containerStyle}
      style={
        {
          justifyContent: getAlign(justifyContent),
          gap,
          flexWrap,
          margin: getMargin({ margin, mt, ml, mr, mb }),
          padding: getPadding({ padding, pt, pl, pr, pb }),
          alignItems,
          width,
          height,
        } as ExtendedStyleProps
      }
    >
      {children}
    </div>
  )
}

export default HStack
