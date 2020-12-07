<template>
  <nav>
    <ul class="menu">
      <li class="logo"></li>
      <router-link to="/" tag="li" class="item"
        ><a @click="close">About</a></router-link
      >
      <li class="item has-submenu">
        <a id="tab" tabindex="0" @click="closeMenu">Projects</a>
        <ul id="dropdown" @click="closeMenu">
          <li class="subitem-active">
            <router-link to="/lawschool"><a>Law School</a></router-link>
          </li>
          <li class="subitem-active">
            <router-link to="/mathquiz"><a>Math Quiz</a></router-link>
          </li>
          <li class="subitem-active">
            <router-link to="/shopping"><a>Shopping</a></router-link>
          </li>
        </ul>
      </li>
      <li class="item">
        <a href="./src/assets/resume.pdf" download="CVPavelKhnykin"
          >Download CV</a
        >
      </li>
      <li class="toggle">
        <a href="#"><i class="fa fa-bars"></i></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isCloseMenu: false,
    };
  },
  methods: {
    closeMenu() {
      var element = document.getElementById("dropdown");
      if (element.classList.contains("submenu-active")) {
        element.classList.remove("submenu-active");
        element.classList.add("submenu");
      } else {
        element.classList.remove("submenu");
        element.classList.add("submenu-active");
      }
    },
    close() {
      var element = document.getElementById("dropdown");
      if (element.classList.contains("submenu-active")) {
        element.classList.remove("submenu-active");
        element.classList.add("submenu");
      }
    },
    /* Toggle mobile menu */
    toggleMenu() {
      var toggle = document.querySelector(".toggle");
      var menu = document.querySelector(".menu");
      var items = document.querySelectorAll(".item");
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
      } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fa fa-close'></i>";
      }
    },

    /* Close Submenu From Anywhere */
    closeSubmenu(e) {
      var menu = document.querySelector(".menu");
      let isClickInside = menu.contains(e.target);

      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu
          .querySelector(".submenu-active")
          .classList.remove("submenu-active");
      }
    },
  },
  mounted() {
    var toggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    var items = document.querySelectorAll(".item");
    this.toggleMenu();
    toggle.addEventListener("click", this.toggleMenu, false);
    for (let item of items) {
      if (item.querySelector(".submenu")) {
        item.addEventListener("click", this.toggleItem, false);
      }
      item.addEventListener("keypress", this.toggleItem, false);
    }
    document.addEventListener("click", this.closeSubmenu, false);

    var element = document.getElementById("dropdown");
    element.classList.remove("submenu-active");
    element.classList.add("submenu");
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  font-size: 16px;
}

nav {
  font-family: "Roboto Condensed", Тahoma, sans-serif;
  background-color: #234e70;
  padding: 0 15px;
}

a {
  color: #fbf8be;
  text-decoration: none;
}
ul li{
  list-style-type: none;
}
.menu,
.submenu {
  list-style-type: none;
}
.logo {
  font-size: 20px;
  padding: 7.5px 10px 7.5px 0;
}
.item {
  padding: 10px;
}
.item.button {
  padding: 9px 5px;
}
.item:not(.button) a:hover,
.item a:hover::after {
  background-color: #f62c72;
}
/* Mobile menu */
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.menu li a {
  display: block;
  padding: 15px 5px;
}
.menu li.subitem a {
  padding: 15px;
}
.toggle {
  order: 1;
  font-size: 20px;
}
.item.button {
  order: 2;
}
.item {
  order: 3;
  width: 100%;
  text-align: center;
  display: none;
}
.active .item {
  display: block;
}
.button.secondary {
  border-bottom: 1px #444 solid;
}
.submenu {
  display: none;
}
.submenu-active .submenu {
  display: block;
}
.has-submenu i {
  font-size: 12px;
}
.has-submenu > a::after {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  line-height: 16px;
  font-weight: 900;
  content: "\f078";
  color: white;
  padding-left: 5px;
}
.subitem a {
  padding: 10px 15px;
}
.submenu-active {
  background-color: #234e70;
  border-radius: 3px;
}

/* Tablet menu */
@media all and (min-width: 700px) {
  .menu {
    justify-content: center;
  }
  .logo {
    flex: 1;
  }
  .item.button {
    width: auto;
    order: 1;
    display: block;
  }
  .toggle {
    flex: 1;
    text-align: right;
    order: 2;
  }
  /* Button up from tablet screen */
  .menu li.button a {
    padding: 10px 15px;
    margin: 5px 0;
  }
  .button a {
    background: #0080ff;
    border: 1px royalblue solid;
  }
  .button.secondary {
    border: 0;
  }
  .button.secondary a {
    background: transparent;
    border: 1px #0080ff solid;
  }
  .button a:hover {
    text-decoration: none;
  }
  .button:not(.secondary) a:hover {
    background: royalblue;
    border-color: darkblue;
  }
}
/* Desktop menu */
@media all and (min-width: 960px) {
  .menu {
    align-items: flex-start;
    flex-wrap: nowrap;
    background: none;
  }
  .logo {
    order: 0;
  }
  .item {
    order: 1;
    position: relative;
    display: block;
    width: auto;
  }
  .button {
    order: 2;
  }
  .submenu-active .submenu {
    display: block;
    position: absolute;
    left: 0;
    top: 68px;
    background: #111;
  }
  .toggle {
    display: none;
  }
  .submenu-active {
    border-radius: 0;
  }
}
</style>
