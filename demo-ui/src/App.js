import React, { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { TableContainer } from './components/TableContainer/TableContainer'

function App() {
  const queryClient = useMemo(() => new QueryClient(), [])
  return (
    <QueryClientProvider client={queryClient}>
      <div data-testid='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TableContainer />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
