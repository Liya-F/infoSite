import React from 'react';

const JoinUsForm = () => {
  return (
    <div className="max-w-full mx-2 bg-secondary p-6 rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-primary mb-4">Join Us and Get Involved</h2>

      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />

        <div id="mc_embed_signup">
          <form
            action="https://ngh1.us21.list-manage.com/subscribe/post?u=ec7db8cb725cfdc350ea832e4&amp;id=3460a840af&amp;f_id=00a5e7e6f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2 className=' text-primary'>Subscribe</h2>
              <div className="indicates-required">
                <span className="asterisk text-sm">*</span><span className=' text-black text-sm'>indicates required</span> 
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="mc-field-group col-span-1">
                  <label htmlFor="mce-EMAIL" className=' text-black'>Email Address <span className="asterisk">*</span></label>
                  <input type="email" name="EMAIL" id="mce-EMAIL" required="" className="required email w-full px-3 py-2 border border-gray-300 rounded-md text-black outline-none h-12"  />
                </div>
                <div className="mc-field-group col-span-1">
                  <label htmlFor="mce-FNAME" className=' text-black'>First Name </label>
                  <input type="text" name="FNAME" id="mce-FNAME" className="text w-full px-3 py-2 border border-gray-300 rounded-md text-black outline-none" />
                </div>
                <div className="mc-field-group col-span-1">
                  <label htmlFor="mce-LNAME" className=' text-black'>Last Name </label>
                  <input type="text" name="LNAME" id="mce-LNAME" className="text w-full px-3 py-2 border border-gray-300 rounded-md text-black outline-none" />
                </div>
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_ec7db8cb725cfdc350ea832e4_3460a840af" tabIndex="-1" value="" />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button bg-primary mt-5 ml-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-primary"
                    value="Subscribe"
                  />
                  <p style={{ margin: '0px auto' }}>
                    <a href="http://eepurl.com/iGyH2E" title="Mailchimp - email marketing made easy and fun">
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'transparent',
                          borderRadius: '4px',
                        }}
                      >
                        <img
                          className="refferal_badge"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                          style={{
                            width: '220px',
                            height: '40px',
                            display: 'flex',
                            padding: '2px 0px',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUsForm;
