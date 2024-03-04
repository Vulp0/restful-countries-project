function Card( props ) {
    //flagSrc, name, population, region, capital
    //nativeName, subRegion, top level domain, currencies, Languages, border countries

    let flagSrc = props.flagSrc;
    let name = props.name;
    let population = props.population;
    let region = props.region;
    let capital = props.capital
    let setClickedCardData = props.setClickedCardData;
    let setModalVisible = props.setModalVisible;

    return (
        <div className="Card" onClick={() => {
            setClickedCardData(props);
            setModalVisible(true);
        }}>
            <img className="CardIcon" src={flagSrc} alt=""/>
            <div className="TextContainer">
                <h2 className="CardTitle">{name}</h2>
                <p className="CardSubtitle"><span>Population:</span> {population}</p>
                <p className="CardSubtitle"><span>Region:</span> {region}</p>
                <p className="CardSubtitle"><span>Capital:</span> {capital}</p>
            </div>
        </div>
    );
}

export default Card;