import './App.css'
import { Card } from './components/Card/Card'
import { Footer } from './components/Footer/Footer'

function App() {


  //////////////////////////////////////////////////
  return (
    <>
      <div className="app"> 

        {/* MAIN */}
        <main className='main'>

          {/* SECCION 1 */}
          <section>
            {/* SLIDER */}
            <div className='slider'></div>

            <div className='caja'>
              {/* TITULO */}
              <h2 className='caja__titulo'>Productos</h2>
              {/* CONTENEDOR TARJETAS */}
              <div className='caja__contenedor'>
                <Card/>
                <Card/>
                <Card/>
              </div>

            </div>
          </section>

          {/* SECCION 2*/}
          <section>
            
          </section>

          {/* SECCION 3*/}
          <section>
          
          </section>

          
          {/* SECCION 4*/}
          <section>
          
          </section>

        </main>






        {/* ASIDE */}
        <aside className='aside'>

          <div>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-solid fa-earth-americas"></i>
          </div>

          <div>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-solid fa-earth-americas"></i>
          </div>
        </aside>


      </div>


      {/* FOOTER */}
      <Footer/>
    </>
  )
}

export default App
