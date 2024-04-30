export const Columns = ({ isStackedOnMobile, children, className, padding }) => {
    console.log(className)
    return <div className="max-w-[1280px] columns mx-auto">
        <div style={{
            paddingBottom: padding ? padding.bottom : "0px", 
            paddingTop: padding ? padding.top : "0px", 
            paddingLeft: padding ? padding.left : "0px", 
            paddingRight: padding ? padding.right : "0px"
        }} className={`columns ${className} overflow-hidden mx-auto gap-10 justify-between w-full flex-wrap ${isStackedOnMobile ? "block md:flex" : "flex"}`}>{children}</div>
    </div>
}