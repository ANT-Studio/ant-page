<template>
  <nav class="navbar">
    <NuxtLink to="/">
      <div class="logo" />
    </NuxtLink>
    <div class="links">
      <div class="link" v-for="link in routes" :key="link.label">
        <NuxtLink :to="link.link">
          {{ __(link.label) }}
        </NuxtLink>
      </div>
    </div>
    <div class="actions">
      <div class="social-actions">
        <div v-for="action in actions">
          <a
            :href="action.active && action.link"
            :class="['action', !action.active && 'action__not-active']"
          >
            <img :src="'/images/icons/' + action.icon" alt="" />
          </a>
        </div>
      </div>
      <div>
        <button class="contact-us">{{ __("navbar.contactUs") }}</button>
      </div>
      <div>
        <button class="theme-switcher" @click="toggleTheme()">
          <img src="/images/icons/theme.svg" alt="" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { __ } from "~/utils/__";
import { routes, actions } from "~/lib/constants";

const { toggleTheme } = useColorTheme();
</script>

<style lang="scss" scoped>
@import "../assets/styles/themes";
@import "../assets/styles/mixins";

.navbar {
  position: relative;
  z-index: 20;
  padding-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include sectionContainer();

  .logo {
    @include themed() {
      background: t("logo");
    }

    background-repeat: no-repeat;
    width: 141px;
    height: 58px;
  }

  .links {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    gap: 3em;

    a {
      @include themed() {
        color: t("text") !important;
      }

      text-decoration: none;
    }

    .link {
      position: relative;

      .router-link-exact-active::after {
        content: "";
        position: absolute;
        top: 2.2rem;
        left: 50%;
        width: 2.8rem;
        height: 0.2rem;
        margin-left: -1.4rem;

        @include themed() {
          background-color: t("text");
        }
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;

    img {
      @include themed() {
        filter: t("invert");
      }
    }

    .social-actions {
      display: flex;
      align-items: center;
      gap: 2em;

      .action {
        &__not-active {
          opacity: 50%;
          cursor: auto;
        }
      }

      a {
        display: block;
      }
    }

    .contact-us {
      @include themed() {
        @include button(t("secondary"), t("text"), t("main-shadow"));
      }

      margin-left: 5em;
    }

    .theme-switcher {
      background: none;
      border: none;
      outline: none;
      padding: 0;
      margin-left: 5em;
      cursor: pointer;
    }
  }
}
</style>
