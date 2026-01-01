// Data for all 16 Federal States (in English)
const statesData = [
    {
        id: "bayern",
        name: "Bavaria",
        nativeName: "Bayern",
        desc: "The largest state by area, famous for the Alps, fairy-tale castles like Neuschwanstein, and Oktoberfest. An economic powerhouse balancing deep traditions with high-tech innovation.",
        quote: "„Mir san mir.“",
        trans: "We are who we are.",
        images: ["bayern-1.jpg", "bayern-2.jpg", "bayern-3.jpg"]
    },
    {
        id: "bw",
        name: "Baden-Württemberg",
        nativeName: "Baden-Württemberg",
        desc: "The home of Mercedes and Porsche. A region known for inventors, the Black Forest (Schwarzwald), and sunny vineyards. It is one of Europe's wealthiest regions.",
        quote: "„Wir können alles. Außer Hochdeutsch.“",
        trans: "We can do everything. Except High German.",
        images: ["bw-1.jpg", "bw-2.jpg", "bw-3.jpg"]
    },
    {
        id: "berlin",
        name: "Berlin",
        nativeName: "Berlin",
        desc: "The capital and a city-state. Known for its turbulent history, vibrant nightlife, diverse culture, and start-up scene. It is 'poor but sexy'.",
        quote: "„Du bist verrückt, mein Kind. Du musst nach Berlin.“",
        trans: "You are crazy, my child. You must go to Berlin.",
        images: ["berlin-1.jpg", "berlin-2.jpg", "berlin-3.jpg"]
    },
    {
        id: "brandenburg",
        name: "Brandenburg",
        nativeName: "Brandenburg",
        desc: "Surrounding Berlin, this state is known for its many lakes, vast forests, and Prussian history, including the palaces of Potsdam.",
        quote: "„Wie es klingt, so ist’s gemeint.“",
        trans: "It is meant exactly as it sounds.",
        images: ["brandenburg-1.jpg", "brandenburg-2.jpg", "brandenburg-3.jpg"]
    },
    {
        id: "bremen",
        name: "Bremen",
        nativeName: "Bremen",
        desc: "The smallest state, consisting of two cities: Bremen and Bremerhaven. A historic Hanseatic trading hub famous for its maritime heritage and the 'Town Musicians'.",
        quote: "„Buten un binnen, wagen un winnen.“",
        trans: "Outside and inside: risk and gain.",
        images: ["bremen-1.jpg", "bremen-2.jpg", "bremen-3.jpg"]
    },
    {
        id: "hamburg",
        name: "Hamburg",
        nativeName: "Hamburg",
        desc: "Germany's 'Gateway to the World'. A wealthy port city-state known for its hundreds of canals, the Reeperbahn district, and the stunning Elbphilharmonie.",
        quote: "„Mein Feld ist die Welt.“",
        trans: "My field is the world.",
        images: ["hamburg-1.jpg", "hamburg-2.jpg", "hamburg-3.jpg"]
    },
    {
        id: "hessen",
        name: "Hesse",
        nativeName: "Hessen",
        desc: "Home to Frankfurt, the financial heart of the EU. The state features a contrast between the modern skyline and the fairy-tale forests of the Brothers Grimm.",
        quote: "„Nütze deine Zeit.“",
        trans: "Use your time.",
        images: ["hessen-1.jpg", "hessen-2.jpg", "hessen-3.jpg"]
    },
    {
        id: "mv",
        name: "Mecklenburg-Vorpommern",
        nativeName: "Mecklenburg-Vorpommern",
        desc: "The land of a thousand lakes and the Baltic Sea coast. Known for its chalk cliffs, islands like Rügen, and historic Hanseatic architecture.",
        quote: "„Dat mokt sik vun alleen.“",
        trans: "It will take care of itself.",
        images: ["mv-1.jpg", "mv-2.jpg", "mv-3.jpg"]
    },
    {
        id: "niedersachsen",
        name: "Lower Saxony",
        nativeName: "Niedersachsen",
        desc: "The second-largest state, stretching from the Harz mountains to the North Sea. Home to Volkswagen (Wolfsburg) and vast agricultural landscapes.",
        quote: "„Saxonia est terra pacis.“",
        trans: "Saxony is a land of peace.",
        images: ["niedersachsen-1.jpg", "niedersachsen-2.jpg", "niedersachsen-3.jpg"]
    },
    {
        id: "nrw",
        name: "North Rhine-Westphalia",
        nativeName: "Nordrhein-Westfalen",
        desc: "The most populous state. Once the industrial heartland (Ruhr area), now a center for culture and media. Famous for Cologne Cathedral and Carnival.",
        quote: "„E pluribus unum Ruhr.“",
        trans: "Out of many, one Ruhr.",
        images: ["nrw-1.jpg", "nrw-2.jpg", "nrw-3.jpg"]
    },
    {
        id: "rlp",
        name: "Rhineland-Palatinate",
        nativeName: "Rheinland-Pfalz",
        desc: "Germany's wine country. The landscape is dominated by vineyards along the Rhine and Moselle rivers, romantic castles, and Roman history.",
        quote: "„Wein, Wälder, Wunder.“",
        trans: "Wine, forests, wonders.",
        images: ["rlp-1.jpg", "rlp-2.jpg", "rlp-3.jpg"]
    },
    {
        id: "saarland",
        name: "Saarland",
        nativeName: "Saarland",
        desc: "A small state bordering France, known for its industrial history and French influence on its culture and cuisine. Famous for the Saar Loop river bend.",
        quote: "„Hauptsach gudd gess.“",
        trans: "The main thing is to have eaten well.",
        images: ["saarland-1.jpg", "saarland-2.jpg", "saarland-3.jpg"]
    },
    {
        id: "sachsen",
        name: "Saxony",
        nativeName: "Sachsen",
        desc: "A cultural gem in the east. Home to Dresden ('Florence on the Elbe') and trendy Leipzig. Known for porcelain, classical music, and the Ore Mountains.",
        quote: "„Sachsens Glanz und Preußens Gloria.“",
        trans: "Saxony's shine and Prussia's glory.",
        images: ["sachsen-1.jpg", "sachsen-2.jpg", "sachsen-3.jpg"]
    },
    {
        id: "sachsen-anhalt",
        name: "Saxony-Anhalt",
        nativeName: "Sachsen-Anhalt",
        desc: "The heartland of German history, featuring the highest concentration of UNESCO World Heritage sites, including Bauhaus in Dessau and Luther's Wittenberg.",
        quote: "„Wir stehen früher auf.“",
        trans: "We wake up earlier.",
        images: ["sachsen-anhalt-1.jpg", "sachsen-anhalt-2.jpg", "sachsen-anhalt-3.jpg"]
    },
    {
        id: "sh",
        name: "Schleswig-Holstein",
        nativeName: "Schleswig-Holstein",
        desc: "The 'Land Between Two Seas' (North Sea and Baltic Sea). Known for its maritime atmosphere, lighthouses, and wind energy.",
        quote: "„Wer den Sturm nicht ehrt, ist die Küste nicht wert.“",
        trans: "He who does not honor the storm is not worthy of the coast.",
        images: ["sh-1.jpg", "sh-2.jpg", "sh-3.jpg"]
    },
    {
        id: "thueringen",
        name: "Thuringia",
        nativeName: "Thüringen",
        desc: "The 'Green Heart' of Germany due to its dense forests. A center of German intellectual history, home to Goethe, Schiller, and Luther's Wartburg castle.",
        quote: "„Hier atmete Goethe.“",
        trans: "Goethe breathed here.",
        images: ["thueringen-1.jpg", "thueringen-2.jpg", "thueringen-3.jpg"]
    }
];

// Mapping Table: SVG ID -> Data ID
const svgMap = {
    "DE-BW": "bw",
    "DE-BY": "bayern",
    "DE-BE": "berlin",
    "DE-BB": "brandenburg",
    "DE-HB": "bremen",
    "DE-HH": "hamburg",
    "DE-HE": "hessen",
    "DE-MV": "mv",
    "DE-NI": "niedersachsen",
    "DE-NW": "nrw",
    "DE-RP": "rlp",
    "DE-SL": "saarland",
    "DE-SN": "sachsen",
    "DE-ST": "sachsen-anhalt",
    "DE-SH": "sh",
    "DE-TH": "thueringen"
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('state-modal');
    const closeBtn = document.querySelector('.close-button');
    
    // Modal Elements
    const mTitle = document.getElementById('modal-title');
    const mGerman = document.getElementById('modal-german-name');
    const mDesc = document.getElementById('modal-description');
    const mQuote = document.getElementById('modal-quote');
    const mTrans = document.getElementById('modal-quote-trans');
    const mGallery = document.getElementById('modal-gallery');

    // 1. Interactive Map Logic
    const mapPaths = document.querySelectorAll('#map-germany path'); // Select all paths in the SVG

    mapPaths.forEach(path => {
        // Add click event to each state on the map
        path.addEventListener('click', function() {
            const svgId = this.id; // Get ID like 'DE-BY'
            const dataId = svgMap[svgId]; // Convert to 'bayern'
            
            if (dataId) {
                const stateData = statesData.find(s => s.id === dataId);
                if (stateData) {
                    openModal(stateData);
                }
            } else {
                console.warn('No data found for SVG ID:', svgId);
            }
        });
    });

    // 2. Function to Open Modal
    function openModal(data) {
        mTitle.textContent = data.name;
        mGerman.textContent = data.nativeName;
        mDesc.textContent = data.desc;
        mQuote.textContent = data.quote;
        mTrans.textContent = data.trans;

        // Clear and Populate Gallery
        mGallery.innerHTML = '';
        data.images.forEach(imgName => {
            const img = document.createElement('img');
            // NOTE: Ensure your images folder is named 'images'
            img.src = `images/${imgName}`; 
            img.alt = `${data.name} image`;
            
            // Add error handling for missing images (placeholder)
            img.onerror = function() {
                this.src = 'https://via.placeholder.com/300x200?text=No+Image';
            };
            
            mGallery.appendChild(img);
        });

        modal.style.display = "block";
    }

    // 3. Close Modal Logic
    closeBtn.onclick = () => modal.style.display = "none";
    
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});