import { Routes, Route, Link } from 'react-router-dom';
import PeopleList from './Components/PeopleList/PeopleList';
import Navbar from './Components/Navbar/Navbar';
import { UserProvider } from './context/UserContext';
import { CustomersProvider } from './context/CustomersContext';

function App() {
    return (
        <div>
            <UserProvider>
                <CustomersProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PeopleList />} />
                        {/* <Route path="/favoritos" element={<Favoritos />} /> */}
                    </Routes>
                </CustomersProvider>
            </UserProvider>
        </div>
    );
}

export default App;
