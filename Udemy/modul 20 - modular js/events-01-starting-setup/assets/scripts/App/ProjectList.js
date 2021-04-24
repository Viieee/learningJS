class ProjectList {
    projects = [];
  
    constructor(type) {
      this.type = type;
      const prjItems = document.querySelectorAll(`#${type}-projects li`);
      for (const prjItem of prjItems) {
        this.projects.push(
          new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
        );
      }
      console.log(this.projects);
      this.connectDroppable();
    }
  
    connectDroppable(){
      const list = document.querySelector(`#${this.type}-projects ul`);
      list.addEventListener('dragenter', function(event){
        if(event.dataTransfer.types[0] === 'text/plain'){ // we can only check the type of the data not the value
          event.preventDefault();
  
        }
        list.parentElement.classList.add('droppable');
      });
      
      list.addEventListener('dragover', function(event){
        event.preventDefault();
      });    
  
      list.addEventListener('dragleave',event => {
        if(event.relatedTarget.closest(`#${this.type}-projects ul`) !== list){
          list.parentElement.classList.remove('droppable');
        }
      });
  
      list.addEventListener('drop', event => {
        const projId = event.dataTransfer.getData('text/plain');
        
        // if(this.projects.find(function(p){
        //   return p.id === projId;
        // })){
  
        // }
  
        if(this.projects.find(p=>p.id===projId)){
          return;
        }
        document.getElementById(projId).querySelector('button:last-of-type').click();
        list.parentElement.classList.remove('droppable');
      })
    }
  
    setSwitchHandlerFunction(switchHandlerFunction) {
      this.switchHandler = switchHandlerFunction;
    }
  
    addProject(project) {
      this.projects.push(project);
      DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
      project.update(this.switchProject.bind(this), this.type);
    }
  
    switchProject(projectId) {
      // const projectIndex = this.projects.findIndex(p => p.id === projectId);
      // this.projects.splice(projectIndex, 1);
      this.switchHandler(this.projects.find(p => p.id === projectId));
      this.projects = this.projects.filter(p => p.id !== projectId);
    }
}
  