import '@/styles/globals.css';
import NavBar from "@/components/NavBar/NavBar";
import Footer from '@/components/Footer/Footer';
const  App=({ Component, pageProps })=> (
  /// all the components will not be lord or are change 
  //// these would be permanent part of our website 
  <div>
    <NavBar/>
   <Component {...pageProps} />
   <Footer/>
  </div>
)

export default App;

