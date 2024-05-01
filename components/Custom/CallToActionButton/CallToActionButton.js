import siteConfig from "../../../site.config"
import { ButtonLink } from "../ButtonLink"

export const CallToActionButton = ({ align = "left", buttonLabel, target, destination, type = 'primary'}) => {
    const alignMap = {
        left: "text-align",
        center: "text-center",
        right: "text-right"
    }
    console.log(type)
    return (
        <div className={`${alignMap[align]} text-nowrap`}>
            <ButtonLink color={siteConfig.colors.solids[type]} fontColor={siteConfig.colors.texts[type]} destination={destination || "/"} target={target} label={buttonLabel}></ButtonLink>
        </div>
    )
}