import Container from 'react-bootstrap/Container';


export const ItemListContainer = ({ greeting }) => (
  <Container className="mt-4">
    <h1>{greeting}</h1>
  </Container>
);

/*
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])
  
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}

*/

