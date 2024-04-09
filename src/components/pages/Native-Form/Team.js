import React, { useState, useContext } from "react";
// Create context for team data
const TeamDataContext = React.createContext();

// Custom hook to use team data context
const useTeamData = () => {
  return useContext(TeamDataContext);
};

const TeamProvider = ({ children }) => {
  // Initialize with two team members by default
  const [teamMembers, setTeamMembers] = useState([
    { name: "", title: "", experience: "", linkedin: "", photo: null, photoUrl: null },
    { name: "", title: "", experience: "", linkedin: "", photo: null, photoUrl: null }
  ]);

  // Function to update team members
  const updateTeamMembers = (members) => {
    setTeamMembers(members);
  };

  return (
    <TeamDataContext.Provider value={{ teamMembers, updateTeamMembers }}>
      {children}
    </TeamDataContext.Provider>
  );
};

const Team = ({formData}) => {
  const { teamMembers, updateTeamMembers } = useTeamData();
  formData['teamMembers'] = teamMembers;
  const handleAddMember = () => {
    if (teamMembers.length < 6) {
      updateTeamMembers([
        ...teamMembers,
        { name: "", title: "", experience: "", linkedin: "", photo: null, photoUrl: null }
      ]);
    }
  };

  const handleRemoveMember = (index) => {
    if (teamMembers.length > 2) {
      const updatedTeamMembers = [...teamMembers];
      updatedTeamMembers.splice(index, 1);
      updateTeamMembers(updatedTeamMembers);
    }
  };

  const handleTeamMemberChange = async (index, field, value) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index][field] = value;

    updateTeamMembers(updatedTeamMembers);
  };

  return (
    <>
      <br />

      <div className="textInputQuestions">
        <label>
          Can you provide background information about the founder(s) and key
          members of your core team, including details about their education,
          expertise, and experience that contribute to the company's success?*
        </label>
        <br />
        {teamMembers.map((member, index) => (
          <>
            <div key={index} className="team-row ">
              <input
                type="text"
                value={member.name}
                placeholder={`Name ${index + 1}`}
                onChange={(e) =>
                  handleTeamMemberChange(index, "name", e.target.value)
                }
                required
              />
              <input
                type="text"
                value={member.title}
                placeholder={`Title ${index + 1}`}
                onChange={(e) =>
                  handleTeamMemberChange(index, "title", e.target.value)
                }
                required
              />
              <input
                type="text"
                value={member.linkedin}
                placeholder={`LinkedIn ${index + 1}`}
                onChange={(e) =>
                  handleTeamMemberChange(index, "linkedin", e.target.value)
                }
              />
              {teamMembers.length > 2 && (
                <div
                  className="close-button"
                  type="button"
                  onClick={() => handleRemoveMember(index)}
                >
                  <img src={close}></img>
                </div>
              )}
              <textarea
                value={member.experience}
                placeholder={`Experience ${index + 1}`}
                onChange={(e) =>
                  handleTeamMemberChange(index, "experience", e.target.value)
                }
                required
              />
              <div className="file-close-container">
                <div>
                  <input
                    type="file"
                    accept="image/*, application/pdf"
                    onChange={(e) =>
                      handleTeamMemberChange(index, "photo", e.target.files[0])
                    }
                  />
                  {member.photoUrl && (
                    <img
                      src={member.photoUrl}
                      alt={`Photo of ${member.name}`}
                    />
                  )}
                </div>
              </div>
            </div>
            <br />
          </>
        ))}
        {teamMembers.length < 6 && (
          <button
            className="add-row-button"
            type="button"
            onClick={handleAddMember}
          >
            Add Team Member
          </button>
        )}
      </div>
      <br />
    </>
  );
};

export { Team, TeamProvider, useTeamData };
