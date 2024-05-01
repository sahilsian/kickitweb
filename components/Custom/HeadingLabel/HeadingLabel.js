export const HeadingLabel = ({ textAlign, color, content}) => {
    return (
        <div className="mb-2">
            <h4 style={{
                color: color,
                textTransform: "uppercase"
            }} className={`text-${textAlign} text-[1rem] md:text-[1.5rem] max-sm:text-center font-bold`}>{content}</h4>
        </div>
    )
}