
/* the three dynamic buttons: go to top, go to bottom, go to random */
export default class Navigation
{
    bottomBtn: HTMLElement;
    footer: HTMLElement;
    topBtn: HTMLElement;
    firstHead: HTMLHeadingElement;
    randBtn: HTMLElement;

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
        this.randBtn.addEventListener('click', async (ev) => {
            ev.preventDefault();

            const metadataNode = document.getElementById("hidden-hugo-metadata");
            if(!metadataNode) { return; }

            const projectList = await this.getRandomPageList(metadataNode);
            if(projectList.length <= 0) { return; }

            const randIdx = Math.floor(Math.random() * projectList.length);
            const randURL = projectList[randIdx];
            window.location.href = randURL;
        })
    }

    // The page list is a separate (cached) JSON file nowadays, so it isn't repeated inside every article.
    async getRandomPageList(node: HTMLElement) : Promise<string[]>
    {
        if(node.dataset.pages) { return node.dataset.pages.split(","); }
        if(!node.dataset.pagesUrl) { return []; }

        try {
            const response = await fetch(node.dataset.pagesUrl);
            if(!response.ok) { return []; }
            return await response.json();
        } catch(e) {
            console.warn("Could not load the page list for the random button.", e);
            return [];
        }
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

