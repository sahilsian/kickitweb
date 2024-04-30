// font abstraction that allows us to configure the websites font sizes with ease. For updating the font-family, see the tailwind css configuration. This file follows tailwind css formats https://tailwindcss.com/

export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
        "left": "text-left",
        "right": "text-right",
        "center": "text-center"
    }

    return `${textAlignMap[textAlign] || ''}`
}

export const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
        1: "text-[3rem] lg:text-[3.5rem] font-[700] leading-[4rem]",
        2: "text-[2.5rem] lg:text-[3rem] font-[600] leading-[3.5rem]",
        3: "text-[2.25rem] lg:text-[2.5rem] font-[600] leading-[3rem]",
        4: "text-[2.25rem] lg:text-[2.5rem] font-[500] leading-[3rem] uppercase",
        5: "text-[1.5rem] lg:text-[2rem] font-[400] leading-[2rem]",
        6: "text-[1.2rem] font-[300] leading-[1.6rem]"
    }

    return `${fontSizeMap[level] || ''}`
}

export const getPargraphColor = (level) => {
    const fontSizeMap = {
        "base": "#FFFFFF",
        "contrast": "#000000"
    }

    return `${fontSizeMap[level] || ''}`
}