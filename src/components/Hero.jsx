export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE’RE HERE
          TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE
          TO HELP YOU WITH OUR SHOES. Shop Now Category Also Available On
        </p>

        <div className="hero-buttons">
          <button className="shop-now">Shop Now</button>
          <button className="category">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Amazon" />
            <img src="/images/flipkart.png" alt="Flipkart" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="Hero" />
      </div>
    </main>
  );
}
