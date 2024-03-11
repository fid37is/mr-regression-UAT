/// <reference types="Cypress" />

describe('Verify incidents can be Managed by users with permissions', () => {

  beforeEach(function() {

    cy.visit('https://mitigateriskuat.baobabtesting.com/')
    cy.get('form').find('[data-testid="Email"]').type(
      'mistarfid+212023@gmail.com')
    cy.get('form').find('[name="password"]').type(
      '1234Phyl!')
    cy.contains('Login').click().wait(2000)

  })


  it('Verify incident can be Saved draft', () => {
      cy.contains('Report Incident').click()
      cy.get('[aria-autocomplete="list"]').eq(0).click()
      cy.get('#react-select-2-option-0').click()
      cy.get('[aria-autocomplete="list"]').eq(1).click()
      cy.contains('John Darwin').click()
      cy.get('[data-testid="Choking"]').dblclick()

      cy.get('[data-testid="datetime-picker"]').click().type('2024-01-05T08:20')
        
      cy.get('.css-19bb58m, #react-select-55-input').eq(0).click()
      cy.contains('Cyril Obi').click()

      cy.get('[name="Blood_Pressure__c"]').eq(0).type('23/99')
      cy.get('[name="Finger_Stick__c"]').eq(0).type('99')
      cy.get('[name="O2_Saturation__c"]').eq(0).type('99')
      cy.get('[name="Pulse__c"]').eq(0).type('56')
      cy.get('[name="Temperature__c"]').eq(0).type('59')

      cy.get('.css-19bb58m, #react-select-55-input').eq(1).click()
      cy.contains('Disoriented').click()
      cy.get('.css-19bb58m, #react-select-55-input').eq(2).click()
      cy.contains('Oriented x1').click()

      cy.get('#Supervisor_Notified__c-radio-1').check()
      cy.get('#DON_Notified__c-radio-1').check()
      cy.get('#Administrator_Notified__c-radio-1').check()
      cy.get('#Has_Resident_Rep_been_notified__c-radio-1').check()

      cy.get('[name="Explain_why_resident_rep_not_notified__c"]').type('Nothing at all')

      cy.contains('Save').click()

      cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'Saved successfully')

  })

  it('Verify user can Edit and submit draft incident', () => {

    cy.contains('Incidents').click()
    cy.contains('Draft').click()
    cy.get('[data-testid="view-incident-btn"]').eq(0).click()


    //change Who initially reported incident
    cy.get('[aria-label="Caregiver_at_Time_of_Incident__c"]').click()
    cy.get('[aria-selected="false"]').eq(4).click()

    //change temperature value
    cy.get('[name="Respiration__c"]').eq(0).type('22')
    cy.get('span.mr-3 img').eq(0).should('be.visible')

    cy.contains('Next').click()

    //DETAILS SECTION
    cy.get('[aria-label="Place_of_incident__c"]').click()
    cy.contains('Resident Bedroom').click()
    cy.get('[aria-label="What_Was_Resident_Doing_Time_of_Incident__c"]').click()
    cy.contains('In bed').click()
    cy.get('[aria-label="Choking_Occurred_During__c"]').click()
    cy.contains('Lunch').click()
    cy.get('[data-testid="Resident_Choked_On__c-checkbox-1"]').check()
    cy.get('[name="Describe_Food_and_Consistency__c"]').type('Something here okay')
    cy.get('[name="Position_of_Resident__c"]').type('was on the ground facing down')
    cy.get('[data-testid="Symptoms_during_choking__c-checkbox-2"]').check()
    cy.get('[aria-label="Choking_Eating_Assistance__c"]').click()
    cy.contains('Limited Assist').click()
    cy.get('[data-testid="Injuries_found__c-radio-0"]').check()
    cy.contains('Add').click()
    cy.get('[data-testid="datetime-picker"]').click().type('2024-01-18T08:20')
    cy.get('[aria-label="Injuries__c[0].Injury_Type__c"]').click()
    cy.contains('Bruise').click()
    cy.get('[aria-label="Injuries__c[0].Area__c"]').click()
    cy.get('[aria-selected="false"]').eq(1).click()
    cy.get('[aria-label="Injuries__c[0].Location__c"]').click()
    cy.contains('Brow').click()
    cy.get('[name="Injuries__c[0].Side__c"]').check()
    cy.contains('Done').click()

    cy.get('[data-testid="Physician_Notified__c-radio-0"]').check()
    cy.get('[data-testid="Was_Choking_Witnessed__c-radio-1"]').check()

    cy.get('[aria-label="Physician_Name__c"]').click()
    cy.contains('Cyril Obi').click()
    cy.get('[data-testid="datetime-picker"]').eq(0).click().type('2024-01-18T08:20')

    cy.get('[data-testid="Ambulance_called__c-radio-0"]').check()
    cy.get('[data-testid="datetime-picker"]').eq(1).click().type('2024-01-18T08:20')

    cy.get('[data-testid="Sent_to_Acute_Care_Facility__c-radio-0"]').check()
    cy.get('[data-testid="datetime-picker"]').eq(2).click().type('2024-01-18T08:20')
    cy.get('[name="Acute_Care_Facility_Name__c"]').type('Thompson Agri')

    cy.get('[name="First_Aid__c"]').type('Given prompt FA medication')
    cy.get('span.mr-3 img').eq(1).should('be.visible')

    cy.contains('Next').click()
    

    //FACTORS SECTION
    cy.get('[data-testid="Compliance_With_Diet__c-radio-2"]').check()
    cy.get('[data-testid="Known_Behavior_List__c-checkbox-2"]').check()

    cy.get('span.mr-3 img').eq(2).should('be.visible')

    cy.contains('Next').click()

    //STATEMENT SECTION
    cy.get('[data-testid="Care_Provided_Prior_to_Incident__c-checkbox-1"]').check()
    cy.get('[name="Nurse_Name_Text__c"]').type('Nurse Jema')
    cy.get('[name="Nurse_Statement__c"]').type('Statement was written')

    cy.contains('Add').click()
    cy.get('[aria-label="Interviews__c[0].Interviewer_Role__c"]').click()
    cy.get('[aria-selected="false"]').eq(0).click()

    cy.get('[aria-label="Interviews__c[0].Interviewer_s_Name__c"]').click()
    cy.get('[aria-selected="false"]').eq(4).click()
    
    cy.get('[aria-label="Interviews__c[0].Interviewee_Role__c"]').click()
    cy.get('[aria-selected="false"]').eq(1).click()
    
    cy.get('[aria-label="Interviews__c[0].Interviewee_Name__c"]').click()
    cy.get('[aria-selected="false"]').eq(0).click()

    cy.get('[data-testid="datetime-picker"]').click().type('2024-01-18T08:20')

    cy.get('[name="Interviews__c[0].Interviewee_Statement__c"]').type('I was present when it happened')
    cy.contains('Done').click()

    cy.get('span.mr-3 img').eq(3).should('be.visible')
    cy.contains('Next').click()

    //RESPONSE
    cy.get('[data-testid="Documentation_Assessments__c-checkbox-0"]').check()
    cy.get('span.mr-3 img').eq(4).should('be.visible')
    cy.contains('Submit').click()

    cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'Incident type: Choking was created successfully!!!')

  })

  it('Verify user can Edit and Resubmitted incident', () => {

    cy.contains('Incidents').click()
    cy.get('[data-testid="view-incident-btn"]').eq(1).click().wait(4000)
    cy.contains('Edit').click()


    //change Who initially reported incident
    cy.get('[aria-label="Caregiver_at_Time_of_Incident__c"]').click()
    cy.get('[aria-selected="false"]').eq(4).click()

    //change temperature value
    cy.get('span.mr-3 img').eq(0).should('be.visible')

    cy.contains('Next').click()

    //DETAILS SECTION

    cy.contains('Next').click()
    

    //FACTORS SECTION
    cy.get('span.mr-3 img').eq(2).should('be.visible')

    cy.contains('Next').click()

    //STATEMENT SECTION
    cy.get('[data-testid="Care_Provided_Prior_to_Incident__c-checkbox-1"]').check()
    cy.get('[name="Nurse_Name_Text__c"]').type('Aproko Doctor')
    cy.get('[name="Nurse_Statement__c"]').type('Nothing')


    cy.get('span.mr-3 img').eq(3).should('be.visible')
    cy.contains('Next').click()

    //RESPONSE
    cy.contains('Resubmit').click()

    cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'Incident type: Choking was Updated successfully!!!')

  })

  it('Verify user can Delete draft Incident', () =>{

    cy.contains('Incidents').click()
    cy.contains('Draft').click().wait(4000)
    cy.get('[data-testid="view-incident-btn"]').eq(0).click()
    
    cy.contains('Delete').click()
    cy.get('div.sc-jaXxmE.coASSZ').should('be.visible')
    cy.get('button.sc-kMkxaj.bHbZGP').click()


    cy.get('.Toastify__toast-body').should('be.visible')
  })

  it.only('Verify Search works on the incidents list page', () => {

    cy.contains('Incidents').click()
    cy.get('[data-testid="search-bar"]').type('Choking').wait(4000)
    cy.get('[data-testid="search-bar"]').clear()
    cy.get('[data-testid="search-bar"]').type('Submitted').wait(4000)
    cy.get('[data-testid="search-bar"]').clear()
    cy.get('[data-testid="search-bar"]').type('Same Day Appointment').wait(4000)
    cy.get('[data-testid="search-bar"]').clear()
    cy.get('[data-testid="search-bar"]').type('John Darwin').wait(4000)

  })

  it('Verify incident can be Submitted Straight up', () => {
    cy.contains('Report Incident').click()
  })

})
