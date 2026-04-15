import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';

const ProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.id}`} className="product-card group block">
    <div className="relative aspect-[3/4] overflow-hidden bg-card rounded-sm">
      <img
        src={product.images[0]}
        alt={product.name}
        className="product-card-image w-full h-full object-cover"
        loading="lazy"
      />
      {product.badge && (
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-body font-semibold tracking-widest uppercase rounded-sm ${
            product.badge === 'sale'
              ? 'bg-sale text-accent-foreground'
              : 'bg-fresh text-accent-foreground'
          }`}
        >
          {product.badge === 'sale' ? 'Sale' : 'New'}
        </span>
      )}
    </div>
    <div className="mt-3 space-y-1">
      <h3 className="font-body text-sm tracking-wide text-foreground group-hover:text-accent transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 font-body text-sm">
        <span className="font-medium">${product.price}</span>
        {product.originalPrice && (
          <span className="text-muted-foreground line-through text-xs">${product.originalPrice}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
