import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import { Sidebar, SearchBar, Trending, DailyFeed, Followers, Details } from './containers'
import {CreateForm} from './pages'
import { SearchResults } from './components'

function App() {

  return (
    <Router>
      <div className="app">
        <SearchBar />

        <div className="dynamic-ui">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <div className='dynamic-row'>
                    <div className="dynamic-col">
                      <Trending />
                      <DailyFeed />
                    </div>
                    <Followers />
                  </div>
                </>
              }
            />
            <Route path="/blog/details/:id" element={<Details />} />
            <Route path="blog/results" element={<SearchResults />} />
            <Route path="/blog/create" element={<CreateForm />} />
          </Routes>
        </div>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
