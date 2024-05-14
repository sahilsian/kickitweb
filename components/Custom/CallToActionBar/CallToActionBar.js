import Image from "next/image"
import siteConfig from "../../../site.config"
import { Heading } from "../../Core/Heading"
import { Paragraph } from "../../Core/Paragraph"
import Link from "next/link"

export const CallToActionBar = ({ title, paragraph, image, button_text, button_destination, onlineImage }) => {
    return (
        <div style={{ backgroundColor: siteConfig.colors.solids.primary }} className="w-full p-10 rounded-xl flex-wrap-reverse gap-5 flex">
            <div className="min-w-[250px] flex-[2]">
                <div className=" max-w-[600px]">
                    <Heading textAlign={"left"} level={3} textColor={"white"} content={title} ></Heading>
                </div>
                <Paragraph content={paragraph} textColor={"#FFFFFF"} fontSize="18px"></Paragraph>
                <div className="flex items-center max-[640px]:items-center  max-[800px]:items-start max-[800px]:flex-col gap-5">
                    {onlineImage && (
                        <div className="max-w-[150px]">
                            <Image width={onlineImage.width} height={onlineImage.height} src={onlineImage.url}
                            alt={onlineImage.alt}
                            ></Image>
                        </div>
                    )}
                    <Link href={button_destination}>
                        <div className="rounded-[300px] text-[14px] lg:text-[16px] hover:opacity-80 cursor-pointer font-semibold bg-white flex items-center px-8 py-3">
                            <div className="w-[17px] bg-green-500 rounded-full mr-3 h-[17px]"></div>

                            {button_text}
                        </div>
                    </Link>

                </div>


            </div>
            <div className="flex-1 min-w-[250px] flex justify-center items-center">
                {/* <Image width={image.width} height={image.height} src={image.url}></Image> */}
            </div>
        </div>
    )
}