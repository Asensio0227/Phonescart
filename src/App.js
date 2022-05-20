import React from 'react'
import Navbar from './NavBar'
import Loading from './Loading'
import CartContainer from './CartContainer'
import { useGlobalContext } from './Context';

const App = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <section className="section">
          <Loading/>
        </section>
      </main>
    )
  }

  return (
    <>
      <Navbar />
      <CartContainer/>
    </>
  )
}

export default App