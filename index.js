let input = document.querySelector(".input");
let button = document.querySelector(".btn");
let error = document.querySelector(".error");
let meme = document.querySelector(".memecontainer");
button.addEventListener("click", async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const memedata = await response.json();
    const memes = memedata.data.memes;
    let selectedmeme = memes.find((meme, Index) => {
        return input.value == Index;
    });
    if (selectedmeme) {
        let content = `
            <h3 class="text-warning mb-3">
                ${selectedmeme.name}
            </h3>
            <img src="${selectedmeme.url}" class="img-fluid rounded-3 w-50">`;
        meme.innerHTML = content;
        error.innerHTML = "";
    } else {
        meme.innerHTML = "";
        error.innerHTML = "Please Enter Valid Number";
    }
    input.value = "";
});