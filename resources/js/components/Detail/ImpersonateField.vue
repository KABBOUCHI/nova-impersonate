<template>
  <div class="flex border-b border-40">
    <div class="w-1/4 py-4">
      <h4 class="font-normal text-80"></h4>
    </div>
    <div class="w-3/4 py-4">
      <a
        @click="onClick"
        class="cursor-pointer dim inline-block text-primary font-bold"
      >{{ __('Impersonate') }}</a>
    </div>

    <portal to="modals">
      <transition name="fade">
        <impersonate-modal
          v-if="openModal"
          @confirm="openUrl"
          @close="openModal = false"
          mode="delete"
        >
          <div class="p-8">
            <heading :level="2" class="mb-6">Impersonate ({{ field.impersonate_target_name }})</heading>

            <div class="text-80 leading-normal flex items-center">
              <label class="mr-4">Guard:</label>
              <select v-model="guard" class="w-full form-control form-select">
                <option value selected disabled>{{__('Choose a guard')}}</option>
                <option v-for="(g,index) in this.guards" :key="index">{{ g }}</option>
              </select>
            </div>
          </div>
        </impersonate-modal>
      </transition>
    </portal>
  </div>
</template>

<script>
import ImpersonateModal from "../Shared/ImpersonateModal.vue";

export default {
  components: { ImpersonateModal },
  props: ["resource", "resourceName", "resourceId", "field"],
  data() {
    return {
      guard: this.field.default_impersonator_guard,
      guards: this.field.impersonator_guards,
      openModal: false
    };
  },
  created() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  destroyed() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown(e) {
      if (e.key === this.field.key_down) {
        this.onClick();
      }
    },
    onClick() {
      if (this.field.enable_multi_guard === false) {
        this.openUrl();
      } else {
        this.openModal = true;
      }
    },
    openUrl() {
      this.openModal = false;
      window.open(
        `/nova-impersonate/users/${this.field.id}/${this.guard}?redirect_to=${this.field.redirect_to}`,
        "_self"
      );
    }
  }
};
</script>
