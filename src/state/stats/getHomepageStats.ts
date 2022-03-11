import { apiBaseUrl } from 'hooks/api'
import { HomepageData } from 'state/types'

const getHomepageStats = async (): Promise<HomepageData> => {
  try {
    const response = await fetch(`${apiBaseUrl}/stats/tvl`)
    const statRes = await response.json()
    console.log(statRes,apiBaseUrl )

    if (statRes.statusCode === 500) {
      return null
    }
    return statRes
  } catch (error) {
    return null
  }
}

export default getHomepageStats
