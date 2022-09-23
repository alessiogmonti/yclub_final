import React from 'react'
import Home from '../../pages/home'
import Roadmap from '../../pages/roadmap'
import Team from '../../pages/team'
import Launchpad from '../../pages/launchpad'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export function MobileAnimatedRoutes(){
  const location = useLocation()
    return  (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="team" element={<Team />} />
            <Route path="launchpad" element={<Launchpad />} />
             {/* <Route path="*" element={<NoPage />} */}
          </Route>
        </Routes>
      </AnimatePresence>
    )
}

export function WebAnimatedRoutes(){
  const location = useLocation()
    return  (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="team" element={<Team />} />
            <Route path="launchpad" element={<Launchpad />} />
             {/* <Route path="*" element={<NoPage />} */}
          </Route>
        </Routes>
      </AnimatePresence>
    )
}