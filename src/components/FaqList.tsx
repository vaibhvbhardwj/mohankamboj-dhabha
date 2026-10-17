import { faqs } from "@/data/faqs";

export function FaqList() {
  return (
    <section className="section section-muted" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Before you visit</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

