import Control from "ol/control/Control";
import { LayerSwitcher } from "./layer-switcher";

export class mapSwitcherControl extends Control {
  layer1: any;
  layer2: any;
  parent: any;
  switcherInstance: LayerSwitcher;
  constructor(options) {
      console.log(options);
    super({});
    this.parent = document.createElement("ul");
    this.parent.className = "switch";
    this.layer1 = document.createElement("li");
    this.layer2 = document.createElement("li");
    this.layer1.className = "switch1";
    this.layer2.className = "switch2";
    this.layer1.id = "labels";
    this.layer2.id = "waterColor";
    this.layer1.innerHTML = "labels";
    this.layer2.innerHTML = "waterColor";
    this.parent.appendChild(this.layer1);
    this.parent.appendChild(this.layer2);
    this.layer1.addEventListener("click", this.layerSwitcher(), false);
    this.layer2.addEventListener("click", this.layerSwitcher(), false);
    Control.call(this, {
      element: this.parent,
    });
    this.switcherInstance = new LayerSwitcher(options);
  }
  layerSwitcher(): (this: Window, ev: Event) => any {
    return (evt: any) => {
      console.log(evt.target.id);
      this.switcherInstance.layerSwitcher(evt.target.id);
    };
  }
}
