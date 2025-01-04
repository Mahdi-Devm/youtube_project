const template = document.createElement('template')

template.innerHTML = `

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <style>
.svg{
    color: white !important;
    width: 25px;
}
.con-bet{
    justify-content: space-between;
}
@media (max-width: 768px) {
  .video-site {
      width: 100%;
    }
  }
.divcontainer {
    width: 370px; 
}

@media (max-width: 768px) {
    .divcontainer {
        width: 100%; 
    }
}


    </style>
    <div class="divcontianer">
                    <div>
                        <img class="col-12 col-xxl-12 rounded imgTamneel" src="" alt="">
                    </div>
                    <div class="d-flex mt-2">
                        <div><img style="width: 35px;   margin-right: 5px;" class=" rounded-circle imgProfile" src="" alt=""></div>
                        <div>
                            <div class="d-flex con-bet">                        
                                <h5 class="me-3 text-light titlev"></h5>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3 5" height="35" fill="currentColor" class="bi bi-list svg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                  </svg>
                                </div>
                            </div>
                            <div>
                                <p class="text-secondary visit"></p>
                            </div>
                        </div>
                    </div>
                </div> 
`

class video extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        let titlevideo = this.shadowRoot.querySelector('.titlev')
        let visitvideo = this.shadowRoot.querySelector('.visit')
        let Profilevideo = this.shadowRoot.querySelector('.imgProfile')
        let imgvideo = this.shadowRoot.querySelector('.imgTamneel')
        titlevideo.textContent = this.getAttribute('titlevideo') || 'Default'
        visitvideo.textContent = this.getAttribute('visitvideo') ||'Default '
        imgvideo.src = this.getAttribute('imgvideo') || 'default-image.png';
        Profilevideo.src = this.getAttribute('Profilevideo') || 'default-image.png';
    }
    static observedAttributes() {
        return ['titlevideo', 'visitvideo', 'Profilevideo', 'imgvideo'];
    }
    
}
   
export { video }