const body = document.getElementById("body")
const mail = document.getElementById("mail")

console.log("dark item")
function dark() {
    body.classList.add("dark--body")
    mail.classList.add("dark--mail")
}



window.addEventListener('click', filter, false)
function filter(e){
    if (e.target.tagName === 'A'){ // провека что кликнули на ссылку
        if (e.target.id === "theme") {
            if (body.classList.contains("dark--body")) {
                body.classList.remove("dark--body");
                mail.classList.remove("dark--mail")
            }
            else {
                dark()
            }
        }
    }}
