import React from 'react'
import UseGetData from '../../hooks/useGetData'
import { Table } from '../Table/Table'
import { BallTriangle } from 'react-loader-spinner'

export const TableContainer = () => {
  const { data, isFetching } = UseGetData()

  return (
    isFetching ? <BallTriangle
      heigth="100"
      width="100"
      color="grey"
      ariaLabel="loading-indicator"
    /> : <Table data={data} />
  )
}