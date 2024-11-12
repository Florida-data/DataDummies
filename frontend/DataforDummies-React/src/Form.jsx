import { Button } from './Button.jsx';
import "./styles/Form.css";

export function Form({ names,labels, types, classnames, title, title_class, class_button, textButton, onChangeFunction, onSubmit }) {
    const bootstrapClasses = ["container", "text-light", classnames[2]];

    const label_forms = (labels, types) => {
        return labels.map((label, index) => (
            <div key={index} className={`${classnames[3]} form-group col-12 col-sm-8 col-md-6 col-lg-10 mx-0 px-0`}>
                <label className={`${classnames[0]}`}>
                    {label}
                </label>
                <input 
                    type={types[index]} 
                    className={`${classnames[1]} form-control`} 
                    onChange={onChangeFunction} 
                    name={names[index]}
                    required
                />
            </div>
        ));
    };

    

    return (
        <form className={`${bootstrapClasses.join(" ")} col-12 mx-0 px-0`} onSubmit={onSubmit}>
            {title && (
                <div className={`container-fluid d-flex justify-content-center`}>
                    <h4 className={`h1 ${title_class}`}>{title}</h4>
                </div>
            )}

            <div className={`container-fluid col-12 d-flex align-items-center flex-column`}>
                {label_forms(labels, types)}
            </div>

            <div className={`container-fluid col-12 mt-5 d-flex flex-row px-0 d-flex align-items-center flex-column`}>
                <Button class_button={class_button} text={textButton} cols={'col-md-5'} />
            </div>
        </form>
    );
}
