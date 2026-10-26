(() => {
    const products = [
        {
            id: "turmeric-glow-oil",
            name: "Turmeric Glow Oil",
            price: 100,
            priceLabel: "R100",
            availability: "stock",
            image: "pics/WhatsApp Image 2026-09-17 at 10.43.02.jpeg",
            alt: "Fancy Fragrances turmeric glow oil skincare bottle",
            description: "Nourishes, brightens and supports glowing skin."
        },
        {
            id: "spf-50-sunscreen",
            name: "SPF 50 Sunscreen",
            price: 150,
            priceLabel: "R150",
            availability: "stock",
            image: "pics/WhatsApp Image 2026-09-17 at 10.43.02 (1).jpeg",
            alt: "Fancy Fragrances SPF 50 daily sunscreen bottle",
            description: "Lightweight daily UVA and UVB protection."
        },
        {
            id: "vitamin-e-hand-lotion",
            name: "Vitamin E Hand Lotion",
            price: null,
            priceLabel: "Available at market",
            availability: "market",
            image: "pics/WhatsApp Image 2026-09-17 at 10.43.02 (2).jpeg",
            alt: "Fancy Fragrances Vitamin E hand lotion bottle",
            description: "Helps soften and moisturise dry hands."
        },
        {
            id: "vitamin-e-skin-oil",
            name: "Vitamin E Skin Oil",
            price: null,
            priceLabel: "Available at market",
            availability: "market",
            image: "pics/WhatsApp Image 2026-09-17 at 10.43.02 (4).jpeg",
            alt: "Fancy Fragrances Vitamin E skin oil bottle",
            description: "Nourishes, protects and helps hydrate the skin."
        },
        {
            id: "retinol-face-serum",
            name: "Retinol Face Serum",
            price: null,
            priceLabel: "Available at market",
            availability: "market",
            image: "pics/WhatsApp Image 2026-09-17 at 10.43.03.jpeg",
            alt: "Fancy Fragrances retinol face serum bottle",
            description: "Supports smoother skin and a more even-looking tone."
        }
    ];

    const readCart = () => {
        try {
            const saved = JSON.parse(localStorage.getItem("fancy-fragrances-cart") || "{}");
            return saved && typeof saved === "object" ? saved : {};
        } catch {
            return {};
        }
    };

    let cart = readCart();
    const saveCart = () => localStorage.setItem("fancy-fragrances-cart", JSON.stringify(cart));
    const cartQuantity = () => Object.values(cart).reduce((total, quantity) => total + quantity, 0);

    function updateCart() {
        document.querySelectorAll(".cart-count").forEach((count) => {
            count.textContent = cartQuantity();
        });

        const cartItems = document.querySelector("#cartItems");
        const cartStatus = document.querySelector("#cartStatus");
        if (!cartItems) return;

        cartItems.replaceChildren();
        const entries = products.filter((product) => cart[product.id]);
        if (entries.length === 0) {
            cartItems.textContent = "Your cart is empty.";
        } else {
            entries.forEach((product) => {
                const row = document.createElement("li");
                const label = document.createElement("span");
                const remove = document.createElement("button");
                label.textContent = `${product.name} x ${cart[product.id]}`;
                remove.type = "button";
                remove.className = "cart-remove";
                remove.dataset.cartRemove = product.id;
                remove.textContent = "Remove one";
                remove.setAttribute("aria-label", `Remove one ${product.name} from cart`);
                row.append(label, remove);
                cartItems.append(row);
            });
        }

        const enquiryLink = document.querySelector("#cartEnquiry");
        if (enquiryLink) {
            const enquiry = entries.map((product) => `${product.name} x ${cart[product.id]}`).join(", ");
            enquiryLink.href = `contact.html?items=${encodeURIComponent(enquiry)}`;
            enquiryLink.hidden = entries.length === 0;
        }
        if (cartStatus) cartStatus.textContent = `${cartQuantity()} item${cartQuantity() === 1 ? "" : "s"} in your cart.`;
    }

    function renderProducts() {
        const grid = document.querySelector("#productGrid");
        if (!grid) return;

        const search = document.querySelector("#productSearch").value.trim().toLowerCase();
        const availability = document.querySelector("#availabilityFilter").value;
        const sortOrder = document.querySelector("#sortProducts").value;
        const visibleProducts = products.filter((product) => {
            const matchesSearch = `${product.name} ${product.description}`.toLowerCase().includes(search);
            return matchesSearch && (availability === "all" || product.availability === availability);
        });

        if (sortOrder === "name") visibleProducts.sort((a, b) => a.name.localeCompare(b.name));
        if (sortOrder === "price") visibleProducts.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));

        grid.replaceChildren();
        visibleProducts.forEach((product) => {
            const article = document.createElement("article");
            article.className = "product-card";
            article.dataset.category = "skincare";

            const imageButton = document.createElement("button");
            imageButton.type = "button";
            imageButton.className = "lightbox-trigger";
            imageButton.dataset.lightboxImage = product.image;
            imageButton.dataset.lightboxAlt = product.alt;
            imageButton.setAttribute("aria-label", `View larger image of ${product.name}`);
            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.alt;
            image.loading = "lazy";
            imageButton.append(image);

            const title = document.createElement("h2");
            title.textContent = product.name;
            const category = document.createElement("p");
            category.className = "category";
            category.textContent = "Category: Skincare";
            const description = document.createElement("p");
            description.className = "notes";
            description.textContent = product.description;
            const price = document.createElement("p");
            price.className = "price";
            price.textContent = product.priceLabel;
            const button = document.createElement("button");
            button.type = "button";
            button.className = "btn-primary";
            button.dataset.cartAdd = product.id;
            button.textContent = product.availability === "market" ? "Add to Enquiry" : "Add to Cart";

            article.append(imageButton, title, category, description, price, button);
            grid.append(article);
        });

        const results = document.querySelector("#productResults");
        if (results) {
            results.textContent = `${visibleProducts.length} product${visibleProducts.length === 1 ? "" : "s"} shown`;
        }
        const emptyMessage = document.querySelector("#noProducts");
        if (emptyMessage) emptyMessage.hidden = visibleProducts.length !== 0;
    }

    function setupLightbox() {
        const dialog = document.querySelector("#lightboxDialog");
        if (!dialog) return;
        const image = dialog.querySelector("img");
        const caption = dialog.querySelector("figcaption");

        document.addEventListener("click", (event) => {
            const trigger = event.target.closest("[data-lightbox-image]");
            if (!trigger) return;
            image.src = trigger.dataset.lightboxImage;
            image.alt = trigger.dataset.lightboxAlt || "Product image";
            caption.textContent = image.alt;
            dialog.showModal();
        });

        dialog.querySelector("[data-lightbox-close]").addEventListener("click", () => dialog.close());
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) dialog.close();
        });
    }

    function setupMap() {
        const mapElement = document.querySelector("#marketMap");
        if (!mapElement) return;
        if (!window.L) return;
        const fallback = mapElement.querySelector("[data-map-fallback]");
        if (fallback) fallback.hidden = true;
        const map = L.map(mapElement).setView([-25.75, 28.20], 9);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);

        [
            { coordinates: [-25.75, 28.19], name: "Example Market", detail: "Sample location 1 only; replace with a confirmed venue before publishing." },
            { coordinates: [-26.05, 28.02], name: "Example Market", detail: "Sample location 2 only; replace with a confirmed venue before publishing." },
            { coordinates: [-26.15, 28.04], name: "Example Market", detail: "Sample location 3 only; replace with a confirmed venue before publishing." }
        ].forEach((location) => {
            L.marker(location.coordinates).addTo(map)
                .bindPopup(`<strong>${location.name}</strong><br>${location.detail}`);
        });
    }

    function setupForms() {
        document.querySelectorAll("form[data-netlify='true']").forEach((form) => {
            const feedback = form.querySelector("[data-form-feedback]");
            const photo = form.querySelector("input[type='file']");
            if (photo) photo.addEventListener("change", () => photo.setCustomValidity(""));
            form.addEventListener("submit", (event) => {
                if (!form.reportValidity()) {
                    event.preventDefault();
                    return;
                }

                if (photo && photo.files[0] && photo.files[0].size > 5 * 1024 * 1024) {
                    event.preventDefault();
                    photo.setCustomValidity("Choose an image smaller than 5 MB.");
                    photo.reportValidity();
                    return;
                }
                if (photo) photo.setCustomValidity("");

                const localPreview = ["", "localhost", "127.0.0.1"].includes(window.location.hostname);
                if (localPreview) {
                    event.preventDefault();
                    if (feedback) {
                        feedback.textContent = "Your details are valid. Deploy this site with Netlify Forms enabled to submit this form.";
                        feedback.classList.add("form-feedback-visible");
                    }
                    return;
                }
                if (feedback) feedback.textContent = "Submitting your form...";
            });
        });

        document.querySelectorAll("[data-form-success]").forEach((feedback) => {
            if (new URLSearchParams(window.location.search).has("submitted")) {
                feedback.textContent = "Thank you. Your form has been submitted.";
                feedback.classList.add("form-feedback-visible");
            }
        });

        const enquiry = new URLSearchParams(window.location.search).get("items");
        const message = document.querySelector("#msgBody");
        if (enquiry && message) message.value = `I would like to enquire about: ${enquiry}.`;
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("#productSearch, #availabilityFilter, #sortProducts").forEach((control) => {
            control.addEventListener("input", renderProducts);
            control.addEventListener("change", renderProducts);
        });

        document.addEventListener("click", (event) => {
            const addButton = event.target.closest("[data-cart-add]");
            const removeButton = event.target.closest("[data-cart-remove]");
            if (addButton) {
                const id = addButton.dataset.cartAdd;
                cart[id] = (cart[id] || 0) + 1;
                saveCart();
                updateCart();
                addButton.textContent = "Added";
                window.setTimeout(() => {
                    addButton.textContent = products.find((product) => product.id === id).availability === "market" ? "Add to Enquiry" : "Add to Cart";
                }, 900);
            }
            if (removeButton) {
                const id = removeButton.dataset.cartRemove;
                cart[id] -= 1;
                if (cart[id] <= 0) delete cart[id];
                saveCart();
                updateCart();
            }
        });

        renderProducts();
        updateCart();
        setupLightbox();
        setupMap();
        setupForms();
    });
})();
