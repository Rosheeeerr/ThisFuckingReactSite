import Logo from './pictures header/shapka/Logo.png'
import Strela from './pictures header/shapka/strelocka.png'
import Knopstr from './pictures header/shapka/but.png'
import Sticer from './pictures header/shapka/Button.png'
import './header.css'
function Header(){
    return(
        <>
        <header>
            <nav>
                <div className="nav_container">

                    <div className="logo_links">

                    <div className="logo_container"><img src={Logo} alt="" srcset="" /></div>

                        <div className="links">
                            <div className="spisoc_container">
                                <ul className='spisok'>
                                <li>about</li>
                                <li>our services</li>
                                <li>job openings</li>
                            </ul>

                            </div>
                        </div>

                    </div>

                    <div className="righ_part">
                        <div className="language_container">
                            <div className="move_cont">
                                 <p className='name_lang'>EN</p>
                            <img className='strela' src={Strela} alt="" srcset="" />
                            </div>
                           
                        </div>
                     <div className="button_container">
                        <button className='blubut'>CONTACT US <img src={Knopstr} alt="" srcset="" /></button>
                    </div>
                    </div>
                  
                </div>
            </nav>
            <div className="general_container">
                <div className="text_and_siniahuina">
                      <div className="sinia_huina"></div>
                <div className="text_cont_head"><p className="text_heading">Developing IT solutions to scale up your business</p></div>
                </div>
              <div className="sticer_container">
                <img className='stic' src={Sticer} alt="" srcset="" />
              </div>
            </div>
        </header>
        </>
    )
}
export default Header