import axios from 'axios'
import * as ReactQuery from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import useGetData from './useGetData'

jest.mock('axios')
const axiosMock = axios
const queryClient = new ReactQuery.QueryClient()

const wrapper = ({ children }) => (
  <ReactQuery.QueryClientProvider client={queryClient}>{children}</ReactQuery.QueryClientProvider>
)

test('hook returns data', async () => {
  const mockData = [{ id: 1, name: 'test' }]
  axiosMock.get.mockResolvedValueOnce({ data: mockData})

  const { result, waitFor } = renderHook(
    () => useGetData(),
    { wrapper }
  )

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data).toEqual(mockData)
  expect(result.current.isLoading).toBeFalsy()
});
