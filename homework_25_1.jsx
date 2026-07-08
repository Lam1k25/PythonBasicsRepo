import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            width: "250px",
          }}
        >
          <h3>{product.name}</h3>
          <p>Цена: {product.price} ₽</p>
          <p>{product.inStock ? "В наличии" : "Нет в наличии"}</p>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Ноутбук",
      price: 75000,
      inStock: true,
    },
    {
      id: 2,
      name: "Мышь",
      price: 1500,
      inStock: false,
    },
    {
      id: 3,
      name: "Монитор",
      price: 12000,
      inStock: true,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Домашнее задание: TypeScript</h1>

      <h2>Список товаров</h2>

      <ProductList products={products} />
    </div>
  );
};

export default App;
