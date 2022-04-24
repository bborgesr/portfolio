<template>
  <div>
    <div id="header" :class="{ scrolled: !scrolledDown }">
      <div class="mid">
        <div class="logo-holder">
          <button class="bar">
            <fa fas="bars"></fa>
          </button>
          <a href="#">
            <img
              class="logo"
              src="/images/transparent-logo.PNG"
              alt="Barbara"
            />
          </a>
        </div>
        <a class="logo-mobile" href="#">
          <img class="logo" src="/images/transparent-logo.PNG" alt="Barbara" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scrolledDown: Boolean,
  },
};
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .bar {
    display: grid !important;
  }
}
.logo-mobile {
  display: none;
}
@media screen and (max-width: 680px) {
  .bar {
    display: none !important;
  }
  .lang {
    display: none !important;
  }
  .mid {
    gap: 1rem;
  }
  .links {
    display: none !important;
  }
  .search-holder {
    margin: 0rem;
    grid-area: search;
  }
  .links {
    grid-template-columns: max-content !important;
    justify-self: flex-end !important;
    justify-content: end;
  }
  .buttons {
    display: none !important;
  }
}
@media screen and (max-width: 426px) {
  .mid {
    grid-template: 'logo search search' !important;
  }
}
.bar > i {
  font-size: 1.5rem;
}
.bar {
  padding: 1rem;
  height: 100%;
  background: 0;
  border: 0;
  display: none;
  align-content: center;
}

.lang {
  display: grid;
  grid-auto-flow: column;
  background: #f1f1f1;
  border-radius: 100px;
  height: 100%;
  gap: 0.4rem;
}
.lang input[type='radio'] {
  display: none;
}

.lang .option {
  width: 2rem;
  height: 100%;
}
.lang:hover > .option > label > img {
  opacity: 1;
  filter: grayscale(0);
}
.lang > .option > label > img {
  width: 2rem;
  height: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.1s, opacity 0.1s;
  opacity: 0.45;
  filter: grayscale(1);
}
.lang > .option > label > img:hover {
  filter: grayscale(0), saturate(10%);
}

input[type='radio']:checked + label > img {
  border-radius: 100px;
  transform: scale(1.45);
  filter: grayscale(0) !important;
  opacity: 1;
}

/* header */
@media screen and (max-width: 1650px) {
  #header {
    padding: 0rem 1rem;
    box-sizing: border-box;
  }
}

.buttons > button:hover {
  color: gray;
}
.buttons > button {
  margin: 0;
  height: 100%;
  background: 0;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
  color: white;
}
.buttons {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  width: inherit;
  max-width: 20rem;
  justify-self: end;
}

.logo-holder {
  justify-self: flex-start;
  display: grid;
  grid-auto-flow: column;
}

#header {
  display: grid;
  grid-template: 'main ';
  grid-template-columns: minmax(100px, 1080px);
  place-content: center;
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  top: 0;
}
.mid {
  place-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-template: 'logo search links' / 1fr auto 1fr;
}
.links {
  gap: 1rem;
  display: grid;
  grid-auto-flow: column;
  align-items: end;
}
.mid > .links > a:hover {
  text-decoration: underline;
}
.mid > .links > a {
  text-decoration: none;
  color: gray;
}
.logo {
  height: 60px;
}
.scrolled {
  background-color: #212225;
}
</style>
