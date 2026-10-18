import Pseudo from "./components/Pseudo";
import StudentProfile from "./components/StudentProfile";
import ProductList from "./components/ProductList";
import ListeTaches from "./components/ListeTaches";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
  return (
    <div>
      <header>TP2</header>
      <Pseudo />
      <StudentProfile nom="AZAANOUN ISMAIL" filiere="Développement Digital Option Web Full Stack" />
      <ProductList />
      <ListeTaches />
      <FavoriteMovies />
    </div>
  );
}
export default App;