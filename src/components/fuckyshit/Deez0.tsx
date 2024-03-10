import { createContext, useState } from "react"
import { Deez1 } from "./Deez1"

export const Urmom = createContext<any>("urmom")

export function Deez0(){
    const [deez,setDeez] = useState("nuts")
    return (
      <>
        <Urmom.Provider value={[deez,setDeez]}>
          <Deez1/>
        </Urmom.Provider>
      </>
    )
}
