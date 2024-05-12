import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"
import Link from "next/link"
import siteConfig from "../../../site.config"

export const Footer = ({ items }) => {
    return (
        <div>

            <div className="flex w-full flex-wrap max-w-[1400px] gap-9 py-[150px] mx-auto p-5">
                <div className="flex-1 min-w-[300px]">
                    <Link href={"/"}>
                    <Image className="my-7" width={200} height={63} objectFit="cover" src={'/alt-logo.png'}></Image>
                    </Link>
                    <h4 className="text-[18px] pb-3">Halifax, NS</h4>
                    <h4 className="text-[18px] pb-3 ">info@kickitdesign.com</h4>
                    <h4 className="text-[18px] pb-3">778 952-6800</h4>
                </div>
                <div className="flex-1 text-[18px] min-w-[300px]">
                    <div>
                        <h2 className="text-[2rem] lg:text-[3rem] pt-6 mb-3 font-bold">Pages</h2>
                    </div>
                    <div className="flex flex-col flex-wrap">
                    {items.map((item)=> {
                        return (
                            <div>
                            <Link className="block pb-3 hover:opacity-80 transition-all" href={item.destination}>{item.label}</Link>
                            {item.subMenuItem.map((subitem) => {
                                return (
                                    <div>
                                    <Link className="block pb-3 hover:opacity-80 transition-all" href={subitem.destination}>{subitem.label}</Link> 
                                    </div>
                                )
                            })}
                            </div>
                        )
                    })}
                    </div>

                </div>
            </div>
            <div className="p-3" style={{backgroundColor: siteConfig.colors.solids.primary}}>
                <div className="flex w-full  text-white font-bold max-w-[1400px] mx-auto justify-between p-5">
                    <div>
                        <h4 className="">© 2024 Kickit Web Design</h4>
                    </div>
                    <div className="flex gap-5">
                        <Link className="transition-all opacity-70 hover:opacity-100" href={"/privacy-policy"}>Privacy Policy</Link>
                        <Link className="transition-all opacity-70 hover:opacity-100" href={"/terms"}>Terms</Link>
                    </div>

                </div>
            </div>
        </div>

    )
}