
import styles from "../styles/Services.module.css";
import { services } from "../Utils/Services";

export default function Services() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <span className="badge bg-primary mb-3">What We Offer</span>
        <h1 className="fw-bold">Our Services</h1>
        <p className="text-secondary">
          Layanan untuk membuat pengalaman membaca kamu lebih mudah.
        </p>
      </section>

      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-6 col-lg-4" key={service.id}>
            <article className={`card h-100 border-0 shadow-sm rounded-4 ${styles.serviceCard}`}>
              <div className="card-body p-4">
                <div className={styles.serviceIcon}>
                  <i className={service.icon}></i>
                </div>
                <h2 className="h5 fw-bold mt-4">{service.title}</h2>
                <p className="text-secondary mb-0">
                  {service.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
