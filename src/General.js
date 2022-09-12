var AllId = [];
function findAllId() {
    const main = document.querySelector("main");
    for (let i = 0; i < main.children.length; i++) {
        for (let j = 0; j < main.children[i].children.length; j++) {
            if (main.children[i].children[j].id) {
                AllId.push(main.children[i].children[j].id);
            }
            else {
                continue;
            }
        }
    }
    // this function is for collecting boxes Id
}



export {  findAllId, AllId };