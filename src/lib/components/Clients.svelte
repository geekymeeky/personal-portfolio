<script>
  import iema from '../../assets/iema.webp'
  import gssoc from '../../assets/gssoc.webp'
  import gdscciem from '../../assets/gdscciem.webp'
  import gdgcloudkolkata from '../../assets/gdgcloudkolkata.webp'
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
    width: 200px;
    height: 100px;
    object-fit: contain;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    transition: filter 0.3s ease-in-out;
    transition: -webkit-filter 0.3s ease-in-out;
    z-index: 4;
  }
  .client_logos > img:hover {
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
  }
  @media (max-width: 768px) {
    .client_logos {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }
  span {
    color: #ffa28b;
  }
</style>
