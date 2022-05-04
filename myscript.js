let openEmailDialog = document.getElementById('openEmailDialog');
let closeDialog = document.getElementById('closeDialog');


openEmailDialog.addEventListener('click', function onOpen() {
    if (typeof collectEmail.showModal === "function") {
        collectEmail.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
});

closeDialog.addEventListener("click", function() {
    collectEmail.close();
})

collectEmail.addEventListener("click", event => {
    const rect = collectEmail.getBoundingClientRect();
    if (event.clientY < rect.top || event.clientY > rect.bottom ||
        event.clientX < rect.left || event.clientX > rect.right) {
        collectEmail.close();
    }
});


if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    let images = document.getElementsByClassName("imgCards");

    for (let l = 0; l < images.length; ++l) {
        images[l].style.opacity = 0.1;
    }

    for (let i = 0; i < images.length; ++i) {
        images[i].addEventListener("mouseout", function() {
            for (let l = 0; l < images.length; ++l) {
                images[l].style.opacity = 0.1;
            }
        });
    }

    for (let j = 0; j < images.length; ++j) {
        images[j].addEventListener("mouseover", function() {
            this.style.opacity = 1;
        });
    }
}