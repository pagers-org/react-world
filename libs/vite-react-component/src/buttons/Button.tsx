import { ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ text }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return <BasicButton ref={ref}>{text}</BasicButton>
  }
)

const BasicButton = styled.button`
  color: white;
`
