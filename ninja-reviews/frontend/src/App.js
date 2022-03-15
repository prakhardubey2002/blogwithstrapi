import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import './index.css';
function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/details/:id">
            <ReviewDetails />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// query GetReviews{
//   reviews{
    
//     data{
//       id
//       attributes{
//         Title,
        
//       }
//     }
//   }
// }
export default App;
