////////////// SECTION - 1 ///////////////
images = [
    'https://images.unsplash.com/photo-1529419412599-7bb870e11810?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1529423490069-1eb2984eb2c7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1590746249979-11bfd7c51c56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1721819028742-744471841fb7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1721819028697-6cf7b301c828?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
totalImages = 5;
let currentIndex = 0;
const mainImage = document.getElementById("mainImage");
const thumbnailsContainer = document.getElementById("thumbnails");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateMainImage(index) {
    mainImage.src = images[index];
    highlightCurrentThumbnail(index);
}

function highlightCurrentThumbnail(index) {
    const thumbnails = thumbnailsContainer.getElementsByTagName("img");
    for (let i = 0; i < thumbnails.length; i++) {
        if (i === index) {
            thumbnails[i].style.borderColor = "black";
        } else {
            thumbnails[i].style.borderColor = "transparent";
        }
    }
}

function createThumbnails() {
    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Thumbnail ${index}`;
        img.className = "object-cover rounded-lg shrink-0 self-stretch my-auto aspect-square w-[72px] cursor-pointer border-2";
        img.addEventListener("click", () => {
            currentIndex = index;
            updateMainImage(currentIndex);
        });
        thumbnailsContainer.appendChild(img);
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateMainImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateMainImage(currentIndex);
});

updateMainImage(currentIndex);
createThumbnails();
highlightCurrentThumbnail(currentIndex);




////////////// SECTION - 4 ///////////////
const patterns = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0c34eea60da0cfe3dc98c5b05e5755a47447ef9e",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e0a9a2dd600e14a3627dd32ff9117f2557356f79",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f112a4b6fb1d798f41416c580cd051cf704b9340",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6a2abc18e48a291280645e1345be3cbb418b7821",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/06019fa0b8b9d87dcfe16927e8d282d614457955",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/08f1d6695106d3dc97f14f9863c1bd34f1ee54f1",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/83a8aadacbf814c6d84f297b0c73c531667d27c5",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/98b4ea7b97c27638474da58918cbfe71c4791d4e"
]
const patternsContainer = document.getElementById("pattern-palette");

function insertPatterns() {
    patterns.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "rounded-lg h-[72px] w-[72px] max-sm:w-14 max-sm:h-14";
        patternsContainer.appendChild(img);
    });
}
insertPatterns();



////////////// SECTION - 5 ///////////////
const infos = [
    { title: "Stiklo paketas", content: "Lorem ipsum dolor sit amet consectetur. Rhoncus arcu imperdiet commodo pretium est suspendisse nunc magna. Elit arcu tortor aenean quis ac morbi elit. Aliquam lectus urna non ut. Nullam id volutpat praesent nunc. Donec euismod nunc eu sem fames porttitor vitae nisi eu. Netus id laoreet quis et egestas viverra. Est pretium id dictum et in ut urna proin. Non mauris lacus nisl massa ultrices suscipit. Nunc ullamcorper pretium volutpat nisl. Aliquam elementum condimentum cursus amet urna arcu ipsum faucibus lectus. Bibendum risus ornare massa lectus eu" },
    { title: "Apkaustai", content: "Lorem ipsum dolor sit amet consectetur. Rhoncus arcu imperdiet commodo pretium est suspendisse nunc magna. Elit arcu tortor aenean quis ac morbi elit. Aliquam lectus urna non ut. Nullam id volutpat praesent nunc. Donec euismod nunc eu sem fames porttitor vitae nisi eu. Netus id laoreet quis et egestas viverra. Est pretium id dictum et in ut urna proin. Non mauris lacus nisl massa ultrices suscipit. Nunc ullamcorper pretium volutpat nisl. Aliquam elementum condimentum cursus amet urna arcu ipsum faucibus lectus. Bibendum risus ornare massa lectus eu" },
    { title: "Profilis", content: "Lorem ipsum dolor sit amet consectetur. Rhoncus arcu imperdiet commodo pretium est suspendisse nunc magna. Elit arcu tortor aenean quis ac morbi elit. Aliquam lectus urna non ut. Nullam id volutpat praesent nunc. Donec euismod nunc eu sem fames porttitor vitae nisi eu. Netus id laoreet quis et egestas viverra. Est pretium id dictum et in ut urna proin. Non mauris lacus nisl massa ultrices suscipit. Nunc ullamcorper pretium volutpat nisl. Aliquam elementum condimentum cursus amet urna arcu ipsum faucibus lectus. Bibendum risus ornare massa lectus eu" },
    { title: "Stiklas", content: "Lorem ipsum dolor sit amet consectetur. Rhoncus arcu imperdiet commodo pretium est suspendisse nunc magna. Elit arcu tortor aenean quis ac morbi elit. Aliquam lectus urna non ut. Nullam id volutpat praesent nunc. Donec euismod nunc eu sem fames porttitor vitae nisi eu. Netus id laoreet quis et egestas viverra. Est pretium id dictum et in ut urna proin. Non mauris lacus nisl massa ultrices suscipit. Nunc ullamcorper pretium volutpat nisl. Aliquam elementum condimentum cursus amet urna arcu ipsum faucibus lectus. Bibendum risus ornare massa lectus eu" },
]

const infoContainer = document.getElementById("info-container");

function toggleSection(button, contentId) {
    const content = document.getElementById(contentId);

    // Toggle active class on button
    button.classList.toggle("active");

    // Toggle active class on content
    content.classList.toggle("active");

    // Update aria-expanded attribute
    const isExpanded = button.classList.contains("active");
    button.setAttribute("aria-expanded", isExpanded);
}
function fillInfoSection() {
    infos.forEach((info, index) => {
        const infoMain = document.createElement("div");
        infoMain.className = "flex flex-col gap-4 items-center p-6 w-full bg-white rounded-xl border border-zinc-100 max-sm:p-4"
        const headingContainer = document.createElement("div");
        headingContainer.className = "flex gap-4 items-center justify-between w-full";
        const heading = document.createElement("div");
        heading.className = "text-lg font-bold text-black";
        heading.innerHTML = info.title;
        const toggleButton = document.createElement("div");
        toggleButton.className = "toggle-button flex justify-center items-center p-2 w-8 bg-amber-400 rounded-2xl" + (index === 0 ? " active" : "");
        if (index === 0) toggleButton.setAttribute("aria-expanded", "true");
        else toggleButton.setAttribute("aria-expanded", "false");
        toggleButton.setAttribute("aria-controls", `info-${index}-content`);
        toggleButton.addEventListener("click", () => {
            toggleSection(toggleButton, `info-${index}-content`);
        });
        toggleButton.innerHTML = `<span class="toggle-icon-plus">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
        <path
        d="M14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H8.5V13.5C8.5 13.6326 8.44732 13.7598 8.35355 13.8536C8.25979 13.9473 8.13261 14 8 14C7.86739 14 7.74021 13.9473 7.64645 13.8536C7.55268 13.7598 7.5 13.6326 7.5 13.5V8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H7.5V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8Z"
        fill="black"></path>
        </svg>
        </span>
        <span class="toggle-icon-minus">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
        <path
        d="M14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8Z"
        fill="black"></path>
        </svg>
        </span>`;
        headingContainer.appendChild(heading);
        headingContainer.appendChild(toggleButton);
        infoMain.appendChild(headingContainer);
        const content = document.createElement("div");
        content.className = "section-content w-full" + (index === 0 ? " active" : "");
        content.innerHTML = info.content;
        content.setAttribute("id", `info-${index}-content`);
        infoMain.appendChild(content);
        infoContainer.appendChild(infoMain);
    })
}
fillInfoSection();




////////////// SECTION - 6 ///////////////
const galleryImgs = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/580bc15c0455f27df2d4423d6cce7c4f795a4c11",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f3b29157c026d33f40df8d14637e92bba24f2231",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b73d803a8c9087a58eec5147f20690aac4d9e6ed",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b73d803a8c9087a58eec5147f20690aac4d9e6ed",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/72920382dd7d092c67e3c22a00c76baa77677aad"
]
function generateGallery() {
    const galleryContainer = document.getElementById("gallery-container");
    const centerImg = document.createElement("img");
    const centerImgContainer = document.createElement("div");
    centerImgContainer.className = //'min-w-[343px] sm:min-w-[625px]' + 
    // ' min-h-[343px] sm:min-h-[560px] ' + 
    ' object-cover rounded-2xl'
    centerImg.src = galleryImgs[0];
    centerImg.className = "object-cover rounded-2xl min-w-[343px] sm:min-h-[606px]";
    centerImgContainer.appendChild(centerImg);
    galleryContainer.appendChild(centerImgContainer);

    function getImageElement(src) {
        const imgContainer = document.createElement("div");
        imgContainer.className = //'min-w-[163px] sm:min-w-[303px]' + 
        // ' min-h-[163px] sm:min-h-[268px] ' + 
        ' rounded-2xl'
        const img = document.createElement("img");
        img.className = 'object-cover w-full h-full rounded-2xl'
        img.src = src;
        imgContainer.appendChild(img);
        return imgContainer;
    }

    const secondaryImgsContainer1 = document.createElement("div");
    secondaryImgsContainer1.setAttribute('class', "flex flex-row sm:flex-col w-full sm:w-1/4 gap-4 sm:gap-6")
    secondaryImgsContainer1.appendChild(getImageElement(galleryImgs[1]));
    secondaryImgsContainer1.appendChild(getImageElement(galleryImgs[2]));
    galleryContainer.appendChild(secondaryImgsContainer1);

    const secondaryImgsContainer2 = document.createElement("div");
    secondaryImgsContainer2.setAttribute('class', "flex flex-row sm:flex-col w-full sm:w-1/4 gap-4 sm:gap-6")
    secondaryImgsContainer2.appendChild(getImageElement(galleryImgs[3]));
    secondaryImgsContainer2.appendChild(getImageElement(galleryImgs[4]));
    galleryContainer.appendChild(secondaryImgsContainer2);
}

generateGallery();





////////////// SECTION - 7 ///////////////
const productInfos = [
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/424fed5398e2adadc650a5ee4dce0af2d73efd70",
        desc: 'Lorem ipsum dolor sit amet consectetur.',
        buttonContent: 'Daugiau informacijos'
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/424fed5398e2adadc650a5ee4dce0af2d73efd70",
        desc: 'Lorem ipsum dolor sit amet consectetur.',
        buttonContent: 'Daugiau informacijos'
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/424fed5398e2adadc650a5ee4dce0af2d73efd70",
        desc: 'Lorem ipsum dolor sit amet consectetur.',
        buttonContent: 'Daugiau informacijos'
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/424fed5398e2adadc650a5ee4dce0af2d73efd70",
        desc: 'Lorem ipsum dolor sit amet consectetur.',
        buttonContent: 'Daugiau informacijos'
    },
];

const productContainer = document.getElementById("product-container");

productInfos.forEach((productInfo) => {
    const productImageContainer = document.createElement("div");
    productImageContainer.className = "flex relative flex-col gap-2 sm:gap-4 items-center min-w-[180px] sm:min-w-[302px]";

    const img = document.createElement("img");
    img.src = productInfo.image;
    img.className = "rounded-2xl w-full border border-solid border-[color:var(--Neutral-4,#EEE)] sm:h-auto";

    const title = document.createElement("h3");
    title.className = "text-sm sm:text-lg w-full font-bold leading-7 text-center text-black";
    title.textContent = productInfo.desc;

    const button = document.createElement("button");
    button.className = "py-1 px-2 sm:p-4 w-full text-sm sm:text-lg font-bold leading-7 text-center text-white bg-black rounded-2xl cursor-pointer";
    button.textContent = productInfo.buttonContent;

    productImageContainer.appendChild(img);
    productImageContainer.appendChild(title);
    productImageContainer.appendChild(button);

    productContainer.appendChild(productImageContainer);
});