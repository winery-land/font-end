import { Card, Flex, Text } from '@apeswapfinance/uikit'
import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  margin-bottom: 3.5rem;
`

const TitleWrapper = styled.div`
  max-width: 700px;
`
const StyledImg = styled.img`
  margin-top: -5rem;
  height: 141px;
`

const HeadingText = styled(Text)`
  line-height: 30px;
  font-weight: 500;
`
const UserContent = styled.div`
  padding: 16px 0;
`

const StyledCard = styled(Card)`
  position: relative;
  overflow: visible;
  box-shadow: 0px 5px 10px 5px rgb(25 19 38 / 10%);
`

const Row = styled(Flex)`
  margin-top: 6rem;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 6rem -28px 0;
  }
  & > * {
    width: 100%;
    margin-bottom: 5rem;
    ${({ theme }) => theme.mediaQueries.md} {
      width: calc(100% / 3 - 56px);
      margin: 0 28px;
    }
    text-align: center;
  }
`

const UserGrid = () => {
  return (
    <MainWrapper>
      <TitleWrapper>
        <Text fontSize="32px" bold mb="18px">
          Used by millions. Trusted with billions.
        </Text>
        <Text color="textLight" fontWeight={400}>
          Wineryswap has the most users of any decentralized platform, ever. And those users are now entrusting the
          platform with over $11 billion in funds.
        </Text>
      </TitleWrapper>

      <Row>
        <StyledCard>
          <StyledImg src="images/home/funny-cat1.png" />
          <UserContent>
            <HeadingText fontSize="30px">1.2 million </HeadingText>
            <Text color="secondary" fontSize="32px" bold>
              Users
            </Text>
            <Text fontWeight={400}>In the last 30 days</Text>
          </UserContent>
        </StyledCard>
        <StyledCard>
          <StyledImg src="images/home/wineswap-image.png" />
          <UserContent>
            <HeadingText fontSize="30px">5.5 million</HeadingText>
            <Text color="secondary" fontSize="32px" bold>
              Trades
            </Text>
            <Text fontWeight={400}>In the last 30 days</Text>
          </UserContent>
        </StyledCard>
        <StyledCard>
          <StyledImg src="images/home/funny-cat3.png" />
          <UserContent>
            <HeadingText fontSize="30px">$50 million</HeadingText>
            <Text color="secondary" fontSize="32px" bold>
              Staked
            </Text>
            <Text fontWeight={400}>In the last 30 days</Text>
          </UserContent>
        </StyledCard>
      </Row>
    </MainWrapper>
  )
}

export default UserGrid
