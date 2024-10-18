// import React from 'react'

// import '../styles/UserPageSearchSkillsStyle.css'


// function UserPageSearchSkills () {
//   return (
//     <div id="search" className='search'>
//       <div className='container'>
//         <div className='search-text'>
//           <h1>Search Skills</h1>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserPageSearchSkills;

import React, { useState } from 'react';
import '../styles/UserPageSearchSkillsStyle.css'; // Add CSS styles
import { FaSearch } from 'react-icons/fa';
import customer1 from '../assets/customer1.jpeg'
import popular1 from '../assets/popular1.png'
import popular2 from '../assets/popular2.png'
import popular3 from '../assets/popular3.png'
import popular4 from '../assets/popular4.png'

const SkillsSearchPage = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const skillsData = [
    {
      "skillName": "Product Manager",
      "coins": "30 coins",
      "photoUrl": popular1,
      "person": {
        "name": "John Doe",
        "city": "Toronto",
        "rating": "★★★★☆",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Resume Writer",
      "coins": "50 coins",
      "photoUrl": popular2,
      "person": {
        "name": "Jane Smith",
        "city": "Vancouver",
        "rating": "★★★★★",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Cleaner",
      "coins": "40 coins",
      "photoUrl": popular3,
      "person": {
        "name": "Alice Johnson",
        "city": "Ottawa",
        "rating": "★★★★☆",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Designer",
      "coins": "25 coins",
      "photoUrl": popular4,
      "person": {
        "name": "Chris Evans",
        "city": "Montreal",
        "rating": "★★★☆☆",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Day care",
      "coins": "35 coins",
      "photoUrl": popular1,
      "person": {
        "name": "Emily Carter",
        "city": "Calgary",
        "rating": "★★★★★",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Hair styler",
      "coins": "45 coins",
      "photoUrl": popular2,
      "person": {
        "name": "Robert Brown",
        "city": "Halifax",
        "rating": "★★★★☆",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Content Writer",
      "coins": "20 coins",
      "photoUrl": popular3,
      "person": {
        "name": "Sophia Lee",
        "city": "Edmonton",
        "rating": "★★★★★",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Programmer",
      "coins": "54 coins",
      "photoUrl": popular4,
      "person": {
        "name": "Chris Evans",
        "city": "Montreal",
        "rating": "★★★☆☆",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Carpenter",
      "coins": "45 coins",
      "photoUrl": popular1,
      "person": {
        "name": "Emily Carter",
        "city": "Calgary",
        "rating": "★★★★★",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Painter",
      "coins": "45 coins",
      "photoUrl": popular2,
      "person": {
        "name": "Robert Brown",
        "city": "Halifax",
        "rating": "★★★★☆",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    {
      "skillName": "Film maker",
      "coins": "45 coins",
      "photoUrl": popular3,
      "person": {
        "name": "Sophia Lee",
        "city": "Edmonton",
        "rating": "★★★★★",
        "photo": customer1
      },
      "buttonText": "Request"
    },
    // {
    //   "skillName": "Financial Analyst",
    //   "coins": "55 coins",
    //   "photoUrl": "https://via.placeholder.com/195x120",
    //   "person": {
    //     "name": "Michael King",
    //     "city": "Winnipeg",
    //     "rating": "★★★☆☆",
    //     "photo": "https://via.placeholder.com/46"
    //   },
    //   "buttonText": "Request"
    // },
    // {
    //   "skillName": "SEO Specialist",
    //   "coins": "30 coins",
    //   "photoUrl": "https://via.placeholder.com/195x120",
    //   "person": {
    //     "name": "Linda Green",
    //     "city": "Quebec City",
    //     "rating": "★★★★★",
    //     "photo": "https://via.placeholder.com/46"
    //   },
    //   "buttonText": "Request"
    // },
    // {
    //   "skillName": "Cybersecurity Expert",
    //   "coins": "60 coins",
    //   "photoUrl": "https://via.placeholder.com/195x120",
    //   "person": {
    //     "name": "David Martin",
    //     "city": "Victoria",
    //     "rating": "★★★★☆",
    //     "photo": "https://via.placeholder.com/46"
    //   },
    //   "buttonText": "Request"
    // }
  ];

  // Filter skills based on the search term
  const filteredSkills = skillsData.filter(skill =>
    skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="search" className='search'>
      <div className='container'>
        <div className='search-text'>
          <h1>Search Skills</h1>

        </div>
        <div className="skills-search-page">
          {/* Search Box */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search Anything"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Skills List */}
          <div className="skills-list">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-info">
                    <h3>{skill.skillName}</h3>
                    <p>{skill.coins}</p>
                  </div>
                  <img src={skill.photoUrl} alt={skill.skillName} className="skill-photo" />

                  <div className="person-info">
                    <img src={skill.person.photo} alt={skill.person.name} className="person-photo" />
                    <div className="person-details">
                      <h4>{skill.person.name}</h4>
                      <p>{skill.person.city}</p>
                      <p>{skill.person.rating}</p>
                      <button className="request-button">{skill.buttonText}</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No skills found</p>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default SkillsSearchPage;



