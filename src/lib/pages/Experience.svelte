<script>
</script>

<h2 class="title">Experience</h2>
<section id="timeline" class="container">
  <div class="timeline-block">
    <div class="timeline-img picture" />

    <div class="timeline-content">
      <h2>IEMLabs</h2>
      <div class="timeline-content-info">
        <span class="timeline-content-info-title">
          <i class="fa fa-certificate" aria-hidden="true" />
          Software Developer Intern
        </span>
        <span class="timeline-content-info-date">
          <i class="fa fa-calendar-o" aria-hidden="true" />
          October 2021 - July 2022
        </span>
      </div>
      <p>
        • Implemented threading for IEM-Secure to reduce scan time.<br /> •
        Revamped CI/CD pipeline for web-app deployment using AWS.<br />
      </p>
      <ul class="content-skills">
        <li>MERN</li>
        <li>UI/UX</li>
        <li>Fast API</li>
        <li>Machine Learning</li>
      </ul>
    </div>
  </div>

  <div class="timeline-block">
    <div class="timeline-img picture" />

    <div class="timeline-content">
      <h2>Tech Lead</h2>
      <div class="timeline-content-info">
        <span class="timeline-content-info-title">
          <i class="fa fa-certificate" aria-hidden="true" />
          Google Developer Student Clubs CIEM
        </span>
        <span class="timeline-content-info-date">
          <i class="fa fa-calendar-o" aria-hidden="true" />
          September 2021 - July 2022
        </span>
      </div>
      <p>
        • Led a team of 10+ developers to build a web-app for the club.<br /> •
        Implemented a CI/CD pipeline for the web-app using AWS.<br /> • Conducted
        workshops on web development and open-source.
      </p>
    </div>
  </div>

  <div class="timeline-block">
    <div class="timeline-img picture" />

    <div class="timeline-content">
      <h2>Program Administrator</h2>
      <div class="timeline-content-info">
        <span class="timeline-content-info-title">
          <i class="fa fa-certificate" aria-hidden="true" />
          Girl Script Summer of Code
        </span>
        <span class="timeline-content-info-date">
          <i class="fa fa-calendar-o" aria-hidden="true" />
          September 2021 - July 2022
        </span>
      </div>
      <p>
        • Mentored 20+ students in the program<br />• Maintained various
        open-source projects<br /> • Conducted workshops on web development and
        open-source<br /> • Organized events to promote open-source.
      </p>
    </div>
  </div>
</section>

<style>
  .title {
    text-align: center;
    margin: 2rem 0;
    margin-top: 6rem;
  }
  .container {
    width: 90%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 10%;
    border-radius: 2px;
  }

  .container::after {
    content: "";
    display: table;
    clear: both;
  }
  #timeline {
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  #timeline::before {
    content: "";
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 4px;
    background: #c1c1c1;
  }

  @media only screen and (min-width: 1170px) {
    #timeline {
      margin-top: 3em;
      margin-bottom: 3em;
    }

    #timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }
  .timeline-block {
    position: relative;
    margin: 2em 0;
  }

  .timeline-block:after {
    content: "";
    display: table;
    clear: both;
  }

  .timeline-block:first-child {
    margin-top: 0;
  }

  .timeline-block:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1170px) {
    .timeline-block {
      margin: 4em 0;
    }

    .timeline-block:first-child {
      margin-top: 0;
    }

    .timeline-block:last-child {
      margin-bottom: 0;
    }
  }
  .timeline-img {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #7e57c2, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .timeline-img {
    background: #673ab7;
  }

  @media only screen and (min-width: 1170px) {
    .timeline-img {
      width: 30px;
      height: 30px;
      left: 50%;
      margin-left: -15px;
      margin-top: 15px;
    }
  }
  .timeline-content {
    position: relative;
    margin-left: 60px;
    margin-right: 30px;
    /* background: #333c42; */
    border: 1px solid #7e57c2;
    border-radius: 2px;
    padding: 1em;
  }
  .timeline-content .timeline-content-info {
    background: #2b343a60;
    padding: 5px 10px;
    color: var(--color-neutral-1);
    font-size: 12px;
    box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.08);
    border-radius: 2px;
  }
  .timeline-content .timeline-content-info i {
    margin-right: 5px;
  }
  .timeline-content .timeline-content-info .timeline-content-info-title,
  .timeline-content .timeline-content-info .timeline-content-info-date {
    width: calc(50% - 2px);
    display: inline-block;
  }
  @media (max-width: 500px) {
    .timeline-content .timeline-content-info .timeline-content-info-title,
    .timeline-content .timeline-content-info .timeline-content-info-date {
      display: block;
      width: 100%;
    }
  }
  .timeline-content .content-skills {
    font-size: 12px;
    padding: 0;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .timeline-content .content-skills li {
    background: #2b343a60;
    border-radius: 2px;
    display: inline-block;
    padding: 2px 10px;
    color: var(--color-neutral-1);
    margin: 3px 2px;
    text-align: center;
    flex-grow: 1;
  }

  .timeline-content:after {
    content: "";
    display: table;
    clear: both;
  }

  .timeline-content h2 {
    color: var(--color-neutral-1);
    margin-top: 0;
    margin-bottom: 5px;
  }

  .timeline-content p {
    color: var(--color-neutral-1);
    font-size: 13px;
    font-size: 0.8125rem;
  }

  .timeline-content p {
    margin: 1em 0;
    line-height: 1.6;
  }

  .timeline-content::before {
    content: "";
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid #7e57c2;
  }

  @media only screen and (min-width: 768px) {
    .timeline-content h2 {
      font-size: 20px;
      font-size: 1.25rem;
    }

    .timeline-content p {
      font-size: 16px;
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 1170px) {
    .timeline-content {
      color: var(--color-neutral-1);
      margin-left: 0;
      padding: 1.6em;
      width: 36%;
      margin: 0 5%;
    }

    .timeline-content::before {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #7e57c2;
    }

    .timeline-block:nth-child(even) .timeline-content {
      float: right;
    }

    .timeline-block:nth-child(even) .timeline-content::before {
      top: 24px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: #7e57c2;
    }
  }
</style>
