export default function BackButton({onClick, projectMode=false}){
    return(
        <button className={projectMode?'back-button project-mode' : 'back-button'} onClick={onClick}><i className="fa-solid fa-angles-left"></i></button>
    )
}