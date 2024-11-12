
export function Button({text, class_button, functionClick, cols}){
    return(
        <div className={` form-group container px-0 ${cols} col-sm-6 col-12 col-xxl-6 mx-0  button_container `}>
            <button className={`${class_button}  btn  btn-block form-control `}
            onClick={functionClick}>
            {text}
            </button>
        </div>
        
    )

}