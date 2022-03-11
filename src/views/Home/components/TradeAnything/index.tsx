import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Button } from '@apeswapfinance/uikit'
import { Link } from 'react-router-dom'
import { BASE_ADD_LIQUIDITY_URL } from 'config'

const TradeWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.primaryBright};
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 2rem 8rem 4rem;
  }
`
const StyledImg = styled.img`
  position: absolute;
  left: 3rem;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const ContentWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: end;
  align-items: center;
`

export const HeadingText = styled(Text)`
  line-height: 64px;
  margin-bottom: 24px;
  font-size: 36px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 56px;
  }
`

const SubTitle = styled(Text)`
  font-size: 26px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: ${({ fontSize }) => fontSize};
  }
`

const ContentWrap = styled.div`
  max-width: 460px;
`

export const ButtonFlexWrapper = styled(Flex)`
  & > * + * {
    margin-left: 1.5rem;
  }
`
const OutlineButton = styled(Button)`
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid #fff;
  color: #fff;
  transition: 0.2s ease-out;
  background: transparent;
  padding: 0 24px;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background: #fff !important;
    color: ${({ theme }) => theme.colors.primaryBright};
  }
  &:focus:not(:active) {
    box-shadow: none;
  }
  font-size: 16px;
`

const TradeAnything = () => {
  return (
    <TradeWrapper>
      <ContentWrapper>
        <StyledImg src="/images/home/barrels.png" />
        <ContentWrap>
          <Flex flexWrap="wrap" mb="30px">
            <HeadingText textAlign="right" color="#fff" bold>
              Trade Anything
            </HeadingText>
            <Flex justifyContent="space-between" flex={1}>
              <SubTitle color="#fff" fontSize="36px" fontWeight={600}>
                No registed
              </SubTitle>
              <SubTitle color="#fff" fontSize="36px" fontWeight={600}>
                No hassed
              </SubTitle>
            </Flex>
          </Flex>
          <Text mb="24px" textAlign="right" color="#fff" fontWeight={400}>
            Wineryswap has the most users of any decentralized platform, ever. And those users are now entrusting the
            platform with over $11 billion in funds.
          </Text>
          <ButtonFlexWrapper justifyContent="end">
            <OutlineButton
              as="a"
              href="https://winery.gitbook.io/internal-wiki/product-information/trade"
              target="_blank"
            >
              Learn
            </OutlineButton>
            <OutlineButton as="a" href={BASE_ADD_LIQUIDITY_URL}>
              Trade now
            </OutlineButton>
          </ButtonFlexWrapper>
        </ContentWrap>
      </ContentWrapper>
    </TradeWrapper>
  )
}

export default TradeAnything
