import React from 'react'

const poolAddresses = [
  '0xBC1165e6dBdc67328d44597DF8eDa6b718D676EB',
  '0x0BaEF08391261e7F9bb79F1498b407d5f5983Ed7',
  '0xa93abCD2DD5AFC408f23c2eA7745DDF42ca1a523',
  '0xC30D4C52Ece774d80A18CE3247a367fcC2F60492',
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
const useBoard = (url) => {
  const [poolsVolume, setPoolsVolume] = React.useState([])
  const [tokens, setTokens] = React.useState([])
  const [liquidity30d, setLiquidity30d] = React.useState([])
  const [volume30d, setVolume30d] = React.useState([])
  React.useEffect(() => {
    const fetchPoolsVolume = async () => {
      try {
        const response = await (await fetch(url)).json()
        const {
          tokenPrice: { pricesToday, priceYesterDay },
          poolsReserve,
          volumn: [volumn24h],
          liquidity30Days,
        } = response
        const {
          data: { pool, token },
        } = volumn24h

        const volumeArr = []
        poolAddresses.forEach((address) => {
          const key = address.toLowerCase()
          volumeArr.push({
            [key]: {
              volume24h: Object.keys(pool[key] || {}).reduce(
                (accu, tokenAddress) => pricesToday[tokenAddress] * 10 ** -18 * pool[key][tokenAddress],
                0,
              ),
              /* eslint-disable no-param-reassign */
              volume7d: response.volumn.reduce((sum: number, { data: { pool: pool1 } }) => {
                sum += Object.keys(pool1[key] || {}).reduce(
                  (accu, tokenAddress) => pricesToday[tokenAddress] * 10 ** -18 * pool1[key][tokenAddress],
                  0,
                )
                return sum
              }, 0),
              /* eslint-disable no-param-reassign */
            },
          })
        })
        const volumeAnalyst = []

        response.volumn.forEach((dayData) => {
          const {
            data: { pool: pool1 },
          } = dayData

          volumeAnalyst.push({
            date: dayData.date,
            /* eslint-disable no-param-reassign */
            volumeUSD: poolAddresses.reduce((totalVolume, poolAddressUpperCase, index) => {
              const poolAddress = poolAddressUpperCase.toLowerCase()
              totalVolume += Object.keys(pool1[poolAddress] || {}).reduce((accu, tokenAddress) => {
                accu += pricesToday[tokenAddress] * 10 ** -18 * pool1[poolAddress][tokenAddress]
                return accu
              }, 0)

              return totalVolume
            }, 0),
            /* eslint-disable no-param-reassign */
          })
        })

        const newPoolsArr = poolAddresses.map((address) => {
          const poolAddress = address.toLowerCase()
          const token0Price = +pricesToday[poolsReserve[poolAddress].token_0_address]
          const token1Price = +pricesToday[poolsReserve[poolAddress].token_1_address]
          const reserve0 = +poolsReserve[poolAddress].reserve0
          const reserve1 = +poolsReserve[poolAddress].reserve1
          const poolLiquidity: number = (2 * token0Price * reserve0) / 10 ** 36

          return {
            ...poolsReserve[poolAddress],
            token_0_price: token0Price,
            token_1_price: token1Price,
            reserve0,
            reserve1,
            liquidity: poolLiquidity,
          }
        })
        const tokensReserve = {}
        newPoolsArr.forEach((itemPool) => {
          tokensReserve[itemPool.token_0_address] =
            (tokensReserve[itemPool.token_0_address] || 0) + itemPool.reserve0 / 10 ** 18
          tokensReserve[itemPool.token_1_address] =
            (tokensReserve[itemPool.token_1_address] || 0) + itemPool.reserve1 / 10 ** 18
        })
        setLiquidity30d(
          Object.keys(liquidity30Days).map((date) => ({
            date: new Date(date),
            liquidityUSD: liquidity30Days[date],
          })),
        )
        setVolume30d(volumeAnalyst.reverse())
        setPoolsVolume(volumeArr)
        
        setTokens(
          Object.keys(tokensReserve).map((tokenAddress) => ({
            liquidity: tokensReserve[tokenAddress] * pricesToday[tokenAddress] * 10 ** -18,
            tokenPrice: +pricesToday[tokenAddress] * 10 ** -18,
            priceChange:
              (((pricesToday[tokenAddress] - priceYesterDay[tokenAddress]) * 10 ** -18) /
                (priceYesterDay[tokenAddress] * 10 ** -18)) *
              100,
            volume24h: priceYesterDay[tokenAddress] * 10 ** -18 * token[tokenAddress],
            ...tokenAddressToName(tokenAddress),
          })),
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchPoolsVolume()
  }, [url])
  return {
    poolsVolume,
    tokens,
    liquidity30d,
    volume30d,
  }
}

export default useBoard
