import './TicTac.css'
import circle from '../../assets/circle.png'
import cross from '../../assets/cross.png'
import { useRef, useState } from 'react'

let data=["","","","","","","","","",]

const TicTac=()=>{

   let [count,setcount]=useState(0)
    let[lock,setlock]=useState(false)
    let titleref=useRef(null)
    let box1=useRef(null)
    let box2=useRef(null)
    let box3=useRef(null)
    let box4=useRef(null)
    let box5=useRef(null)
    let box6=useRef(null)
    let box7=useRef(null)
    let box8=useRef(null)
    let box9=useRef(null)

    let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
  

    const makemove=(e,num)=>{
       if(e.target.innerHTML===""){
        if(lock===true){
            return 0
        }
       
        if(count%2===0){
            e.target.innerHTML=`<img src='${cross}'>`
            data[num]="x";
            setcount(prev=>prev+1)
         }
         else{
             e.target.innerHTML=`<img src='${circle}'>`
             data[num]="o"
             setcount(prev=>prev+1)
         }
       }
       
        checkwin()
    }

    let checkwin=()=>{
        if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
            won(data[2])
            console.log("dsfa");
        }
        else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
                won(data[5])
        }
        else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
                won(data[8])
        }
        else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
                won(data[6])
        }
        else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
                won(data[7])
        }
        else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
                won(data[8])
        }
        else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
                won(data[8])
        }
        else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
                won(data[6])
        }
    }
    let won=(winner)=>{
        setlock(true)
       if(winner==="x"){
        titleref.current.innerHTML=`Congrulations:<img src=${cross} > won`
       }
       else{
        titleref.current.innerHTML=`Congrulations: <img src=${circle} > won`
       }
    }

    const reset=()=>{
        setlock(false)
        data=["","","","","","","","","",]
        titleref.current.innerHTML="Tic Tac Toe Game  <span>InReact</span>"
          
        box_array.map((box)=>{
              box.current.innerHTML=""
        })
    }


    return(<>
      <div className='container'>
         <h1 ref={titleref} className='title'>Tic Tac Toe Game  <span>InReact</span></h1>
         <div className='board'>
             <div className='row1'>
                   <div ref={box1} onClick={(e)=>{makemove(e,0)}} className='boxes'></div>
                   <div ref={box2} onClick={(e)=>{makemove(e,1)}} className='boxes'></div>
                   <div ref={box3} onClick={(e)=>{makemove(e,2)}} className='boxes'></div>
             </div>
             <div className='row2'>
                   <div ref={box4} onClick={(e)=>{makemove(e,3)}} className='boxes'></div>
                   <div ref={box5} onClick={(e)=>{makemove(e,4)}} className='boxes'></div>
                   <div ref={box6} onClick={(e)=>{makemove(e,5)}} className='boxes'></div>
             </div>
             <div className='row3'>
                   <div ref={box7} onClick={(e)=>{makemove(e,6)}} className='boxes'></div>
                   <div ref={box8} onClick={(e)=>{makemove(e,7)}} className='boxes'></div>
                   <div ref={box9} onClick={(e)=>{makemove(e,8)}} className='boxes'></div>
             </div>
         </div>
         <button onClick={()=>reset()} className='reset'>Reset</button>
      </div>
    </>)
}

export default TicTac