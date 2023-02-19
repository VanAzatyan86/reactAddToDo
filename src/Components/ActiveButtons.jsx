export default function ActiveButtons({isActive,inactive,All}){
    return(
        <div className="activeButtons">
            <button className="all" onClick={All}>All</button>
            <button className="active" onClick={isActive} >Active</button>
            <button className="inactive" onClick={inactive}>Inacive</button>
        </div>
    )
}