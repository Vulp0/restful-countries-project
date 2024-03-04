function Modal( props ) {
    let flagSrc = props.flagSrc;
    let name = props.name;
    let population = props.population;
    let region = props.region;
    let capital = props.capital
    let nativeName = props.nativeName;
    let subRegion = props.subRegion;
    let tld = props.tld;
    let currencies = props.currencies;
    let languages = props.languages;
    let borders = props.borders;
    let modalVisible = props.modalVisible;
    let setModalVisible = props.setModalVisible;


    return (
        <dialog className="ModalContainer" open={modalVisible} onClick={() => setModalVisible(false)}>
            <form className="ModalWindow" method="dialog">
                <button onClick={() => setModalVisible(false)}>Back</button>
                <div className="ModalContent">
                    <img src={flagSrc} alt=""></img>
                    <div className="ModalBlockContainer">
                        <div className="ModalBlockOne">
                            <h2>{name}</h2>
                            <p><span>Native Name:</span> {nativeName}</p>
                            <p><span>Population:</span> {population}</p>
                            <p><span>Region:</span> {region}</p>
                            <p><span>Sub Region:</span> {subRegion}</p>
                            <p><span>Capital:</span> {capital}</p>
                        </div>
                        
                        <div className="ModalBlockTwo">
                            <p><span>Top Level Domain:</span> {tld}</p>
                            <p><span>Currencies:</span> {currencies}</p>
                            <p><span>Languages:</span> {languages}</p>
                        </div>

                        <div className="ModalBlockThree">
                            <span>Border Countries:</span> 
                            <p>{borders}</p>
                        </div>
                    </div>
                </div>

            </form>
        </dialog>
    );
}

export default Modal;