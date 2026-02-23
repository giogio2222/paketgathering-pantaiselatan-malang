document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // TOC Toggle
    const tocHeader = document.querySelector('.toc-header');
    const tocList = document.querySelector('.toc-list');
    if (tocHeader && tocList) {
        tocHeader.addEventListener('click', () => {
            tocList.classList.toggle('d-none');
            const icon = tocHeader.querySelector('i');
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    }

    // Auto TOC Generation if on Article Page
    const articleContainer = document.querySelector('.article-content');
    if (articleContainer && tocList) {
        const headings = articleContainer.querySelectorAll('h2, h3');
        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.setAttribute('id', id);
            
            const li = document.createElement('li');
            li.style.marginLeft = heading.tagName === 'H3' ? '20px' : '0';
            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = heading.textContent;
            a.classList.add('text-decoration-none', 'text-dark');
            li.appendChild(a);
            tocList.appendChild(li);
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('py-2', 'shadow-sm');
        } else {
            navbar.classList.remove('py-2', 'shadow-sm');
        }
    });
});
