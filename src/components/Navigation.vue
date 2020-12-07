<template>
  <nav>
    <ul class="menu" :class="isShowMenu ? 'active' : ''">
      <li class="logo"></li>
      <router-link to="/" tag="li" class="item"
        ><a @click="closeLink">About</a></router-link
      >
      <li class="item has-submenu">
        <a id="tab" tabindex="0" @click="clickMethod">Projects</a>
        <ul id="dropdown" v-if="isCloseMenu">
          <li
            class="subitem-active"
            v-for="(link, index) in links"
            :key="index"
            @click="closeMenu"
          >
            <router-link :to="link.to"
              ><a>{{ link.name }}</a></router-link
            >
          </li>
        </ul>
      </li>
      <li class="item">
        <a
          href="./src/assets/resume.pdf"
          @click="closeMenu"
          download="CVPavelKhnykin"
          >Download CV</a
        >
      </li>
      <li class="toggle">
        <a href="#"
          ><i
            @click="onClick"
            :class="isFontClass ? 'fa fa-close' : 'fa fa-bars'"
          ></i
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isCloseMenu: false,
      isShowMenu: false,
      isFontClass: false,
      counter: 0,
      count: 1,
      links: [
        { to: "/lawschool", name: "Law School Project" },
        { to: "/mathquiz", name: "Math Quiz Project" },
        { to: "/shopping", name: "Shopping Cart Project" },
      ],
    };
  },

  methods: {
    clickMethod() {
      this.count++;
      if (this.count % 2 === 0) {
        this.isCloseMenu = true;
      } else if (Math.abs(this.count % 2) === 1) {
        this.isCloseMenu = false;
      }
    },
    onClick() {
      this.counter++;
      if (Math.abs(this.counter % 2) === 1) {
        this.isFontClass = true;
        this.isShowMenu = true;
      } else if (this.counter % 2 === 0) {
        this.isFontClass = false;
        this.isShowMenu = false;
      }
    },

    closeMenu() {
      this.isShowMenu = false;
      this.isFontClass = false;
      this.isCloseMenu = false;
      this.counter++;
      this.count++;
    },
    closeLink() {
      if (this.isCloseMenu == false) {
        this.count = this.count;
      } else if (this.isCloseMenu == true) {
        this.count++;
      }
      this.isShowMenu = false;
      this.isFontClass = false;
      this.isCloseMenu = false;
      this.counter++;
    },
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
ul li {
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
  
  .menu li.button a {
    padding: 10px 15px;
    margin: 5px 0;
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
