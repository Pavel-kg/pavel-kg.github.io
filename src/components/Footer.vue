<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>Pavel<span>Khnykin</span></h3>
      <p class="footer-links">
        <router-link :to="`/?t=${Date.now()}`"><a>About</a></router-link>
        |
        <router-link :to="`/lawschool?t=${Date.now()}`"
          ><a>Law School Project</a></router-link
        >
        |
        <router-link :to="`/mathquiz?t=${Date.now()}`"
          ><a>Math Quiz Project</a></router-link
        >
        |
        <router-link :to="`/shopping?t=${Date.now()}`"
          ><a>Shopping Cart Project</a></router-link
        >
        |
        <a id="resume" href="./src/assets/resume.pdf" download="CVPavelKhnykin"
          >Download CV</a
        >
      </p>

      <p class="footer-copyright">© 2020 All rights reserved.</p>
    </div>
    <div class="footer-center">
      <div class="contacts">
        <i class="fa fa-phone"></i>
        <p>514-5784578</p>
      </div>
      <div class="contacts">
        <i class="fa fa-envelope"></i>
        <p>khnykinp@gmail.com</p>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-icons">
        <a href="https://www.facebook.com/pavel.khnykin.58" target="_blank"
          ><i class="fa fa-facebook"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/pavel-khnykin-web-developer"
          target="_blank"
          ><i class="fa fa-linkedin"></i
        ></a>
        <a href="https://github.com/Pavel-kg" target="_blank"
          ><i class="fa fa-github"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

html {
  background-color: #eaf0f2;
}

body {
  font: 16px/1.6 Arial, sans-serif;
}

.footer-distributed {
  flex-shrink: 0;
  padding: 20px;
}
.footer-icons a :hover {
  color: #f62c72;
}

.footer-distributed {
  background-color: #2c292f;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 50px 50px 60px 50px;
  margin-top: 80px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 30%;
}

.footer-distributed h3 {
  color: #ffffff;
  font: normal 36px "Cookie", cursive;
  margin: 0;
}

.footer-distributed .footer-left img {
  width: 30%;
}

.footer-distributed h3 span {
  color: #fc4a1a;
}

.footer-distributed .footer-links {
  color: #46bcde;
  margin: 20px 0 12px;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-copyright {
  color: #46bcde;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #46bcde;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #e0ac1c;
  text-decoration: none;
}

.footer-distributed .footer-right {
  width: 30%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}
.footer-left a :hover {
  color: #f62c72;
}
.contacts .fa:hover {
  color: #f62c72;
}
#resume:hover {
  color: #f62c72;
}
@media (max-width: 880px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>

