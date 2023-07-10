import CustomCursor from '../components/cursor.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Item_home from '../components/item_home.js'
import Sctracker from '../components/sctracker.js'
import Item_introduce from '../components/item_introduce.js'
import Item_portfolio from '@/components/item_portfolio.js'
import Item_contact from '@/components/item_contact.js'

export default function Home() {
  return (
    <div>
      <Sctracker />
      <CustomCursor />
      <Header />
      <Item_home />
      <Item_introduce />
      <Item_portfolio />
      <Item_contact />
      <Footer />
    </div>
  )
}

