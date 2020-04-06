export default {

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
        },

    },

}
