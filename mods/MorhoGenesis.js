// Простой мод для Sandboxels

// 1. Базовая пассивная ткань
elements.tissue = {
    color: "#7f8c8d",
    behavior: behaviors.WALL,
    category: "Morphogenesis",
    state: "solid",
    density: 1500,
    // Если рядом есть активатор, ткань превращается в живую структуру
    reactions: {
        "activator": { elem1: "grown_tissue", elem2: null, chance: 1.0 }
    }
};

// 2. То, во что превращается ткань
elements.grown_tissue = {
    color: "#2ecc71",
    behavior: behaviors.WALL,
    category: "Morphogenesis",
    state: "solid",
    density: 2000,
};

// 3. Сигнал роста (просто капает и исчезает со временем)
elements.activator = {
    color: "#f1c40f",
    behavior: [
        "XX|XX|XX",
        "M2|DL|M1",
        "XX|M1|XX",
    ],
    category: "Morphogenesis",
    state: "liquid",
    density: 500,
    tick: function(pixel) {
        // Случайно исчезает, чтобы сигнал не забивал весь экран
        if (Math.random() < 0.1) {
            deletePixel(pixel.x, pixel.y);
        }
    }
};