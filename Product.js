const db = [
    {
        name: "Drawing courses",
        Description: "We will teach your kid how to draw from scratch. All ages allowed to enter",
        BackDropPath: "https://christandpopculture.com/wp-content/uploads/2013/07/little-girl.jpg"
    },
    {
        name: "Buisness cources",
        Description: "We will teach you how to become sucessufull buisnessman",
        BackDropPath: "https://ubrands.com/cdn/shop/products/5136E_4ctSTMontereyMidnight-4_Ubrands_530x@2x.jpg?v=1612546670"
    },
    {
        name: "Cyber security",
        Description: "We will teach you how to become sucessufull coder who would defend his country web and digital land",
        BackDropPath: "https://freshsec.com/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzb97ynnn%2Fproduction%2Faf2348566b19d6081fb9206f8aedaf20690650e0-1400x935.webp%3Ffm%3Dpng%26q%3D50%26auto%3Dformat&w=3840&q=75"
    },
];

const displayed = db.map((item, index) => {
    document.write(`
        <div class="card" style="width: 18rem;">
            <img src="${item.BackDropPath}" class="card-img-top photo" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.Description}</p>
                <a href="https://r.mtdv.me/articles/Hi8x9pc1Z-"><button class="btn btn-primary">Learn</button></a>
            </div>
        </div>`)
});
