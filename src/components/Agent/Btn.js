
function Btn({title, bgColor,color, border, width, display, mgl,click}){
    const Btnstyle = {
        padding: '10px 20px',
        display: 'block',
        margin: '20px 0',
        backgroundColor: bgColor ? bgColor : "none",
        color: color,
        border: border ? border : "none",
        cursor: 'pointer',
        outline: 'none',
        borderRadius: '5px',
        width: width,
        display: display,
        margin: '10px',
        marginLeft: mgl,
    }
    return(
        <main>
            <button style={Btnstyle} onClick={click}>{title}</button>
        </main>
    )
}
export default Btn;