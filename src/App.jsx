import './App.css'
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
            <div className='slider'></div>

            <div className='caja'>

              <h2 className='caja__titulo'>Productos</h2>

              <div className='caja__contenedor'>
                <article>
                  <h2>calzado Hombre random</h2>
                  <img className='card__imagen'/>
                  <button>
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                </article>

                <article>
                  <h2>calzado Hombre random</h2>
                  <img className='card__imagen'/>
                  <button>
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                </article>

                <article>
                  <h2>calzado Hombre random</h2>
                  <img className='card__imagen'/>
                  <button>
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                </article>

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
