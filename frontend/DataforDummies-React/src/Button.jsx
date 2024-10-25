
export function Button({text, class_button, functionClick}){
    return(
        <div className={` form-group container-fluid col-md-6 col-sm-6 col-12 col-xxl-6 mx-0 d-flex align-items-center `}>
            <button className={`${class_button}  btn  btn-block form-control `}
             onClick={functionClick}>
            {text}
            </button>
        </div>
        
    )

}