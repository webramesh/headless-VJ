import ProductCard from '../../Components/ProductCard';

export default function Price({ similarProducts }) {
  if (!similarProducts || similarProducts.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center text-xl mb-8">SE ANDRA LIKNANDE VINER</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {similarProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
