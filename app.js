const nodemailer = require("nodemailer");

const fs = require("./Teksystems.json");

const html = `

<p> I hope this email finds you well. I am writing to inquire about any job opportunities for a Full Stack Developer that may be available at TEK Systems. I am very interested in joining your team and believe that my skills and experience would be a great fit for your organization. </p> <br>

<p> I have around 8 years of experience in Web Development and have worked with a variety of programming languages and frameworks, including HTML, CSS, tailwind, XML, TypeScript, AJAX, jQuery, Angular 4,6,8,11,12,13, AngularJS, JSON, NodeJS, PHP, Bootstrap, BackboneJS, ReactJS, NextJS, EmberJS, Redux, React Native, KnockoutJS, ExtJS, XHTML, XML, DOM, D3JS, tailwind CSS, Java, J2EE, Pl/SQL,  MS Visual Studio, JEdit, MS Visual Source Safe, IE Tester, Acrobat Writer, MS Word, Jira, IntelliJ, Adobe XD, Adobe Photoshop, Rest, SOAP, Spring MVC, Spring Boot, Spring Cloud,s Hibernate, PuTTY, Wireshark, In Vision, Figma, Team Viewer, Photoshop, Adobe Dream Viewer, SVN, CVS, and GIT, AWS, Oracle, MySQL, SQL Server, Mongo DB, Web Sphere. I am highly proficient in both front-end and back-end development, as well as database management, and I am passionate about creating efficient, user-friendly web applications.
</p> <br>

<p> I would appreciate any information you could provide about open positions or upcoming hiring needs for this role. If there are no current opportunities available, I would be grateful if you could keep me in mind for any future job openings that align with my skills and experience.
 </p> <br>

 <p> Thank you for considering my inquiry. I have attached my resume for your review and look forward to hearing back from you soon.
 </p> <br>

 <br>
 <br>

 <p> Regards, </p>
 <p> Madan Mohan. </p>


`;

async function main() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "mail2madanm@gmail.com",
      pass: "Iammad6238",
      clientId:
        "839876587563-7m6skh9f00tjb7pb0mojbdb973uatbj0.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04aT6VyW9CTCCCgYIARAAGAQSNwF-L9IrmIcjA18sDvX4pKod5k-AjqkrkDIpVE_ElK8dPqWwuHbZLufy6l9eu-oYHkcfc2ocnhg",
    },
  });

  fs.forEach(async (f) => {
    await transporter.sendMail({
      from: "mail2madanm@gmail.com",
      to: f.email,
      subject: "Reg Job Oppurtunity",
      html: html,
      attachments: [
        {
          filename: "MADAN_RESUME+CV.pdf",
          contentType: "application/pdf",
          path: "C:/Users/madda/OneDrive/Desktop/MADAN_RESUME+CV.pdf",
        },
      ],
    });
    console.log("email sent sucesfully to " + f.name);
  });
}

main().catch((e) => console.log(e));
