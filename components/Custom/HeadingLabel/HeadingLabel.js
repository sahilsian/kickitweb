export const HeadingLabel = ({ textAlign, color, content}) => {
    return (
        <div className="mb-2">
            <h4 style={{
                textAlign: textAlign,
                color: color,
                textTransform: "uppercase"
            }} className="text-[1.5rem] font-bold">{content}</h4>
        </div>
    )
}