import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Loginhome from './Loginhome';
import Avatar from './Avatar';
import Registrationsuccess from './Registrationsuccess';
import Courses from './Courses';
import Leaderboard from './Leaderboard';
import Quiz from './Quiz';
import Modulehome from './Modulehome';
import Modulehome2 from './Modulehome2';
import Modulehome3 from './Modulehome3';
import Modulehome4 from './Modulehome4';
import Modulehome5 from './Modulehome5';
import Modulehome6 from './Modulehome6';

const Container = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Courses' element={<Courses />} />
            <Route path='/Leaderboard' element={<Leaderboard />} />
            <Route path='/Loginhome' element={<Loginhome />} />
            <Route path='/Modulehome' element={<Modulehome />} />
            <Route path='/Modulehome2' element={<Modulehome2 />} />
            <Route path='/Modulehome3' element={<Modulehome3 />} />
            <Route path='/Modulehome4' element={<Modulehome4 />} />
            <Route path='/Modulehome5' element={<Modulehome5 />} />
            <Route path='/Modulehome6' element={<Modulehome6 />} />
            <Route path='/Quiz' element={<Quiz/>} />
            <Route path='/Avatar' element={<Avatar />} />
            <Route path='/Registrationsuccess' element={<Registrationsuccess />} />
            
        </Routes>


    )
}

export default Container;