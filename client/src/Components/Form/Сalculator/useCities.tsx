import { useInfiniteQuery } from 'react-query'
import { OtherService } from '../../../../services/other/other.service'

const fetchInfiniteCities = async ({ search }) => {
  try {
    return await OtherService.getCities(search)
  } catch (err: any) {
    throw new Error(err)
  }
}

interface IUseServicesProps {
  search?: string | null
}

const useCities = ({ search = null }: IUseServicesProps) => {
  return useInfiniteQuery(
    [`services`, JSON.stringify({ search })],
    () => fetchInfiniteCities({ search }),
  )
}

export default useCities