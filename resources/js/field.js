Nova.booting((Vue, router) => {
  Vue.config.devtools = true;
  Vue.component(
    "index-impersonate-field",
    require("./components/Index/ImpersonateField")
  );
  Vue.component(
    "detail-impersonate-field",
    require("./components/Detail/ImpersonateField")
  );
});
