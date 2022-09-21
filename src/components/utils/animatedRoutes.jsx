import React from 'react'
import Home from '../../pages/home'
import Roadmap from '../../pages/roadmap'
import Team from '../../pages/team'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes(){
  const location = useLocation()
    return  (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="team" element={<Team />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes