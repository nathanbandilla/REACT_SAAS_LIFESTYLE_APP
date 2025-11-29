import React, { useState, useEffect, useRef } from 'react'

import { Helmet } from 'react-helmet'

import './saa-s-lifestyle-app.css'

const SaaSLifestyleApp = (props) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const imageRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    imageRefs.current.forEach(img => {
      if (img) observer.observe(img)
    })

    return () => {
      imageRefs.current.forEach(img => {
        if (img) observer.unobserve(img)
      })
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el)
    }
  }

  const handleOpenPanel = () => {
    setIsPanelOpen(true)
  }

  const handleClosePanel = () => {
    setIsPanelOpen(false)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login attempted with:', { username, password })
    // Add your login logic here
  }

  return (
    <div className="saa-s-lifestyle-app-container1">
      <Helmet>
        <title>NATE SAMPLE LIFESTYLE WEB APP</title>
        <meta property="og:title" content="exported project" />
        <link
          rel="canonical"
          href="https://saas-lifestyle-app-webflow-landing-page-design-commu-jjg8xd.teleporthq.app/"
        />
      </Helmet>
      <div className="saa-s-lifestyle-app-saa-s-lifestyle-app">
        <div className="saa-s-lifestyle-app-navbar-logo-left">
          <div className="saa-s-lifestyle-app-navbar-container">
            <div className="saa-s-lifestyle-app-navbar-content">
              <div className="saa-s-lifestyle-app-logo1">
                <img
                  src="/union2168-nir.svg"
                  alt="Union2168"
                  className="saa-s-lifestyle-app-union1"
                />
                <span className="saa-s-lifestyle-app-text10">Korba</span>
              </div>
              <div className="saa-s-lifestyle-app-navbar-menu">
                <div className="saa-s-lifestyle-app-navbar-link1">
                  <span className="saa-s-lifestyle-app-text11">Features</span>
                </div>
                <div className="saa-s-lifestyle-app-navbar-link2">
                  <span className="saa-s-lifestyle-app-text12">Pricing</span>
                </div>
                <div className="saa-s-lifestyle-app-navbar-link3">
                  <span className="saa-s-lifestyle-app-text13">Blog</span>
                </div>
                <div className="saa-s-lifestyle-app-navbar-link4">
                  <span className="saa-s-lifestyle-app-text14">Company</span>
                </div>
                <button className="saa-s-lifestyle-app-button1" onClick={handleOpenPanel}>
                  <span className="saa-s-lifestyle-app-text15">View app</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="saa-s-lifestyle-app-hero-heading-left">
          <div className="saa-s-lifestyle-app-container2">
            <div className="saa-s-lifestyle-app-column10">
              <div className="saa-s-lifestyle-app-column11">
                <div className="saa-s-lifestyle-app-text-wrapper1">
                  <span className="saa-s-lifestyle-app-text16">FIND</span>
                </div>
                <div className="saa-s-lifestyle-app-text-wrapper2">
                  <span className="saa-s-lifestyle-app-text17">YOUR INNER</span>
                </div>
                <div className="saa-s-lifestyle-app-text-wrapper3">
                  <span className="saa-s-lifestyle-app-text18">FLOW</span>
                </div>
              </div>
               <div className="saa-s-lifestyle-app-actions">
                <button className="saa-s-lifestyle-app-button2" onClick={handleOpenPanel}>
                  <span className="saa-s-lifestyle-app-text19">View app</span>
                </button>
              </div>
            </div>
            <div className="saa-s-lifestyle-app-column12">
              <div className="saa-s-lifestyle-app-image-wrapper">
                <div className="saa-s-lifestyle-app-image"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="saa-s-lifestyle-app-logo-section">
          <span className="saa-s-lifestyle-app-text20">
            Trusted by the world&apos;s best companies
          </span>
          <div className="saa-s-lifestyle-app-content1">
            <div className="saa-s-lifestyle-app-logos">
              <div className="saa-s-lifestyle-app-logo-wrapper1">
                <div className="saa-s-lifestyle-app-logo2">
                  <img
                    ref={addToRefs}
                    src="/logodell2168-q4xd.svg"
                    alt="logodell2168"
                    className="saa-s-lifestyle-app-logodell fade-in-image"
                  />
                </div>
              </div>
              <div className="saa-s-lifestyle-app-logo-wrapper2">
                <div className="saa-s-lifestyle-app-logo3">
                  <img
                    ref={addToRefs}
                    src="/logobain2168-wse3.svg"
                    alt="logobain2168"
                    className="saa-s-lifestyle-app-logobain fade-in-image"
                  />
                </div>
              </div>
              <div className="saa-s-lifestyle-app-logo-wrapper3">
                <div className="saa-s-lifestyle-app-logo4">
                  <img
                    ref={addToRefs}
                    src="/logozendesk2168-9c8j.svg"
                    alt="logozendesk2168"
                    className="saa-s-lifestyle-app-logozendesk fade-in-image"
                  />
                </div>
              </div>
              <div className="saa-s-lifestyle-app-logo-wrapper4">
                <div className="saa-s-lifestyle-app-logo5">
                  <img
                    ref={addToRefs}
                    src="/logorakuten2168-9clc.svg"
                    alt="logorakuten2168"
                    className="saa-s-lifestyle-app-logorakuten fade-in-image"
                  />
                </div>
              </div>
              <div className="saa-s-lifestyle-app-logo-wrapper5">
                <div className="saa-s-lifestyle-app-logo6">
                  <img
                    ref={addToRefs}
                    src="/logopacificfunds2168-lykg.svg"
                    alt="logopacificfunds2168"
                    className="saa-s-lifestyle-app-logopacificfunds fade-in-image"
                  />
                </div>
              </div>
              <div className="saa-s-lifestyle-app-logo-wrapper6">
                <div className="saa-s-lifestyle-app-logo7">
                  <div className="saa-s-lifestyle-app-logodiscord">
                    <div className="saa-s-lifestyle-app-group">
                      <img
                        ref={addToRefs}
                        src="/vector2168-y5yk.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector1 fade-in-image"
                      />
                      <img
                        ref={addToRefs}
                        src="/vector2168-woip.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector2 fade-in-image"
                      />
                      <img
                        ref={addToRefs}
                        src="/vector2168-9wl4.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector3 fade-in-image"
                      />
                      <img
                        ref={addToRefs}
                        src="/vector2168-4tq5.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector4 fade-in-image"
                      />
                      <img
                        ref={addToRefs}
                        src="/vector2168-1s9k.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector5 fade-in-image"
                      />
                      <img
                        ref={addToRefs}
                        src="/vector2168-5pcphi.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector6 fade-in-image"
                      />
                      <img
                        ref={addToRefs}
                        src="/vector2168-8o27.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector7 fade-in-image"
                      />
                      <img
                        ref={addToRefs}
                        src="/vector2168-s9d.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector8 fade-in-image"
                      />
                      <img
                        ref={addToRefs}
                        src="/vector2168-sq82d.svg"
                        alt="Vector2168"
                        className="saa-s-lifestyle-app-vector9 fade-in-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="saa-s-lifestyle-app-logo-wrapper7">
                <div className="saa-s-lifestyle-app-logo8">
                  <img
                    ref={addToRefs}
                    src="/logoncr2168-7eg.svg"
                    alt="logoncr2168"
                    className="saa-s-lifestyle-app-logoncr fade-in-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saa-s-lifestyle-app-sections1">
          <div className="saa-s-lifestyle-app-section1">
            <div className="saa-s-lifestyle-app-container3">
              <div className="saa-s-lifestyle-app-content-wrapper1">
                <div className="saa-s-lifestyle-app-content2">
                  <span className="saa-s-lifestyle-app-text21">Feature</span>
                  <span className="saa-s-lifestyle-app-text22">FlowStream</span>
                  <span className="saa-s-lifestyle-app-text23">
                    &quot;FlowStream,&quot; which is a collection of beautiful
                    natural soundscapes that can be played in the background to
                    help you de-stress and concentrate. You can choose from a
                    range of different soundscapes, such as the soothing sounds
                    of ocean waves or the peaceful rustling of leaves in a
                    forest.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="saa-s-lifestyle-app-section2">
            <div className="saa-s-lifestyle-app-container4">
              <div className="saa-s-lifestyle-app-frame2-columns1">
                <div className="saa-s-lifestyle-app-column13">
                  <div className="saa-s-lifestyle-app-imagewrapper1">
                    <img
                      ref={addToRefs}
                      src="/placeholderimage2168-y6fs-600h.png"
                      alt="PlaceholderImage2168"
                      className="saa-s-lifestyle-app-placeholder-image fade-in-image"
                    />
                  </div>
                </div>
                <div className="saa-s-lifestyle-app-column14">
                  <div className="saa-s-lifestyle-app-content3">
                    <span className="saa-s-lifestyle-app-text24">Values</span>
                    <span className="saa-s-lifestyle-app-text25">
                      Our Mission
                    </span>
                    <span className="saa-s-lifestyle-app-text26">
                      At Korba, we believe that achieving mindfulness and
                      tranquility should be simple and accessible to everyone.
                      Try our platform today and experience the benefits of a
                      more peaceful and centered life.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saa-s-lifestyle-app-sections2">
          <div className="saa-s-lifestyle-app-section3">
            <div className="saa-s-lifestyle-app-container5">
              <div className="saa-s-lifestyle-app-frame2-columns2">
                <div className="saa-s-lifestyle-app-column15">
                  <div className="saa-s-lifestyle-app-content4">
                    <span className="saa-s-lifestyle-app-text27">Values</span>
                    <span className="saa-s-lifestyle-app-text28">
                      Our Commitment
                    </span>
                    <span className="saa-s-lifestyle-app-text29">
                      Korba is committed to helping you cultivate greater calm,
                      balance, and well-being in your life.
                    </span>
                  </div>
                </div>
                <div className="saa-s-lifestyle-app-column16">
                  <div className="saa-s-lifestyle-app-imagewrapper2">
                    <img
                      ref={addToRefs}
                      src="/image452168-sged-200h.png"
                      alt="image452168"
                      className="saa-s-lifestyle-app-image45 fade-in-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="saa-s-lifestyle-app-section4">
            <div className="saa-s-lifestyle-app-container6">
              <div className="saa-s-lifestyle-app-content-wrapper2">
                <div className="saa-s-lifestyle-app-content5">
                  <span className="saa-s-lifestyle-app-text30">
                    Ready to start?
                  </span>
                  <span className="saa-s-lifestyle-app-text31">
                    Ready to start your journey towards a more calm and centered
                    you? Download Korba today and experience the power of
                    mindfulness!
                  </span>
                  <span className="saa-s-lifestyle-app-text32">
                    Try it for free
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saa-s-lifestyle-app-footer">
          <div className="saa-s-lifestyle-app-columns">
            <div className="saa-s-lifestyle-app-small-columns">
              <div className="saa-s-lifestyle-app-column17">
                <div className="saa-s-lifestyle-app-logo-wrapper8">
                  <div className="saa-s-lifestyle-app-logo9">
                    <img
                      src="/union2168-ef4o.svg"
                      alt="Union2168"
                      className="saa-s-lifestyle-app-union2"
                    />
                    <span className="saa-s-lifestyle-app-text33">Korba</span>
                  </div>
                </div>
              </div>
              <div className="saa-s-lifestyle-app-column18">
                <div className="saa-s-lifestyle-app-content6">
                  <span className="saa-s-lifestyle-app-text34">Company</span>
                  <div className="saa-s-lifestyle-app-footer-links1">
                    <div className="saa-s-lifestyle-app-link10">
                      <span className="saa-s-lifestyle-app-text35">About</span>
                    </div>
                    <div className="saa-s-lifestyle-app-link11">
                      <span className="saa-s-lifestyle-app-text36">
                        Careers
                      </span>
                    </div>
                    <div className="saa-s-lifestyle-app-link12">
                      <span className="saa-s-lifestyle-app-text37">Press</span>
                    </div>
                    <div className="saa-s-lifestyle-app-link13">
                      <span className="saa-s-lifestyle-app-text38">Blog</span>
                    </div>
                    <div className="saa-s-lifestyle-app-link14">
                      <span className="saa-s-lifestyle-app-text39">
                        Korba Science
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="saa-s-lifestyle-app-column19">
                <div className="saa-s-lifestyle-app-content7">
                  <span className="saa-s-lifestyle-app-text40">Offers</span>
                  <div className="saa-s-lifestyle-app-footer-links2">
                    <div className="saa-s-lifestyle-app-link15">
                      <span className="saa-s-lifestyle-app-text41">
                        Buy a Gift
                      </span>
                    </div>
                    <div className="saa-s-lifestyle-app-link16">
                      <span className="saa-s-lifestyle-app-text42">
                        Redeem a Gift
                      </span>
                    </div>
                    <div className="saa-s-lifestyle-app-link17">
                      <span className="saa-s-lifestyle-app-text43">
                        Family Plan
                      </span>
                    </div>
                    <div className="saa-s-lifestyle-app-link18">
                      <span className="saa-s-lifestyle-app-text44">
                        Korba Health
                      </span>
                    </div>
                    <div className="saa-s-lifestyle-app-link19">
                      <span className="saa-s-lifestyle-app-text45">
                        Korba Business
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="saa-s-lifestyle-app-column20">
                <div className="saa-s-lifestyle-app-content8">
                  <span className="saa-s-lifestyle-app-text46">Help</span>
                  <div className="saa-s-lifestyle-app-footer-links3">
                    <div className="saa-s-lifestyle-app-link20">
                      <span className="saa-s-lifestyle-app-text47">FAQ</span>
                    </div>
                    <div className="saa-s-lifestyle-app-link21">
                      <span className="saa-s-lifestyle-app-text48">
                        Contact Us
                      </span>
                    </div>
                    <div className="saa-s-lifestyle-app-link22">
                      <span className="saa-s-lifestyle-app-text49">Terms</span>
                    </div>
                    <div className="saa-s-lifestyle-app-link23">
                      <span className="saa-s-lifestyle-app-text50">
                        Cookies
                      </span>
                    </div>
                    <div className="saa-s-lifestyle-app-link24">
                      <span className="saa-s-lifestyle-app-text51">
                        Privacy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="saa-s-lifestyle-app-column21">
              <div className="saa-s-lifestyle-app-form1">
                <div className="saa-s-lifestyle-app-cta-title">
                  <span className="saa-s-lifestyle-app-text52">Subscribe</span>
                  <span className="saa-s-lifestyle-app-text53">
                    Join our newsletter to stay up to date on features and
                    releases.
                  </span>
                </div>
                <div className="saa-s-lifestyle-app-form-wrapper">
                  <div className="saa-s-lifestyle-app-form2">
                    <input
                      type="text"
                      placeholder="Enter your email..."
                      className="saa-s-lifestyle-app-form-text-input"
                    />
                    <button className="saa-s-lifestyle-app-form-button">
                      <span className="saa-s-lifestyle-app-text54">
                        Subscribe
                      </span>
                    </button>
                  </div>
                </div>
                <span className="saa-s-lifestyle-app-text55">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </span>
              </div>
            </div>
          </div>
          <div className="saa-s-lifestyle-app-copyright">
            <span className="saa-s-lifestyle-app-text56">
              © 2025 Nate. All rights reserved.
            </span>
            <div className="saa-s-lifestyle-app-social-links">
              <img
                ref={addToRefs}
                src="/iconfacebook2169-adjj.svg"
                alt="IconFacebook2169"
                className="saa-s-lifestyle-app-icon-facebook fade-in-image"
              />
              <img
                ref={addToRefs}
                src="/iconinstagram2169-g7rx.svg"
                alt="IconInstagram2169"
                className="saa-s-lifestyle-app-icon-instagram fade-in-image"
              />
              <img
                ref={addToRefs}
                src="/icontwitter2169-o7z.svg"
                alt="IconTwitter2169"
                className="saa-s-lifestyle-app-icon-twitter fade-in-image"
              />
              <img
                ref={addToRefs}
                src="/iconlinkedin2169-3uie.svg"
                alt="IconLinkedIn2169"
                className="saa-s-lifestyle-app-icon-linked-in fade-in-image"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://play.teleporthq.io/signup"
        className="saa-s-lifestyle-app-link25"
      >
        <div
          aria-label="Sign up to TeleportHQ"
          className="saa-s-lifestyle-app-container7"
        >

          <span className="saa-s-lifestyle-app-text57">
           build by Nate 2025
          </span>
        </div>
      </a>

      {/* Login Side Panel */}
      <div className={`login-side-panel ${isPanelOpen ? 'open' : ''}`}>
        <div className="login-panel-overlay" onClick={handleClosePanel}></div>
        <div className="login-panel-content">
          <button className="login-panel-close" onClick={handleClosePanel}>
            ×
          </button>
          <div className="login-panel-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your account</p>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-submit-btn">
              Sign In
            </button>
            <div className="login-footer">
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SaaSLifestyleApp
