const welcomeMessage = "%c 🚀 MyCourses Platform Loaded! ";
const styles = [
    "color: white",
    "background: #2563eb",
    "padding: 10px",
    "border-radius: 5px",
    "font-weight: bold",
    "font-size: 14px"
].join(";");

console.log(welcomeMessage, styles);

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if(this.innerText === "Enroll Now" || this.innerText === "Enroll Now - Free") {
            console.log("User clicked Enroll button");
            
        }
    });
});