import Image from "next/image";
import siteConfig from "../../../site.config";
import { CallToActionButton } from "../../Custom/CallToActionButton";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Heading } from "../../Core/Heading";
import { Paragraph } from "../../Core/Paragraph";
import { Label } from "../../Custom/Label";
import { useCallback, useEffect, useState } from "react";

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) =>
{
    const router = useRouter();

    const [scrollY, setScrollY] = useState('');

    const onScroll = useCallback(event => {
        const { scrollY } = window;
        setScrollY(scrollY);
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
         window.removeEventListener("scroll", onScroll, { passive: true });
      }
    }, []);
  

    return (
        <div  className={`m-auto fixed top-0 z-[1000] left-0 right-0 `}>
            <div style={{backgroundColor: scrollY > 100 ? `${siteConfig.colors.solids.cover}D9` : "unset"}} className={` transition-all m-auto w-full px-5`}>
                <div className={`max-w-[1280px] mx-auto flex justify-between align-middle`}>
                    {/* Site Logo. Defined by logo.png */}
                    <Image className="my-7 max-[800px]:max-w-[100px]" width={200} height={63} objectFit="cover" src={'/logo.png'}></Image>

                    {/* Nav Links and Call to Action  */}
                    <div className={`flex max-[820px]:hidden items-center gap-9`}>
                        <div className={`flex h-full text-center gap-9`}>
                            {items.map((item) => {
                                return (
                                <div className="relative item flex items-center py-8">
                                    <div style={{ fontWeight: router.pathname == item.destination ? "700" : "400"}} className={`py-2 flex items-center`}>
                                    <Link className={`link text-white flex items-center gap-3`} id={item.id} href={item.destination}>{item.label} {item.subMenuItem.length > 0 && <FontAwesomeIcon style={{width: "12px", height: "12px"}} color={"#FFFFFF"} size="sm" icon={faChevronDown} />
                                    }</Link>
                                    </div>
                                    {item.subMenuItem.length > 0 && (
                                        <div className="subMenu absolute p-4 bg-white top-[90px] right-[-50%] shadow-lg min-w-[350px] rounded-md">
                                        {/* <div className="relative">
                                            <Image className={'absolute top-[-18px] right-0'} width={20} height={20} src={"./dropdown-accent.svg"}></Image>
                                        </div> */}
                                        <div className="border-b-2 mb-2">
                                        <Link href={item.destination} className="link">
                                        <Label textWeight="600" fontSize="28px" content={item.label}></Label>
                                        </Link>

                                        </div>

                                        <div>
                                        {item.subMenuItem.map((subItem) => {
                                            return (
                                                <Link className="block py-2 link" key={subItem.id} href={subItem.destination}>
                                                <Label textWeight="400" content={subItem.label}></Label>
                                                <Label textColor="#747a80" content={subItem.subLabel}></Label>
                                                </Link>
                                            )
                                        })}
                                        </div>
                                    </div>
                                    )}
                                    
                                </div>)
                            })}

                        </div>
                        {/* Call to Action */}
                        <div>
                            <CallToActionButton destination={callToActionDestination} buttonLabel={callToActionLabel} type="secondary"></CallToActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}