import { useEffect, useState } from "react"

function App() {

  const initialboard=Array(9).fill('no_pic.png')
  const [board,setboard]=useState(initialboard) 
  const [winner,setwinner]=useState('')
  const [player_1,setplayer_1]=useState('player_2.png')
  const [player_2,setplayer_2]=useState('player_1.png')
  const [start,setstart]=useState(false)
  const [player,setplayer]=useState(player_1)

   const checkresult=(updateboard)=>{
      const combinations=[
         [0,1,2],[3,4,5],[6,7,8],
         [0,3,6],[1,4,7],[2,5,8],
         [0,4,8],[2,4,6]
      ]

      for (let combo of combinations){
          const [a,b,c]=combo
         
          if (updateboard[a] && updateboard[a]!=='no_pic.png' && updateboard[b]!=='no_pic.png'&& updateboard[c]!=='no_pic.png' && updateboard[a] === updateboard[b] && updateboard[a] === updateboard[c]) {
            if(updateboard[a]===player_1){
               return 'The winner is X'
            }
           return 'The winner is O'
          }
        
      }
      if(!updateboard.includes('no_pic.png')) {
        return 'Match Tie'
      }
      return null
   }
  const hanldeimg=(i)=>{
   if(start){ 
   const updateboard=board
   if (updateboard[i] === 'no_pic.png'){
   updateboard[i]=player
   setboard(()=>updateboard)
   
   const result=checkresult(updateboard)
   console.log(result)
   if(result){
      setwinner(result)
      setboard(initialboard)
      setplayer(player_1)
      return 
   }
  
   player === player_1 ? setplayer(player_2) : setplayer(player_1)}
    else{alert("abay")} 
   } 
   else{alert('PLease start the game')}
}



  return (
    
   <div className="flex justify-center h-screen w-full items-center bg-black">
    <div className="flex flex-col justify-center rounded-lg items-center w-auto bg-blue-700 p-5 ">
    {winner && <div className="flex m-5 mx-2 text-green-500 text-2xl font-bold" > { winner} </div>}
      <div className="grid grid-cols-3 gap-4 p-5  justify-center items-center">
         {
            board.map((imgname,i)=>
            <div key={i} className=" w-[70px] h-[70px]" onClick={()=>hanldeimg(i)}>
           <img src={imgname} key={i} className=" w-full h-full rounded-lg" /></div>
      )}
      </div>
      <div className="flex mt-7">
<button className="mx-2 px-5 py-3 rounded-lg bg-black text-white" onClick={()=>{setboard(initialboard), setwinner('') ,setplayer(player_1) , setstart(true)}}> RESET </button>  
<button className="mx-2 px-5 py-3 rounded-lg  bg-green-800 text-white" onClick={()=>{setstart(true)}}> START </button>    

      </div>
         
    </div>

   </div>
  )
}

export default App
