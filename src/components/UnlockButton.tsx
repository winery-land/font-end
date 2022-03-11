import React from 'react'
import { Button, useWalletModal } from '@apeswapfinance/uikit'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  width: 100%;

 
`

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <StyledButton onClick={onPresentConnectModal} variant="gradient" {...props}>
      {/* {TranslateString(292, 'UNLOCK WALLET')} */}
      CONNECT WALLET
    </StyledButton>
  )
}

export default UnlockButton
