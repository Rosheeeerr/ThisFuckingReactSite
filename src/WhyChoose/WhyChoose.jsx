import './WhyChoose.css'
import './WhyChoose.js'
import Button from './Button.jsx'
import {useState} from 'react'
function handleClick(type){   
   setContent(type)
    //   console.log('button cliсked',type); 
     
}
export default function Choose(){   
          const [content, setContent] = useState([]) 
          
    return(
      
        <>
        <section>
            <div className="general_container_chooose">
                <div className="header_choose">
                    <div className="head_choo"><h1>Why choose us?</h1></div>
                    <div className="choose_subtitle"><p className='descr_choose'>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p></div>
                </div>

                <div className="pain_container_general">

                    <div className="gen_but_pain">
                        <div className="pain_but_move">
                            <div className="knopki">
                                <ul>
                                    <li><Button onClick={()=>setContent('да бляяять')}>Team</Button></li>
                                    <li> <Button onClick={()=>setContent('Зачем ты откусил половину моего сырка?(')} >Communication</Button></li>
                                    <li><Button onClick={()=>setContent('Оно работает ураа')} >Solution</Button></li>
                                    <li><Button onClick={()=>setContent('НЯНЯНЯНЯНЯНЯЯН')}>Quality</Button></li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="info_gen_cont">
                        <div className="info_card">
                            <div className="set_cont_tex"><p className='text_set'>{content}</p></div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        </>
    )
}