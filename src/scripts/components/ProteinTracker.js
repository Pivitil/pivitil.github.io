export default function ProteinTracker() {
    return `
        <h2>Track Protein</h2>
        <form id="protein-form">
            <div>
                <input type="number" id="protein-goal" name="protein-goal" placeholder="Today's Protein Goal" required>
            </div>
            <div>
                <input type="number" id="protein-intake" name="protein-intake" placeholder="Enter Protein Intake" required>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div id="protein-status"></div>
    `;
}