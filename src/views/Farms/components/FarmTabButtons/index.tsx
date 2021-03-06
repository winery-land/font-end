import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@apeswapfinance/uikit'
import useI18n from 'hooks/useI18n'


const FarmTabButtons = () => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <ButtonMenu variant="gradient" activeIndex={!isExact ? 1 : 0} size="sm">
        <ButtonMenuItem color="white" as={Link} to={`${url}`} fontFamily="poppins" fontSize="12px" >
          {/* {TranslateString(999, 'Active')} */}
          Live
        </ButtonMenuItem>

        <ButtonMenuItem as={Link} to={`${url}/history`} fontFamily="poppins" fontSize="12px">
          {/* {TranslateString(999, 'Inactive')} */}
          Finish
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  margin-right: 10px;
  margin-left: 30px;

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 64px;
    margin-right: 44px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 54px;
    margin-right: 34px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 84px;
    margin-right: 74px;
  }
`
