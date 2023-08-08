import Quill from "quill";

const Inline = Quill.import("blots/inline");

class CustomImageBlot extends Inline {
  static create(value : any) {
    const node = super.create(value);
    node.setAttribute("class", "ql-custom-image");
    return node;
  }
}

class CustomVideoBlot extends Inline {
  static create(value : any) {
    const node = super.create(value);
    node.setAttribute("class", "ql-custom-video");
    return node;
  }
}

class CustomEmbedBlot extends Inline {
  static create(value : any) {
    const node = super.create(value);
    node.setAttribute("class", "ql-custom-embed");
    return node;
  }
}

Quill.register(CustomImageBlot);
Quill.register(CustomVideoBlot);
Quill.register(CustomEmbedBlot);
