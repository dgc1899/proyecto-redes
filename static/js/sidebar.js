var mini = true;

function toggleSidebar() { 
    if (mini) {
        console.log("opening sidebar");
        document.getElementById("pageSidebar").style.width = "250px";
        document.getElementById("pageContent").style.marginLeft = "300px";
        document.getElementById("pageHeader").style.marginLeft = "250px";
        document.getElementById("pageFooter").style.marginLeft = "250px";

        document.getElementById("pageContent").style.margin = "auto";
        document.getElementById("pageFooter").style.margin = "auto";

        this.mini = false;
    }
    else {
        console.log("closing sidebar");
        document.getElementById("pageSidebar").style.width = "60px";
        document.getElementById("pageContent").style.marginLeft = "100px";
        document.getElementById("pageHeader").style.marginLeft = "100px";
        document.getElementById("pageFooter").style.marginLeft = "150px";

        document.getElementById("pageContent").style.margin = "auto";
        document.getElementById("pageFooter").style.margin = "auto";

        this.mini = true;
    }
    
}