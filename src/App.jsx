import React from 'react'
import Header from './components/Top/Header.jsx'
import Form from './Form.jsx'
import Candidates from './Candidates..jsx'

export default function App() {
  const [page, setPage] = React.useState("donors")

    function changePage(page){
      setPage(page)
    }

  return (
    <>
      <Header changePage={changePage}/>
      {page === "donors" ? <Form /> : <Candidates/>}
    </>
  )
}

