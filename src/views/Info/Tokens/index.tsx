import React from 'react'
import styled from 'styled-components'
import TokensBoard, { TitleText } from '../components/TokensBoard'
import useBoard from '../components/useBoard'
import { isLocal } from '../Overview'


const PageWrapper = styled.div`
  padding: 2rem 4rem;
`

const AllTokens = () => {
  const { tokens } = useBoard(isLocal())

  return (
    <PageWrapper>
      <TitleText>All Tokens</TitleText>
      <TokensBoard tokens={tokens} />
    </PageWrapper>
  )
}

export default AllTokens
