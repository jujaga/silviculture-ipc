<template>
  <div v-if="typeof url !== 'undefined'" class="dashboard-container">
    <iframe :src="url" />
  </div>
  <div v-else>
    <p>No dashboard has been configured.</p>
    <router-link :to="{ name: 'Admin' }">
      <v-btn color="primary" class="about-btn" large>
        <v-icon left>home</v-icon>
        <span>Submissions</span>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    url: {
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  @media only screen and (min-width: 810px) {
    height: calc(100vh);
  }
  @media only screen and (max-width: 809px) {
    height: calc(100vh * 2.5);
  }
}

.dashboard-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}
</style>
