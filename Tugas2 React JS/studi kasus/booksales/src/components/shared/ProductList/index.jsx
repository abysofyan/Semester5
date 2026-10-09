const products = [
  {
    id: 1,
    title: "Atomic Habits",
    category: "Self Development",
    price: "Rp85.000",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "The Power of Reading",
    category: "Education",
    price: "Rp75.000",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Creative Mind",
    category: "Inspiration",
    price: "Rp90.000",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80",
  },
];

export default function ProductList() {
  return (
    <section id="products" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Popular Books</h2>
        <p className="text-secondary">
          Temukan buku pilihan yang cocok untuk menemani harimu.
        </p>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "280px", objectFit: "cover" }}
              />

              <div className="card-body">
                <span className="badge bg-light text-primary mb-2">
                  {product.category}
                </span>

                <h5 className="card-title fw-bold">
                  {product.title}
                </h5>

                <p className="text-primary fw-bold mb-3">
                  {product.price}
                </p>

                <button type="button" className="btn btn-outline-primary w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}