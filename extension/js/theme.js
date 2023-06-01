document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get('blackTheme', function (data) {
        if (data.blackTheme === true) {
            var styleElement = document.createElement('style');
            styleElement.textContent = `
            body,
            nav,
            div,
            input,
            header,
            footer,
            thead,
            th,
            td {
                background-color: #333333 !important;
            }


            footer {
                outline: solid 2px #fff !important;
            }

            nav {
                border: 2px solid #D2D2D2 !important;
            }

            .navbar {
                border-bottom: 0px !important;
            }

            .coursebox, input {
                border: 2px solid #D2D2D2 !important;
            }


            section {
                background-color: #333333 !important;
            }

            div
            p,
            span,
            input,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            li,
            legend,
            .form-control-static,
            .state,
            .grade
            {
                color: #D2D2D2 !important;
            }

            .expandteachers {
                color: hsl(235, 29%, 70%) !important;
            }

            a {
                color: hsl(235, 29%, 70%) !important;
            }

            .card-body {
                border: 0 transparent !important;
                box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.38) !important;
            }

            .annotation_container {
                box-shadow: 0 -2px 0 -1px #D2D2D2 !important;
            }

            .annotation_hover,
            .annotation_container:hover,
            .annotation_container.after_h1_hover {
                border: 1px solid #D2D2D2 !important;
                transition: 0 !important;
            }

            nav {
                padding-left: 10px !important;
            }

            .breadcrumb-nav {
                padding-left: 0 !important;
            }

            .section li.activity:hover {
                background: none !important;
                transition-duration: 0 !important;
                border: 2px solid #D2D2D2 !important;
                border-radius: 10px !important;
            }

            input[type="text"]:focus {
                outline: none !important;
            }

            .logo img {
                filter: hue-rotate(50deg) brightness(90%);
            }

            .site-name {
                color: rgb(156, 160, 201) !important;
            }

            .navbar-nav a {
                color: rgb(156, 160, 201)!important;
                font-weight: bold;
            }

            .usertext {
                color: rgb(156, 160, 201) !important;
                font-weight: bold;
                text-transform: uppercase;
            }

            rect {
                fill: #494848;
            }

            svg g, text {
                fill: rgb(156, 160, 201) !important;
            }

            .active {
                color: #494848 !important;
                font-weight: bold !important;
            }

            .light-green,
            .yellow,
            .pink,
            .light-blue,
            .light-orange {
                color: #494848 !important;
            }

            .dark-blue {
                color: #D2D2D2 !important;
            }

            .author-info {
                color: #D2D2D2 !important;
            }

            table .header, th, td {
                color: #D2D2D2 !important;
            }

            .nav-link.active, .nav-link:hover {
                color: #333333 !important;
            }

            .header-button-title {
                color: rgb(156, 160, 201) !important;
            }

            .filter-group {
                border: 1px solid #D2D2D2 !important;
                background-color: transparent !important;
            }

            .form-autocomplete-suggestions {
                background-color: #333333 !important;
                color: rgb(156, 160, 201) !important;
            }

            .badge-secondary {
                background-color: #333333 !important;
                color: rgb(156, 160, 201) !important;
            }

            .not_passed {
                color: #333333 !important;
            }
            `;
            document.head.appendChild(styleElement);
        }
    });
});