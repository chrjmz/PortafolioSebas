const loading = setInterval(() => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        document.body.classList.add("loading");
        window.clearInterval(loading)
    } else {
        document.body.classList.remove("loading");
    }
}, 500);


loading()


