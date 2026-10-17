import Image from "next/image";

export function FounderTribute() {
  return (
    <section className="section founder-tribute-section" id="founder" aria-labelledby="founder-title">
      <div className="container">
        <div className="founder-tribute-grid">
          {/* Framed Photo inside Ornate Traditional Golden / Bronze Border */}
          <div className="founder-frame-wrapper">
            <div className="ornate-gold-frame">
              <div className="ornate-corner ornate-top-left" aria-hidden="true" />
              <div className="ornate-corner ornate-top-right" aria-hidden="true" />
              <div className="ornate-corner ornate-bottom-left" aria-hidden="true" />
              <div className="ornate-corner ornate-bottom-right" aria-hidden="true" />
              <div className="ornate-inner-border">
                <div className="founder-image-ratio">
                  <Image
                    src="/images/founder.jpg"
                    alt="Late Shri Mohan Lal Kamboj Ji - Founder and Visionary of Mohan Kamboj Dhaba & Hotel"
                    fill
                    sizes="(max-width: 640px) 280px, 360px"
                    loading="lazy"
                    className="founder-portrait-img"
                  />
                  <div className="founder-frame-lighting" />
                </div>
              </div>
            </div>
            <div className="founder-nameplate">
              <span className="founder-tribute-badge">In Sacred Memory</span>
              <h3 className="founder-name">Late Shri Mohan Lal Kamboj Ji</h3>
              <p className="founder-dates">Founder &amp; Guiding Light • Estd. 1990</p>
            </div>
          </div>

          {/* Heartfelt Tribute Text Block */}
          <div className="founder-tribute-copy">
            <span className="eyebrow tribute-eyebrow">Our Guiding Legacy</span>
            <h2 id="founder-title">The Vision That Shaped Murthal&apos;s Highway Hospitality.</h2>

            <div className="tribute-lead-quote">
              <p>
                &ldquo;Serve wholesome food with honesty, welcome every traveller with genuine warmth,
                and let quality be your eternal signature.&rdquo;
              </p>
            </div>

            <div className="tribute-story-paragraphs">
              <p>
                Our journey began in 1990, when <strong>Late Shri Mohan Lal Kamboj Ji</strong> laid the
                foundation of this dhaba with a simple vision: to serve delicious, wholesome food with honesty
                and warmth to travelers navigating the Grand Trunk road (NH-44).
              </p>
              <p>
                With his blessings and enduring legacy, we have continued to grow and move forward while staying
                unwaveringly true to the core values he instilled in us. His tireless dedication, work ethic, and
                generosity continue to inspire our team every single day.
              </p>
              <p>
                From our humble roadside beginnings with clay tandoors and wooden charpais, we have now expanded to
                offer a complete hospitality destination — featuring pure-veg fine dining, luxurious air-conditioned
                rooms, an executive conference suite, and an elegant celebration hall. This journey of growth is a
                humble tribute to his visionary spirit.
              </p>
            </div>

            <div className="tribute-values-strip">
              <div className="tribute-value-item">
                <span className="tribute-val-icon" aria-hidden="true">✦</span>
                <div>
                  <strong>Honest Hospitality</strong>
                  <small>Fresh, pure vegetarian food served with genuine care.</small>
                </div>
              </div>
              <div className="tribute-value-item">
                <span className="tribute-val-icon" aria-hidden="true">✦</span>
                <div>
                  <strong>Enduring Legacy</strong>
                  <small>Over 3 decades of trusted Murthal traditions on NH-44.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
