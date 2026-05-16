export const dynamic = 'force-dynamic';

const PRODUCT_DATABASE = [
  { id: '101', name: 'Premium Wireless Headphones', price: '₹14,999' },
  { id: '102', name: 'Ergonomic Mechanical Keyboard', price: '₹8,499' },
  { id: '103', name: 'Ultra-Wide Gaming Monitor', price: '₹32,999' },
  { id: '104', name: 'Gaming Chair', price: '₹30,000' },
  { id: '105', name: 'Console', price: '₹12,000' },
];

// 1. Tell Next.js which dynamic parameter paths to bake at build time
export async function generateStaticParams() {
  console.log('>>> [SSG Engine]: Generating static parameters for product paths.');
  
  // Maps to an array of objects representing the [id] segment: [{ id: '101' }, ...]  
  /* 
  return PRODUCT_DATABASE.map((product) => ({
    id: product.id,
  })); 
  */
  return [ {id : '101'}, {id : '102'}, {id : '103'}]
}
// 2. The React Server Component that renders individual product layouts
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCT_DATABASE.find((p) => p.id === id);
  if (!product) {
    return <div style={{ padding: '2rem' }}><h3>Product Not Found</h3></div>;
  }
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>      
        <h2 style={{ color: '#2563EB' }}> Static Product Showcase (SSG)</h2>      
        <h4>{Date().toString()}</h4>
        <p>This layout asset was fully pre-compiled into static HTML during compilation.</p>      
        <div style={{ border: '1px solid #2563EB', padding: '1.5rem', borderRadius: '8px', background: '#EFF6FF', maxWidth: '400px' }}>        
            <h3>{product.name}</h3>        
            <p><strong>Product ID Reference:</strong> {product.id}</p>        
            <p><strong>Market Value:</strong> {product.price}</p>      
        </div>    
    </div>  );
}
