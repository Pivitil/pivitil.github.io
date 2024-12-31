export default function HabitTracker() {
    return `
        <h2>Track Habits</h2>
        <form id="habit-form">
            <div>
                <select id="sleep" name="sleep" required>
                    <option value="" disabled selected>How did you sleep?</option>
                    <option value="Great">Great</option>
                    <option value="Good">Good</option>
                    <option value="Poor">Poor</option>
                </select>
            </div>
            <div>
                <select id="stress" name="stress" required>
                    <option value="" disabled selected>What is your stress level?</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div>
                <input type="tel" id="weight" name="weight" placeholder="Enter Your Weight" required>
            </div>
            <div>
                <textarea id="notes" name="notes" placeholder="What's on your mind?" maxlength="400" rows="4"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    `;
}