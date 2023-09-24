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

function createData(Purpose, Explanation) {
  return { Purpose, Explanation };
}

const rows = [
  createData(
    "Security",
    "We use cookies to enable and support security features, prevent fraud, and protect your data from unauthorized access."
  ),
  createData(
    "Preferences and Features",
    "We use cookies to enable features and help us provide you with personalized information, such as showing you your recent search activity."
  ),
  createData(
    "Advertising",
    "We use cookies to deliver, evaluate, and improve advertising, such as by using data about you to provide relevant advertising both on and off the services. Our ad partners may use a cookie to determine whether you’ve already been shown an advert or how it performed, or provide us with data about how you interacted with an ad."
  ),
  createData(
    "Analytics and Performance",
    "We use cookies to analyze how our visitors use the services and to monitor site performance. These cookies help us to identify and fix errors, understand and improve services, research and test out different features, and monitor how our visitors reach our sites."
  ),
];

const CookiePolicy = () => {
  return (
    <>
      <Navbar showLinks={true} />
      <div className="pages-container">
        <div className="guidelines-cell">
          <h2 style={{ textAlign: "center" }}>Cookie Policy and Ad Choices</h2>
          <br />
          <p>
            Cookies are small pieces of data that are stored on your devices
            when you visit a page. We may use cookies, web beacons, mobile
            identifiers, and similar technologies (collectively “cookies”) to
            help us recognize you, enhance your user experience, understand the
            usage of our services, and show you relevant advertising.
            <br />
            <br />
            The provision of your data via cookies is voluntary except for those
            cookies that we place on your device because we need them for the
            performance of our services.
            <br />
            <br />
          </p>
          <ul>
            <li>
              Cookies may also be set by other websites or services that provide
              information on the page you’re visiting.
            </li>
            <li>
              After you use our services, we may connect data we collect from
              the cookies set by us and our partners with other data received
              from you.
            </li>
            <li>
              We use two types of cookies on our services: “session cookies” and
              “persistent cookies.” Session cookies are temporary cookies that
              remain on your device until you leave the services. A persistent
              cookie remains on your device for much longer or until you
              manually delete it (how long the cookie remains will depend on the
              duration or “lifetime” of the specific cookie and your browser
              settings).
            </li>
            <li>
              Cookies transmit data about you and your use of the services, such
              as your browser type, search preferences, job titles, data
              relating to advertisements that have been displayed to you or that
              you have clicked on, and the date and time of your use. Cookies
              may also allow us and our service providers to collect data about
              your use of our services, including text you enter, screen
              recordings of your mouse movements, and other interactions as you
              browse and use our services, even if you don’t have an account or
              Profile.
            </li>
            <li>
              We use four types of cookies: Strictly Necessary, Functional,
              Analytics, and Targeting. You can reference which specific cookies
              fall into each category by using the cookie settings tool in the
              footer or settings of our websites.
            </li>
            <li>Below are some examples of how we use cookies.</li>
          </ul>
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Purpose</StyledTableCell>
                    <StyledTableCell align="left">Explanation </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.Purpose}>
                      <StyledTableCell component="th" scope="row">
                        {row.Purpose}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.Explanation}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <h2 style={{ textAlign: "center", margin: "20px 0 15px 0" }}>
            Targeting Cookies
          </h2>
          <ul>
            <li>
              We may work with third parties (including our affiliates) to
              provide you with personalized and non-personalized advertising
              (collectively “ad partners”).
            </li>
            <li>
              We may use cookies (both on and off our services), which may
              include data from our ad partners, to help deliver ads to you.
            </li>
            <li>
              We work with third parties, such as Google Analytics, to enable
              analytics services that use the cookies set on your device to
              measure the performance of advertising and track traffic to our
              services generally. We may have also implemented Google Analytics
              Demographics and Interest Reporting, which categorizes cookie data
              so that we and our ad partners can better deliver ads that are
              relevant and useful to you on our services and various websites
              across the internet. In addition, a cookie on some of our
              affiliates, partners, or employer clients’ sites may provide us
              and/or our affiliates with aggregate data about the number of
              applications submitted to those sites by users of our services.
            </li>
          </ul>
          <h2 style={{ textAlign: "center", margin: "20px 0 15px 0" }}>
            Consenting to and Opting Out of Cookies
          </h2>
          <p>
            As we described, we use cookies that are strictly necessary for us
            to provide the services you use and you cannot opt out of these
            cookies on our services.
            <br />
            <br />
          </p>
          <ul>
            <li>
              By utilizing our cookie settings tool, you can reject all but
              Strictly Necessary cookies, or opt out of specific categories of
              cookies at any time (as described above and in the Tool). You’re
              also able to disable the placement of some (but not all) cookies
              by setting your browser to decline cookies, though this may worsen
              your user experience. Additionally, you can control, manage,
              and/or delete cookies via your browser settings. A useful resource
              for information about deleting and controlling cookies can be
              found at Aboutcookies.org.
            </li>
            <li>
              If you enable location data for the mobile version of our services
              (including any version installed as an application), we may use
              your location data to serve you geo-targeted ads for employers and
              other advertisers that are local to you. We may also derive your
              general location based on your IP address. You may disable
              location services at any time in your device’s settings.
            </li>
            <li>
              On some of our services, we may respond to “do not track” signals
              and similar settings or mechanisms.
            </li>
          </ul>
          <br />
          <br />
          <p>
            You can also use third-party tools to manage the third-party cookies
            that may be used by our ad partners
            <br />
            <br />
          </p>
          <ul>
            <li>
              You can opt out of some third-party advertiser and ad-network
              placement of cookies or targeted advertising generally by visiting
              the following links:{" "}
              <a href="https://optout.networkadvertising.org/">
                Network Advertising Initiative;
              </a>
              <a href="https://optout.aboutads.info/">
                Digital Advertising Alliance;
              </a>{" "}
              <a href="https://www.youronlinechoices.com/">
                European Interactive Digital Advertising Alliance
              </a>{" "}
              (for users in the EU);{" "}
              <a href="https://youradchoices.ca/en/tools">
                The Digital Advertising Alliance of Canada
              </a>
              (for users in Canada); You will continue to receive generic ads by
              companies not associated with these opt-out tools.
            </li>
            <li>
              You can opt out of tracking by Google Analytics and Google
              Analytics Demographics and Interest Reporting services by visiting
              <a href="https://adssettings.google.com/">
                Google Ads Settings
              </a>{" "}
              or by downloading the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout">
                Google Analytics Opt-Out Browser Add-on
              </a>
              .
            </li>
            <li>
              Please note: If ads or other features on our services are provided
              by third parties, they set and use their own cookies that are
              subject to those third parties’ privacy notices and policies. We
              do not have access to, or control over, these cookies.
            </li>
          </ul>
          <h2 style={{ textAlign: "center", margin: "20px 0 15px 0" }}>
            Additional Information About Our Data Practices
          </h2>
          <p>
            Anonymized, Aggregate, and De-Identified Data <br />
            <br />
            We may anonymize, aggregate, and/or otherwise de-identify your data
            and subsequently use and/or disclose such data for the purpose of
            research, improving our services, or for another business purpose
            authorized by applicable law, provided that we have implemented
            technical safeguards and business processes designed to prevent the
            re-identification or inadvertent release of anonymized, aggregate,
            or de-identified data. <br />
            <br />
            Automated Decision-Making <br />
            <br />
            We do not use algorithms or profiling to make any decision that
            would have a significant legal effect on you without the opportunity
            for human review. <br />
            <br />
            How Long We Keep Your Personal Data <br />
            <br />
            We keep your personal data only so long as we need it to provide or
            offer our services to you and fulfill the purposes described in this
            Policy.
            <br />
            <br />
            This is also the case for any party that we share your personal data
            with and which carries out services on our behalf. Retention periods
            can vary significantly based on the type of data and how it is used.
            <br />
            <br />
            Our retention periods are based on criteria that include legally
            mandated retention periods, pending or potential litigation, our
            intellectual property or ownership rights, contract requirements,
            operational directives or needs, the expected lifetime of our users’
            use of our services, and historical archiving.
            <br />
            <br />
            When we no longer need to use your personal data and there is no
            need for us to keep it to comply with our legal or regulatory
            obligations, resolve disputes, and enforce our agreements, we’ll
            either remove it from our systems or, anonymize, aggregate, or
            de-identify it so that we can’t identify you.
            <br />
            <br />
            Privacy of Minors
            <br />
            <br />
            To access or use our services, you must be at least 18 years of age
            or, if older, the age of majority in your jurisdiction, otherwise,
            you may not use the services.
            <br />
            <br />
            If you become aware that a child has provided us with personal data
            without parental consent, please contact us. If we become aware that
            a child has provided us with personal data without parental consent,
            we remove such data and terminate the child’s account (except where
            we are required to retain all or a portion of such data for
            compliance purposes).
            <br />
            <br />
            Therefore, we do not “sell” or “share” data (as defined by
            applicable law) belonging to minors.
          </p>
          <h2 style={{ textAlign: "center", margin: "20px 0 15px 0" }}>
            Security Safeguards
          </h2>
          <p>
            We employ physical, electronic, and managerial measures to safeguard
            the data we collect online. However, no company can fully eliminate
            security risks, so we cannot make guarantees about any part of our
            services.
            <br />
            <br />
            You are responsible for keeping your username and password secret.
            Once you have registered with us, we will never ask you for your
            password.
            <br />
            <br />
            Please create a unique password for your account and do not use it
            for any other web services or applications. Do not share your
            password with anyone else.
            <br />
            <br />
          </p>
          <h2 style={{ textAlign: "center", margin: "20px 0 15px 0" }}>
            For all services
          </h2>
          <ul>
            <li>Communications</li>
            <li>
              To opt out of receiving text messages, you must reply “STOP” from
              the device receiving the messages.
            </li>
            <li>
              To unsubscribe from non-service-related emails, please use the
              unsubscribe or email settings link in the email(s) you receive. If
              you unsubscribe only from an individual type of email
              communication (e.g., a particular job alert), you will continue to
              receive other emails. We may also offer a settings function via
              our services to manage your email preferences.
            </li>
            <li>
              To turn off push notifications, use in-app and/or operating system
              settings on your device.
            </li>
            <li>
              Unless you choose to delete your account(s), you cannot
              unsubscribe from certain communications that are required as part
              of your use of our services (e.g., communications about changes to
              this Policy.)
            </li>
            <li>
              To request that we do not “sell” or “share” your data (as defined
              by applicable law), please utilize our opt-out mechanism. We also
              respond to Global Privacy Control (GPC) signals when received via
              Rate My O-branded domains. As no sale or sharing of your data
              occurs via non-Rate My O-branded domains, our other domains do not
              currently respond to GPC signals, but you are still free to
              utilize the opt-out mechanism above. You can also opt out of
              “sharing” by turning off targeting cookies using our cookie tool.
            </li>
            <li>
              Authorized agents can utilize the same processes as listed above
              when making a request on behalf of a user; we will still require
              the user to authenticate their request.
            </li>
            <li>
              Rate My O does not discriminate against any user for exercising
              their privacy rights.
            </li>
            <li>
              If you are unsatisfied with our response to your request, please
              use the contact information found at the bottom of this Policy to
              appeal. We will follow the same processes and policies as we do
              for the initial request, including verifying your identity and the
              nature of your request. In some jurisdictions, you may also have
              the right to file a complaint with the relevant regulatory
              authorities or in a court of competent jurisdiction.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
