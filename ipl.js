function showTeamInfo(teamName) {
    const teamInfo = {
        "Mumbai Indians": {
            description: "Mumbai Indians are one of the most successful IPL teams with multiple championships.",
            captain: "hardik pandya",
            founded: 2008,
            titles: 5
        },
        "Chennai Super Kings": {
            description: "Chennai Super Kings is known for their consistency with of 5 titles and leadership under great MS Dhoni.",
            captain: "ruturaj gaikwad",
            founded: 2008,
            titles: 5 
        },
        "royal challengers bangaluru": {
            description: " royal challengers bangaluru is one of the most overrated team with zero achievements.",
            captain: "not decided",
            founded: 2008,
            titles: 0
        },
        "kolkata knight riders": {
            description: "kolkata knight riders is known for their consistency and gautam gambhir.",
            captain: "venkatesh iyer",
            founded: 2008,
            titles: 3 
        },
        "sunrisers hydrabad": {
            description: "sunrisers hydrabad is good team but not consistent.",
            captain: "pat cummins",
            founded: 2012,
            titles: 1
        },
        "delhi capitals": {
            description: "delhi capitals is one of those teams with zero trophies.",
            captain: "kl rahul",
            founded: 2008,
            titles: 0 
        },
        "rajasthan royals": {
            description: " rajasthan royals have one one thing to known first champions.",
            captain: "sanju samson",
            founded: 2008,
            titles: 1
        },
        "gujarat titans": {
            description: "gujarat titans is one of new team with very good consistancy.",
            captain: "shubhman gill",
            founded: 2022,
            titles: 1 
        },
        "punjab kings": {
            description: " one of most failled team of ipl but they have preity zinta to support.",
            captain: "shreyas iyer",
            founded: 2008,
            titles: 0
        },
        "lucknow super giants": {
            description: "lucknow super giants is also new team with average record",
            captain: "rishab pant",
            founded: 2022,
            titles: 0 
        }
    };

    const infoSection = document.getElementById("team-info");
    const teamData = teamInfo[teamName];

    if (teamData) {
        infoSection.innerHTML = `
            <h3>${teamName}</h3>
            <p><strong>Captain:</strong> ${teamData.captain}</p>
            <p><strong>Founded:</strong> ${teamData.founded}</p>
            <p><strong>IPL Titles:</strong> ${teamData.titles}</p>
            <p>${teamData.description}</p>
        `;
    } else {
        infoSection.innerHTML = "<p>No information available.</p>";
    }
}
