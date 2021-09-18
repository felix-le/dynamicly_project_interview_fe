const Footer = () => {
  return (
    <footer className='fixed-bottom'>
      <div className='container'>
        <div className='footer_wrapper d-flex flex-wrap text-white'>
          <div className='footer_left col-md-8 col-12'>
            <h1 className='text-white'>Dynamicly</h1>
            <p>
              Located in Montreal and Boston, leading North American cities in
              the fields of <br /> Artificial Intelligence and Digital Health.
            </p>
            <p className='small'>
              THIS WEBSITE MAY REFER, FOR DESCRIPTIVE PURPOSES, TO THE FOLLOWING
              TRADEMARKS WHICH ARE OWNED BY THE COMPANIES WHOSE NAMES APPEAR
              AFTER THE TRADEMARK: ALEXA (AMAZON.COM INC. OR ITS AFFILIATES),
              AZURE (MICROSOFT CORPORATION), FACEBOOK MESSENGER (FACEBOOK,
              INC.), GOOGLE ASSISTANT (ALPHABET INC. OR ITS AFFILIATES), SIRI
              (APPLE INC.)
            </p>
          </div>

          <div className='footer_right col-md-4 col-12 text-center mt-md-2'>
            <a href='mailto:info@dynamicly.com' className='text-primary'>
              info@dynamicly.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
