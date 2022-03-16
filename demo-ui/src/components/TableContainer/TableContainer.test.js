import { render, screen } from '@testing-library/react';
import { TableContainer } from './TableContainer';
import UseGetData from '../../hooks/useGetData';
jest.mock('../../hooks/useGetData')

test('renders loading screen by default', () => {
  const getDataMock = UseGetData;
  getDataMock.mockReturnValue({
    data: [],
    isFetching: true
  })
  render(<TableContainer />);
  const element = screen.getByTestId('ball-triangle-loading')
  expect(element).toBeInTheDocument();
});

test('renders table', () => {
  const getDataMock = UseGetData;
  getDataMock.mockReturnValue({
    data: [{ id: 1, name: 'test' }],
    isFetching: false
  })
  render(<TableContainer />);
  const element = screen.getByTestId('table')
  expect(element).toBeInTheDocument();
});
