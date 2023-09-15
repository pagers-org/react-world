type BaseProps = {
  testId?: string
  className?: string
  margin?: string
  mt?: string
  ml?: string
  mr?: string
  mb?: string
  padding?: string
  pt?: string
  pl?: string
  pr?: string
  pb?: string
}

export const getMargin = ({
  margin,
  mt = '0',
  ml = '0',
  mr = '0',
  mb = '0',
}: {
  margin?: string
  mt?: string
  ml?: string
  mr?: string
  mb?: string
}) => {
  return margin || `${mt} ${mr} ${mb} ${ml}`
}

export const getPadding = ({
  padding,
  pt = '0',
  pl = '0',
  pr = '0',
  pb = '0',
}: {
  padding?: string
  pt?: string
  pl?: string
  pr?: string
  pb?: string
}) => {
  return padding || `${pt} ${pr} ${pb} ${pl}`
}

export default BaseProps
