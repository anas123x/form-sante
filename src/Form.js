import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormStyle.css"
import axios from 'axios';
import ReactSlider from 'react-slider'
const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDepartement, setSelectedDepartement] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [healthExperience, setHealthExperience] = useState('');
  const [otherClubsExperience, setOtherClubsExperience] = useState('');
  const [clubObjective, setClubObjective] = useState('');
  const [availability, setAvailability] = useState(1);
  const [role, setRole] = useState('');
  const [amelioration, setAmelioration] = useState('');
  const [apport, setApport] = useState('');
  const [importance, setImportance] = useState('');
  const [sucess,setSucess]=useState(false)
  const [formValid, setFormValid] = useState(false); 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDepartementChange = (event) => {
    setSelectedDepartement(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleAmeliorationChange = (event) => {
    setAmelioration(event.target.value);
  };
  const handleApportChange = (event) => {
    setApport(event.target.value);
  };
  const handleImportanceChange = (event) => {
    setImportance(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleMedicalConditionsChange = (event) => {
    setMedicalConditions(event.target.value);
  };

  const handleHealthExperienceChange = (event) => {
    setHealthExperience(event.target.value);
  };

  const handleOtherClubsExperienceChange = (event) => {
    setOtherClubsExperience(event.target.value);
  };

  const handleClubObjectiveChange = (event) => {
    setClubObjective(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
   
    setAvailability(event.target.value);
  };
  useEffect(() => {
    // Validation logic to check if any required field is empty
    const requiredFields = [
      name,
      email,
      phoneNumber,
      selectedOption,
      medicalConditions,
      healthExperience,
      otherClubsExperience,
      clubObjective,
      selectedDepartement,
      availability,
      role,
      amelioration,
      apport,
      importance
    ];

    const isValid = requiredFields.every(field => field !== '' && field !== null && field !== undefined);

    setFormValid(isValid); // Update form validity state
  }, [
    name,
    email,
    phoneNumber,
    selectedOption,
    medicalConditions,
    healthExperience,
    otherClubsExperience,
    clubObjective,
    selectedDepartement,
    availability,
    role,
    amelioration,
    apport,
    importance
  ]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phoneNumber,
      selectedOption,
      medicalConditions,
      healthExperience,
      otherClubsExperience,
      clubObjective,
      selectedDepartement,
      availability,
      role,
      amelioration,
      apport,
      importance

    };

    try {
      const response = await axios.post('https://sante6backend.onrender.com', formData);

      console.log('Form data sent successfully!');
      setSucess(true)
      // Handle any further actions upon successful form submission
    } catch (error) {
      console.error('There was a problem sending the form data:', error.message);
      // Handle error scenarios, show error messages, etc.
    }
  };


  return (
    <div className='full-screen-div'>
        <div className='form-container'>
         
    <form onSubmit={handleSubmit} className="container">
          <div class="mb-3">
    <h5>Nom et Prénom</h5>
    <input  onChange={handleNameChange} class="form-control custom-input" />

  </div>
  <div class="mb-3">
    <h5 >Email address</h5>
    <input type="email" onChange={handleEmailChange} class="form-control custom-input"/>
  </div>
  <div class="mb-3">
    <h5 >Numéro Téléphone</h5>
    <input onChange={handlePhoneNumberChange} type="number" class="form-control custom-input" />
  </div>
  <div className="mb-4">
        <h5>Quelle est votre branche ?</h5>
        <div className="form-check ">
          <input
            className="form-check-input custom-input"
           
            type="radio"
            value="ESB"
            checked={selectedOption === 'ESB'}
            onChange={handleOptionChange}
          />
          <label className="form-check-label">ESB</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input custom-input" 
            type="radio"
            value="prepa"
            checked={selectedOption === 'prepa'}
            onChange={handleOptionChange}
          />
          <label className="form-check-label">Esprit prépa</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input custom-input" 
            type="radio"
            value="ingenieur"
            checked={selectedOption === 'ingenieur'}
            onChange={handleOptionChange}
          />
          <label className="form-check-label">Esprit ingénieur </label>
        </div>
    
      </div>
  <div class="mb-4">
    <h5 >Avez-vous des conditions médicales ou des allergies que le club devrait connaître pour assurer votre sécurité ?</h5>
    <textarea onChange={handleMedicalConditionsChange} class="form-control custom-input" />
  </div>
  <div class="mb-4">
    <h5 >Avez-vous de l'expérience dans le domaine de la santé?</h5>
    <textarea  onChange={handleHealthExperienceChange} class="form-control custom-input" />
 
  </div>
  <div class="mb-4">
    <h5 >Avez-vous de l'expérience dans des autres clubs ?</h5>
    <textarea onChange={handleOtherClubsExperienceChange} class="form-control custom-input" />
  </div>
  <div class="mb-4">
    <h5 >Quel est votre objectif principal en rejoignant notre club de santé?</h5>
    <textarea onChange={handleClubObjectiveChange} class="form-control custom-input" />
  </div>
  <div class="mb-4">

 <h5 >
              En utilisant une gradation de 1 à 10, comment évalueriez-vous votre disponibilité pour les activités du club de santé?
            </h5>
  <input
              type="range"
              className="form-range"
              id="availabilitySlider"
              min="1"
              max="10"
              step={1}
              defaultValue={1}
              
              onChange={handleAvailabilityChange}
            />
             <p className='text-center'>Disponibilité: {availability}</p>

  </div>
  <div>
  <h5>Choisir un département:</h5>
        <div className="form-check ">
          <input
            className="form-check-input custom-input"
           
            type="radio"
            value="santé et bien être"
            checked={selectedDepartement === 'santé et bien être'}
            onChange={handleDepartementChange}
          />
          <label className="form-check-label">Département santé et bien être</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input custom-input" 
            type="radio"
            value="sante mentale"
            checked={selectedDepartement === 'sante mentale'}
            onChange={handleDepartementChange}
          />
          <label className="form-check-label">Département santé mentale</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input custom-input" 
            type="radio"
            value="communication"
            checked={selectedDepartement === 'communication'}
            onChange={handleDepartementChange}
          />
          <label className="form-check-label">Département communication</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input custom-input" 
            type="radio"
            value="digital"
            checked={selectedDepartement === 'digital'}
            onChange={handleDepartementChange}
          />
          <label className="form-check-label">Département digital healthcare</label>
        </div>
      </div>
    {selectedDepartement?<div>
      <div class="mt-4">
    <h5 >Comment définiriez-vous le rôle de ce département dans le club de santé ?</h5>
    <textarea onChange={handleRoleChange} class="form-control custom-input" />
  </div>
  <div class="mt-4">
    <h5 >Avez-vous des idées  pour améliorer le département de {selectedDepartement}? </h5>
    <textarea onChange={handleAmeliorationChange} class="form-control custom-input" />
  </div>
  <div class="mt-4">
    <h5 >Quelles compétences, expériences ou stratégies apportez-vous au département de {selectedDepartement}? </h5>
    <textarea onChange={handleApportChange} class="form-control custom-input" />
  </div>
  <div class="mt-4">
    <h5 >comment évalueriez-vous l'importance de ce département pour le club et pour vous en tant que responsable ou membre?</h5>
    <textarea onChange={handleImportanceChange} class="form-control custom-input" />
  </div>
    </div>:null}
   <div className='mt-5 d-flex justify-content-center'>
   <button type="submit" className="btn btn-primary text-center" disabled={!formValid}>Submit</button>
   </div>
   {sucess?<div class="alert alert-success text-center mt-3" role="alert">
  Vous avez rempli le formulaire avec succés 
</div>:null}
    </form>
    </div>
    </div>
  );
};

export default Form;
