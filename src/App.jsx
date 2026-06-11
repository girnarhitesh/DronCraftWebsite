import React, { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"
import NavigationBar from "./Components/NavigationBar/NavigationBar"
import HeroSection from "./Components/HeroRoutes/HeroSection/HeroSection"
import ChooseAdventure from "./Components/ChooseAdventure/ChooseAdventure"
import OurPromise from "./Components/OurPromise/OurPromise"
import WhyDroneCraft from "./Components/WhyDroneCraft/WhyDroneCraft"
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs"
import DroneCraftStories from "./Components/DroneCraftStories/DroneCraftStories"
import DroneCraftGallery from "./Components/DroneCraftGallery/DroneCraftGallery"
import ExperienceHighlights from "./Components/ExperienceHighlights/ExperienceHighlights"
import Footer from "./Components/Footer/Footer"
import WhatsAppFloat from "./Components/WhatsAppFloat/WhatsAppFloat"
import OfferBanner from "./Components/OfferBanner/OfferBanner"
import PrivacyPolicyPage from "./Components/PolicyPage/PrivacyPolicyPage"
import TermsAndConditionPage from "./Components/PolicyPage/TermsAndConditionPage"
import ReturnRefundPage from "./Components/PolicyPage/ReturnRefundPage"
import BlogsPage from "./Components/Blogs/BlogsPage"
import BlogPostPage from "./Components/Blogs/BlogPostPage"

const GA_MEASUREMENT_ID = "G-HZHRQYHD05"

const trackPageView = (path) => {
  if (typeof window.gtag !== "function") return

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  })
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    trackPageView(pathname)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <HeroSection />
              <OfferBanner
                image="/Images/OfferBanner2.png"
                alt="DroneCraft vision to elevate Rishikesh rafting to world standards — safety, experience, and memories"
                ariaLabel="DroneCraft vision banner"
              />
              <ChooseAdventure />
              <OfferBanner />
              <WhyDroneCraft />
              <WhyChooseUs />
              <ExperienceHighlights />
              <DroneCraftGallery />
              <OurPromise />
              <DroneCraftStories />
              <Footer />
              <WhatsAppFloat />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <NavigationBar />
              <PrivacyPolicyPage />
              <Footer />
              <WhatsAppFloat />
            </>
          }
        />
        <Route
          path="/terms-and-condition"
          element={
            <>
              <NavigationBar />
              <TermsAndConditionPage />
              <Footer />
              <WhatsAppFloat />
            </>
          }
        />
        <Route
          path="/return-refund"
          element={
            <>
              <NavigationBar />
              <ReturnRefundPage />
              <Footer />
              <WhatsAppFloat />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <NavigationBar />
              <BlogsPage />
              <Footer />
              <WhatsAppFloat />
            </>
          }
        />
        <Route
          path="/blogs/news/:slug"
          element={
            <>
              <NavigationBar />
              <BlogPostPage />
              <Footer />
              <WhatsAppFloat />
            </>
          }
        />
        <Route
          path="/blogs/:slug"
          element={
            <>
              <NavigationBar />
              <BlogPostPage />
              <Footer />
              <WhatsAppFloat />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App