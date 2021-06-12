import React from 'react'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="banner carousel slide " data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="banner d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="text-color">BEST SELLERS</h1>
        <h5 className="discount-color">Enjoy 7% Discount With Collitable Voucher</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="banner d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="text-color">BEST SELLERS</h1>
        <h5 className="discount-color">Enjoy 7% Discount With Collitable Voucher</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="banner d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="text-color">BEST SELLERS</h1>
        <h5 className="discount-color">Enjoy 7% Discount With Collitable Voucher</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Banner
