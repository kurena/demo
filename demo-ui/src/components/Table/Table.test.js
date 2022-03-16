import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('renders table', () => {
  const data = [
    {id: 1, name: 'test'}
  ]
  render(<Table data={data}/>);
  const element = screen.getByTestId('table')
  expect(element).toBeInTheDocument();
});

test('renders table headers and data', () => {
  const data = [
    {id: 1, name: 'test'}
  ]
  render(<Table data={data}/>);
  const headers = screen.getAllByTestId('table-header');
  const tableData = screen.getAllByTestId('table-data');
  expect(headers[0]).toHaveTextContent('ID');
  expect(headers[1]).toHaveTextContent('NAME');
  expect(tableData[0]).toHaveTextContent(data[0].id);
  expect(tableData[1]).toHaveTextContent(data[0].name);
});
