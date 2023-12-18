export default function Category({title, description}){
    return(
        <div className="category">
            <div className="category-container">
            <p>{title}</p>
            <p>{description}</p>

            </div>

        </div>
    )
}