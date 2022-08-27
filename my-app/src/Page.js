//folder/FileName //header/Header
/**How to reduce file Name: es 6 module Barrel export syntax  */

// import { Header } from './header/Header'
// import { Header } from './header/Header'
//import { Footer } from './footer/Footer'
// import { Header } from './header/Header'
// import { MenuBar } from './header/Menubar'
import { Header, MenuBar } from './header'
import { Footer } from './footer'
// import { Main } from './main/Main'
import { Main } from './main'

//all html attributes must be camel cased :
//class => className
const Page = () => <div className="container">
    <Header />
    <MenuBar />
    <Main />
    <Footer />
</div>

export default Page;