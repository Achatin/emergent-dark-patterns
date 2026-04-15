import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get related products from same category
  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // Get frequently bought together products
  const bundleProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 2);
  const bundleTotal = product.price + bundleProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleSavings = bundleTotal * 0.15;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} × ${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleAddBundle = () => {
    addToCart(product);
    bundleProducts.forEach(p => addToCart(p));
    toast.success('Bundle added to cart!');
  };

  const productImages = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-blue-600">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden mb-4 border border-gray-200">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === idx ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 font-semibold">{product.rating}</span>
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold text-blue-600">${product.price}</span>
                  {product.price < 100 && (
                    <>
                      <span className="text-2xl text-gray-500 line-through">
                        ${(product.price * 1.4).toFixed(2)}
                      </span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Save 29%
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stock status */}
              <div className="mb-6">
                {product.stock > 20 ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <Check className="h-5 w-5" />
                    <span className="font-semibold">In Stock</span>
                  </div>
                ) : (
                  <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg">
                    <span className="font-semibold">Only {product.stock} left in stock!</span>
                  </div>
                )}
              </div>

              {/* Quantity selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Quantity:</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-10 text-center border border-gray-300 rounded-lg"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-white text-blue-600 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-white py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </button>
                  <button className="flex-1 bg-white py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center space-x-2">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Bought Together */}
        <section className="mb-16">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Frequently Bought Together</h2>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex items-center space-x-4 flex-wrap">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg border border-gray-200" />
                <span className="text-2xl">+</span>
                {bundleProducts.map((p, idx) => (
                  <div key={p.id} className="flex items-center space-x-4">
                    <img src={p.image} alt={p.name} className="w-24 h-24 object-cover rounded-lg border border-gray-200" />
                    {idx < bundleProducts.length - 1 && <span className="text-2xl">+</span>}
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0">
                <div className="mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 line-through">${bundleTotal.toFixed(2)}</span>
                    <span className="text-2xl font-bold text-green-600">${(bundleTotal - bundleSavings).toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">Save ${bundleSavings.toFixed(2)} (15%)</div>
                </div>
                <button
                  onClick={handleAddBundle}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition whitespace-nowrap"
                >
                  Add Bundle to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition group">
                <Link to={`/product/${relatedProduct.id}`} className="block">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <h3 className="font-semibold mb-2 hover:text-blue-600 transition line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">{relatedProduct.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">${relatedProduct.price}</span>
                    <button
                      onClick={() => {
                        addToCart(relatedProduct);
                        toast.success(`${relatedProduct.name} added to cart!`);
                      }}
                      className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
