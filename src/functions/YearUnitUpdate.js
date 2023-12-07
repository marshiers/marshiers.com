function YearUnitUpdate(ref) {
    
    let year = new Date().getFullYear();
    let text = ref.current;
    switch(year) {
        case 2023:
            text.innerText = "First-year computer science student";
            break;
        case 2024:
            text.innerText = "Second-year computer science student";
            break;
        case 2025:
            text.innerText = "Third-year computer science student";
            break;
        case 2026:
            text.innerHTML = "Fourth-year computer science student";
            break;
        default:
            text.innerText = "Computer science student";
    }
}

export default YearUnitUpdate;