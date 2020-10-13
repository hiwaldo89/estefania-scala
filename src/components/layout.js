import React from "react"
import "normalize.css"
import "typeface-karla"
import { Global, css } from "@emotion/core"

import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body,
          html {
            font-family: "Karla", sans-serif;
            font-size: 14px;
            @media (min-width: 768px) {
              font-size: 16px;
            }
          }
          .container {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            margin: auto;
            @media (min-width: 576px) {
              max-width: 540px;
            }
            @media (min-width: 768px) {
              max-width: 720px;
            }
            @media (min-width: 992px) {
              max-width: 960px;
            }
            @media (min-width: 1200px) {
              max-width: 1140px;
            }
          }
          button {
            &,
            &:hover,
            &:focus {
              outline: none;
            }
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
