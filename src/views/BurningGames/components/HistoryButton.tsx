/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '@apeswapfinance/uikit'

const TabButton = ({ isAll, onChange }) => {
    return (
        <Wrapper>
            <ButtonMenu activeIndex={isAll ? 1 : 0} size="sm" onClick={onChange}>
                <ButtonMenuItem
                    fontFamily="poppins" fontSize="12px">
                    All History
                </ButtonMenuItem>
                <ButtonMenuItem fontFamily="poppins" fontSize="12px">
                    Your History
                </ButtonMenuItem>
            </ButtonMenu>
        </Wrapper>
    )
}

export default TabButton

const Wrapper = styled.div`
    margin: 10px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
