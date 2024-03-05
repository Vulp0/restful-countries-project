function Topbar({ innerRef }) {
    return (
        <nav id="Topbar" ref={innerRef}>
          <h1>Where in the world?</h1>
          <label id='switch-theme-label' htmlFor='switch-theme'><span className="material-symbols-outlined">contrast</span>Change theme</label>
        </nav>
    );
}

export default Topbar;