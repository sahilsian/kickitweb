import React, { useState } from 'react'
import { getFontSizeForHeading, getTextAlign } from '../../../lib/fonts'
export const Heading = ({textAlign, className, content, textColor, level = 2, typography}) => {
    
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: ` ${textColor === "white" ? "text-white" : `text-[${textColor}]`} ${typography?.fontWeight ? `font-[${typography?.fontWeight}]` : ""} font-heading ${className} ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
    })
    return tag
} 