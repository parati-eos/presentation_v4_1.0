import React, { useState } from 'react';

const Team = ({ formData, handleChange }) => {
  const [teamMembers, setTeamMembers] = useState([
    { name: '', title: '', experience: '', linkedin: '', photo: null }
  ]);

  const handleAddMember = () => {
    if (teamMembers.length < 6) {
      setTeamMembers([...teamMembers, { name: '', title: '', experience: '', linkedin: '', photo: null }]);
    }
  };

  const handleRemoveMember = (index) => {
    if (teamMembers.length > 2) {
      const updatedTeamMembers = [...teamMembers];
      updatedTeamMembers.splice(index, 1);
      setTeamMembers(updatedTeamMembers);
    }
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index][field] = value;
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <div>
      <h2>Core Team</h2>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <label>
            Name:
            <input
              type="text"
              value={member.name}
              onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              value={member.title}
              onChange={(e) => handleTeamMemberChange(index, 'title', e.target.value)}
            />
          </label>
          <label>
            Experience:
            <textarea
              value={member.experience}
              onChange={(e) => handleTeamMemberChange(index, 'experience', e.target.value)}
            />
          </label>
          <label>
            LinkedIn:
            <input
              type="text"
              value={member.linkedin}
              onChange={(e) => handleTeamMemberChange(index, 'linkedin', e.target.value)}
            />
          </label>
          <label>
            Photograph:
            <input
              type="file"
              accept="image/*, application/pdf"
              onChange={(e) => handleTeamMemberChange(index, 'photo', e.target.files[0])}
            />
          </label>
          {teamMembers.length > 2 && (
            <button type="button" onClick={() => handleRemoveMember(index)}>Remove</button>
          )}
        </div>
      ))}
      {teamMembers.length < 6 && (
        <button type="button" onClick={handleAddMember}>Add Team Member</button>
      )}
    </div>
  );
};

export default Team;
