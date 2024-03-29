import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";
const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};
const ColorPicker = () => {
  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 rounded-3xl">
      <Header category="Page" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex flex-wrap items-center justify-center gap-20">
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Picker</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
