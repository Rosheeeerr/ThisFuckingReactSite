import './goals.css'
import {ways} from './data.js'
function Win(props){
return(
    <>
    <section>
        <div className="this_wind" >
            <div className="numb_cont"><p className="title">{props.title}</p></div>
            <div className="title_disr">
                <div className="">
            <p className='subtitle'>{props.subtitle}</p>
            <p className='desription'>{props.desription}</p>
                </div>

            </div>
           
            </div>
    </section>
    </>
)
}
function Second(props){
    return(
        <>
        <section>
        <div className="Second_long">
        <div className="numb_cont_long"><p className="title">{props.title}</p></div>
        <div className="long_cont_numb">
            <div className="">
                 <p className=" subtitle">{props. subtitle}</p>
            <p className="desription_second">{props.desription}</p>
            </div>
           
            </div>
        </div>
        </section>
        </>
    )
    }
    function Third(props){
        return(
            <>
            <section>
            <div className="Three_long">
            <div className="numb_cont_three"><p className="title">{props.title}</p></div>
            <div className="three_cont_numb">
                <div className="">
                     <p className=" subtitle">{props. subtitle}</p>
                <p className="desription_second">{props.desription}</p>
                </div>
               
                </div>
            </div>
            </section>
            </>
        )
        }
export default function Goals(){
    return(
        <>           
         <section>
            <div className="general_container_goals">
             <div className="header_goals_container"><h1>What are our goals?</h1></div>
             <div className="container_win">
                 <Win {...ways[0]}/>
                <Win {...ways[1]}  />
                <Win />
              
             </div> 
             <div className="second_container">
                <div className="long_container">
                     <Second  />
                    <Second {...ways[2]}/>
                </div>
                
             </div>
            
            <div className="third_blobk_general">
                <div className="container_three">
                    <Third {...ways[3]} />
                    <Win />
                </div>
                
            </div>

            </div>
        </section>
        </>
    )
}