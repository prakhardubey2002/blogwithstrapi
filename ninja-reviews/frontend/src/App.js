import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient,InMemoryCache,ApolloProvider } from "@apollo/client";//imported apollo client to make setup
import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import './index.css';

//apollo client
const client = new ApolloClient({
  url: 'http://localhost:1337/api/graphql',
  cache:new InMemoryCache()
})



function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
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
