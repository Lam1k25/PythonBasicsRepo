import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <h2>Список товаров</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
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
}

function App() {
  const products: Product[] = [
    { id: 1, name: "Ноутбук", price: 75000, inStock: true },
    { id: 2, name: "Мышь", price: 1500, inStock: false },
    { id: 3, name: "Монитор", price: 12000, inStock: true },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Домашнее задание: TypeScript</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
