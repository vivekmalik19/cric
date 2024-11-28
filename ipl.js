function showTeamInfo(teamName) {
    const teamInfo = {
        "Mumbai Indians": {
            logo: "https://th.bing.com/th?id=OIP.qWWYEf6s8lcft4_9MwpwtQHaFq&w=285&h=218&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            description: "Mumbai Indians are one of the most successful IPL teams with multiple championships.",
            captain: "hardik pandya",
            founded: 2008,
            titles: 5
        },
        "Chennai Super Kings": {
            logo: "https://th.bing.com/th?id=OIP.X4CgIZC9lODb9jAgwXh_EQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            description: "Chennai Super Kings is known for their consistency with of 5 titles and leadership under great MS Dhoni.",
            captain: "ruturaj gaikwad",
            founded: 2008,
            titles: 5 
        },
        "royal challengers bangaluru": {
            logo:"https://th.bing.com/th?id=OIP.g2L0j-3TMJRPYkefo75xbwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            description: " royal challengers bangaluru is one of the most overrated team with zero achievements.",
            captain: "not decided",
            founded: 2008,
            titles: 0
        },
        "kolkata knight riders": {
            logo: "https://th.bing.com/th?id=OIP.a8yFhslTeEjLPPDYmNYvvQHaEZ?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "kolkata knight riders is known for their consistency and gautam gambhir.",
            captain: "venkatesh iyer",
            founded: 2008,
            titles: 3 
        },
        "sunrisers hydrabad": {
            logo: "https://th.bing.com/th?id=OIP.a8yFhslTeEjLPPDYmNYvvQHaEZ?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "sunrisers hydrabad is good team but not consistent.",
            captain: "pat cummins",
            founded: 2012,
            titles: 1
        },
        "delhi capitals": {
            logo: "https://th.bing.com/th?id=OIP.jv7zjtl1pgi-t54XwenMswHaEU&w=327&h=190&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            description: "delhi capitals is one of those teams with zero trophies.",
            captain: "kl rahul",
            founded: 2008,
            titles: 0 
        },
        "rajasthan royals": {
            logo: "https://th.bing.com/th?id=OIP.RRM5n_zF6oOe7qsf7ITyfQAAAA&w=282&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            description: " rajasthan royals have one one thing to known first champions.",
            captain: "sanju samson",
            founded: 2008,
            titles: 1
        },
        "gujarat titans": {
            logo: "https://th.bing.com/th?id=OIP.uv58EdbsMjiHzgkw91rEXwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            description: "gujarat titans is one of new team with very good consistancy.",
            captain: "shubhman gill",
            founded: 2022,
            titles: 1 
        },
        "punjab kings": {
            logo: "https://th.bing.com/th?id=OIP.xWcRqthg8_VnvsRCJO2cMwHaEC?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: " one of most failled team of ipl but they have preity zinta to support.",
            captain: "shreyas iyer",
            founded: 2008,
            titles: 0
        },
        "lucknow super giants": {
            logo: "https://www.iplticket.co.in/wp-content/uploads/2022/03/IPL-Tickets-Lucknow.jpg",
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
function scrollToDescription(teamId) {
    const teamDescription = document.getElementById(teamId);
    teamDescription.scrollIntoView({
        behavior: 'smooth'
    });
}
