import React from "react";
import Navbar from "../../components/navbar/Navbar";

const CommunityGuidlines = () => {
  return (
    <>
      <Navbar showLinks={true} />
      <div className="pages-container">
        <div className="guidelines-cell">
          <p>
            <b>Purpose.</b>
             To shed some light on a company's and its management's culture,
            leadership styles, and overall work environment before a jobseeker
            even applies.
          </p>
          <br />
          <p>
            <b>Be respectful.</b>
            This means treating others with the same respect that you would want
            to be treated with. Avoid personal attacks, name-calling, and other
            forms of harassment. Remember that the people you are writing about
            are real people with feelings. Even if you had a negative
            experience, try to be respectful of the manager and co-worker.
            Remember that everyone is entitled to their own opinion. Just
            because you didn't like a manager or the company doesn't mean no one
            else will.
          </p>
          <br />
          <p>
            <b>Be honest.</b> Only post reviews based on your personal
            experience; do not post false or misleading information. If you had
            a bad experience, that's fine, but be sure to explain why you had a
            bad experience. Don't just say that the manager, co-worker, and/or
            company was "bad" without giving any specific reasons.
          </p>
          <br />
          <p>
            <b>Be specific.</b> When you write a review, be as specific as
            possible. What did you like or dislike about the manager, co-worker,
            and/or company? What were the manager, co-worker, and/or company
            methods? What was the workload like? The more specific you are, the
            more helpful your review will be to others. Don't just say that the
            manager, co-worker, and/or company was "good" or "bad." Give
            specific examples to support your claims. For example, if you
            thought the manager, co-worker, and/or company were effective, you
            could mention what was so effective.
          </p>
          <br />
          <p>
            <b>Be objective.</b> Try to be as objective as possible in your
            reviews. Avoid letting your personal feelings about the manager,
            co-worker, and/or company cloud your judgment. Remember that others
            may have different preferences than you do what you didn't like
            about a manager, co-worker, and/or company someone else might love.
          </p>
          <br />
          <p>
            <b>Be helpful.</b> The goal of Ratemyo.com is to help others
            (co-workers and employees) make informed decisions about their next
            job or career move. When you write a review, try to be as helpful as
            possible. Share your experiences and insights so that others can
            benefit from your knowledge.
          </p>
          <br />
          <p>
            <b>Describe your experience.</b> What did you like or dislike about
            the manager, co-worker, and/or company? The more details you can
            provide, the more helpful your review will be.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default CommunityGuidlines;
