import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"
import Link from "next/link"
import siteConfig from "../../../site.config"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Paragraph } from "../../Core/Paragraph"

export const Footer = ({ items }) => {
    return (
        <div style={{backgroundColor: siteConfig.colors.solids.dark}} className="mt-7">

            <div className="flex w-full text-white flex-wrap max-w-[1400px] gap-12 py-[50px] mx-auto p-5">
                <div className="flex-1 w-full">

                    <div className="flex-1 min-w-[300px] max-w-[500px]">
                        <div className="max-w-[150px]">
                            <Link href={"/"}>
                                <Image alt="Light Logo" className="my-7" width={200} height={63} objectFit="cover" src={'/logo.png'}></Image>
                            </Link>
                        </div>

                        <Paragraph content={siteConfig.texts.footer.footertext}></Paragraph>

                        <div className="flex items-center gap-5 mb-3">
                            <FontAwesomeIcon icon={faEnvelope} width={26}></FontAwesomeIcon>
                            <h4 className="text-[22px] font-medium">{siteConfig.texts.footer.email}</h4>
                        </div>

                        <div className="flex items-center gap-5 mb-7">
                            <FontAwesomeIcon icon={faPhone} width={26}></FontAwesomeIcon>
                            <h4 className="text-[22px] font-medium">{siteConfig.texts.footer.phone}</h4>
                        </div>
                        <div className="flex items-center gap-5 mb-3">
                            <Link className="hover:opacity-75 transition-all" href={siteConfig.texts.footer.instagram}>
                            <FontAwesomeIcon icon={faInstagram} width={26}></FontAwesomeIcon>
                            </Link>
                            <Link  className="hover:opacity-75 transition-all" href={siteConfig.texts.footer.facebook}>
                            <FontAwesomeIcon icon={faFacebook} width={26}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex-1 text-[18px] py-4 min-w-[300px]">
                    <div>
                        <h2 className="text-[1.7rem] lg:text-[2rem] mb-3 font-medium">Pages</h2>
                    </div>
                    <div className="flex flex-col flex-wrap max-h-[280px]">
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
            <div className="p-3" >
                <div className="flex w-full  text-white font-medium max-w-[1400px] mx-auto justify-between p-5">
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