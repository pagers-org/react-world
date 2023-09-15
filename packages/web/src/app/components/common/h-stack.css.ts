import { style, createVar } from '@vanilla-extract/css'
import { CSSProperties } from 'react'

const justifyContentVar = createVar()
const alignItemsVar = createVar()
const spacingVar = createVar()
const marginVar = createVar()
const flexWrapVar = createVar()
const paddingVar = createVar()
const widthVar = createVar()
const heightVar = createVar()

export const containerStyle = style({
  display: 'flex',
  justifyContent: `var(${justifyContentVar})`,
  alignItems: `var(${alignItemsVar})`,
  gap: `var(${spacingVar})`,
  flexWrap: `var(${flexWrapVar})` as CSSProperties['flexWrap'],
  margin: `var(${marginVar})`,
  padding: `var(${paddingVar})`,
  width: `var(${widthVar}, auto)`,
  height: `var(${heightVar}, auto)`,
})
