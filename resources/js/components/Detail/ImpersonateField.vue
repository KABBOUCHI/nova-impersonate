<template>

    <div class="flex border-b border-40">
        <div class="w-1/4 py-4">
            <h4 class="font-normal text-80">

            </h4>
        </div>
        <div class="w-3/4 py-4">

            <a
                    @click="onClick"
                    class="cursor-pointer dim inline-block text-primary font-bold"
            >
                {{ __('Impersonate') }}
            </a>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],
        created() {
            document.addEventListener('keydown', this.handleKeyDown);
        },
        methods: {
            handleKeyDown(e) {
                if (e.key === this.field.key_down) {
                    this.onClick();
                }
            },
            onClick() {
                window.open(`/nova-impersonate/users/${this.field.id}?redirect_to=${this.field.redirect_to}`, '_self');
            }
        }
    }
</script>
