import React from 'react'
import { Button, GradientButton, Text } from '@apeswapfinance/uikit'
import useTheme from 'hooks/useTheme'
import { useHistory } from 'react-router-dom'

import { FeatureBox, Motto, SectionHeading, Frame, IconBox, CenteredImage, Container, ButtonBox } from './styles'

interface Props {
  name: string
}

const Icon = ({ name }: Props) => {
  const { isDark } = useTheme()

  return (
    <IconBox>
      <CenteredImage src={`/images/ifos/${name}-${isDark ? 'dark' : 'light'}.svg`} alt={name} />
    </IconBox>
  )
}

const HowItWorks = () => {
  const history = useHistory()

  const handleDoOwnClick = () => {
    history.push('/ss-iao')
  }

  return (
    <Container>
      <SectionHeading size="lg" fontFamily="poppins" textAlign="center">
        OUR IAO IDEOLOGY
      </SectionHeading>
      <Frame>
        <FeatureBox>
          <Icon name="investment" />

          <SectionHeading fontFamily="poppins" textAlign="center">
            INVESTMENT
          </SectionHeading>
          <Motto>BUILD</Motto>
          <Text fontFamily="poppins" textAlign="center">
            We highly vet applicants to choose projects we believe in as long term investments and partners
          </Text>
        </FeatureBox>
        <FeatureBox>
          <Icon name="development" />

          <SectionHeading fontFamily="poppins" textAlign="center">
            DEVELOPMENT
          </SectionHeading>
          <Motto>HOLD</Motto>
          <Text fontFamily="poppins" textAlign="center">
            The funds raised are used to finalize development and launch the project
          </Text>
        </FeatureBox>
        <FeatureBox>
          <Icon name="innovation" />

          <SectionHeading fontFamily="poppins" textAlign="center">
            INNOVATION
          </SectionHeading>
          <Motto>EXPERIMENT</Motto>
          <Text fontFamily="poppins" textAlign="center">
            These projects are meant to be unique and push the boundaries of DeFi
          </Text>
        </FeatureBox>
      </Frame>
      <ButtonBox>
        <GradientButton variant="yellow" external href="https://docs.google.com/forms/d/1qE4YgCWnNM0rcFHE1-uVAaQG3hI14oVGbPhITCRxKO4/viewform" as="a">
          BECOME A PARTNER
        </GradientButton>
        {/* <GradientButton variant="yellow" onClick={handleDoOwnClick}>
          LAUNCH YOUR OWN
        </GradientButton> */}
      </ButtonBox>
    </Container>
  )
}

export default HowItWorks
