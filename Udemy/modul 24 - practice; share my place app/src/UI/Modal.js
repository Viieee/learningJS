export class Modal{
    constructor(contentId, fallbacktext){
        this.fallbacktext = fallbacktext
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplateEl = document.getElementById('modal-template');
    }
    
    show(){
        if('content' in document.createElement('template')){
            // this if checks whether the browser supports the template tag or not
            // how?
            // it will create a new template element
            // if the browser supports the template tag it will create it
            // and thus check if the tag has content property in it
            // then it will yield true
            // if not then it will returned 'undefined' 
            // and it will yield false

            const modalElements = document.importNode(this.modalTemplateEl.content,true)
            this.modalElement = modalElements.querySelector('.modal');
            this.backdropElement = modalElements.querySelector('.backdrop');
            const contentElement = document.importNode(this.contentTemplateEl.content,true);

            this.modalElement.appendChild(contentElement);

            // adding modal element and backdrop element at inside the body and at the beginning of the body
            document.body.insertAdjacentElement('afterbegin', this.modalElement);
            document.body.insertAdjacentElement('afterbegin', this.backdropElement);

        }else{
            // fallback code
            alert(this.fallbacktext);
        }
    }
    hide(){
        if (this.modalElement){
            // removing the elements
            document.body.removeChild(this.modalElement);
            document.body.removeChild(this.backdropElement);

            // clearing the elements and references
            this.modalElement = null;
            this.backdropElement = null;
        }
    }
}