export default function NavigationButton({children, onClick}) {
    return (
        <button className="actions" onClick={onClick}>
            <i className="fa-solid fa-angles-left "></i>
            {children}
            <i className="fa-solid fa-angles-right "></i>
        </button>
    )
}