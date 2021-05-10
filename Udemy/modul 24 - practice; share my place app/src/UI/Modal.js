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
            const modalElement = modalElements.querySelector('.modal');
            const backdropElement = modalElements.querySelector('.backdrop');
            const contentElement = document.importNode(this.contentTemplateEl.content,true);

            modalElement.appendChild(contentElement);

            // adding modal element and backdrop element at inside the body and at the beginning of the body
            document.body.insertAdjacentElement('afterbegin', modalElement);
            document.body.insertAdjacentElement('afterbegin', backdropElement);

        }else{
            // fallback code
            alert(this.fallbacktext);
        }
    }
    hide(){

    }
}