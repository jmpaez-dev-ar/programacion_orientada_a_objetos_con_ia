// src/components/Router.js

class Router {
    constructor(parent, model) {
      this.parent = parent;
      this.model = model;
    }
  
    navigateTo(Component) {
      const componentInstance = new Component(this.parent, this.model, this);
      componentInstance.render();
    }
  }

  export default Router;