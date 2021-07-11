<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div class="modal" v-if="loading">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import { actions, getters } from "../vuex/types";

export default {
  name: "App",
  props: {
    userId: { type: String, require: true },
    url: { type: String, require: true },
  },
  computed: {
    loading() {
      return this.$store.getters[getters.GET_LOAD_STATUS];
    },
  },
  created() {
    this.$store.dispatch(actions.SAVE_PROPS, this.$props);
  },
};
</script>

<style>
.modal {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  border: 7px solid #f3f3f3;
  border-radius: 50%;
  border-top: 7px solid rgba(191, 191, 191, 1);
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>