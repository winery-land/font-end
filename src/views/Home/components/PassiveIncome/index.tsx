import React from 'react'
import styled from 'styled-components'
import { Button, Text } from '@apeswapfinance/uikit'
import { Link } from 'react-router-dom'
import { HeadingText, ButtonFlexWrapper } from '../TradeAnything'
import { TitleText } from '../HomeHero'

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TextWrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
  }
`

const OutlineButton = styled(Button)`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.primaryBright};
  color: ${({ theme }) => theme.colors.primaryBright};
  transition: 0.2s ease-out;
  background: transparent;
  padding: 0 24px;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryBright} !important;
    color: #fff !important;
  }
  &:focus:not(:active) {
    box-shadow: none;
  }
`

const StyledImg = styled.img`
  width: 40%;
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const PassiveIncome = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <TitleText color="primaryBright" bold mb="1.5rem">
          Earn passive income with cryto.
        </TitleText>
        <Text fontWeight={400} mb="1.5rem" color="textLight">
          Wineryswap has the most users of any decentralized platform, ever. And those users are now entrusting the
          platform with over $11 billion in funds.
        </Text>
        <ButtonFlexWrapper>
          <OutlineButton as={Link} to="/earn/farms">
            explore
          </OutlineButton>
          <OutlineButton as="a" href="https://winery.gitbook.io/internal-wiki/product-information/earn" target="_blank">
            learn
          </OutlineButton>
        </ButtonFlexWrapper>
      </TextWrapper>
      <StyledImg src="images/home/passiveincome.png" />
    </Wrapper>
  )
}

export default PassiveIncome
