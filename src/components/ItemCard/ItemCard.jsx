import "./item.scss"

const ItemCard = (props) => {
    return(
        <div className="item-container">
        <props.logo/>
        <span>{props.title}</span>
        </div>
    )
}

export default ItemCard