!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        
        .team-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }

        .team-member {
            width: 200px;
            height: 250px;
            margin: 10px;
            border: 2px solid #ccc;
            border-radius: 5px;
            overflow: hidden;
            position: relative;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .team-member:hover {
            transform: translateY(-5px);
        }

        .team-member img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .member-name {
            text-align: center;
            padding: 10px;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="team-container" id="teamContainer"></div>

    <script>
        // Sample member data (you can replace this with actual member data)
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
    </script>
</body>
</html>
