
export const Tile = ({title='Title', text='Body text', buttonText='Button Text', colour='blue'}) => {
    return(
        <div style={{backgroundColor: colour}} className="h-32 mx-6 rounded-xl">
            {title}
            {text}
            {buttonText}
            {colour}
        </div>
    );
}