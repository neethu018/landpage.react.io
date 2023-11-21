import React from 'react'

function Webpage() {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
        <div class="container">
          <a class="navbar-brand" href="index.html"><i class="fa fa-cart-plus"></i>Shopping Zone</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html"><i class="fa fa-home"></i>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#a"><i class="fa fa-"></i>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#b"> <i class="fa fa-sign-in"></i>
                login</a>
              </li>
              </ul>
            
          </div>
        </div>
      </nav>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">

    
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
  
   
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="image.jpg" alt="Los Angeles" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="shopping.jpg" alt="Chicago" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="thirdimage.jpg" alt="New York" class="d-block w-100" />
      </div>
      </div>
  
    
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
  <div class="container-fluid mt-5 bg-info height-200px">
  <div class="row g-0 ">
  <div class="col-sm-4">
                  <div class="card">  {/* style="width:600px" */}
                      <img class="card-img-top" src="onlineshop.jpg" alt="Card image"/> {/* style="width:100%" */}
                       
                      </div>
              </div>
              <div class="col-sm-8 text-center mt-5">
                 {/*  <h1 style="font-style:italic">About Us</h1> */}
                  <h2>SHOPPING ZONE....</h2>
                  <h4>It's a complete online shopping website .. <br />
                       For one who curiousity to shopping new things. <br />
                      Shop your dream brand here..... </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                  Distinctio, id iste natus unde voluptas quod earum assumenda <br />
                   quis possimus veritatis voluptates saepe optio suscipit aliquid,<br /> 
                   inventore veniam libero reiciendis repellendus. <br />
                   {/* <button style="background-color: pink; border-radius:5px;">shop Now</button> */}
          
              </div>
              </div>
    
    

  </div>
  <div class="container-fluid mt-3 " id='a'>
            <div class="row g-0 ">
              <div class="col-sm-4">
                  <div class="card">  {/* style="width:600px" */}
                      <img class="card-img-top" src="fifthimage.jpg" alt="Card image"/> {/* style="width:100%" */}
                       
                      </div>
              </div>
              <div class="col-sm-8 text-center mt-5">
                 {/*  <h1 style="font-style:italic">About Us</h1> */}
                  <h2>SHOPPING ZONE....</h2>
                  <h4>It's a complete online shopping website .. <br />
                       For one who curiousity to shopping new things. <br />
                      Shop your dream brand here..... </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                  Distinctio, id iste natus unde voluptas quod earum assumenda <br />
                   quis possimus veritatis voluptates saepe optio suscipit aliquid,<br /> 
                   inventore veniam libero reiciendis repellendus. <br />
                   {/* <button style="background-color: pink; border-radius:5px;">shop Now</button> */}
          
              </div>
            </div>
            </div>
            <div class="container mt-3" id='b'>
        <h2>Login form</h2>
        <form action="#">
          <div class="mb-3 mt-3">
            <label for="email">Name:</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" />
          </div>
          <div class="mb-3">
            <label for="pwd">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div class="mb-3">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
  <footer class="text-center text-lg-start bg-info text-white">
  <section class="container d-flex justify-content-center justify-content-lg-between p-4 ">
      <div class="me-5 d-none d-lg-block">
          <span> Get connected with us on social network:</span>
      </div>
      <div>
          <a href="" class="me-4 text-reset"><i class="fa fa-facebook"></i></a>
          <a href="" class="me-4 text-reset"><i class="fa fa-twitter"></i></a>
          <a href="" class="me-4 text-reset"><i class="fa fa-instagram"></i></a>
          <a href="" class="me-4 text-reset"><i class="fa fa-linkedin"></i></a>
          <a href="" class="me-4 text-reset"><i class="fa fa-google"></i></a>
          <a href="" class="me-4 text-reset"><i class="fa fa-github"></i></a>
      </div>
  </section>
  <section class="">
      <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h5 class="text-uppercase fw-bold mb-4"><i class="fa fa-cart-plus"></i>Shopping Zone</h5>
                  <p>
                      shoppingzone.com is aone stop destination for your family's fashion needs.
                      We give you the opportunity to give your wardrobe with the latest collections from our top brand.
                  </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h5 class="text-uppercase fw-bold mb-4">Products</h5>
                  <p><a href=""class="text-reset">kids fashion</a></p>
                  <p><a href=""class="text-reset">Men's fashion</a></p>
                  <p><a href=""class="text-reset">Women's fashion</a></p>
                  <p><a href=""class="text-reset">Accessories</a></p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h5 class="text-uppercase fw-bold mb-4">Useful links</h5>
                  <p><a href=""class="text-reset">facebook</a></p>
                  <p><a href=""class="text-reset">whatsap</a></p>
                  <p><a href=""class="text-reset">instagram</a></p>
                  <p><a href=""class="text-reset">twitter</a></p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h5 class="text-uppercase fw-bold mb-4">Contact</h5>
                  <p><a href=""class="fa fa-home">Shopping</a></p>
                  <p><a href=""class="fa fa-envelope">shoping2019@gmail.com</a></p>
                  <p><a href=""class="fa fa-phonr">+91 9944363470</a></p>
              </div>
          </div>
      </div>
  </section>
  </footer>
   </div>
   </div>
  )
}
export default Webpage