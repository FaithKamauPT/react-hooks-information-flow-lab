import { useState } from "react";
import ShoppingList from "./ShoppingList";
// import itemData from "../items.js";
import Header from './Header';
import Filter from './Filter';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const appClass = darkMode ? 'dark-mode' : 'light-mode';

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeToggle} />
      <Filter />
      <ShoppingList />
      <itemData />
    </div>
  );
};

export default App;























// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function onDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={onDarkModeClick}>
//           {isDarkMode ? "Dark" : "Light"} Mode
//         </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
