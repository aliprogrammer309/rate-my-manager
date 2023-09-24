import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../../components/navbar/Navbar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Categories, Examples, StateLaw) {
  return { Categories, Examples, StateLaw };
}

const rows = [
  createData(
    "Communications Activity",
    "Communications you’ve signed up for or received, interactions with communications (e.g., reading/opening communications, clicking links) service info downloaded, address book information, etc.",
    "Commercial information, personal identifiers, inferences, internet activity."
  ),
  createData(
    "Job Applications",
    "Jobs you’ve applied to and associated interactions, including the resumes and other data you supply during the application process",
    "Special Category Data / Sensitive Personal Information Professional or employment-related information"
  ),
  createData(
    "Job Interests & Activity",
    "Job preferences and your activity interacting with jobs (e.g. searching for or saving a job)",
    "Inferences, professional or employment-related information, "
  ),
  createData(
    "Profile Information",
    "Name, email address, resume, current/past job title, language, account settings, communications preferences, etc.",
    "Special Category Data / Sensitive Personal Information, Commercial information, education information, identifiers "
  ),
  createData(
    "Submitted Content",
    "Employer reviews, salary reports, benefits reviews, interview reviews, photos, posts, comments, documents, audio, video, etc. submitted to the service",
    "Audio, electronic, visual, thermal, olfactory, or similar information; professional or employment-related information"
  ),
  createData(
    "User Support & Feedback",
    "Your support requests and feedback you provide us",
    "Commercial information, identifiers, "
  ),
];

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar showLinks={true} />
      <div className="pages-container">
        <div className="guidelines-cell">
          <p>
            This Privacy Policy (the “Policy”) applies to personal data Rate My
            O processes when providing our services, such applications, ads,
            communications, and other instances where we link to this Policy
            (collectively “services”). Any term not defined in this Policy has
            the meaning set forth in our Terms of Use. As used in this Policy,
            the word “including” means “including but not limited to.” Rate My O
            affiliates include all parties that may in future be affiliated to
            the company.
          </p>
          <br />
          <h2 style={{ textAlign: "center" }}>
            Personal Data We Process and How We Use It
          </h2>
          <p>
            We process personal data in order to provide our services. <br />
            <br />
            The personal data we collect from and about you will vary depending
            on how you interact with our services. <br />
            <br />
            We also change our services from time to time, so your options for
            providing us with personal data may also change. You aren’t required
            to provide us with personal data. However, if you don’t share
            certain data with us, we may not be able to provide you with our
            services or respond to your requests. <br />
            <br />
            We May Collect the Following Categories of Personal Data
            <br />
            <br />
          </p>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Personal Data Categories</StyledTableCell>
                    <StyledTableCell align="left">
                      Examples of Personal Data in the Category
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Applicable GDPR / US State-Law Data Categories
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.Categories}>
                      <StyledTableCell component="th" scope="row">
                        {row.Categories}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.Examples}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.StateLaw}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <br />
          <br />
          <h2 style={{ textAlign: "center" }}>How We May Use Personal Data</h2>
          <h4>Advertising (On & Off the Services)</h4>
          <ul>
            <li>
              We may use your personal data to enable our advertising,
              advertising for our customers (including job and display ads), and
              sponsored Content.
            </li>
            <li>
              We may use personal data we collect from you, our affiliates, and
              third parties to personalize ads for our services as well as ads
              available on our services.
            </li>
            <li>
              We may also use data we collect via our services and third-party
              ad partners (including affiliates) to measure the effectiveness of
              ads and to help recognize your device(s) to serve you ads on and
              off of our services. Some of our ad partners may also enable us to
              collect similar data directly from their website or app by
              integrating our or our affiliate's advertising technology.
            </li>
            <li>
              Personal data shared by ad partners and affiliates or collected by
              us from the websites and apps of ad partners and affiliates may be
              combined with the other data you share with us and that we
              receive, generate, or infer about you, as described in this
              Policy.
            </li>
            <li>
              If you respond to ads posted by third parties or submit data to
              third parties via the services, these third parties receive data
              about you subject to their respective privacy policies.
            </li>
          </ul>
          <br />
          <h2 style={{ textAlign: "center" }}>
            Communicating with Rate My O & Affiliates
          </h2>
          <p>
            We and our affiliates may send service-related and promotional
            communications to our users. We and our affiliates may also send
            promotional communications to prospective users and customers to
            inform them about our services.
          </p>
          <ul>
            <li>
              These communications may be via email, text message, push
              notifications, direct messages, or otherwise.
            </li>
            <li>
              To opt out of receiving text messages, you must reply “STOP” from
              the device receiving the messages.
            </li>
            <li>
              To unsubscribe from emails, please use the unsubscribe or email
              settings link in the email(s) you receive. If you unsubscribe only
              from an individual type of email communication (e.g., a particular
              company reviews), you may continue to receive other emails. We may
              also offer a settings function via our services to manage your
              email preferences.
            </li>
            <li>
              To turn off push notifications, use in-app and/or operating system
              settings on your device.
            </li>
            <li>
              If you use our chat feature, we and our service providers may
              record your chats and keep transcripts.
            </li>
          </ul>
          <br />
          <h2 style={{ textAlign: "center" }}>
            Communications with, or Initiated by, Third Parties
          </h2>
          <p>
            We may allow users or customers to invite prospective users to our
            services. For example, we may allow them to invite prospective users
            to join a group, submit Content, or write a review. In order to do
            so, we may process the invitation’s contents and the invitee’s
            contact information. We may allow you to sync or upload a list of
            contacts in order to facilitate these communications.
          </p>
          <br />
          <h2 style={{ textAlign: "center" }}>
            Individuals Featured in Content
          </h2>
          <p>
            We allow users to submit Content that references other users and the
            public, provided that such Content complies with our Community
            Guidelines (Rate My O Community Guidelines).
          </p>
          <br />
          <ul>
            <li>
              We allow Content that names individuals in the highest positions
              in a company who have broad influence over the work environment,
              as long as the Content describes the individual’s behavior or
              performance at work. Individuals in this category include those
              who are the public face of the company (e.g., C-Suite, Executive
              Director, President, Owner, Founder). We believe this information
              is generally representative of a company’s culture and can be
              informative to job candidates and the public.
            </li>
            <li>
              We don’t allow Content that includes negative comments about
              identifiable individuals outside of this group.{" "}
            </li>
            <li>
              We may allow Content that mentions demographic attributes about an
              identifiable person if we believe the Content is used to describe
              a workplace situation. General discussions of workplace misconduct
              are allowed, including most discussions of illegal activities,
              discrimination, and sexual harassment.
            </li>
          </ul>
          <br />
          <h2 style={{ textAlign: "center" }}>
            Submitting & Interacting with Content
          </h2>
          <p>
            We offer our users a variety of ways to submit and interact with
            Content. You should only submit Content to the services that you are
            comfortable sharing with others, including the public.
          </p>
          <br />
          <ul>
            <li>
              Depending on the services you use, we may offer you different
              options for controlling how your personal data and identity are
              represented to other users, employers, and the public. Content
              submitted with semi-/anonymous identifiers such as your company
              name or job title is not associated with the publicly-visible
              portion of your Profile.
            </li>
            <li>
              When you submit conversational Content such as a post, comment, or
              question, you may be able to control how you represent yourself
              using different anonymity options. For example, when using some of
              our services, you can choose to submit Content with your company
              name, your job title, or your full name.
            </li>
            <li>
              When submitting other Content, such as reviews, you may be
              required to include certain personal data designated for public
              display, such as your employer, job title, and location.
            </li>
            <li>
              We endeavor to offer opportunities to use our services while
              preserving your anonymity. However, Rate My O cannot guarantee
              your anonymity as, depending on your specific situation, the
              circumstances and information you disclose in your Content, and
              the semi-/anonymous identifiers you use may allow someone to
              identify you or narrow down your identity to a small group of
              people (e.g., employees in a particular department at your
              company). You should understand this risk before submitting
              Content to our services.
            </li>
          </ul>
          <br />
          <br />
          <br />
          <p>Notes regarding the table above:</p>
          <ol>
            <li>
              When we process your data for a specific purpose, we, our
              affiliates, and our partners may also process it to improve our
              respective services and/or conduct research.
            </li>
            <li>
              At Rate My O, our mission is to help people everywhere find a job
              at a company they love. One of the ways we do this is by sharing
              non-personally identifying data with some of our affiliates who
              share our goals.
            </li>
            <li>
              “Sharing” data, as defined by applicable law, is also known as
              targeted or behavioral advertising.
            </li>
            <li>
              In some jurisdictions, we’re required to identify the legal basis
              for our processing activities.
            </li>
          </ol>
          <br />
          <ul>
            <li>
              Performance of a Contract: Most of the personal data we use is to
              provide our services and is necessary for the performance of our
              agreements with you (including our Terms and this Policy), or in
              order to take steps at your request prior to entering such an
              agreement.
            </li>
            <li>
              Legitimate Interest: Some of the personal data we process is
              necessary for the purposes of legitimate interests pursued by us
              or one of our affiliates. This may include instances where we
              believe you have a reasonable expectation that we will perform a
              particular type of processing. We only rely on these grounds where
              a legitimate interests assessment has been performed, balancing
              the interests and rights involved with the necessity of the
              processing.
            </li>
            <li>
              Consent: In certain circumstances, we rely on your consent in
              order to process your personal data. Where we require your consent
              in order to collect and process certain personal data, we seek
              your consent at the time of data provision, and this processing
              will only be performed where consent is secured unless we have
              another lawful basis on which to rely. For example, depending on
              applicable laws in your country, your consent may be sought before
              we place certain types of cookies on your device.
            </li>
            <li>
              Compliance with a Legal Obligation: Sometimes it is necessary for
              us to process personal data in order to comply with a legal
              obligation, such as a law, regulation, legal process, or court
              order.
            </li>
            <li>
              Vital Interests: In certain, limited circumstances, we may rely on
              the vital interests of our users or the public in order to protect
              someone’s life.
            </li>
          </ul>
          <br />
          <h2 style={{ textAlign: "center" }}>
            Other Instances When We May Disclose Your Data
          </h2>
          <p>
            We may disclose data if we believe in good faith the disclosure is
            necessary in order to:
          </p>
          <ol>
            <li>
              Comply with relevant laws or to respond to subpoenas, warrants, or
              legal processes served on us (though we reserve the right at our
              sole discretion to take action on behalf of our users and their
              possible right to anonymity when we believe there is a legitimate
              basis to do so)
            </li>
            <li>
              Enforce our Terms of Use, this Policy, and any other agreements we
              may have;
            </li>
            <li>
              Prevent physical harm or financial loss, or in connection with an
              investigation of suspected or actual illegal activity;
            </li>
            <li>
              Act in a manner we otherwise deem necessary and is permitted by
              applicable laws to protect and defend the rights or property of
              us, the users of our services, or third parties; or
            </li>
            <li>
              Act as permitted under applicable laws to meet national security
              and similar requirements.
            </li>
          </ol>
          <br />
          <p>
            We may also disclose personal data in a reorganization or sale of
            our company or assets, subject to the acquirer and its affiliates
            (as applicable) accepting the commitments made in this Policy and
            compliance with applicable law.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
