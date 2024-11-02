import classes from "./Modal.Module.css"

function Modal ({children,onClose}){
    return(
        <div>
        <div className={classes.backdrop} onClick={onClose}></div>
        <div open className={classes.modal}>
            {children}
        </div>
       </div>
    )

}
export default Modal