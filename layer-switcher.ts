import Interaction from "ol/interaction/Interaction";

export class LayerSwitcher extends Interaction {
  clickEvt: any;
  map: any;
  de: any;
  layer1: HTMLLIElement;
  layer2: HTMLLIElement;
  parent: HTMLUListElement;
  constructor(options: any) {
    super();
    this.map = options;
    this.setActive(true);
  }
  layerSwitcher(evt) {
    let layers = [];
    let visibleLyrs = [];
    let layerName = "";
    layers = this.map.getLayers().getArray();
    console.log(layers);
      layers.filter((e: any) => {
          console.log(e.get("name"));
          
        if (e.get("name") == "grp") {
          let innerGrpLayer = e.getLayers().getArray();
          visibleLyrs = innerGrpLayer.filter((ev: any, idx: any) => {
            const isVisible = ev.getVisible();
            if (isVisible) {
              return ev;
            }
          });

          visibleLyrs[0].setVisible(false);
          layerName = evt;
          const k = innerGrpLayer.filter((element: any) => {
            const Lname = element.get("name");
            if (Lname == layerName) {
              element.setVisible(true);
            }
          });
          return k;
        }
      });
    this.map.updateSize();
  }
}
