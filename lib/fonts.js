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
        1: "max-sm:text-center text-[2.2rem] leading-[3rem] lg:text-[3rem] mb-8 font-[700] lg:leading-[4rem]",
        2: "max-sm:text-center text-[2rem] leading-[3rem] lg:text-[2.5rem] mb-8 font-[600] lg:leading-[3.5rem]",
        3: "max-sm:text-center text-[1.75rem] lg:text-[2.25rem] mb-4 font-[600] lg:leading-[3rem]",
        4: "max-sm:text-center  text-[1.75rem] lg:text-[2.25rem] mb-8 font-[500] lg:leading-[3rem] uppercase",
        5: "max-sm:text-center text-[1.3rem] lg:text-[1.7rem] mb-4 font-[600] lg:leading-[2rem]",
        6: "max-sm:text-center text-[1.3rem] lg:text-[1.7rem] mb-4 font-[300] lg:leading-[1.6rem]"
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