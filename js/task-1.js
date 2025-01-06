const refs = {
    categories: document.querySelector("#categories"),
};

console.log("Number of categories: ", refs.categories.childElementCount);

Array.from(refs.categories.children).forEach(child => {
    const categoryTitle = child.querySelector("h2").textContent;
    const elementsCount = child.querySelector("ul").childElementCount;

    console.log("Category:", categoryTitle);
    console.log("Number of elements:", elementsCount);
});
