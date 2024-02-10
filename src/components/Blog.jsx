import React from "react";

function Blog() {
  return (
    <>
      <section className="mt-5 mb-4">
        <div className="container text-dark">
          <header className="mb-4">
            <h3>Blog posts</h3>
          </header>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article>
                <a href="#" className="img-fluid">
                  <img
                    className="rounded w-100"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/1.webp"
                    style={{"objectFit": "cover"}}
                    height="160"
                  />
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    23.12.2022
                  </span>
                  <a href="#">
                    <h6 className="text-dark">How to promote brands</h6>
                  </a>
                  <p>
                    When you enter into any new area of science, you almost
                    reach
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article>
                <a href="#" className="img-fluid">
                  <img
                    className="rounded w-100"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/2.webp"
                    style={{"objectFit": "cover"}}
                    height="160"
                  />
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    13.12.2022
                  </span>
                  <a href="#">
                    <h6 className="text-dark">How we handle shipping</h6>
                  </a>
                  <p>
                    When you enter into any new area of science, you almost
                    reach
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article>
                <a href="#" className="img-fluid">
                  <img
                    className="rounded w-100"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/3.webp"
                    style={{"objectFit": "cover"}}
                    height="160"
                  />
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    25.11.2022
                  </span>
                  <a href="#">
                    <h6 className="text-dark">How to promote brands</h6>
                  </a>
                  <p>
                    When you enter into any new area of science, you almost
                    reach
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article>
                <a href="#" className="img-fluid">
                  <img
                    className="rounded w-100"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/4.webp"
                    style={{"objectFit": "cover"}}
                    height="160"
                  />
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    03.09.2022
                  </span>
                  <a href="#">
                    <h6 className="text-dark">Success story of sellers</h6>
                  </a>
                  <p>
                    When you enter into any new area of science, you almost
                    reach
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
