import { useState } from "react";
import siteConfig from "../../../site.config";
import Image from "next/image";
import { CallToActionButton } from "../../Custom/CallToActionButton";;

export const PricingBlock = ({button_destination, title, price, description, discount, button_text, checklist}) => {
    const [yearly, setYearly] = useState(false)

    return (
        <div className="w-full border-2 border-blue-500 rounded-xl">
            <div className="w-full max-w-[600px] mx-auto">
                <div className="m-5 max-w-[300px] mx-auto flex rounded-full bg-black w-full p-[3px]">
                    <div style={{backgroundColor: !yearly ? siteConfig.colors.solids.primary : "unset"}} onClick={()=>{setYearly(false)}} className="cursor-pointer flex-[1] font-bold text-white px-6 py-3 text-center rounded-full transition-all">
                        Monthly
                    </div>
                    <div style={{backgroundColor: yearly ? siteConfig.colors.solids.primary : "unset"}} onClick={()=>{setYearly(!yearly)}} className="cursor-pointer flex-[2] font-bold text-white px-6 py-3 text-center rounded-full transition-all">
                        Yearly<span className=" font-normal"> Save {100 * discount}%</span>
                    </div>
                </div>
                <div className=" text-center m-1" onClick={()=>{setYearly(false)}}>
                    <span className="font-normal">
                        {!yearly ? 
                        <span className="font-bold text-6xl">${price}<span className=" font-thin text-sm">/Month </span></span> 
                        : <span className="font-bold text-6xl">${(price*12)-((price*12) * discount)}<span className="font-thin text-sm">/Year</span></span>}
                        </span>
                </div>
                <div>
                    <div className="text-center m-2 font-bold text-xl"><h5>{title}</h5></div>
                </div>
                <div>
                    <div className="text-center m-2 font-normal"><h5>{description}</h5></div>
                </div>
                <div>
                    {checklist.map((item) => {
                        return (
                            <div className="flex justify-between m-2">
                                <p>{item.title}</p>
                                <Image
                                objectFit="contain"
                                src="/checkbox.png"
                                width={23}
                                height={23}
                                alt="Checkbox image"
                                />
                            </div>
                        )
                    })
                    }
                </div>
                <div className="mx-auto flex m-20 justify-center">
                    <CallToActionButton destination={button_destination} buttonLabel={button_text} type="primary"></CallToActionButton>
                </div>
            </div>
        </div>
    )
}