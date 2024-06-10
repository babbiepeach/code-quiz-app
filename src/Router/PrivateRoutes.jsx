import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Accessibility from '../pages/Accessibility'
import JavaQuestions from '../pages/JavaQuestions'
import HtmlQuestions from '../pages/HtmlQuestions'
import CQuestions from '../pages/CQuestions'
import Home from '../pages/Home'

const PrivateRoutes = () => {
    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
            </>
        )
    }

    const BrowerRoutes = () => {
        return (
            < BrowserRouter >
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='html' element={<HtmlQuestions />} />
                        <Route path='css' element={<CQuestions />} />
                        <Route path='javascript' element={<JavaQuestions />} />
                        <Route path='accessibility' element={<Accessibility />} />
                    </Route>
                </Routes>
            </BrowserRouter >
        )

    }

    return (
        <BrowerRoutes />
    )
}

export default PrivateRoutes
