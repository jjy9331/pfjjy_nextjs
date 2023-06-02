import CustomCursor from '../pages/cursor.js'
import Header from '../pages/header.js'
import Footer from '../pages/footer.js'
import Item_home from './item_home.js'
import Sctracker from './sctracker.js'

export default function Home() {
  return (
    <div>
      <Sctracker />
      <CustomCursor />
      <Header />
      <Item_home />
      <Footer />
    </div>
  )
}

