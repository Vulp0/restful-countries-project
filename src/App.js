import Topbar from './Topbar';
import SearchControls from './SearchControls';
import Card from './Card';
import Modal from './Modal';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [SearchInput, setSearchInput] = useState('');
  const [FilterInput, setFilterInput] = useState('');
  const [DataList, setDataList] = useState([]);
  const [FilteredDataList, setFilteredDataList] = useState([]);
  const [clickedCardData, setClickedCardData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const requestLink = "https://restcountries.com/v3.1/all";

  //i blatantly stole this function lol
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  async function getData(link) {
    let counter = 0;
    const data = await fetch(link);
    let processedData = await data.json();

    processedData.forEach((e) => {
      e.key = counter;
      counter++;
    });

    setDataList(processedData);
    setFilteredDataList(processedData);
  }

  useEffect(() => {
    getData(requestLink);
    
    // console.log("use effect has just ran");
  }, []);

  useEffect(() => {
    let filtered = DataList;

    if(SearchInput !== "") {
      filtered = filtered.filter((e) => e.name.official.toLowerCase().includes(SearchInput.toLowerCase()));
    }

    if(FilterInput !== "") {
      filtered = filtered.filter((e) => e.region === FilterInput);
    }

    setFilteredDataList(filtered);
    // console.log("you typed/selected something");
  }, [SearchInput, FilterInput, DataList]);


  //WARNING, JANKY CODE AHEAD
  return (
    <div className="App">
      <input type='checkbox' id='switch-theme'></input>
      <main id='Page'>
        <Topbar/>
        <SearchControls searchSetter={setSearchInput} filterSetter={setFilterInput}/>
        <div id='Results'>
          {
            FilteredDataList.map((e) => {
              return ( <Card
                key={e.key}
                flagSrc={e.flags.png}
                name={e.name.common}
                population={numberWithCommas(e.population)}
                region={e.region}
                capital={e.capital ? e.capital.join(', ') : "None"}
                nativeName={ 
                  e.name.nativeName ? 
                  Object.values(e.name.nativeName)[ (Object.keys(e.name.nativeName).length) - 1 ].common 
                  : "None" 
                } //LOOKS LIKE I HAD A STROKE, BUT IT WORKS
                subRegion={e.subregion ? e.subregion : "None"}
                tld={e.tld ? Object.values(e.tld).join(', ') : e.tld}
                currencies={ e.currencies ? Object.values(e.currencies)[0].name : "None" }
                languages={ e.languages ? Object.values(e.languages).join(', ') : "None" }
                borders={e.borders ? e.borders.join(', ') : "None"}
                setClickedCardData={setClickedCardData}
                setModalVisible={setModalVisible}
                /> )
            })
          }
        </div>

        <Modal 
          flagSrc={clickedCardData.flagSrc}
          name={clickedCardData.name}
          population={clickedCardData.population}
          region={clickedCardData.region}
          capital={clickedCardData.capital}
          nativeName={clickedCardData.nativeName}
          subRegion={clickedCardData.subRegion}
          tld={clickedCardData.tld}
          currencies={clickedCardData.currencies}
          languages={clickedCardData.languages}
          borders={clickedCardData.borders}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </main>
    </div>
  );
}

export default App;
