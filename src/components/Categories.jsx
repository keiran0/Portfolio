import BackButton from "./UI/BackButton"
export default function Categories({data, mode, handleCategoryClick, handleBack}){

    function handleClick(id){
        handleCategoryClick({mode, id})
    }

    return(
        <>
        <BackButton onClick={handleBack} projectMode={false}/>
    
        <div className="categories">
           {data.map((category)=>
           <div className="category" onClick={()=>handleClick(category.id)}>
                <div className="category-container">
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                </div>
           </div>)}
        </div>
        </>
    )
}