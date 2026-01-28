/* ================== PRODUCTOS ================== */
const productos = [
    {
        nombre: "Reddyz 4 en 1",
        categoria: "Reddyz",
        img: "/imagenes/WhatsApp Image 2025-12-04 at 10.28.37 AM.jpeg",
        descripcion: "Guantes de alta resistencia y calidad hospitalaria.",
        link: "producto3.html"
    },
    {
        nombre: "Premier α (NIPRO)",
        categoria: "medidor",
        img: "/imagenes/medidor_primer.jpeg",
        descripcion: "Medidor de glucosa Premier y (cajas de 50 tiras)",
        link: "/producto4.html"
    },
    {
        nombre: "Accu-Chek Instant (Roche)",
        categoria: "medidor",
        img: "/imagenes/medidor_accu-chek.jpeg",
        descripcion: "Medidor Accu-Chek Instant y (cajas de 50 tiras)",
        link: "/producto5.html"
    },
    {
        nombre: "Aesthetic Solution / L-Carnitine",
        categoria: "Aesthetic Solution / L-Carnitine",
        img: "/imagenes/WhatsApp Image 2025-12-04 at 10.31.07 AM.jpeg",
        descripcion: "Ampollas de solución estética reductora.",
        link: "/producto6.html"
    },
    {
        nombre: "Tensiómetro electrónico de brazo",
        categoria: "Tensiómetro electrónico de brazo",
        img: "/imagenes/tensiómetro.jpeg",
        descripcion: "Equipo óptico de precisión avanzada.",
        link: "/producto7.html"
    },
    {
        nombre: "VITAMINA C 7.5G/50ML – REFORCE",
        categoria: "reforce",
        img: "/imagenes/reforce.webp",
        descripcion: "Vitamina C inyectable.",
        link: "/producto8.html"
    },
    {
        nombre: "VITAMINA C - Bellfar",
        categoria: "reforce",
        img: "/imagenes/bellfar.jpg",
        descripcion: "Vitamina C Bellfar.",
        link: "/producto1.html"
    },
    {
        nombre: "VITAMINA C - Pascoe",
        categoria: "reforce",
        img: "/imagenes/vitaminac_pascoe.jpg",
        descripcion: "Vitamina C Pascoe.",
        link: "/producto9.html"
    },
    {
        nombre: "VITAMINA B12 - Pascoe",
        categoria: "reforce",
        img: "/imagenes/VITAMINA-B12.jpg",
        descripcion: "Vitamina B12 Pascoe.",
        link: "/producto10.html"
    },
    {
        nombre: "Pasconal Forte - Pascoe",
        categoria: "reforce",
        img: "/imagenes/PASCONAL.jpg",
        descripcion: "Pasconal Forte.",
        link: "/producto11.html"
    },
    {
        nombre: "Cholo 2 - Pascoe",
        categoria: "reforce",
        img: "/imagenes/Cholo-2.jpg",
        descripcion: "Cholo 2 Pascoe.",
        link: "/producto2.html"
    },
    {
        nombre: "Lymphdiaral 2ml - Pascoe",
        categoria: "reforce",
        img: "/imagenes/Lymphdiaral.jpg",
        descripcion: "Lymphdiaral Pascoe.",
        link: "/producto12.html"
    },
    {
        nombre: "Mission Urinalysis",
        categoria: "reforce",
        img: "/imagenes/mission-urinalysis.jpg",
        descripcion: "Análisis de orina Mission.",
        link: "/producto13.html"
    },
    {
        nombre: "Medi-Test Combi 11",
        categoria: "reforce",
        img: "/imagenes/medi_test.webp",
        descripcion: "Tiras reactivas Medi-Test.",
        link: "/producto14.html"
    }
];

/* ================== ELEMENTOS ================== */
const grid = document.getElementById("grid");
const buscar = document.getElementById("buscar");
const botonesFiltro = document.querySelectorAll(".filtro");
const catalogo = document.querySelector(".catalogo");

/* ================== MOSTRAR PRODUCTOS ================== */
function mostrarProductos(lista) {
    grid.innerHTML = "";

    if (lista.length === 0) {
        grid.innerHTML = `<p style="text-align:center;">No se encontraron productos</p>`;
    } else {
        lista.forEach(p => {
            grid.innerHTML += `
                <div class="producto-card">
                    <img src="${p.img}">
                    <div class="producto-info">
                        <h3>${p.nombre}</h3>
                        <p>${p.descripcion}</p>
                        <a class="btn-ver" href="${p.link}">Ver más</a>
                    </div>
                </div>
            `;
        });
    }

    ajustarAltura();
}

/* ================== AJUSTAR ALTURA (FOOTER ABAJO) ================== */
function ajustarAltura() {
    if (catalogo.scrollHeight < window.innerHeight * 0.7) {
        catalogo.style.minHeight = "70vh";
    } else {
        catalogo.style.minHeight = "auto";
    }
}

/* ================== FILTROS ================== */
botonesFiltro.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filtro.active")?.classList.remove("active");
        btn.classList.add("active");

        const cat = btn.dataset.cat;

        if (cat === "todos") {
            mostrarProductos(productos);
        } else {
            const filtrados = productos.filter(p => p.categoria === cat);
            mostrarProductos(filtrados);
        }
    });
});

/* ================== BUSCADOR ================== */
buscar.addEventListener("input", () => {
    const texto = buscar.value.toLowerCase();

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.descripcion.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});

/* ================== INICIO ================== */
window.addEventListener("load", () => {
    mostrarProductos(productos);
    ajustarAltura();
});

window.addEventListener("resize", ajustarAltura);

