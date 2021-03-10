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

        this.type = type;

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

    setSwitchHandler(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject(){
        // adding the object from active to finished
    }

    switchProject(projectId){
        // removing the object from active
        this.switchHandler(this.projects.find(function(element){
            return element.id === projectId;
            // we are searching and passing the project that we want to switch into switchHandler property
        }))
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
        activeProjectList.setSwitchHandler(finishedProjectList.addProject.bind(finishedProjectList));
        // we use bind because we want to execute the addProject method from finishedProjectList instance and not from activeProjectList
        // if we dont use bind, the addProject will pointed at the one at the activeProject instance
        // because we call it from the setSwitchHandler method that from activeProjectList instantiation
    }
}

// class a{
//     constructor(x){
//         this.x=x;
//     }
//     set(br){
//         console.log('halo ' + this.x + br);
//     }
// }

// const anew = new a('vieri');
// const bnew = new a('Adhitya');

App.init(); // calling static method