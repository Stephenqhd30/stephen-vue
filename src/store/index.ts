import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
//将插件添加到 pinia 实例上
pinia.use(piniaPluginPersistedstate);

export { pinia };
