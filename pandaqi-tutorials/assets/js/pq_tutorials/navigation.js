
/* the three dynamic buttons: go to top, go to bottom, go to random */
export default class Navigation
{
    constructor()
    {
        this.bottomBtn = document.getElementById('gotoBottomBtn');
        this.footer = document.getElementById('footer-container');
        this.setupBottomButton();

        this.topBtn = document.getElementById('gotoTopBtn');
        this.firstHead = document.getElementsByTagName("h1")[0];
        this.setupTopButton();

        this.randBtn = document.getElementById('randProjBtn');
        this.setupRandomButton();

        this.setupSmoothScroll();
    }
    
    setupBottomButton()
    {
        if(!this.bottomBtn || !this.footer) { return; }
        this.bottomBtn.addEventListener('click', (ev) => {
            this.footer.scrollIntoView({'behavior': 'smooth'}); 
            ev.preventDefault();
            return false;
        })
    }
    
    setupTopButton()
    {
        if(!this.topBtn) { return; }
        if(!this.firstHead) { return; }

        this.topBtn.addEventListener('click', (ev) => {
            this.firstHead.scrollIntoView({'behavior': 'smooth'}); 
            ev.preventDefault();
            return false;
        })
    }

    setupRandomButton()
    {
        if(!this.randBtn) { return; }
        this.randBtn.addEventListener('click', (ev) => {
            const metadataNode = document.getElementById("hidden-hugo-metadata");
            const projectList = metadataNode.dataset.pages.split(",");

            const randIdx = Math.floor(Math.random() * projectList.length);
            const randURL = projectList[randIdx];
            window.location.href = randURL;
            ev.preventDefault();
            return false;
        })
    }

    /* Smooth scroll for all links */
    setupSmoothScroll()
    {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (ev) => {
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                ev.preventDefault();
                return false;
            });
        });
    }
}

