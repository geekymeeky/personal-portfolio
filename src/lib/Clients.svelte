<script>
  import iema from "../assets/iema.png";
  import gssoc from "../assets/gssoc.png";
  import gdscciem from "../assets/gdscciem.png";
  import gdgcloudkolkata from "../assets/gdgcloudkolkata.png";
</script>

<section class="container client">
  <h2 class="client__title">
    Some of <span>the clients I have <br />worked for</span>
  </h2>
  <div class="client_logos">
    <img src={iema} alt="client logo" />
    <img src={gdgcloudkolkata} alt="client logo" />
    <img src={gssoc} alt="client logo" />
    <img src={gdscciem} alt="client logo" />
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
    max-height: 8rem;
    max-width: 20rem;
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
  @media (max-width: 768px) {
    .client_logos {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
</style>
