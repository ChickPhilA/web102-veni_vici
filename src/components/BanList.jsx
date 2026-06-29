const BanList = ({banList, setBanList}) => {

    const unbanAttribute = (attribute) => {
        setBanList(
            banList.filter((unbannedAttribute) =>
                unbannedAttribute !== attribute
        ))
    }


    return(
        <>
            <div className="ban-container">
                <h2 className="attribute-info"> Attribute Ban-List </h2>
                <h4 className="attribute-info"> All banned attributes will appear here. Click on an attribute to unban it.</h4>
                    <div>
                        {banList.map((attribute, index) => {
                            return (
                                <button className="attribute-btn" onClick={() => {unbanAttribute(attribute)}}>
                                    {attribute}
                                </button>
                            )
                        })}
                    </div>
            </div>
        </>
    )
}

export default BanList