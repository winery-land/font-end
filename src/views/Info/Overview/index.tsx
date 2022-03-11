import useTheme from 'hooks/useTheme'
import React from 'react'
import styled from 'styled-components'
import { Text, Card } from '@apeswapfinance/uikit'
import { useWeb3React } from '@web3-react/core'
import { usePools } from 'state/hooks'
import chartData, { formatLongNumber, formatTime } from 'views/Info/config'
import { fromUnixTime } from 'date-fns'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import TokensBoard, { TitleText } from '../components/TokensBoard'
import PoolsBoard from '../components/PoolsBoard'
import useBoard from '../components/useBoard'

const PageWrapper = styled.div`
  padding: 2rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 2rem 5rem;
    max-width: 1440px;
  }
`

const BoardWrapper = styled.div`
  margin-top: 3rem;
`
const ChartsContainer = styled.div`
  width: 100%;
`

const ChartWrapper = styled.div`
  --gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    width: calc(100%);
    margin-bottom: var(--gap);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 calc(var(--gap) * -1);
    & > * {
      width: calc(50% - var(--gap) * 2);
      margin: 0 var(--gap);
    }
  }
`

const CardChart = styled(Card)`
  height: 100%;
  padding: 2rem;
`

const ChartContainer = styled.div`
  height: 400px;
`

const LiquidityDataConvert = (data) =>
  data.map((day) => ({
    time: day.date,
    value: day.liquidityUSD,
  }))

const volumeDataConvert = (data) =>
  data.map((day) => ({
    time: fromUnixTime(day.date),
    value: day.volumeUSD,
  }))

const poolAddresses = [
  '0xa93abCD2DD5AFC408f23c2eA7745DDF42ca1a523',
  '0xBC1165e6dBdc67328d44597DF8eDa6b718D676EB',
  '0xC30D4C52Ece774d80A18CE3247a367fcC2F60492',
  '0x0BaEF08391261e7F9bb79F1498b407d5f5983Ed7',
]

const tokenAddressToName = (address: string) => {
  switch (address) {
    case '0x84d58f31e07534a581cc09a1d140d77ae9546426':
      return {
        name: 'CORK',
        symbol: 'CORK',
      }
    case '0xae13d989dac2f0debff460ac112a837c89baa7cd':
      return {
        name: 'Wrapped BNB',
        symbol: 'WBNB',
      }

    case '0x35c450f7f1664236356b8b27a6848bb9189c5272':
      return {
        name: 'UaAloToken',
        symbol: 'UALT',
      }
    case '0x98649fde88981790b574c9a6066004d5170bf3ef':
      return {
        name: 'BUSD Token',
        symbol: 'BUSD',
      }
    default:
      return null
  }
}

export const isLocal = () => {
  return window.location.host.includes('localhost')
    ? 'http://192.168.1.38:5000/api/dex/data'
    : 'https://dex.winery.land/api/dex/data'
}

const Overview = () => {
  const { theme } = useTheme()
  const [liquidityValue, setLiquidityValue] = React.useState<undefined | number>()
  const [liquidityDate, setLiquidityDate] = React.useState<undefined | string>()
  const [volumeValue, setVolumeValue] = React.useState<undefined | number>()
  const [volumeDate, setVolumeDate] = React.useState<undefined | string>()
  const { poolsVolume, tokens, liquidity30d, volume30d } = useBoard(isLocal())
  const { account } = useWeb3React()

  React.useEffect(() => {
    const chartArr = volumeDataConvert(volume30d)
    if (chartArr.length > 0 && !volumeValue) {
      setVolumeValue(chartArr.slice(-1)[0].value)
      setVolumeDate(formatTime(chartArr.slice(-1)[0].time))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volumeValue, volumeDate, volume30d])
  React.useEffect(() => {
    const chartArr = LiquidityDataConvert(liquidity30d)
    if (chartArr.length > 0 && !liquidityValue) {
      setLiquidityValue(chartArr.slice(-1)[0].value)
      setLiquidityDate(formatTime(chartArr.slice(-1)[0].time))
    }
  }, [liquidityValue, liquidityDate, liquidity30d])
  return (
    <PageWrapper>
      <ChartsContainer>
        <TitleText>Wineswap info & Analytics</TitleText>
        <ChartWrapper>
          {/* Liquidity Chart */}
          <CardChart>
            <TitleText color="primaryBright" bold fontSize="32px">
              Liquidity
            </TitleText>
            <Text fontSize="26px" bold>
              {formatLongNumber(liquidityValue)}
            </Text>
            <Text>{liquidityDate}</Text>

            {/* Chart */}
            <ChartContainer>
              <LineChart
                theme={theme}
                setLiquidityValue={setLiquidityValue}
                setLiquidityDate={setLiquidityDate}
                chartData={LiquidityDataConvert(liquidity30d)}
              />
            </ChartContainer>
          </CardChart>
          {/* Liquidity Chart */}

          {/* VolumeChart */}
          <CardChart>
            <TitleText color="primaryBright" bold fontSize="32px">
              Volume 24h
            </TitleText>
            <Text fontSize="26px" bold>
              {formatLongNumber(volumeValue)}
            </Text>
            <Text>{volumeDate}</Text>

            {/* Chart */}
            <ChartContainer>
              <BarChart
                theme={theme}
                setVolumeDate={setVolumeDate}
                setVolumeValue={setVolumeValue}
                chartData={volumeDataConvert(volume30d)}
              />
            </ChartContainer>
          </CardChart>
          {/* VolumeChart */}
        </ChartWrapper>
      </ChartsContainer>

      <BoardWrapper>
        <TitleText fontSize="26px">Top Tokens</TitleText>
        <TokensBoard tokens={tokens} />
      </BoardWrapper>
      <BoardWrapper>
        <TitleText fontSize="26px">Top Pools</TitleText>
        <PoolsBoard account={account} poolsVolume={poolsVolume} />
      </BoardWrapper>
    </PageWrapper>
  )
}

export default Overview
