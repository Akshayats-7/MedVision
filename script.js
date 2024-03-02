function predictDisease(symptoms) {
    const diseaseMap = {
        "itching": "Fungal infection",
        "skin_rash": "Fungal infection",
        "nodal_skin_eruptions": "Fungal infection",
        "dischromic_patches": "Fungal infection",
        "continuous_sneezing": "Allergy",
        "shivering_chills": "Allergy",
        "watering_from_eyes": "Allergy",
        "stomach_pain": "GERD",
        "acidity": "GERD",
        "ulcers_on_tongue": "GERD",
        "vomiting": "GERD",
        "cough": "GERD",
        "chest_pain": "GERD",
        "fatigue": "Diabetes",
        "weight_loss": "Diabetes",
        "restlessness": "Diabetes",
        "lethargy": "Diabetes",
        "irregular_sugar_level": "Diabetes",
        "blurred_and_distorted_vision": "Diabetes",
        "obesity": "Diabetes",
        "excessive_hunger": "Diabetes",
        "increased_appetite": "Diabetes",
        "polyuria": "Diabetes",
        "high_fever": "Bronchial Asthma",
        "breathlessness": "Bronchial Asthma",
        "family_history": "Bronchial Asthma",
        "mucoid_sputum": "Bronchial Asthma"
    };

    for (const symptom of symptoms) {
        if (diseaseMap.hasOwnProperty(symptom)) {
            return diseaseMap[symptom];
        }
    }

    return "No disease found";
}

function generateAppointment(disease) {
    switch (disease) {
        case "Fungal infection":
        case "Allergy":
            return "Your appointment is successful\nDr. Alen Mariyam  (Dermatology)\nTime: 10:00 am";
        case "GERD":
            return "Your appointment is successful\nDr. Akshaya T S (Gastrology)\nTime: 10:00 am";
        case "Diabetes":
            return "Your appointment is successful\nDr. Jythra Prasad (Endocrinology)\nTime: 11:00 am";
        case "Bronchial Asthma":
            return "Your appointment is successful\nDr. Nena Mariyam Reji (Respiratory)\nTime: 1:00 pm";
        default:
            return "No appointment scheduled";
    }
}

function predict() {
    const symptomsInput = document.getElementById("symptoms").value.trim().toLowerCase();
    const symptomsArray = symptomsInput.split(",");
    const result = document.getElementById("result");
    const disease = predictDisease(symptomsArray);
    const appointment = generateAppointment(disease);
    result.textContent = `Predicted Disease: ${disease}`;
    result1.textContent = ` ${appointment}`;
}
