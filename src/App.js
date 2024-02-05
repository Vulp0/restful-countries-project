import './App.css';

function App() {
  return (
    <div className="App">
      <input type='checkbox' id='switch-theme'></input>
      <main id='Page'>
        <nav id='TopBar'>
          <h1>What in the world?</h1>
          <label id='switch-theme-label' htmlFor='switch-theme'>Change theme</label>
        </nav>

        <search id='SearchControls'>
          <input type='text' id='Search' placeholder='Search for a country...'></input>
          <select id='Filter' placeholder="Number two">
            <option value={""} selected>Filter by Region</option>
            <option value={"Africa"}>Africa</option>
            <option value={"America"}>America</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Oceania"}>Oceania</option>
          </select>
        </search>

        <section id="Results">
          <div class="Card">
                  <img class="CardIcon" src="us.png" alt='us'></img>
                  <h3 class="CardTitle">Murica</h3>
                  <p class="CardSubtitle">Pop: 3 kjjhillion ppl</p>
                  <p class="CardSubtitle">Region: placeholder</p>
                  <p class="CardSubtitle">Capital: this is gone</p>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
