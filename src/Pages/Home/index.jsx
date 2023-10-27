import { useContext} from "react";
import Layout from "../../Componentes/Layout";
import Card from "../../Componentes/Card";
import ProductDetail from "../../Componentes/ProductDetail";
import { ShopingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShopingCartContext); 

  const renderView = () => { 
      if(context.filteredItems?.length > 0 ) {
          return (
                  context.filteredItems?.map(item => (
                    <Card data={item} key={item.id}/>
                  ))
                )
      } else {
        return (
          <div>We dont have your product </div>
        )
      }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input className='rounded-lg border-black w-80 p-4 mb-4 focus:outline-none' 
      onChange={(event) => context.setSearchByTitle(event.target.value)} type="text" placeholder="Search your product"/>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg"> 
      {renderView()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home