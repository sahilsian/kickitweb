import Image from "next/image"
import { useParallax } from "react-scroll-parallax";
import siteConfig from "../../../site.config";
import { Heading } from "../../Core/Heading";
import { getFontSizeForHeading } from "../../../lib/fonts";
import { CallToActionButton } from "../CallToActionButton";


export const MiniCover = ({ image, title, description, showbutton, buttondestination, buttontext }) => {
    const parallaxColumns = useParallax({
        speed: -12,
      });

    const parallaxImage = useParallax({
    speed: 20,
    });
    console.log(showbutton)
    return (
        <div className="w-full h-[600px] relative overflow-hidden">
            <div ref={parallaxColumns.ref} className={`w-full absolute z-20 pt-[120px] px-6 md:pt-[200px] lg:pt-[170px]`}>
                <div className="max-w-[900px] mx-auto">
                    <Heading content={title} textColor={"white"} level={1} textAlign={"center"}></Heading>
                    <h2 className={`text-white text-center ${getFontSizeForHeading("p")}`}>{description}</h2>
                    {showbutton == "1" &&
                    <div className="w-full">
                        <CallToActionButton destination={buttondestination} buttonLabel={buttontext} type="secondary" align="center"></CallToActionButton>
                    </div>
                    }
                </div>
            </div>
            <div style={{ '--cover-color': siteConfig.colors.solids.cover }}  className="w-full cover-bg opacity-[80%] h-full absolute z-10"></div>
            <div className="absolute w-[100%] top-[-50px] h-[150%]">
            <Image
                ref={parallaxImage.ref}
                src={image.url}
                alt={image.alt}
                fill
                objectFit="Cover"
                style={{position: "absolute"}}
            ></Image>
            </div>
        </div>
    )
}