Nova.booting((Vue, router) => {
  //Vue.config.devtools = true;
  Vue.component(
    "IndexImpersonateField",
    require("./components/Index/ImpersonateField").default
  );
  Vue.component(
    "DetailImpersonateField",
    require("./components/Detail/ImpersonateField").default
  );
});
