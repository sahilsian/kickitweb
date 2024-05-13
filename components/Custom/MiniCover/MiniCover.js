import Image from "next/image"
import { useParallax } from "react-scroll-parallax";
import siteConfig from "../../../site.config";
import { Heading } from "../../Core/Heading";
import { getFontSizeForHeading } from "../../../lib/fonts";


export const MiniCover = ({ image, title, description }) => {
    const parallaxColumns = useParallax({
        speed: -12,
      });

    const parallaxImage = useParallax({
    speed: 20,
    });
    return (
        <div className="w-full h-[600px] relative overflow-hidden">
            <div ref={parallaxColumns.ref} className={`w-full absolute z-20 pt-[120px] px-6 md:pt-[200px] lg:pt-[170px]`}>
                <div className="max-w-[600px] mx-auto">
                    <Heading content={title} textColor={"white"} level={1} textAlign={"center"}></Heading>
                    <h2 className={`text-white text-center ${getFontSizeForHeading("p")}`}>{description}</h2>
                </div>
            </div>
            <div style={{ '--cover-color': siteConfig.colors.solids.cover }}  className="w-full cover-bg opacity-[80%] h-full absolute z-10"></div>
            <div className="absolute w-[100%] top-[-50px] h-[150%]">
            <Image
                ref={parallaxImage.ref}
                src={image.url}
                fill
                objectFit="Cover"
                style={{position: "absolute"}}
            ></Image>
            </div>
        </div>
    )
}