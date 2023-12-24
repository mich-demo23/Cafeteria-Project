const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle");

        toggle.addEventListener(MouseEvent, () => {
                sidebar.classList.toggle("close");
        })


