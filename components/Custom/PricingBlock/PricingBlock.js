import { useState } from "react"

export const PricingBlock = ({button_destination, title, price, description, discount, button_text, checklist}) => {
    const [yearly, setYearly] = useState(false)
    console.log(checklist)

    return (
        <div className="w-full border-2 border-blue-500 rounded-xl">
            <div className="w-full max-w-[350px] mx-auto">
                <div className=" flex rounded-full bg-black w-full p-[3px]">
                    <div style={{backgroundColor: !yearly ? "blue" : "unset"}} onClick={()=>{setYearly(false)}} className="cursor-pointer flex-[1] font-bold text-white px-6 py-3 text-center rounded-full transition-all">
                        Monthly
                    </div>
                    <div style={{backgroundColor: yearly ? "blue" : "unset"}} onClick={()=>{setYearly(!yearly)}} className="cursor-pointer flex-[2] font-bold text-white px-6 py-3 text-center rounded-full transition-all">
                        Yearly<span className=" font-normal"> Save {100 * discount}%</span>
                    </div>
                </div>
                <div className=" text-center m-4" onClick={()=>{setYearly(false)}}>
                    Price <span className=" font-normal" >${price}</span>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}