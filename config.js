System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "horcrux-base": "github:hor-crux/horcrux-base@master",
    "horcrux-core": "github:hor-crux/horcrux-core@master",
    "horcrux-di": "github:hor-crux/horcrux-di@master",
    "horcrux-flux": "github:hor-crux/horcrux-flux@master",
    "horcrux-http": "github:hor-crux/horcrux-http@master",
    "horcrux-layout": "github:hor-crux/horcrux-layout@master",
    "horcrux-router": "github:hor-crux/horcrux-router@master",
    "github:hor-crux/horcrux-base@master": {
      "horcrux-core": "github:hor-crux/horcrux-core@master",
      "observejs": "github:polymer/observe-js@0.5.6"
    },
    "github:hor-crux/horcrux-core@master": {
      "html": "github:hor-crux/html@master",
      "observejs": "github:polymer/observe-js@0.5.6",
      "webcomponents": "github:webcomponents/webcomponentsjs@0.7.14"
    },
    "github:hor-crux/horcrux-di@master": {
      "horcrux-core": "github:hor-crux/horcrux-core@master"
    },
    "github:hor-crux/horcrux-flux@master": {
      "horcrux-core": "github:hor-crux/horcrux-core@master",
      "horcrux-di": "github:hor-crux/horcrux-di@master"
    },
    "github:hor-crux/horcrux-http@master": {
      "horcrux-core": "github:hor-crux/horcrux-core@master"
    },
    "github:hor-crux/horcrux-layout@master": {
      "css": "github:systemjs/plugin-css@0.1.18"
    },
    "github:hor-crux/horcrux-router@master": {
      "horcrux-core": "github:hor-crux/horcrux-core@master",
      "horcrux-di": "github:hor-crux/horcrux-di@master",
      "horcrux-flux": "github:hor-crux/horcrux-flux@master"
    }
  }
});
