const members = [
    { name: "Member 1", photo: "member1.jpg" },
    { name: "Member 2", photo: "member2.jpg" },
    // Add more members here
];

// Function to create team member elements
function createTeamMember(member) {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("team-member");

    const img = document.createElement("img");
    img.src = member.photo;
    img.alt = member.name + "'s photo";

    const memberName = document.createElement("div");
    memberName.classList.add("member-name");
    memberName.textContent = member.name;

    memberDiv.appendChild(img);
    memberDiv.appendChild(memberName);

    return memberDiv;
}

// Populate team members
const teamContainer = document.getElementById("teamContainer");
members.forEach(member => {
    const memberElement = createTeamMember(member);
    teamContainer.appendChild(memberElement);
});
