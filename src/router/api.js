const login = resolve => require(['@/components/login/index'],resolve)
const main = resolve => require(['@/components/main/index'],resolve)
const home = resolve => require(['@/views/main/index'],resolve)
const layout = resolve => require(['@/components/main/layout'],resolve)
export default {
  login,
  main,
  home,
  layout
}
