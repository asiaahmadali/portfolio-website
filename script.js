const aboutLinks = document.getElementsByClassName("about-links") ;
const aboutLinksContent = document.getElementsByClassName("about-links-content");

function openlink(linkname){
    for(link of aboutLinks)
    {
        link.classList.remove("active");
    }
    for(content of aboutLinksContent)
    {
       content.classList.remove("active-about-link");
    }
    event.currentTarget.classList.add("active") ;
    document.getElementById(linkname).classList.add("active-about-link") ;
}

const menulist = document.getElementById('menu-list') ;

function openMenu()
{
      menulist.style.right='0px' ;
}

function closeMenu()
{
     menulist.style.right='-200px' ;
}
