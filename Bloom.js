function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
  
    document.getElementById(sectionId).classList.add('active');
  }
  
  //Options para sa Plant Types
  function showPlantTypesOptions() {
    const content = document.getElementById('plant-types-content');
    content.innerHTML = `
      <h3>Select a Category</h3>
      <button onclick="showIndoorPlants()">Indoor Plants</button>
      <button onclick="showOutdoorPlants()">Outdoor Plants</button>
    `;
  }
  
  //Search/filter para sa plants
  function showSearch() {
    const content = document.getElementById('plant-types-content');
    content.innerHTML = `
      <h3>Search Plants</h3>
      <input type="text" placeholder="Search for plants..." id="searchBar">
      <button>Search</button>
    `;
  }
  
  //Indoor Plants options
  function showIndoorPlants() {
    const content = document.getElementById('plant-types-content');
    content.innerHTML = `
      <h3>Indoor Plants</h3>
      <ul>
        <li>Succulents</li>
        <li>Flowering Plants</li>
        <li>Herbs</li>
      </ul>
      <button onclick="showPlantTypesOptions()">Back</button>
    `;
  }
  
  //Outdoor Plants options
  function showOutdoorPlants() {
    const content = document.getElementById('plant-types-content');
    content.innerHTML = `
      <h3>Outdoor Plants</h3>
      <ul>
        <li>Trees and Shrubs</li>
        <li>Flowering Plants</li>
      </ul>
      <button onclick="showPlantTypesOptions()">Back</button>
    `;
  }
  
  //Sign Up Form
  function showSignUp() {
    const content = document.getElementById('user-account-content');
    content.innerHTML = `
      <h3>Sign Up</h3>
      <form>
        <input type="text" placeholder="Username" required><br>
        <input type="email" placeholder="Email" required><br>
        <input type="password" placeholder="Password" required><br>
        <button type="submit">Sign Up</button>
      </form>
    `;
  }
  
  //Log In Form
  function showLogIn() {
    const content = document.getElementById('user-account-content');
    content.innerHTML = `
      <h3>Log In</h3>
      <form>
        <input type="email" placeholder="Email" required><br>
        <input type="password" placeholder="Password" required><br>
        <button type="submit">Log In</button>
      </form>
    `;
  }