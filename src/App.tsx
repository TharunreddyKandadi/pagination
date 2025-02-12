import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function pagination(c:any, m:any) {
    let current=c;
    let newArr:any=[];
    newArr.push(1);
    for(let i=2;i<=m;i++){
   
     if(i===current-1 || i===current+1 || i===current || i===m){
       newArr.push(i)
     }
    }
    if(newArr[1]-newArr[0]>1){
      newArr.splice(1,0,"...")
    }
   if(newArr[newArr.length-1]-newArr[newArr.length-2]>1){
     newArr.splice(newArr.length-1,0,"...")
   }
   
    return newArr
   }
  //  console.log(pagination(8, 10))

  return (
    <>
{
  pagination(1, 10)
}
    </>
  )
}

export default App
