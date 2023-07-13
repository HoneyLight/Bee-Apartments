function Btn({title, bgColor, color, border, width, clickFunc}) {
    const BtnStyle = {
        background: bgColor,
        color: color,
        borderRadius: "5px",
        cursor: "pointer",
        padding: "15px 20px",
        // we are saying if the person put a border, then he can give which ever he wants but if the person doesn't, give him a default border style of 'none' using the ternary operator '?'.
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