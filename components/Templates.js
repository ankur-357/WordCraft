import React from "react";

export default function Templates({ onClose, setText }) {
  function formalLetter() {
    setText(`
From: [Sender Name]
[Title] | [Company] | [Address] | [City] | [State] | [Zip]

[Date]

To: [Recipient Name]
[Title] | [Company] | [Address] | [City] | [State] | [Zip]

Dear [Recipient Name]:

// Letter Content

Sincerely,
[Your Name]
[Title]

        `);
  }
  function informalLetter() {
    setText(`
[Street]

[Area]

[City]

[Date]


Dear [Name],

// Letter Content

Lots of Love
[Your Name]
      `);
  }
  function referenceLetter() {
    setText(`
[Address of the person who is reffering]

[Date]

[Address of other company]

Dear [Name]: 

It's my pleasure to recommend [Name] for the position of [Position] at your company. [Name] and I worked together for just over [duration] years when she was a [position] in my department at [Company name]. 

// Other Content

I recommend [Name] without reservations. Please do not hesitate to reach out with any questions. You can reach me at [Email / Contact]

Sincerely, 

[Name] (signature hard copy letter)

[Name]
      `);
  }

  function coverLetter() {
    setText(`
[Today's Date]

[Hiring Manager's Name]
[Company's Address]
[Contact Details]

Dear [Mr./Ms./Mrs.] [Hiring Manager's Name],

[Intro]

[Body Paragraph]

[Call to Action / Closing ]

Sincerely,
[Your Name]
      `);
  }
  function emailToHOD() {
    setText(`
  Subject: [Subject of the Email]
  
  Dear [HOD's Name],
  
  I hope this email finds you well. I am writing to inform you about [mention the purpose or reason for writing the email].
  
  [Email Content]
  
  Thank you for your attention to this matter.
  
  Best regards,
  [Your Name]
  [Your Position / Department]
  `);
  }

  function emailToRecruiter() {
    setText(`
  Subject: Application for [Job Position]
  
  Dear [Recruiter's Name],
  
  I hope this email finds you well. I am writing to express my interest in the [Job Position] advertised on [where you found the job posting].
  
  [Email Content]
  
  Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experiences align with the requirements of the position.
  
  Best regards,
  [Your Name]
  [Your Contact Information]
  `);
  }
  function jobInquiryEmail() {
    setText(`
  Subject: Inquiry Regarding Job Opportunities
  
  Dear [Recipient's Name],
  
  I hope this email finds you well. I am writing to inquire about potential job opportunities at [Company Name].
  
  [Briefly introduce yourself and express interest in the company]
  
  Attached is my resume for your reference. I would appreciate the opportunity to discuss how my skills align with the needs of [Company Name].
  
  Thank you for considering my inquiry.
  
  Best regards,
  [Your Name]
  [Your Contact Information]
  `);
  }
  function projectCollaborationProposalEmail() {
    setText(`
  Subject: Proposal for Project Collaboration
  
  Dear [Recipient's Name],
  
  I trust this email finds you well. I am writing to propose a collaboration on [brief description of the project or idea].
  
  [Provide details about the project, your skills, and the potential benefits of collaboration]
  
  I would be delighted to discuss this proposal further at your convenience.
  
  Best regards,
  [Your Name]
  [Your Portfolio or Contact Information]
  `);
  }
  function eventInvitationEmail() {
    setText(`
  Subject: Invitation to [Event Name]
  
  Dear [Recipient's Name],
  
  I am excited to invite you to [Event Name] on [Date] at [Location].
  
  [Include event details, agenda, and RSVP information]
  
  I hope you can join us for this special occasion.
  
  Best regards,
  [Your Name]
  [Event Organizer or Contact Information]
  `);
  }
  function meetingRequestEmail() {
    setText(`
  Subject: Request for Meeting
  
  Dear [Recipient's Name],
  
  I hope this email finds you well. I am writing to request a meeting to discuss [topic or purpose of the meeting].
  
  [Details about the meeting, proposed date and time]
  
  Thank you for considering my request. Looking forward to your response.
  
  Best regards,
  [Your Name]
  [Your Contact Information]
  `);
  }

  return (
    <div className="bg-black p-2 fixed -mt-12 md:-mt-28 sm:rounded-t-md overflow-x-scroll overflow-y-hidden flex flex-col flex-wrap items-start max-w-[100vw] h-12 md:h-10">
      <div className="w-max h-max flex flex-row flex-wrap space-x-4">
        <p
          className="mb-1 cursor-pointer"
          onClick={() => formalLetter() & onClose()}
        >
          Formal Letter
        </p>
        <p
          className="mb-1 cursor-pointer"
          onClick={() => informalLetter() & onClose()}
        >
          Informal Letter
        </p>
        <p
          className="mb-1 cursor-pointer"
          onClick={() => referenceLetter() & onClose()}
        >
          Reference Letter
        </p>
        <p
          className="mb-1 cursor-pointer"
          onClick={() => coverLetter() & onClose()}
        >
          Cover Letter
        </p>
        {/* New Templates */}
        <p className="mb-1 cursor-pointer" onClick={() => emailToHOD() & onClose()}>
          Email to HOD
        </p>
        <p className="mb-1 cursor-pointer" onClick={() => emailToRecruiter() & onClose()}>
          Email to Recruiter
        </p>
        <p className="mb-1 cursor-pointer" onClick={() => meetingRequestEmail() & onClose()}>
          Meeting Request Email
        </p>
        <p className="mb-1 cursor-pointer" onClick={() => eventInvitationEmail() & onClose()}>
          Event Invitation Email
        </p>
        <p className="mb-1 cursor-pointer" onClick={() => projectCollaborationProposalEmail() & onClose()}>
          Project Collaboration Proposal Email
        </p>
        <p className="mb-1 cursor-pointer" onClick={() => jobInquiryEmail() & onClose()}>
          Job Inquiry Email
        </p>
      </div>
    </div>
  );
}
