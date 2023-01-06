import { DomHelpers } from "@utils";
import "@styles/components/panels/report-viewer.scss";

type FilePickerChangedEventDetail = {
  type: string;
  files: FileList;
};

export default class AxeReportViewer extends HTMLElement {
  constructor() {
    super();

    this.render();
    this.id = crypto.randomUUID();
  }

  private clone() {
    this.innerHTML = this.template;
  }

  render() {
    this.clone();
  }

  drawReport(jsonString: string) {
    const jsonObj = JSON.parse(jsonString)[0];
    const wrapper = this.querySelector("section");
    wrapper!.textContent = "";

    const roots = this.parseJsonObject(jsonObj);

    globalThis
      .LoadModules()
      .then((registry: Array<CustomElementConstructor>) => {
        globalThis.InitModules(registry);
      });
  }

  parseJsonObject(obj: any) {
    console.log("adsf");
    return "1";
  }

  makeDetails(key: string, val: string) {
    const deets = document.createElement("cc-dropdown");
    deets.classList.add("cc-load");

    const slot = document.createElement("span");
    slot.setAttribute("slot", "label");
    slot.textContent = key;

    const span = document.createElement("span");
    span.textContent = val;

    deets.appendChild(slot);
    deets.appendChild(span);

    return deets;
  }

  connectedCallback() {
    DomHelpers.loadComponent(this);

    document.addEventListener("filePickerChanged", (event) => {
      const details = (
        event as CustomEvent<String, FilePickerChangedEventDetail>
      ).detail as unknown as FilePickerChangedEventDetail;
      const file = details.files[0];

      if (file !== null) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const jsonString = event.target?.result;
          this.drawReport(jsonString as string);
        };
        reader.readAsText(file);
      }
    });
  }

  private template = `
    <section id="report-viewer-${this.id}" aria-label="Axe Report Viewer" class="cc-report-viewer__axe py-3 pr-3">
      The contents of your report will be displayed here...
    <section>
  `;
}
