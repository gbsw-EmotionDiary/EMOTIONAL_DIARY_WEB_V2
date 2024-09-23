import * as R from "@src/allFiles"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<R.Landing />} />
        <Route path="/home" element={<R.Home />} />
        <Route path="/signup" element={<R.SignUp />} />
        <Route path="/signin" element={<R.SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
