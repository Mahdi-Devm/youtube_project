const template = document.createElement("template");

template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
 <style>
.texttitle{
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    width: 100%;
}
.imgshorts{
  border-radius: 4px;
  width: 100%;
}
  @media (max-width: 768px) {
  .imgshorts {
        width: 93%; 
        
    }
}
.sortcontiner{
  width: 220px; 
}
@media (max-width: 768px) {
  .sortcontiner {
        width: 200px; 
        margin-right: 10px;
    }
}
</style>
      
<div class="sortcontiner mt-3">

            <img class="col-12 imgshorts" src="" alt="">
            <h5 class="me-3 text-light texttitle"></h5>
            <p class="text-secondary view"></p>
          </div>
        
`;

class shorts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    let imgshorts = this.shadowRoot.querySelector(".imgshorts");
    let texttitle = this.shadowRoot.querySelector(".texttitle");
    let view = this.shadowRoot.querySelector(".view");
    texttitle.textContent = this.getAttribute('texttitle') || 'Default'
    view.textContent = this.getAttribute('view') ||'Default '
    imgshorts.src = this.getAttribute('imgshorts') || 'default-image.png';
  }
  static observedAttributes() {
    return ["texttitle", "view" , "imgshorts"];
  }
}

export { shorts };
