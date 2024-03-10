import { useContext } from "react"

import { Urmom } from "./Deez0"


export function Deez3(){
    const [deez,setDeez] = useContext(Urmom)
    return (
      <>
        <div onClick={()=>{setDeez("deez")}}>
          {deez}
        </div>
      </>
    )
}
