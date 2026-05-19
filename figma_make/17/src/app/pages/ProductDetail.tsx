import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Star, ShoppingCart, Heart, Truck, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { products, reviews } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-black hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const productReviews = reviews.filter((r) => r.productId === product.id);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      alert('Please select a size');
      return;
    }
    if (product.colors && !selectedColor) {
      alert('Please select a color');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity
    });

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
          ✓ Added to cart successfully!
        </div>
      )}

      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link to="/" className="hover:text-black">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-black">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <Link to={`/shop/${product.category}`} className="hover:text-black capitalize">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div>
          <div className="relative mb-4 bg-gray-100 rounded-lg overflow-hidden aspect-square">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded-full z-10">
                {product.badge}
              </span>
            )}
            {product.originalPrice && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full z-10">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            )}
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === idx ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-3xl">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Key Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Select Size:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-lg transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Select Color:</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg transition-colors ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Quantity:</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              {product.inStock ? (
                <span className="text-green-600 text-sm">✓ In Stock</span>
              ) : (
                <span className="text-red-600 text-sm">Out of Stock</span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
            <button className="border-2 border-black px-6 py-4 rounded-lg hover:bg-black hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="space-y-3 border-t border-gray-200 pt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Truck className="w-5 h-5 mr-3" />
              Free shipping on orders over $75
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-5 h-5 mr-3" />
              30-day money-back guarantee
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-16">
        <h2 className="text-3xl mb-8">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center border border-gray-200 rounded-lg p-6">
            <div className="text-5xl mb-2">{product.rating}</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">{product.reviewCount} reviews</p>
          </div>
          <div className="md:col-span-2 space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <span className="text-sm w-8">{rating}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full mx-3">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{
                      width: `${rating === 5 ? 75 : rating === 4 ? 20 : 5}%`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12">
                  {rating === 5 ? 75 : rating === 4 ? 20 : 5}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {productReviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold">{review.title}</h4>
                </div>
                {review.verified && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                    Verified Purchase
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-3">{review.content}</p>
              <div className="text-sm text-gray-500">
                {review.author} - {new Date(review.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Bought Together */}
      <div className="mb-16 bg-gray-50 -mx-4 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8">Frequently Bought Together</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">This item</h4>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
              {relatedProducts.slice(0, 2).map((p) => (
                <div key={p.id} className="flex items-center space-x-4 mb-4">
                  <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{p.name}</h4>
                    <p className="font-semibold">${p.price}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-2xl">
                    ${(product.price + relatedProducts.slice(0, 2).reduce((sum, p) => sum + p.price, 0)).toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-green-600">Save $50 when bought together</p>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                Add All to Cart
              </button>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {relatedProducts.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-3xl mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
