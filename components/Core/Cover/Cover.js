import Image from "next/image"
import { useRouter } from "next/router"
import { useParallax } from "react-scroll-parallax";
import siteConfig from "../../../site.config";

export const Cover = ({children, background, className}) => {
    const router = useRouter()
    const parallax = useParallax({
        speed: -12,
      });
    return (
        <div style={{ '--primary-color': siteConfig.colors.solids.primary }} className={`${className} primary-bg min-h-[720px] h-screen relative flex items-center`}>
            <div ref={parallax.ref} className={`w-full z-20 py-[150px]`}>
            {children}
            </div>
            <div className={`w-full min-h-screen h-full absolute`}>
                <div style={{ '--cover-color': siteConfig.colors.solids.cover }}  className="w-full cover-bg  opacity-[80%] mix-blend-multiply h-full absolute z-10"></div>
                <Image alt="Cover" src={background} fill className=' object-cover w-full h-screen top-0' />
            </div>

        </div>
    )
}