alert("WHOOPS...this website is current just a demo with a lot of missing content.  To view the current website of Dr. Weinberg please go to:\nhttps://weinberg.sph.unc.edu/");

const navbar = document.getElementById('navbar');

navbar.innerHTML = `<div class="navbar-brand">
<a class="navbar-item nav-logo" href="https://sph.unc.edu/">
    <img class="nav-logo" src="img/Gillings_Logo.png" width="112" height="28">
</a>

<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
    data-target="navbarBasicExample">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
</a>
</div>

<div id="navbarBasicExample" class="navbar-menu">
<div class="navbar-start">
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item navbar-item-first">
            Research
        </a>

        <div class="navbar-dropdown">
            <a class="navbar-item" href="active-research.html">
                Active Research
            </a>
            <a class="navbar-item" href="key-publications.html">
                Key Publications
            </a>
            <!--Optional Divider
    <hr class="navbar-divider">-->
            <a class="navbar-item" href="open-positions.html">
                Open Positions
            </a>
        </div>
    </div>

    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item navbar-item-first">
            Courses
        </a>

        <div class="navbar-dropdown">
            <a class="navbar-item" href="envr.html">
                ENVR 400
            </a>
            <a class="navbar-item" href="envr.html">
                ENVR 411
            </a>
            <a class="navbar-item" href="envr.html">
                ENVR 691-096
            </a>
            <a class="navbar-item" href="envr.html">
                ENVR 724
            </a>
            <a class="navbar-item" href="envr.html">
                ENVR 726
            </a>
        </div>
    </div>

    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item navbar-item-first">
            For Students
        </a>

        <div class="navbar-dropdown">
            <a class="navbar-item" href="prospective-students.html">
                For Prospective Students
            </a>
            <a class="navbar-item" href="instruments.html">
                Instruments
            </a>
        </div>
    </div>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item navbar-item-first">
            About
        </a>

        <div class="navbar-dropdown">
            <a class="navbar-item" href="about-drweinberg.html">
                Biography
            </a>
            <a class="navbar-item" href="photos.html">
                Photos
            </a>
            <a class="navbar-item" href="https://sph.unc.edu/files/2018/07/cv_Weinberg-April-2018.pdf" target="_blank">
                Curriculum Vitae
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://sph.unc.edu/envr/environmental-sciences-and-engineering-home/">
                Environmental Sciences and Engineering
            </a>
            <a class="navbar-item" href="https://www.unc.edu/">
                UNC Chapel Hill
            </a>
        </div>
    </div>
</div>
<div class="navbar-end">
    <div class="navbar-item">
        <div class="buttons">
            <a class="button is-primary button-home" href="index.html">
                <strong>Home</strong>
            </a>
        </div>
    </div>
</div>
</div>`
