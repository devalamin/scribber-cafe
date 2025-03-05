function handleTransition() {
    const bookMarkContainer = document.getElementById('bookmarks-container');
    bookMarkContainer.classList.remove('hidden');
    bookMarkContainer.classList.add('transition-width', 'duration-1000');
    const blogContainer = document.getElementById('blogs-container');
    blogContainer.classList.remove('md:w-full')
    blogContainer.classList.add('md:w-2/3', 'transition-width', 'duration-1000')

}

export { handleTransition }