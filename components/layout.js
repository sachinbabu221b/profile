import Footer from '../components/footer'
import Header from '../components/header'

import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Header/>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
