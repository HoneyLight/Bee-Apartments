function Btn({title, bgColor, color, border, width, clickFunc}) {
    const BtnStyle = {
        background: bgColor,
        color: color,
        borderRadius: "5px",
        cursor: "pointer",
        padding: "15px 20px",
        border: border ? border : "none",
        outline: "none",
        display: "inline-block",
        margin: "5px",
        width: width ? width : "auto",
    }
    return(
        <button style={BtnStyle} onClick={clickFunc}>{title}</button>
    )
}

export default Btn;