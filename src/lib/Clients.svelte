<script>
  //   import airbnb from "../assets/airbnb.png";
  //   import google from "../assets/google.png";
  //   import microsoft from "../assets/microsoft.png";
  //   import fedex from "../assets/fedex.png";
</script>

<section class="container client">
  <h2 class="client__title">
    Some of <span>the clients I have <br />worked for</span>
  </h2>
  <div class="client_logos">
    <img src="https://picsum.photos/200/100" alt="client logo" />
    <img src="https://picsum.photos/200/100" alt="client logo" />
    <img src="https://picsum.photos/200/100" alt="client logo" />
    <img src="https://picsum.photos/200/100" alt="client logo" />

    <!-- <img src={airbnb} alt="client logo" />
    <img src={google} alt="client logo" />
    <img src={microsoft} alt="client logo" />
    <img src={fedex} alt="client logo" /> -->
  </div>
</section>

<style>
  .client {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  .client_logos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding-bottom: 3.125rem;
  }
  .client_logos > img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin: 1rem;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    transition: filter 0.3s ease-in-out;
    transition: -webkit-filter 0.3s ease-in-out;
  }
  .client_logos > img:hover {
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
  }
</style>
