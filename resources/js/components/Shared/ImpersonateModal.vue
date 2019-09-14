<template>
  <modal @modal-close="handleClose">
    <form
      @submit.prevent="handleConfirm"
      slot-scope="props"
      class="bg-white rounded-lg shadow-lg overflow-hidden"
      style="width: 460px"
    >
      <slot></slot>

      <div class="bg-30 px-6 py-3 flex">
        <div class="ml-auto">
          <button
            type="button"
            data-testid="cancel-button"
            @click.prevent="handleClose"
            class="btn text-80 font-normal h-9 px-3 mr-3 btn-link"
          >{{__('Cancel')}}</button>
          <button
            ref="confirmButton"
            id="confirm-restore-button"
            data-testid="confirm-button"
            type="submit"
            class="btn btn-default btn-primary"
          >{{__('Impersonate')}}</button>
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$emit("close");
    },

    handleConfirm() {
      this.$emit("confirm");
    }
  },

  /**
   * Mount the component.
   */
  mounted() {
    this.$refs.confirmButton.focus();
  }
};
</script>
