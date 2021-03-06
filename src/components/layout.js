import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import AdSense from 'react-adsense';

import Header from './header'
import Footer from './footer'
import './layout.css'
import ad from '../styles/ad.module.scss'
//import Logo from "../images/mobile.png"
//<link rel="manifest" href="/site.webmanifest"/>
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!' },
            { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
          ]}
        >
        <meta name="google-site-verification" content="M7sj3VxxFwXYhavVMDLr4XxYPje4GEAFcx9Au42ImSM" />
        <meta name="description" content="A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!" />
        <meta property="og:site_name" content="BetterDocs"/>
        <meta property="og:image" content="https://i.imgur.com/B0vcfRw.png"/>
        <meta property="og:title" content={data.site.siteMetadata.title}/>
        <meta property="og:description" content="A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://betterdocs.us" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#262626"/>
        <meta name="msapplication-TileColor" content="#262626"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="theme-color" content="#262626"/>
        <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={ad.ad}>
          <AdSense.Google
            client='ca-pub-1998206533560539'
            slot='6545618600'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
          />
        </div>
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <div className={ad.ad}>
          <AdSense.Google
            client='ca-pub-1998206533560539'
            slot='6545618600'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
          />
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
