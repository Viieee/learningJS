// more info button
class Tooltip{

}

// per-project item
class ProjectItem{

}

// all projects
class ProjectList{
    constructor(type){
        // the type is either active project/ finished project

        const prjItem = document.querySelectorAll(`#${type}-projects li`);
        // the id in the html code is active-projects / finished-projects
        // and in instantiation we passing either active/finsihed 
        // and it will select all list items inside that active-projects/finsihed-projects sections

        console.log(prjItem);
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