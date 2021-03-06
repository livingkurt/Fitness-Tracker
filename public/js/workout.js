async function initWorkout() {
    const lastWorkout = await API.getLastWorkout();
    //   console.log(lastWorkout)
    console.log("Last workout:", lastWorkout);
    if (lastWorkout) {
        document
            .querySelector("a[href='/exercise?']")
            .setAttribute("href", `/exercise?id=${lastWorkout._id}`);
        // Initialize a variable
        let total_duration = 0
        // Loop through the last exercises and add up all of the duration
        lastWorkout.exercises.forEach((exercise) => {
            // Add each exercise duration to the total duration
            total_duration = total_duration + exercise.duration
        })

        const workoutSummary = {
            date: formatDate(lastWorkout.day),
            // Add in the total duration to the Last Workout Summary
            totalDuration: total_duration,
            numExercises: lastWorkout.exercises.length,
            ...tallyExercises(lastWorkout.exercises)
        };

        renderWorkoutSummary(workoutSummary);
    } else {
        renderNoWorkoutText()
    }
}

function tallyExercises(exercises) {
    const tallied = exercises.reduce((acc, curr) => {
        if (curr.type === "resistance") {
            acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
            acc.totalSets = (acc.totalSets || 0) + curr.sets;
            acc.totalReps = (acc.totalReps || 0) + curr.reps;
        } else if (curr.type === "cardio") {
            acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
        }
        return acc;
    }, {});
    return tallied;
}

function formatDate(date) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return new Date(date).toLocaleDateString(options);
}

function renderWorkoutSummary(summary) {
    const container = document.querySelector(".workout-stats");

    const workoutKeyMap = {
        date: "Date",
        totalDuration: "Total Workout Duration",
        numExercises: "Exercises Performed",
        totalWeight: "Total Weight Lifted",
        totalSets: "Total Sets Performed",
        totalReps: "Total Reps Performed",
        totalDistance: "Total Distance Covered"
    };

    Object.keys(summary).forEach(key => {
        const p = document.createElement("p");
        const strong = document.createElement("strong");

        strong.textContent = workoutKeyMap[key];
        const textNode = document.createTextNode(`: ${summary[key]}`);

        p.appendChild(strong);
        p.appendChild(textNode);

        container.appendChild(p);
    });
}

function renderNoWorkoutText() {
    const container = document.querySelector(".workout-stats");
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = "You have not created a workout yet!"

    p.appendChild(strong);
    container.appendChild(p);
}

initWorkout();
