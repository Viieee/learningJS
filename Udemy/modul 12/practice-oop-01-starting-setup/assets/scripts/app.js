// more info button
class Tooltip{

}

// per-project item
class ProjectItem{
    constructor(id){
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton(){

    }

    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector('button:last-of-type');
        switchButton.addEventListener('click', );
    }
}

// all projects
class ProjectList{
    projects = [];

    constructor(type){
        // the type is either active project/ finished project

        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        // prjItems is the sections in the html code
        // the id in the html code is active-projects / finished-projects
        // and in instantiation we passing either active/finsihed 
        // and it will select all list items inside that active-projects/finsihed-projects sections

        for(const item of prjItems){
            this.projects.push(new ProjectItem(item.id));
            // item.id is the id of each li item in prjItems/in sections of the html code
        }

        console.log(this.projects);

    }

    addProject(){
        // adding the object from active to finished
    }

    switchProject(projectId){
        // removing the object from active

        this.projects = this.projects.filter(function(element){
            return element.id !== projectId;
            // we are keeping elements with id different than the projectId
            // and removing the one that match
        })
    }
}

// app
class App{
    static init(){ // in this app, we will call this method once
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}

App.init(); // calling static method